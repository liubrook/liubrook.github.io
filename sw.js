/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","eb8bdadb66501a96955b0d731350b257"],["/2019/08/01/Git常用命令/index.html","1d1b495913c6e90e8da9511786028b66"],["/2019/08/02/常用正则表达式/index.html","3fd29909a7d0b973c07e2d9db536850a"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","8077e5e1ea3b587201bfe4b6004b2f1e"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","ae167a7cb1bbcf13b6799bb9548f6c89"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","705d0c954827f54eb9845f22610c3d35"],["/2019/08/05/阿拉伯数字转中文/index.html","fcf16877ad60cdcaa3b5d068a50e5f41"],["/2019/08/09/Javascript数组工具函数/index.html","9733437251a7a468bec73fced7e1800d"],["/2019/08/12/CSS一些易忘的常用点/index.html","54b023ed198f6aaf790f9b8dd4fc4453"],["/2019/08/13/Javascript-1-DOM/index.html","acff13a314f0219b8b18c685fc46e407"],["/2019/08/15/Javascript-2-script/index.html","b2c2bd1cce8eba77e8b26a924bb0f0db"],["/2019/08/20/Javascript-3-数据类型/index.html","229f5242f10c33621a768c6b8d641bec"],["/2019/08/23/Javascript-4-操作符/index.html","9381c388e5ec9377e819b15f0b029869"],["/2019/08/24/Javascript-5-语句/index.html","e20630f0f7fe0cb664896dac52ddd03f"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","bc4162db9e533d381a4d419559d41dc5"],["/2019/08/30/HTTP响应状态码说明/index.html","c651944fcce74d426e04f997c23c7de4"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","e763b657ee1582c5d00b0ab035dc1810"],["/2019/09/01/Javascript-8-垃圾收集/index.html","e4914be9ecc15dc3a9823bb4134bc6cd"],["/2019/09/02/Javascript-9-引用类型-1/index.html","edd8866522fb50c67a753cc81a1693c5"],["/2019/09/10/Javascript-9-引用类型-2/index.html","0bd113b55da978f3451721d72060fca1"],["/2019/09/14/Javascript-9-引用类型-3/index.html","63064013d0d205a30fda26455fa49410"],["/2019/09/20/Javascript-9-引用类型-4/index.html","cb4b7f8c16f03ee41af65619244f4432"],["/2019/09/21/Javascript-9-引用类型-5/index.html","d6d63a7dd103d7be2ac55b7618785397"],["/2019/09/22/javascript-10-面向对象-1/index.html","e0f57d5bb7299040f15f3a327904aade"],["/2019/09/25/Javascript-10-面向对象-2/index.html","dec994922fae804ea2b37f89b6db0a86"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","9f3594c8d2850b4d47720f74915425f8"],["/2019/10/03/Javascript-10-面向对象-3/index.html","89d4850ad4d9929f00480e9064d1cef3"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","5894f5ea01686c4bf5c42615fb7c4237"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","b40560815effb3e341368a2a8ed629d8"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","bc4cacb97537dd12b40b92041bc09e2c"],["/2019/10/21/Web安全问题和解决方案/index.html","c83ea5c9cc5d98e9e88357b34033bb5f"],["/2019/10/25/Javascript-12-BOM-1/index.html","f7643b1c60ab4420f13f3ab1014199f0"],["/2019/11/02/Javascript-12-BOM-2/index.html","a1b3327b832761d2f6d56afe8c308bc5"],["/2019/11/03/Javascript-13-客户端检测/index.html","78ac40dec8e4ab153c5e781d1a52882d"],["/2019/11/07/Javascript-14-DOM-1/index.html","d81a0b88d683f0c486f7923f60e61dd8"],["/2019/11/18/Javascript-14-DOM-2/index.html","df2e4e3d39d914f85aec22e2d9a1c98d"],["/2019/11/24/Javascript-14-DOM-3/index.html","d2ecea59a1a49480f5bd2fb4c24bfeda"],["/2019/11/28/Javascript-14-DOM-4/index.html","a1c4955c776bceda2b65c3b161eee017"],["/2019/12/04/Javascript-15-DOM-1/index.html","83ea100777d16b6c5f14ff6fe50d04a4"],["/2019/12/05/Javascript-15-DOM-2/index.html","cdfa8119bb1217b946a2040587136dc8"],["/2019/12/15/Javascript-15-DOM-3/index.html","93efe57677c2dae1e95713c36ad6d8fc"],["/2019/12/20/Javascript-15-DOM-4/index.html","f200e45d99b17931c46ed9401f368fe6"],["/2019/12/24/微信小程序常见问题-1/index.html","58d082140c6dc839a27a3111f2d99056"],["/2019/12/27/Linux下安装node/index.html","ff990463990522b317adf7bd4642bd01"],["/2019/12/28/JS计算精度丢失问题/index.html","2db0d8d1b5236830ed2289913b9ba4a4"],["/2020/01/02/前端常见面试题-1/index.html","c58215eee273fac9d6d091a786de7f0b"],["/2020/01/05/Javascript数组去重/index.html","d51559595b0121ff4fe9d1320913a621"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","6e733051ff9bce7ec1d38da862662c0d"],["/2020/09/18/Webpack上传腾讯云/index.html","e7210d513058a7f8325a55d0a81f7aae"],["/2020/10/07/Docker简单上手01/index.html","ad0c4f4cc6f81b3785a2d0fe0530b2df"],["/404.html","bea9515c52296577ec360a786310b45c"],["/about/index.html","40989914e7d24ce5bb6fd5701f04f44d"],["/archives/2019/07/index.html","e944b1280288ea7c197e616d416e2bf9"],["/archives/2019/08/index.html","d076c1840fef19dee10b9aedd3e6b931"],["/archives/2019/08/page/2/index.html","d89d23c9fb6d320adf8b75144bae0bc4"],["/archives/2019/09/index.html","1c6ebe66d54c4b50b8bffd895ae2f456"],["/archives/2019/10/index.html","706394caee505c16262280331cfffac9"],["/archives/2019/11/index.html","ba42c6dd548f6909cf1e70f4a38ba1c5"],["/archives/2019/12/index.html","9605f6ef5b72874d9c0341b340821ac2"],["/archives/2019/index.html","749035b3c7745179c2fee32b995d959f"],["/archives/2019/page/2/index.html","4277310c7eaf51c3e87b963b211e1daf"],["/archives/2019/page/3/index.html","608390d5c29ad324abfa50b2edaaf822"],["/archives/2019/page/4/index.html","7f3a067cd9dedaccdca5eda1cf71ff0d"],["/archives/2019/page/5/index.html","ee41e9ef7e800accfba0743b95ba598c"],["/archives/2020/01/index.html","ce6d028fb09b73d3fd47cf7169cb3cd1"],["/archives/2020/09/index.html","cad72938fb5cad7c9f5e9cfd7c1a4cb7"],["/archives/2020/10/index.html","fbd4a93dfcfd0dcec499627321d08a27"],["/archives/2020/index.html","a91b7410d625beed6301fc26a0360a20"],["/archives/index.html","76e0a7c7d8b977d068c1346b009fd723"],["/archives/page/2/index.html","a540ed02c4a7b6163f731375ec2b45c9"],["/archives/page/3/index.html","4811496b710f1f08f4a82d98ccd48deb"],["/archives/page/4/index.html","41a65d632db63a10a8bc7250fdd90390"],["/archives/page/5/index.html","15fe097645a83c62fc47a26c64318406"],["/categories/CSS/index.html","1d26d12cd73469a220d1be9a96439fcf"],["/categories/Docker/index.html","a54ecb5ad9810639f4b7644879f01c28"],["/categories/Git/index.html","8e9058a7fb5bbd0fd5dc7145f7f11650"],["/categories/H5/index.html","f8d60f286d7d6c2391a97afc81b3acf3"],["/categories/HTTP/index.html","d20e396e2bfb6d83a4b182cc8801d193"],["/categories/JavaScript/index.html","60acf845b0cdca7e8d32f95d21eac5d3"],["/categories/JavaScript/page/2/index.html","3223b8e755edf1791e4bc39bec028288"],["/categories/JavaScript/page/3/index.html","12669a6bc53026695c89375e8a947763"],["/categories/JavaScript/page/4/index.html","561d3dbf374071eb1a4b784c10311b1a"],["/categories/Node/index.html","0ad61fa609f58979ea855442c2ce859d"],["/categories/Vue/index.html","982ca663bdb48ff93ac609837a2c3eb2"],["/categories/Web/index.html","97f53fd698878b727cc5b0eff0af177b"],["/categories/Webpack/index.html","508ee92c879bd826fdf70f41a438e3aa"],["/categories/hexo/index.html","6c2280b7abd6ce47fb8f682fb237d62d"],["/categories/index.html","5e8b61ecfd75ee4a6ac1076c59d61645"],["/categories/nextcloud/index.html","e6174cb054ed4ac58ebd71d73346c364"],["/categories/微信小程序/index.html","dc23f90ef91cbdb7410f28eae9f31981"],["/categories/浏览器/index.html","a1eb2ae043e4a414c81a4d157d4c588b"],["/categories/面试题/index.html","036ade9c8115235253ea4f5c6a7635d3"],["/css/main.css","2eaa7b9dee382e160ad5c893f9fca6eb"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","27d2927b5a6eec4ccfe14f23ec5018dc"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","16e4dc0c91cded298337b1adce16a261"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e2c9e770cf1b4beb7e6bbb819b167fa0"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","54d95f544707f624b351e3372f63268b"],["/page/3/index.html","ec9149b2c3a77940b3ed8f63bd91c7b8"],["/page/4/index.html","0e1a275c52a3181bfa22c5ae4a4386f3"],["/page/5/index.html","442bf0ee23ffdefc073f1af831d5fe57"],["/sw-register.js","51da6dcde132fa839790e0db037b2b86"],["/tags/CSS/index.html","9306c644086803988b899f3c40a8b1c8"],["/tags/Docker/index.html","f0089bb0550d8c03dbde26c51a03414e"],["/tags/Git/index.html","299fe6a12682f165e0a151c8db73fafc"],["/tags/H5/index.html","f57e238c2e953514cc5f327e5605e587"],["/tags/HTTP/index.html","344057e9604fefbe7e0ddcc2f02f129c"],["/tags/JavaScript/index.html","3d95fd7c8597aa2991e47f2be5de200c"],["/tags/JavaScript/page/2/index.html","4f5759e5ec2d14503430a794a1a88e6b"],["/tags/JavaScript/page/3/index.html","3324251f8625548d8ca520fb005a1404"],["/tags/JavaScript/page/4/index.html","a7f90a590ac15966fe935287db47b2a7"],["/tags/Node/index.html","398456786898e9cbefdcb91f0adc3aae"],["/tags/Vue/index.html","18cf10675e2c95a4137e7f56106abcc1"],["/tags/Web/index.html","8e0dc0b1e2f60030ae313a579a749827"],["/tags/Webpack/index.html","67c84f9d3e644a516d50d23a9ba5303c"],["/tags/hexo/index.html","8dd9e0e2d3c1ba0fe99936397cb33478"],["/tags/index.html","7994ede072c08cc942bebf7397a53434"],["/tags/nextcloud/index.html","5b720327e9c15135d543fdc811d571ce"],["/tags/微信小程序/index.html","ff1b742ddb53670ddf9f40a6bc8bac45"],["/tags/浏览器/index.html","f46a52f2b3c99682630a1362a5d81cba"],["/tags/面试题/index.html","d83be34837adae8c6436da7d3aba9fab"]];
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
