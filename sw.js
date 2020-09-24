/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","3c9c6121e0f95dd283751b68c82445d4"],["/2019/08/01/Git常用命令/index.html","fa3ce296b2e9e9195c37e45c2ed8f64d"],["/2019/08/02/常用正则表达式/index.html","a5e8deaec0cb2edefb948bb9b851260b"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","ed462a5a25a417cf126b17b4922b5efc"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","6a77f61eefc25e38fc6b46a1ca47de14"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","43cd20b3ed20900bbc3c973f55a82219"],["/2019/08/05/阿拉伯数字转中文/index.html","705fa4137d62fb34eed47945e274614d"],["/2019/08/09/Javascript数组工具函数/index.html","db2160749e6bc4286b4521e6d186e218"],["/2019/08/12/CSS一些易忘的常用点/index.html","eec980c48c6ee29fc7e71e6ccdf257e3"],["/2019/08/13/Javascript-1-DOM/index.html","4eeaafd61bbeae404f4da0a55f592c03"],["/2019/08/15/Javascript-2-script/index.html","6da98eb94b3e6d92464e66242f33cff0"],["/2019/08/20/Javascript-3-数据类型/index.html","1ab201b68bca9db34911e5674a52bee6"],["/2019/08/23/Javascript-4-操作符/index.html","963112e43f0ee192fca24b9f9a306292"],["/2019/08/24/Javascript-5-语句/index.html","466461f7297b7433df8128ccdc9ac7fb"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","28897ddbbe5c577fe75de0806fe728b3"],["/2019/08/30/HTTP响应状态码说明/index.html","805308cdea33288e7ae4f76a9ebc0c5a"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","d70e48121e89ea810c0826268dfbc0b2"],["/2019/09/01/Javascript-8-垃圾收集/index.html","50ec918edc5d2e78a1d3a1f678b46478"],["/2019/09/02/Javascript-9-引用类型-1/index.html","76fad9502783fc3236c8933b495a3553"],["/2019/09/10/Javascript-9-引用类型-2/index.html","31cceaf09855c3bf0b1e86592456dd8b"],["/2019/09/14/Javascript-9-引用类型-3/index.html","ecfe1ae5a33947d17ba21c834ab22c29"],["/2019/09/20/Javascript-9-引用类型-4/index.html","9d127146f86b7ab2d1546f5a9db89923"],["/2019/09/21/Javascript-9-引用类型-5/index.html","079bd13c56c71d68c91eeca77ffad2f0"],["/2019/09/22/javascript-10-面向对象-1/index.html","8c62d197b26859be544afc69520e15a6"],["/2019/09/25/Javascript-10-面向对象-2/index.html","65d9ff0671192623bfe8405ceabf6ba2"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","e1164f05e8498a36e7bb6086e6300463"],["/2019/10/03/Javascript-10-面向对象-3/index.html","448355434c62425c970cf919467d730c"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","e166a106757a8b075eb170137cb8200d"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","6ac5bcffb15b5226516b4126de1005bf"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","410cac0e87f6342a8fa8a1099b4d23cd"],["/2019/10/21/Web安全问题和解决方案/index.html","ace68b23636c8095d63f41954b836669"],["/2019/10/25/Javascript-12-BOM-1/index.html","2226f723b70e2986fc7e18bfe85660a6"],["/2019/11/02/Javascript-12-BOM-2/index.html","0498e21de134a48eae8a3133749b8a84"],["/2019/11/03/Javascript-13-客户端检测/index.html","75f3ff5a4e721e91725b5c5fdc7411f6"],["/2019/11/07/Javascript-14-DOM-1/index.html","f8dc0de3c97ed4551ed032a8aff1b629"],["/2019/11/18/Javascript-14-DOM-2/index.html","d4dbf61d17b5e4547b402271fe0f0f66"],["/2019/11/24/Javascript-14-DOM-3/index.html","7ac0198b783dda88c2250830bbc5a144"],["/2019/11/28/Javascript-14-DOM-4/index.html","e6004377e972f3b44af6db7ef6c9fbd7"],["/2019/12/04/Javascript-15-DOM-1/index.html","81e5b2548123a2cd4ae5492e3d37bd7f"],["/2019/12/05/Javascript-15-DOM-2/index.html","dd6864c208ea44dc580c450f448fbfaa"],["/2019/12/15/Javascript-15-DOM-3/index.html","d50c38df0cdd7b571a86522653119ef8"],["/2019/12/20/Javascript-15-DOM-4/index.html","28ff51ab782918ebdc0d9afe4dfc72c1"],["/2019/12/24/微信小程序常见问题-1/index.html","d6665fe7ea5d99ae7ce3b15f917e3490"],["/2019/12/27/Linux下安装node/index.html","637c57b40195807c0c478d421bd4da98"],["/2019/12/28/JS计算精度丢失问题/index.html","f828646aab2bed0e8c2367ecae544195"],["/2020/01/02/前端常见面试题-1/index.html","6d56617d32617a532163a3577c7d2c69"],["/2020/01/05/Javascript数组去重/index.html","e85b0ea5b18d4742b7ae004e55a5e05e"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","0f8d10e0cd4938294e87f49c03aa4132"],["/2020/09/18/Webpack上传腾讯云/index.html","e95ca082932e78df99311c75aedf0730"],["/404.html","c065467aeba6c5b846ea903363e2182c"],["/about/index.html","b133429f08317672018e9212743a7ccc"],["/archives/2019/07/index.html","10f7a554a32cfd1b6c70075385a0cbf3"],["/archives/2019/08/index.html","31e50dc9f6e6acbbc60838d7cada95b3"],["/archives/2019/08/page/2/index.html","ffb69865cfe55c27fff3e55f5b7f428a"],["/archives/2019/09/index.html","a48796ced342cfdb6dd79a832be107c5"],["/archives/2019/10/index.html","d32a3c24d4bc0cf4cc91c5a9f91c4200"],["/archives/2019/11/index.html","087c2860632f3a68ffce0c84635b9c0d"],["/archives/2019/12/index.html","5d1057a21d7443b4ca51b65dcc357793"],["/archives/2019/index.html","aeaaea0b0cb1509b2a114845be71d6ac"],["/archives/2019/page/2/index.html","96477d93749210cfd63fe23d00779976"],["/archives/2019/page/3/index.html","61ee8b9ef89f6ea37481580317a63047"],["/archives/2019/page/4/index.html","104d85c3ff631f841e07ab55671cccdd"],["/archives/2019/page/5/index.html","689387a092bd9d6b221ecb7bba47fbdd"],["/archives/2020/01/index.html","4d00382408e48596e1c06c17401b5207"],["/archives/2020/09/index.html","1948b0fdf8280a0c7396e4ab96e1f191"],["/archives/2020/index.html","02a1fb9fb68aad4baaff8e52adb1467f"],["/archives/index.html","bbb546189d4550adbc0da6f55c5d8cdf"],["/archives/page/2/index.html","dd05edfcdb3e8c07acd78ad666c5c0c6"],["/archives/page/3/index.html","07c97a44c20af601396fa88d43edc2a2"],["/archives/page/4/index.html","02ee27e74b2026f6cf5ee91610e88a6a"],["/archives/page/5/index.html","4b7b4cc46ea4a328e663ceb1738d63f9"],["/categories/CSS/index.html","c451b6f17ff536e9e12935e3b41ff6b6"],["/categories/Git/index.html","45dd4b5cffc25b4ae01e06e7f17e48ae"],["/categories/H5/index.html","cb4f8d37cda3745121f294735d2f7b50"],["/categories/HTTP/index.html","bbc5d0a7f191f3a0e468afb3f954573a"],["/categories/JavaScript/index.html","0520397d5fe5c3feb055568d4fe4ebb7"],["/categories/JavaScript/page/2/index.html","d671d701747562e90628eccc35f2e346"],["/categories/JavaScript/page/3/index.html","27a0c658623818b41d7e3b0f61cea60b"],["/categories/JavaScript/page/4/index.html","371f23d541de6093ae3f943c9a19c115"],["/categories/Node/index.html","7a248a6e890ba03958a0862e3e87cfa1"],["/categories/Vue/index.html","46131e22d49626e06d41885bd7042527"],["/categories/Web/index.html","6a59aa0640b010efbe0046fd190abd91"],["/categories/Webpack/index.html","3c097b5b42f151a0b0ee6a11dd8befef"],["/categories/hexo/index.html","9351b73e0a093ef07b1eb7da6e20ed43"],["/categories/index.html","5306a81a60882faf14b7585a2d7f04fe"],["/categories/nextcloud/index.html","6c3c6ce11c4cf462f1c35d897238e538"],["/categories/微信小程序/index.html","2e419b305bc56f3c89491092abb2d7c5"],["/categories/浏览器/index.html","68ef0b67b89fe928040d6baed9091b90"],["/categories/面试题/index.html","6c2c3d8ce759d6ca60d0029d80085a8c"],["/css/main.css","f75694074a5fdbe77e96099325203de8"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","5aa38d82295dca1c6151a2afc2217b99"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","b99fa11dc49cddfb0446ec503dfce5fb"],["/page/3/index.html","59b4d71b5ea7d08f940fdfd1cf42abcd"],["/page/4/index.html","c4bd0ebd0fc0b18171ddee6eaea1247a"],["/page/5/index.html","bfeaca59d08d40feeeda0a6fd57f40b3"],["/sw-register.js","6e8b2d89a1f8c933e87ce5f6ea50b8a7"],["/tags/CSS/index.html","9a7d81b4cc56610b2b268688bee2a94c"],["/tags/Git/index.html","e4e9a824afdb8c22ed8a064a4e568785"],["/tags/H5/index.html","74dbe1ecf2b77f50dacb9e547fabe19b"],["/tags/HTTP/index.html","612d85a3434922bf35984f218ebe2902"],["/tags/JavaScript/index.html","54825e66b0a2f5f6328cf08b43f84b52"],["/tags/JavaScript/page/2/index.html","d5ddb8d30f51b0a5895f503df8376b04"],["/tags/JavaScript/page/3/index.html","5e168ddeee21b22b4540cf21827a4150"],["/tags/JavaScript/page/4/index.html","1035c22d89a119ace14ea1e27eaa6df4"],["/tags/Node/index.html","79598d9147989a8b61e5ce2e29146f2f"],["/tags/Vue/index.html","3e5d28fdcd0b88026632405a743ce00c"],["/tags/Web/index.html","43650f901aa50b05757482ba400ab831"],["/tags/Webpack/index.html","b11ebe633646af896d7cf35ead7bce87"],["/tags/hexo/index.html","8e9880c175c2fb9ede226d515b88c975"],["/tags/index.html","2994a665e279d1dc89a82bcaae805c06"],["/tags/nextcloud/index.html","5a7f968ddab7337de0adc150939f3568"],["/tags/微信小程序/index.html","1c658895483c994717cfb997168bbd6e"],["/tags/浏览器/index.html","55caf2a7cfaec5cdec0192743bef7441"],["/tags/面试题/index.html","079f1d5cf83ba5178bd06c3d4dbf13bf"]];
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
