var fs = require('fs');
var mongoose = require('mongoose');
var models = require('./app/models');
var async = require('async');
var shell = require('shelljs');
var eventproxy = require('eventproxy');
var ep = new eventproxy.EventProxy();
var User = models.User;
var Source = models.Source;
var Character = models.Character;
var Quote = models.Quote;

var env = 'development';
var config = require('./config/config')[env];

var data = [];
fs.readdirSync('./data/').forEach(function (filename) {
  var name = filename.replace('.js', '');
  var fileData = require('./data/' + name)[name];
  data.push(fileData);
});

var connect = function () {
  var options = {
    server: {
      socketOptions: {
        keepAlive: 1
      }
    }
  };
  mongoose.connect(config.db, options);
};
connect();

async.waterfall([
  // remove index
  function (callback) {
    shell.exec('curl -XDELETE "http://localhost:9200/sources/"', {silent:true});
    shell.exec('curl -XDELETE "http://localhost:9200/characters/"', {silent:true});
    shell.exec('curl -XDELETE "http://localhost:9200/quotes/"', {silent:true});
    console.log('indexes remove successfully');
    callback(null);
  },
  // remove useres
  function (callback) {
    User.remove(function (err) {
      console.log('users remove successfully');
      callback(null);
    });
  },
  // remove sources
  function (callback) {
    Source.remove(function (err) {
      console.log('sources remove successfully');
      callback(null);
    });
  },
  // remove characters
  function (callback) {
    Character.remove(function (err) {
      console.log('characters remove successfully');
      callback(null);
    });
  },
  //remove quotes
  function (callback) {
    Quote.remove(function (err) {
      console.log('quotes remove successfully');
      callback(null);
    });
  },
  // insert users
  function (callback) {
    var userX = {username: 'hello', password: 'world'};
    var user = new User(userX);
    user.save(function () {
      console.log('user ' + userX.username + ' init successfully!');
      callback(null, user);
    });
  },
  // insert data
  function (user, callback) {

    // insert sources
    async.each(data, function (object, callback) {

      var sourceX = {
        name: object.name,
        alias: object.alias,
        info: object.info,
        cover: object.cover,
        contributorId: user._id
      };
      var newSource = new Source(sourceX);
      newSource.save();

      (function (source, characters) {

        // insert characters
        async.each(characters, function (character, callback) {
          var characterX = {
            name: character.name,
            alias: character.alias,
            info: character.info,
            avatar: character.avatar,
            sourceId: newSource._id,
            quotesCount: 0,
            contributorId: user._id
          };

          var newCharacter = new Character(characterX);
          newCharacter.save(function (err) {
            callback();
          });

        }, function (err) {
          if (err) {
            console.log(err);
          } else {
            ep.emit('source' + source._id + 'charactersok');
          }
        });

      })(newSource, object.characters);


      (function (source, quotes) {

        // insert quotes
        ep.once('source' + source._id + 'charactersok', function () {

          async.each(quotes, function (quote, callback) {

            var characterIds = [];
            var quoteX = {
              quote: quote.quote,
              likeCount: 0,
              scene: quote.scene,
              reference: quote.reference,
              contributorId: user._id
            };
            var newQuote = new Quote(quoteX);

            // query quote's characters
            async.map(quote.characters, function (characterName, callback) {

              Character
                .findOneAndUpdate({
                  sourceId: source._id,
                  $or: [
                    {name: characterName},
                    {alias: characterName}
                  ]
                }, {
                  $inc: {
                    quotesCount: 1
                  }
                })
                .exec(function (err, character) {
                  if (err) {
                    return console.log(err);
                  } else {
                    callback(null, character._id);
                  }
                });

            }, function (err, characterIds) {
              newQuote.characterIds = characterIds;
              newQuote.save(function () {
                callback(null); // what's this?
              });

            }); // end of async on mapping characterIds of quote

          }, function () {

            callback(null); // what's this?

          }); // end of async on inserting quotes

        }); // end of event proxy

      })(newSource, object.quotes);

    }, function (err) {
      // finish!
      callback(null);
    });

  }
// finish
], function (err, results) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('----- insert finished -----');
  process.exit(0);

  // setTimeout(function () {
  //   console.log('----- adding index -----');
  //   shell.exec('node addIndex.js');
  //   console.log('----- adding index finished -----');
  // }, 1000);
});
