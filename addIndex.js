var fs = require('fs');
var mongoose = require('mongoose');
var models = require('./app/models');
var async = require('async');
var eventproxy = require('eventproxy');
var ep = new eventproxy.EventProxy();
var User = models.User;
var Source = models.Source;
var Character = models.Character;
var Quote = models.Quote;

var env = 'development';
var config = require('./config/config')[env];

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

// start
var sourceStream = Source.synchronize();
var characterStream = Character.synchronize();
var quoteStream = Quote.synchronize();
var sourceCount = 0;
var characterCount = 0;
var quoteCount = 0;

// source index
sourceStream.on('data', function(err, doc){
  sourceCount++;
});
sourceStream.on('close', function(){
  console.log('indexed ' + sourceCount + ' sources!');
  ep.emit('sourcesIndexed');
});
sourceStream.on('error', function(err){
  console.log(err);
});

// character index
characterStream.on('data', function(err, doc){
  characterCount++;
});
characterStream.on('close', function(){
  console.log('indexed ' + characterCount + ' characters!');
  ep.emit('charactersIndexed');
});
characterStream.on('error', function(err){
  console.log(err);
});

// quote index
quoteStream.on('data', function(err, doc){
  quoteCount++;
});
quoteStream.on('close', function(){
  console.log('indexed ' + quoteCount + ' quotes!');
  ep.emit('quotesIndexed');
});
quoteStream.on('error', function(err){
  console.log(err);
});

ep.all('sourcesIndexed', 'charactersIndexed', 'quotesIndexed', function () {
  process.exit(0);
});
