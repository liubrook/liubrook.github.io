/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","be2d7231fb28c7423c188edc40592409"],["/2019/08/01/Git常用命令/index.html","bf33078c6df03ba3cfc2106741bfebd0"],["/2019/08/02/常用正则表达式/index.html","1d98ec9a5c5a96b1943c3dcdc6f9840a"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","49a2b07c0184e7c18dc7edc66c28a302"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","dd417ff9f9b186d4e5ed655cb7909c77"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","cfdf61d65578d0c7c74fafd47ae7fdb2"],["/2019/08/05/阿拉伯数字转中文/index.html","1a6a8532bed35a7d277028db3d66ef26"],["/2019/08/09/Javascript数组工具函数/index.html","bc0a93dc9124f70c1ac34203f40d1d22"],["/2019/08/12/CSS一些易忘的常用点/index.html","40fe26e28189109bd1c4ac5d6bd8b897"],["/2019/08/13/Javascript-1-DOM/index.html","29f4c9a1e000c551f0cbf0eff4368961"],["/2019/08/15/Javascript-2-script/index.html","626e76dc947b58744176583a5b5fa5e0"],["/2019/08/20/Javascript-3-数据类型/index.html","99486cf5ec596e0d1df05465eecfaa11"],["/2019/08/23/Javascript-4-操作符/index.html","12a7f7b7547ff047b832a151ddb37b4b"],["/2019/08/24/Javascript-5-语句/index.html","369c59e5d77ef3b2fc5cfa85d240d7f2"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","27e1d1bb8e504ca1ca5d20490fe0ab27"],["/2019/08/30/HTTP响应状态码说明/index.html","f53edd9858e41beab7db92fb1e2762e5"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","35357be749056f3e3b20cf0f82bd4857"],["/2019/09/01/Javascript-8-垃圾收集/index.html","2e2befd761d3dea4e0a2ece42a4d55b1"],["/2019/09/02/Javascript-9-引用类型-1/index.html","9b4d5c7ef8be8f508faf605bfbaeca01"],["/2019/09/10/Javascript-9-引用类型-2/index.html","135a21c35fdf1639619346a00a0cecd1"],["/2019/09/14/Javascript-9-引用类型-3/index.html","2c8feba32619fbfedc977e8e4d536381"],["/2019/09/20/Javascript-9-引用类型-4/index.html","56887c8349830950f78dc79f9d8f83d5"],["/2019/09/21/Javascript-9-引用类型-5/index.html","07b937ae218846cf936fe3e4da902cc0"],["/2019/09/22/javascript-10-面向对象-1/index.html","a44c6b93e665a76342720b6127609580"],["/2019/09/25/Javascript-10-面向对象-2/index.html","11cfb0f0d6689b3129ec424a768fd985"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","901813b9bbfd5609b96cc70f42eb306e"],["/2019/10/03/Javascript-10-面向对象-3/index.html","cf3f89dd132af61bcb21d0cbd12f0883"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","116d8bba30985f23d2af18c9a76e6bd6"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","61270dc295d2030dc97c9790bbc02e2a"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","f316cf3f75203e3446e5cc7ba2da4d15"],["/2019/10/21/Web安全问题和解决方案/index.html","0fd29ae23b0d3d1bf6d876d880a468f3"],["/2019/10/25/Javascript-12-BOM-1/index.html","4922658ae7679339f61d80f1b87f5e68"],["/2019/11/02/Javascript-12-BOM-2/index.html","2c168fbeb6df763674181d68bc24be66"],["/2019/11/03/Javascript-13-客户端检测/index.html","cea5e2a9512a72f6fff29cbec8649a40"],["/2019/11/07/Javascript-14-DOM-1/index.html","93fdc975256a7d0384f1b2f97e1fc142"],["/2019/11/18/Javascript-14-DOM-2/index.html","eef03dc9aea88c38157d9a2dfce34b5b"],["/2019/11/24/Javascript-14-DOM-3/index.html","1656603d4160458f81fd6311511f3ad2"],["/2019/11/28/Javascript-14-DOM-4/index.html","63a9465370f67326da9c4dbad44af742"],["/2019/12/04/Javascript-15-DOM-1/index.html","5660a66f97033ee6e338e6d98e58ec28"],["/2019/12/05/Javascript-15-DOM-2/index.html","3768a5f5f95ee59c8cb5e8ba5fd6e7d0"],["/2019/12/15/Javascript-15-DOM-3/index.html","fe2f739be638f209f98deeea8dba984f"],["/2019/12/20/Javascript-15-DOM-4/index.html","dd167689d6055de45b9cffa19b9ef3e4"],["/2019/12/24/微信小程序常见问题-1/index.html","97749e87e5598b19ff1b2f5aab685eb9"],["/2019/12/27/Linux下安装node/index.html","4ad8f6f48d9985c4cb73a7c3566fb685"],["/2019/12/28/JS计算精度丢失问题/index.html","b8873068ce3cb6d6e6dc4a50af8e07da"],["/2020/01/02/前端常见面试题-1/index.html","e371d1dde2509219e824a2691e1e0015"],["/2020/01/05/Javascript数组去重/index.html","5fe9eb78b6c55c38cfc58c2fa587fba5"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","819f999122eea4367ac8d7a5df3a92c3"],["/2020/01/18/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（一）/index.html","2386eac756ef28f5fd236b4ea448b767"],["/2020/01/20/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（二）/index.html","b45223598029147cb996af549750bb5d"],["/2020/01/26/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（三）/index.html","425d06e61b593381c979274867ac47f6"],["/2020/01/28/响应式布局的常用解决方案对比-媒体查询、百分比、rem和vw-vh/index.html","9601d6ef710cb7af31a37f4ce104bcbe"],["/2020/09/18/Webpack上传腾讯云/index.html","9b11119f85db7f46c02bb6848200f79b"],["/2020/10/07/Docker简单上手01/index.html","73b2b783f1d3b4b2dd894e61adfddde1"],["/2020/10/08/Docker简单上手02/index.html","d9da29465b4626c30baa1be15862333a"],["/2020/10/09/Docker简单上手03/index.html","d8d59a1651c553e169c21e8166b67fb0"],["/2020/10/09/Hexo写作样式简介/index.html","cb14923343c131d146d6beca7d8bd2b6"],["/2020/10/13/Express-MongoDB搭建图片分享社区一/index.html","9b93d7e6f03cdbf6d79a147d72fb5083"],["/2020/10/14/Express-MongoDB搭建图片分享社区二/index.html","d3716034c32c734ed743dd3b1ed195b0"],["/404.html","bea9515c52296577ec360a786310b45c"],["/about/index.html","24dd09b6201760e863f030f87e0f0863"],["/archives/2019/07/index.html","82e68f25b4cab6655974ef1028700eb2"],["/archives/2019/08/index.html","5979de1d7358bc12546a28b8e1bd981d"],["/archives/2019/08/page/2/index.html","6e64df8bbcecfb532bf297d7a897642c"],["/archives/2019/09/index.html","0a6285edc06f055337c9ed41586e814e"],["/archives/2019/10/index.html","caa2cb1035b68b7beb8c6a34b05f67f6"],["/archives/2019/11/index.html","4117588c34eaa41306a8bb2314c7ec12"],["/archives/2019/12/index.html","30dc391a593aa06877bb0ce1579ee0e7"],["/archives/2019/index.html","78931af8591c2c4012a8fbea98221b90"],["/archives/2019/page/2/index.html","7b2ebc2eeafbd1f233f6bcd2a535f986"],["/archives/2019/page/3/index.html","dde8323f30606c0a67ca05676212eafb"],["/archives/2019/page/4/index.html","adfe2f400324b47dfdd5e1f6487a1326"],["/archives/2019/page/5/index.html","2b693c5ea6fafd41d98982a8c0a14722"],["/archives/2020/01/index.html","7c5159d5f119eb9a9fa1cd5fcab646dc"],["/archives/2020/09/index.html","b5f7b0d1e781c1c57b1e9cb2450fdcbf"],["/archives/2020/10/index.html","6aac2f45006f043cebe594d46ccd60fa"],["/archives/2020/index.html","a1875f4d879487b5f371c0ee7e132539"],["/archives/2020/page/2/index.html","6b17439b01f2e22ecf4e9a64556277ff"],["/archives/index.html","23dea75bbcded50460270a02affd619b"],["/archives/page/2/index.html","5331e233200c1b1514cff414aa2e9fce"],["/archives/page/3/index.html","10ff398a738ee9c63801a49e59ad8b3f"],["/archives/page/4/index.html","d08eebc51d1448925a628fd70e94a512"],["/archives/page/5/index.html","76aa10a143f5b9891de93205b3249480"],["/archives/page/6/index.html","d9fccff17eef1581d5c1234ac6f9b088"],["/categories/CSS/index.html","fa96a2e8d87e2df1d0aaa96c53ac7753"],["/categories/Docker/index.html","eb72183fda28f73b58db66c990d41a20"],["/categories/Git/index.html","8315f85470af427ab635d08d177ba507"],["/categories/H5/index.html","c0d935b21a29e5ee6482d3f1e0b6f30c"],["/categories/HTTP/index.html","e73f45cd3fb5356cd16701249d0490ad"],["/categories/JavaScript/index.html","8ccd7ab9aec98a8ee3ad7dc8cb627da2"],["/categories/JavaScript/page/2/index.html","098ef56807a877eb7fdb73ce022f7915"],["/categories/JavaScript/page/3/index.html","dd0ba72e0bee2715b95c3531462ee191"],["/categories/JavaScript/page/4/index.html","2ae803c585714fb232e7e59e3d1651e0"],["/categories/Node/index.html","792efb3fa8a98b30d7c25ad7c3e06cfb"],["/categories/Vue/index.html","8f752634d202dd7466d04b4afee4a454"],["/categories/Web/index.html","40afec7826f70885cc5aa1fab784c2c5"],["/categories/Webpack/index.html","376bbbf40f94e9a27cdc3b5fe2bbfb4f"],["/categories/hexo/index.html","ef592ea174416c19de147443550de630"],["/categories/index.html","2f1a9f8f19a5967281191fdfe92921b1"],["/categories/nextcloud/index.html","8e232e2281fa8cafff13d90fb0d43765"],["/categories/微信小程序/index.html","f0f2e299ae5f8b1494bf72e58349462f"],["/categories/浏览器/index.html","84e29be0f8027db3e7daa0f84fbb4fb6"],["/categories/面试题/index.html","6b21da26cf73522c16f89f3767a2592f"],["/css/main.css","bbea765fcddeb99b089fe336c6ee9cdf"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","f96aa1eda8ce74065b95e1bb70f9e1d8"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","16e4dc0c91cded298337b1adce16a261"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e2c9e770cf1b4beb7e6bbb819b167fa0"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","38edebba2ed3a73760bc9b7a6877ef29"],["/page/3/index.html","2e0cd658ccad5e60ac929baea00e11be"],["/page/4/index.html","5a76b4d4281c5e67456d634e034fccc8"],["/page/5/index.html","3f279c7f34350d9012cb6f66a3a35201"],["/page/6/index.html","03bea5d014310c186eee3eced6bce3d0"],["/sw-register.js","5f2b947bb65ad8914bc7d08c10ebde9d"],["/tags/CSS/index.html","29593e369de19adeda30e079f9f5582b"],["/tags/Docker/index.html","2f815a2d49bb39d7d396ca0e050eda92"],["/tags/Express/index.html","8775a0b75c3d0fcabf0f7fd485669202"],["/tags/Git/index.html","50c64831f36c6d11791a1ca9115de29c"],["/tags/H5/index.html","11165bf05368a550d959306f9577c216"],["/tags/HTTP/index.html","641f49486e781195bab9b88e6bfd8b42"],["/tags/JavaScript/index.html","d527ceb57ffbe82b28d99b72212d359a"],["/tags/JavaScript/page/2/index.html","9694c3f9bcb654e5b5372e4869e7edfe"],["/tags/JavaScript/page/3/index.html","6e90c2eb90ca2663dc5919438fd281d2"],["/tags/JavaScript/page/4/index.html","959feb693a157fea22c7c1c8d4755a83"],["/tags/MongoDB/index.html","a412f5ed1275130ea41308f60996d26b"],["/tags/Node/index.html","3df165f3fd180a15689264f23dccf2b7"],["/tags/Vue/index.html","9a9a03f2d7bb5102b829eb28ff245639"],["/tags/Web/index.html","d9fd862ded1c3e91fe5df395779d3233"],["/tags/Webpack/index.html","1fb0e5dc87ff3d56d952a3357795b601"],["/tags/hexo/index.html","c947d618ed87d83f30133506b08fbc73"],["/tags/index.html","a2606d270c8c0a56be5d6195debf340b"],["/tags/nextcloud/index.html","c797fb913f8f7414e05a90875329d32e"],["/tags/微信小程序/index.html","cb0d7999944b93832ebc83110f9ce5e3"],["/tags/浏览器/index.html","a50b94f60644cfd892643840438dfccf"],["/tags/面试题/index.html","500cb843cc5d6b4e969b7d20cd27eb72"]];
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
