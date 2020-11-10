/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","17a8ceaf8bae75c8c217c48f088e008d"],["/2019/08/01/Git常用命令/index.html","6c488f17f21989bfec5fc570368baee2"],["/2019/08/02/常用正则表达式/index.html","44a99634b1acd3e20443bb334b45a284"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","d3e27f8ae4208fc4a1cac958c49d5a07"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","b3535d06085a90bd60c02828f0da0eb0"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","989847f19a3d836543872f7566c2bb14"],["/2019/08/05/阿拉伯数字转中文/index.html","a788d55108d529923a663bdf896b8393"],["/2019/08/09/Javascript数组工具函数/index.html","a6d5562d8870bd49534eb3c7cbf88cd7"],["/2019/08/12/CSS一些易忘的常用点/index.html","0d008c700d216347df1ad13be57fc744"],["/2019/08/13/Javascript-1-DOM/index.html","e4a2faa0c24f38b624ff3d4b29d03e12"],["/2019/08/15/Javascript-2-script/index.html","a31e1764e20137b4e102ac13924d5435"],["/2019/08/20/Javascript-3-数据类型/index.html","d8ccb12447b29e1435cf8a3983fc248e"],["/2019/08/23/Javascript-4-操作符/index.html","32261e7cf85ae69c16daa09d9a92730f"],["/2019/08/24/Javascript-5-语句/index.html","8aeafbfdd7b6b42fa490a7e232004fa8"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","c4f8804d0a444f5a274325dbb4826fd0"],["/2019/08/30/HTTP响应状态码说明/index.html","eca64833b6c9c92b840850aece2d49ff"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","582b5ee12c1b2ad1defd8ac894eecb0f"],["/2019/09/01/Javascript-8-垃圾收集/index.html","9e60ab49155e7172bfe1524c691c5640"],["/2019/09/02/Javascript-9-引用类型-1/index.html","c19eb508d931d0046e07abc6d5ede110"],["/2019/09/10/Javascript-9-引用类型-2/index.html","6c3b183698fc2e6702e5535b2a8c8820"],["/2019/09/14/Javascript-9-引用类型-3/index.html","3e9fc588eca86944ecc15f126823bde0"],["/2019/09/20/Javascript-9-引用类型-4/index.html","bab573f4906fec6fd360c7c0f2ece0c1"],["/2019/09/21/Javascript-9-引用类型-5/index.html","8380a9376e4dedcc5473c61a5509fbae"],["/2019/09/22/javascript-10-面向对象-1/index.html","8cbac51a3f5df1dc07b86ed1bbfce5a8"],["/2019/09/25/Javascript-10-面向对象-2/index.html","0e8af5104669f31a782c8f7485e2576f"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","37a8dc970e93f82169a74281ff1def0d"],["/2019/10/03/Javascript-10-面向对象-3/index.html","42304765213e7801023680394d86812b"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","23ddaf135d26bf3c43e8a33882de9bef"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","3b8ef43de8ea8632eb1d59c1eada0132"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","0058e6c599a9b24f8c20011ed8e4c8fa"],["/2019/10/21/Web安全问题和解决方案/index.html","837b5f2a4897327132c778d4730145b9"],["/2019/10/25/Javascript-12-BOM-1/index.html","b9ad077186b83ac7a1a0995f509b12a6"],["/2019/11/02/Javascript-12-BOM-2/index.html","5fd9e36a0face7dd68c6aec996aab526"],["/2019/11/03/Javascript-13-客户端检测/index.html","01f2ac641d16b876a39569107156c70c"],["/2019/11/07/Javascript-14-DOM-1/index.html","5432614b8886fd592bf8696aa849d07d"],["/2019/11/18/Javascript-14-DOM-2/index.html","2d9feb436988597a073883504d13ca7d"],["/2019/11/24/Javascript-14-DOM-3/index.html","7712772db6a90fbb2d77219fcbb6056e"],["/2019/11/28/Javascript-14-DOM-4/index.html","166e20f1941b432565f5d3cc66f839e0"],["/2019/12/04/Javascript-15-DOM-1/index.html","c995adfe1aa2175cfd047a5089f37aa3"],["/2019/12/05/Javascript-15-DOM-2/index.html","359eed11c6c8812c2fe03af9cfe2913f"],["/2019/12/15/Javascript-15-DOM-3/index.html","c008d8c157f1c1ae1384bc5eff772c5e"],["/2019/12/20/Javascript-15-DOM-4/index.html","0fd0f136093d49b1e2b1089f519956fd"],["/2019/12/24/微信小程序常见问题-1/index.html","21b8ce8412015c362b39c1ac56a2154d"],["/2019/12/27/Linux下安装node/index.html","a99325b241fa3fe555c20799f75655a3"],["/2019/12/28/JS计算精度丢失问题/index.html","6b0538b84d07867c8f2f772f221188f2"],["/2020/01/02/前端常见面试题-1/index.html","e74a9470795f05371dc51d55d638eea1"],["/2020/01/05/Javascript数组去重/index.html","7633977191e3708ea586b980e6e89da4"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","359760c07903957bc127afcf30f27447"],["/2020/01/18/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（一）/index.html","b08f9ae78b29c26f22fd866ffd92ec13"],["/2020/01/20/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（二）/index.html","840de92024aeb5ed51385ae00de3cb72"],["/2020/01/28/响应式布局的常用解决方案对比-媒体查询、百分比、rem和vw-vh/index.html","8bc0be18dbb366fd55c13bbbedf3b272"],["/2020/09/18/Webpack上传腾讯云/index.html","939cffbad9400dce333aaaddd83a1830"],["/2020/10/07/Docker简单上手01/index.html","2a3d83e2f40513f1700e64c11bd29b7e"],["/2020/10/08/Docker简单上手02/index.html","387f9d9ef8ac370642c513ce01638e5f"],["/2020/10/09/Docker简单上手03/index.html","8049c03e320b6a0b4c9cf62d39817976"],["/2020/10/09/Hexo写作样式简介/index.html","ddba78a09e911142b0d59677dfcd63ed"],["/2020/10/13/Express-MongoDB搭建图片分享社区一/index.html","547219d895319952c00ced797d60c2af"],["/2020/10/14/Express-MongoDB搭建图片分享社区二/index.html","86bb7e78172c3bfa29734ee138945d91"],["/404.html","bea9515c52296577ec360a786310b45c"],["/about/index.html","b25513914a6cb127177db6aff09f0a00"],["/archives/2019/07/index.html","a90f9472e24a35f72ed96de80e6add75"],["/archives/2019/08/index.html","b032bf89f247ce22e5f91df251185e45"],["/archives/2019/08/page/2/index.html","e2c660aacde716f483e5679fb02269fe"],["/archives/2019/09/index.html","87a9d766a4fcafd673ab48cfbe43d60c"],["/archives/2019/10/index.html","403a9ea682e97f8b5cb8cae82698dfca"],["/archives/2019/11/index.html","ab9122c06a7327a118d0fa1bde72b59c"],["/archives/2019/12/index.html","4a13b44f3bb32ec5bf40641b0d58fb32"],["/archives/2019/index.html","2aa2036f00cfb06caa20861264477bed"],["/archives/2019/page/2/index.html","4e59c3a50d16979cc4edc956070622f8"],["/archives/2019/page/3/index.html","f3d5882ec00a11c1b574cbfb417e2a2b"],["/archives/2019/page/4/index.html","85079c1a5496509e326bed7977d01205"],["/archives/2019/page/5/index.html","e5a4b9f2e738edba9b435131cc23823d"],["/archives/2020/01/index.html","8e9771b67d0d5c642fbb9c33370a389e"],["/archives/2020/09/index.html","3319c979928f36e63fcb3b611cab4aec"],["/archives/2020/10/index.html","700ac49870a1f601639b23caea46adec"],["/archives/2020/index.html","6b59e3fdd31b50b13cb5682c2399343d"],["/archives/2020/page/2/index.html","2f51372ef1ba94ebb61ecbbe421e381e"],["/archives/index.html","de48218e29cd22bd90e25e3cf82282b9"],["/archives/page/2/index.html","22696e97ea5a3998dcde3884aa2f963f"],["/archives/page/3/index.html","f20839624cbb93c8a44fb4d948660c6b"],["/archives/page/4/index.html","675d5221a6989800c4a6fefd6eab384b"],["/archives/page/5/index.html","6c7cf85e943eb5c2ea7f99b9f823efa4"],["/archives/page/6/index.html","38723a7717a603304821a898c0c444ec"],["/categories/CSS/index.html","a45027b6a49ebacb01533332befb9ec7"],["/categories/Docker/index.html","6cd0187ec350d383f90261b894a4b408"],["/categories/Git/index.html","9b1bf0837a4c7857d935a591ec0c23b8"],["/categories/H5/index.html","d9d6704fe967a7e1f50110997fc010fc"],["/categories/HTTP/index.html","91581c5281e2a07234eb0740b36c3b5b"],["/categories/JavaScript/index.html","6cfe1f50b5cfcedd172b866d21d67e1f"],["/categories/JavaScript/page/2/index.html","d8a2887b6bb9ed5f4b808fd1a8dc46c3"],["/categories/JavaScript/page/3/index.html","9ad68f742b81ab454b19f9df47c3c757"],["/categories/JavaScript/page/4/index.html","3530a09ba38ee453abbc7df5aa7c34dd"],["/categories/Node/index.html","0590ae96e27030f3ccdbd1edae751c04"],["/categories/Vue/index.html","3445ed9576d00126f08b31c389978586"],["/categories/Web/index.html","7a417cd948c9d2c928d63bc24fefb912"],["/categories/Webpack/index.html","24a62ff7b4c943f539cc059ca784ca64"],["/categories/hexo/index.html","66a0678cfed3a264ecd9581a53e0be4b"],["/categories/index.html","3f0530129cc0598e5ae1db383565d27c"],["/categories/nextcloud/index.html","95367712eb3fe39d9357e4eeecf67eca"],["/categories/微信小程序/index.html","2ba6f3f250e54a325b99671bc914e916"],["/categories/浏览器/index.html","4bbb18d2573b111cba7a61b2283cce24"],["/categories/面试题/index.html","221164e25e94317d1c7201b8cad2d712"],["/css/main.css","5aca4150d9f27bc5d2b2afa3b5d6c191"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","455b322820265d940e6346a75f2faf8b"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","16e4dc0c91cded298337b1adce16a261"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e2c9e770cf1b4beb7e6bbb819b167fa0"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","e81592a1df640528b1ce5cabd382f1fb"],["/page/3/index.html","e768a220f16c20da0c86024ce489909e"],["/page/4/index.html","de590650ff7ebfc7fd0710c1ee539410"],["/page/5/index.html","dff6720461b82b9657021ebc922557fd"],["/page/6/index.html","bb7ced3373a12cf302c6a4a96cf8ae4b"],["/sw-register.js","c2d56bdb44c2b870181b626aec9ea355"],["/tags/CSS/index.html","86b6de05be674f1ff6cf0d9ffc92c102"],["/tags/Docker/index.html","1688dcd54fe3d83fe6bfc5948e2fb9e4"],["/tags/Express/index.html","b6101f8856c2e2f4b8acb29f08d3d5f4"],["/tags/Git/index.html","951dd3e49c086707718f04ca89dbe1ba"],["/tags/H5/index.html","903bc258aa1ef52d1a68b43d8c416217"],["/tags/HTTP/index.html","c0478cf019f201b36a5d533b71851dbf"],["/tags/JavaScript/index.html","d53cdbfc060cce22a90465e8f2ede1c4"],["/tags/JavaScript/page/2/index.html","a9b385a6d7cc24cf0a6f9fce3d481643"],["/tags/JavaScript/page/3/index.html","d5fb2d076f86c6c32a32c6db9540757d"],["/tags/JavaScript/page/4/index.html","0d652e031d322d31f103ed3b18af7798"],["/tags/MongoDB/index.html","5688c5ebd309fe209ab0249ad0217f2b"],["/tags/Node/index.html","7b5d5ccbebd36201866b9ffa9a478aea"],["/tags/Vue/index.html","a3f9f4ef1e78f0bc68eb59b8dd2e47f7"],["/tags/Web/index.html","be8e5c99a2bdc29d24be355bd13a13a9"],["/tags/Webpack/index.html","aa98d6320ca4aa23facf67424f7f37b5"],["/tags/hexo/index.html","48469647342395c74f610b50229cf0df"],["/tags/index.html","f0f9d1b1171b18990446ac1614fac9e4"],["/tags/nextcloud/index.html","56883b9b30d54dfac85966e6f8159b16"],["/tags/微信小程序/index.html","188c867cd5df0b3ae0c26c2a50b1d16a"],["/tags/浏览器/index.html","6d74154fc326060c77351138a60e7eff"],["/tags/面试题/index.html","cc73922c6d8a99a78fdbd7c015e98993"]];
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
