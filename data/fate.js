exports.fate = {
  name: 'Fate',
  alias: ['Fate/stay night', 'Fate/Zero', '圣杯战争'],
  info: '传说中，圣杯是能够实现拥有者愿望的宝物。为了追求圣杯的力量，7位魔术师各自召唤英灵，展开争夺圣杯的战斗，这就是圣杯战争。',
  cover: '',
  characters: [
    // 士郎
    {
      name: '卫宫士郎',
      alias: ['士郎'],
      info: '游戏及同名动漫《Fate/Stay night》中的男主角，穗群原学园高中部二年级学生，10年前冬木市第四次圣杯战争引起的火灾中的幸存者，由于幼年对战争的惨痛记忆和受到养父卫宫切嗣的影响，立志拯救他人。在第五次圣杯战争中作为Saber的Master出场。'
    },
    {
      name: '远坂凛',
      alias: ['远坂', '凛'],
      info: '魔术世家继承者远坂时臣的大女儿，卫宫士郎的同学，第五次圣杯战争的参加者之一，擅长使用”宝石“魔术，拥有全属性，身为魔术师拥有不错的实力，Archer的MASTER。父亲在第四次圣杯战争被其弟子言峰绮礼杀害，之后言峰绮礼成了其监护人。'
    },
    {
      name: '葛木宗一郎',
      alias: ['葛木', '人民教师'],
      info: '过去是名暗杀了某政要的杀手，现在身份是是穗群原学园的教师。沉默寡言而非常严格的人物，Caster的Master。拥有很强的搏击术。对圣杯不感兴趣，纯粹协助Caster取得圣杯。'
    },
    // saber
    {
      name: '阿尔托利亚·潘德拉贡',
      alias: ['Saber'],
      info: '身份为古不列颠传说中的亚瑟王。性格忠诚正直，谦逊有礼，个性认真。因有圣剑Excalibur的传承，在第四、五次圣杯战争中以“Saber”职阶被召唤到现世。',
    },
    // archer
    {
      name: '英灵卫宫',
      alias: ['Emiya', 'Archer', '红A'],
      info: '参加《Fate/Stay night》所描述的第五次圣杯战争的Archer为卫宫士郎未来的英灵化化身，昵称为红A。'
    },
    // 伊莉雅
    {
      name: '依莉雅斯菲尔·冯·爱因兹贝伦',
      alias: ['イリヤ', '依莉雅'],
      info: '第五次圣杯战争的Master之一，其母为爱丽丝菲尔·冯·爱因兹贝伦，在上一届圣杯战争担任Saber的代理Master。其父为卫宫切嗣。因为圣杯战争的缘故来到日本。',
      avatar: ''
    }
  ],

  quotes: [
    {
      quote: '试问，汝是我的master吗？\n\nServant Saber遵从召唤而来。\n\n此后，吾之剑与汝同在，汝之命运与吾共存。\n\n于此，契约完成。',
      reference: 'Fate/stay night UBW 第1话',
      scene: 'http://aniquo.qiniudn.com/images/quoteScene/a143ac3822323c2faf350dff5211f38a',
      characters: ['Saber']
    },
    {
      quote: '贱人就该有个贱人的下场。\n\n(还有字幕组翻译成：贱人最适合被做成串烧了。)',
      reference: 'Fate/stay night UBW第3话',
      scene: 'http://aniquo.qiniudn.com/images/quoteScene/01adcd793dbb01787b73f4815222bbfb',
      characters: ['依莉雅']
    },
    {
      quote: 'Archer：没有战斗意义的卫宫士郎就死在这里吧。不是为了自己，而是为了他人战斗，这只是伪善罢了。你期待的不是胜利，而是和平吧。那种东西，在这个世界上根本不存在。\n\n士郎：你说什么...\n\nArcher：永别了，你就抱着理想溺死吧。',
      reference: 'Fate/stay night UBW第7话',
      characters: ['红A', '士郎']
    },
    {
      quote: '不会再重复今天晚上这样的失败了，一味逃避什么都改变不了。更何况，为了减少牺牲者而去牺牲一些人，我绝对不想输给说出这种话的人。',
      reference: 'Fate/stay night UBW第7话',
      characters: ['士郎']
    },
    {
      quote: '我终于明白了。你并不是因为命令或者身为 Servant 来保护我，而是出于自身的意志，保护了我啊。Berserker，真强啊。',
      reference: 'Fate/stay night UBW第15话，回忆',
      characters: ['依莉雅']
    },
    {
      quote: 'Berserker...Berserker...Berserker......\n\n好疼，好疼啊。这是哪里？我不知道。一片漆黑，什么都不知道了...嗯...这样就好，要一直陪在我身边啊，Berserker...\n\n即使一片漆黑，我也不害怕哦，因为 Berserker 很强，能这样在我身边的话，我就能安心。因为，你一直都在保护着我。\n\n虽然曾害怕过，但是真的好温柔。伟岸的躯体，就像爸爸一样。哪怕，一次也好，好想被你抱起来。\n\n稍微...有些冷呐...',
      reference: 'Fate/stay night UBW第15话，结尾',
      characters: ['依莉雅']
    },
    {
      quote: '凛：这就是你不正常的地方拉！要帮助别人的话，首先要重视自己啊！经历了那么悲惨的遭遇，之后不快快乐乐地生活怎么行！听好，一心只求别人过得幸福是不行的，那样不就和机器一样了吗！要帮人可以，想怎么帮都可以，但前提必须是为了自己！如果你不为你自己而活，所谓的幸福究竟是什么？根本不会明白！\n\n士郎：远坂你说的这些一定是对的。\n\n凛：那你就...\n\n士郎：不过，这样就好。因为，我觉得这种为别人着想的想法，应该是不会有错的。',
      reference: 'Fate/stay night UBW第16话',
      characters: ['凛', '士郎']
    },
    {
      quote: 'Archer：你所认为的正确是什么？\n\n葛木：这个啊，即使我的选择是错误的，也不会去后悔吧。在善恶等价的情况下，只有这个，才是我能被认可为人类的证明。',
      reference: 'Fate/stay night UBW第16话',
      characters: ['红A', '葛木']
    },
    {
      quote: '这便是...那个结局么...\n\n绝不会去同情！\n\n绝不会去同情！！\n\n绝不会去同情！！！\n\n但是，一想到接下来就要走上这样的道路，心中就好像破了个一个缺口。\n\n那些你所信任过的，那些你所相信着的。就算它们被涂满谎言，就算看起来像是童话般虚无，我还是...',
      reference: 'Fate/stay night UBW第20话，看见 Archer 的结局时',
      characters: ['士郎']
    },
    {
      quote: '是啊，想帮助他人的想法，因为美丽所以憧憬过。\n\n因此，那并不是从自身所流露出的情感！\n\n如果这都不算是伪善，那还能算是什么！\n\n自身被「为他人所活」这种强迫观念而驱使，带着傲慢不算前进。\n\n但毕竟是赝品，靠这种伪善，什么都不能拯救！\n\n不，本来就连要拯救什么都决定不了。\n\n看吧，最终结果就是这个。\n\n开始就不知道拯救的方法，也没有拯救他人之物。\n\n给我好好看着，自己这丑恶的正义躬行者的下场！\n\n那个理想是破碎的，他人比自己重要这一想法，希望谁都能幸福这一愿望，只是空想的童话。\n\n如果没有这种理想就活不下去的话，就抱着理想溺死吧！',
      reference: 'Fate/stay night UBW第20话，在 UBW 结界中教训士郎',
      characters: ['红A']
    },
    {
      quote: 'Archer：喂，那前面可是地狱啊。\n\n士郎：这就是你所遗忘的东西。确实开始是因为憧憬，但是归根结底是心中的愿望啊，想要推翻那个地狱的愿望。明明想要成为他人的力量，最后，却一事无成的男人，那未曾实现的愿望。\n\nArcher：即使你的人生，被当作机械一般？\n\n士郎：是啊，即使我的人生，充满伪善，我还是要坚持成为正义的伙伴！',
      reference: 'Fate/stay night UBW第20话',
      characters: ['红A', '士郎']
    }
  ]
}
