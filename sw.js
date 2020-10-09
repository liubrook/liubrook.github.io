/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","64a56cf84ce935b158f6d047ad5b4c00"],["/2019/08/01/Git常用命令/index.html","4c03258d3e57ed3d8ec05b6180df2a8c"],["/2019/08/02/常用正则表达式/index.html","93f680909aaa2b33989b5aa476756be0"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","e8c5182bdbc2b1ed18b2286cd01ae15e"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","36954bf63175e55cb1f7dd90d6ddd0d6"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","0669da470592d93838e25924c4d489c1"],["/2019/08/05/阿拉伯数字转中文/index.html","436e38cdd5f177c94ee0b09de644c6da"],["/2019/08/09/Javascript数组工具函数/index.html","feb98245509124da822b77bbfe4fd7cd"],["/2019/08/12/CSS一些易忘的常用点/index.html","cf83fa8d56467895c04c351fb0c36593"],["/2019/08/13/Javascript-1-DOM/index.html","9dc4a81f5b7e5bc076d9594927129848"],["/2019/08/15/Javascript-2-script/index.html","200d67c2ac9e0ead0c43d134efeece65"],["/2019/08/20/Javascript-3-数据类型/index.html","8fdd8c9687e127c56179f3e7f088b126"],["/2019/08/23/Javascript-4-操作符/index.html","9c7a15e1cc490ee41ea1ddd31bdaed3e"],["/2019/08/24/Javascript-5-语句/index.html","d198d568aafcc764393e4c90fa5d39b5"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","dd274be167078adce320c3e592431be6"],["/2019/08/30/HTTP响应状态码说明/index.html","da37c651afdb42d867ea3f980b34a7cd"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","0417fe324e369aed69a57b8b4e66e06c"],["/2019/09/01/Javascript-8-垃圾收集/index.html","da249f0dc4c4e47103f97868ab9f3474"],["/2019/09/02/Javascript-9-引用类型-1/index.html","95b749942404012fd765e175546462f8"],["/2019/09/10/Javascript-9-引用类型-2/index.html","8255b121919a62e1a76513eb4aa8762a"],["/2019/09/14/Javascript-9-引用类型-3/index.html","75703b528a9714716ad5e3271f8d2f9f"],["/2019/09/20/Javascript-9-引用类型-4/index.html","2dae88d4c7fa86c77208da6a9c04d415"],["/2019/09/21/Javascript-9-引用类型-5/index.html","9f0cc39404be3a0b14b2ae5a57ed7b15"],["/2019/09/22/javascript-10-面向对象-1/index.html","85865e881cf834af6300ec758712448f"],["/2019/09/25/Javascript-10-面向对象-2/index.html","085a4a1c128461da1d963a6b1d736e35"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","f55c166e2f7161f1f268c53f275d1877"],["/2019/10/03/Javascript-10-面向对象-3/index.html","c385512d14a6002f5c6b91094a1a1405"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","0977ea7c588985fe971ba01d6620c060"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","6d55e04bbd07547981e443b752e72372"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","51199034403337481c6ebaa4ce67065c"],["/2019/10/21/Web安全问题和解决方案/index.html","8521e7b4dbc94af7eaf37534ba5c9fd9"],["/2019/10/25/Javascript-12-BOM-1/index.html","d2ebe912e9305bc5d181e547974212a9"],["/2019/11/02/Javascript-12-BOM-2/index.html","534afa261a21b68a09b2fccc1ad679f7"],["/2019/11/03/Javascript-13-客户端检测/index.html","7237d6ae87261576a2dd8bd0029b1e02"],["/2019/11/07/Javascript-14-DOM-1/index.html","d92c8bf5489afa4e8d494e0d457869d6"],["/2019/11/18/Javascript-14-DOM-2/index.html","56c1a3dd84066129c2d99386dc9f43bc"],["/2019/11/24/Javascript-14-DOM-3/index.html","a7d8f956934d71b8d88ed683706c01ff"],["/2019/11/28/Javascript-14-DOM-4/index.html","7935f6a58d439176068451896e14bdc8"],["/2019/12/04/Javascript-15-DOM-1/index.html","6abeb5acdb5b0f3733cb36d660327757"],["/2019/12/05/Javascript-15-DOM-2/index.html","95f37555a64c2150880abebaf1dbe384"],["/2019/12/15/Javascript-15-DOM-3/index.html","55c837dc0036076ee1ff43291c7f1936"],["/2019/12/20/Javascript-15-DOM-4/index.html","a6661d4e8857158ceec7b79b9ccd12b5"],["/2019/12/24/微信小程序常见问题-1/index.html","c84045153f5f591e708db9b0177666c9"],["/2019/12/27/Linux下安装node/index.html","20b1679c76634dd4d9b55abe8e2b0f1a"],["/2019/12/28/JS计算精度丢失问题/index.html","d2e3a6b50f96aa7861d2e8a053d2088d"],["/2020/01/02/前端常见面试题-1/index.html","80991d60856e1310d88ae82a74834a65"],["/2020/01/05/Javascript数组去重/index.html","60917657ab193440cc2f88d2770e9bd1"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","ac521723d31878e96f08194156e94361"],["/2020/09/18/Webpack上传腾讯云/index.html","b557e729cabdbc0569255bf2c0e30649"],["/2020/10/07/Docker简单上手01/index.html","f4a0ae42ff1b850a52a65797043d2c1b"],["/2020/10/08/Docker简单上手02/index.html","d714d64fd13b9110e5185e42a0b1ab6d"],["/2020/10/09/Docker简单上手03/index.html","06cc96f15ada6a2813bac7ebcbdc6427"],["/2020/10/09/Hexo写作样式简介/index.html","f941e4e0267efb242485433fc8ea9ccf"],["/404.html","bea9515c52296577ec360a786310b45c"],["/about/index.html","30cbc12990bbfc8f42819b65762086d2"],["/archives/2019/07/index.html","c27c13122c78a4defb3677afe82eda41"],["/archives/2019/08/index.html","e1d24f25a4891f5b210caaeb0b43fc18"],["/archives/2019/08/page/2/index.html","da858471dfedc0edeefd5e763f690c46"],["/archives/2019/09/index.html","81950158bb7b94bd9d79f099a3c87240"],["/archives/2019/10/index.html","b2bc76df39de469bd6484843db4dfd78"],["/archives/2019/11/index.html","0fbb132401f5a724d9e45edc139ffa1a"],["/archives/2019/12/index.html","c42c4795a9f29bcbbfc8439f406018b5"],["/archives/2019/index.html","2cacd731b1f15ff4d217af615275c6e6"],["/archives/2019/page/2/index.html","e4f34c492ca60919607276bb7909245e"],["/archives/2019/page/3/index.html","7a154a8e4a1c3544f0f99f153b5d9f78"],["/archives/2019/page/4/index.html","2ef8897f74e912264e305f6528a4e2b2"],["/archives/2019/page/5/index.html","71cb2d147716fbab3e8274f9d6748cd3"],["/archives/2020/01/index.html","aefb994efb23fc98aada118e8e352d8f"],["/archives/2020/09/index.html","8de441745ff817cf082aaba1a84537cc"],["/archives/2020/10/index.html","4fce12a46dcce9c0dc6dfb8ab1127b30"],["/archives/2020/index.html","d5b5887c8bb5f5d74aa3a4258af25287"],["/archives/index.html","4960176366af2a6c53ed712c70973dbf"],["/archives/page/2/index.html","1b6f7ac344d7b63ab55fcf9e61c97a15"],["/archives/page/3/index.html","597de87985f2c53f72afb6843f5adf27"],["/archives/page/4/index.html","b7e2aa9e97aa05eb64102296c8a6dca5"],["/archives/page/5/index.html","4403e8a25a6b151f63ac0b60752ddb68"],["/archives/page/6/index.html","67c23866df673923f4a069c46db9b376"],["/categories/CSS/index.html","ef6d49325ce927497dfc55453a4aebc6"],["/categories/Docker/index.html","8d1bf18749e379e7534818e28fc75643"],["/categories/Git/index.html","e3eb2ef718cf950ec5b07cf0bbee14ea"],["/categories/H5/index.html","9bb646a64d46be1e033d5466a0414d85"],["/categories/HTTP/index.html","badd01a13137b9c8a7834c1d07266079"],["/categories/JavaScript/index.html","bfc2ec6a443f0160e5ca2c489ff2f0df"],["/categories/JavaScript/page/2/index.html","5f01b12b8fd1e3b8864444e25597475e"],["/categories/JavaScript/page/3/index.html","a718423727e207422d80565326b7bf6a"],["/categories/JavaScript/page/4/index.html","a595fc244a302b9a199396cdd3dc8383"],["/categories/Node/index.html","738ed052b07ae05fb8d0ffb2b1c8d16f"],["/categories/Vue/index.html","205f28769508dd3877e88fd6e4d1f3a1"],["/categories/Web/index.html","62216f9725040988bb7cb71f042a85d9"],["/categories/Webpack/index.html","628500fddd11282504459922d53509ed"],["/categories/hexo/index.html","4a8fe5a87cfefe933fc41a3d90b064c6"],["/categories/index.html","75836514f901b837f18cb9fb06b10042"],["/categories/nextcloud/index.html","c4b936b8eeb79d781012cbd88d649770"],["/categories/微信小程序/index.html","48dbb437bf195664fcd7eb18cb94bce5"],["/categories/浏览器/index.html","ec8bb156195c45145f1906776f43b843"],["/categories/面试题/index.html","184bed5e1443557f1e09c16a1a8ad184"],["/css/main.css","f03153021400d5342cc715bfc3022644"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","139d7e50bf4af20775b1a6465fecb5bc"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","16e4dc0c91cded298337b1adce16a261"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e2c9e770cf1b4beb7e6bbb819b167fa0"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","c0b09a79fe3295c62384544814574ef5"],["/page/3/index.html","84c98b47628b1321da4ffe1d33746626"],["/page/4/index.html","f9add5d29a7b7c0bb35add96d33417d7"],["/page/5/index.html","9a273b0dcb2a488e583be67203064630"],["/page/6/index.html","b31906dd8a54600f24a6554f4970f0fa"],["/sw-register.js","37aadbbcd8b2b2034b7445bd917d604b"],["/tags/CSS/index.html","270f5c4a090a60c0f0ad8cc9f9c23846"],["/tags/Docker/index.html","7344ea930c57c6d7b0b82dbc04745592"],["/tags/Git/index.html","acabbf609dcca5b0947b98c73f054092"],["/tags/H5/index.html","dd2082a9421db93e54f582cfae6bfecf"],["/tags/HTTP/index.html","e1ceffc176f6bc65a4b8eec3cbb8ab5b"],["/tags/JavaScript/index.html","1270598e7a52740bd25cb6fc99a084b2"],["/tags/JavaScript/page/2/index.html","bf4e941f0b657240729eee09d35e366e"],["/tags/JavaScript/page/3/index.html","c10fbb14e3deb3ee578574d5dc1ffb63"],["/tags/JavaScript/page/4/index.html","5c95c55a5535643d5f39243ee446a922"],["/tags/Node/index.html","8685cc4a08d0fcfdbc603a6093480576"],["/tags/Vue/index.html","da6f58748171a64aff45ed6d4e27d050"],["/tags/Web/index.html","073d745361dc58ac4fc4ed71ec44c2f8"],["/tags/Webpack/index.html","f85bb489fffa6ae170af1f239901ddd3"],["/tags/hexo/index.html","9425aa035eaccb04908ad5aee0646cba"],["/tags/index.html","c3ee5a5203d39cde21ac9b22de30136f"],["/tags/nextcloud/index.html","d96247245aab51db5a3705fd3f0b6ef3"],["/tags/微信小程序/index.html","b08ecce7b357c6b533d078d18e6063b4"],["/tags/浏览器/index.html","94fff608bd3db001696af91fcaf0bb01"],["/tags/面试题/index.html","3ddc2bcae4956f835fc24fb6cc461b0a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
