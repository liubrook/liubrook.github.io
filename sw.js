/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","be29e9802d9eb3891ec1d13f6e3f49ed"],["/2019/08/01/Git常用命令/index.html","12fd17db775d0e0372a9d4f9ed4e3855"],["/2019/08/02/常用正则表达式/index.html","9759c0fc19cddb70c036c0d716003847"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","ba8b7c414d0c0d99d2bef30a663bffba"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","ab4fd5d6baec93ee4f378695d5fe1221"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","dc4abb55b177015d80284a128fc853ac"],["/2019/08/05/阿拉伯数字转中文/index.html","2d6b9106c003bb6f3680c53d1d0f44ef"],["/2019/08/09/Javascript数组工具函数/index.html","2b7911caccdef34ded48a87b849ca8eb"],["/2019/08/12/CSS一些易忘的常用点/index.html","2d1f6a9ad4aa6573e08783567999b741"],["/2019/08/13/Javascript-1-DOM/index.html","58e2002f9b7063f4f2de0b574dacc9d2"],["/2019/08/15/Javascript-2-script/index.html","44d6150611cf278073b553dc5b6ad1f4"],["/2019/08/20/Javascript-3-数据类型/index.html","0deb685b2d04081850c8215051e32633"],["/2019/08/23/Javascript-4-操作符/index.html","bb27d361ae8d28212c0a9abe5a484b9c"],["/2019/08/24/Javascript-5-语句/index.html","09fbb7f23f2433220e8e14e669a1299a"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","1b32ac75b2f3e1d9142fad0ee7faf38a"],["/2019/08/30/HTTP响应状态码说明/index.html","01274d716c1a6f863972968603e971c4"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","9c6055e17a7cbc2b36e771aa2a8e67de"],["/2019/09/01/Javascript-8-垃圾收集/index.html","daef769061d03c15213973afe2f43e6a"],["/2019/09/02/Javascript-9-引用类型-1/index.html","d69dd4e99ca014ec6b2b7b19c90d4e22"],["/2019/09/10/Javascript-9-引用类型-2/index.html","f8bf407822f579f35770c177b9979da4"],["/2019/09/14/Javascript-9-引用类型-3/index.html","28d7698e226fd8ee7c23a6f23aeac5aa"],["/2019/09/20/Javascript-9-引用类型-4/index.html","e2504b024bd105c7d06dc22b0bb1766f"],["/2019/09/21/Javascript-9-引用类型-5/index.html","49088ded8c8d1c5af020bb4d05f1f711"],["/2019/09/22/javascript-10-面向对象-1/index.html","9442c3da12b6e11eddd91068cc01fe89"],["/2019/09/25/Javascript-10-面向对象-2/index.html","df2133699e04835a41e464e2889489ab"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","5da5e608005b0fe6f6712c453497e669"],["/2019/10/03/Javascript-10-面向对象-3/index.html","e4647b1481d17b13b68f799c2a931b77"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","f1bfdff78fc84a1b155a582b72eefcc3"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","98dc48abbe880a6e4fc8d1b203cd7c53"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","ed9504478e949250b8b903c89130b10c"],["/2019/10/21/Web安全问题和解决方案/index.html","866be87be896976fcfc54aa968ebf33a"],["/2019/10/25/Javascript-12-BOM-1/index.html","e1dc43dfc30764b71e2afe4771e03e7a"],["/2019/11/02/Javascript-12-BOM-2/index.html","0c0f0975ef9e3e57dddddaed79d25cb6"],["/2019/11/03/Javascript-13-客户端检测/index.html","c7d715f172314e59575003045262de7e"],["/2019/11/07/Javascript-14-DOM-1/index.html","386c389716c4f1af07eb6595b2b1ca2c"],["/2019/11/18/Javascript-14-DOM-2/index.html","1d28eba0824b3d7e7186e3b5b336bc2c"],["/2019/11/24/Javascript-14-DOM-3/index.html","08f4a3dd0a695b4f166bfeb7b115495b"],["/2019/11/28/Javascript-14-DOM-4/index.html","509ff048b970317b9afb86b48f18ce4e"],["/2019/12/04/Javascript-15-DOM-1/index.html","f86df38604b976e37bab57c2fa6bd154"],["/2019/12/05/Javascript-15-DOM-2/index.html","553794229a7156b481bf7331680d9157"],["/2019/12/15/Javascript-15-DOM-3/index.html","402bd1da8dbbb8ed62b7942303d9c718"],["/2019/12/20/Javascript-15-DOM-4/index.html","2698aa0fbabda27163ec62867eaae456"],["/2019/12/24/微信小程序常见问题-1/index.html","3a09bba3f9662283a297b22ea0593f07"],["/2019/12/27/Linux下安装node/index.html","772c72e56a2b7f8e51f7d6720fdb531b"],["/2019/12/28/JS计算精度丢失问题/index.html","7dbd45b08f191520400d021a15e0b546"],["/2020/01/02/前端常见面试题-1/index.html","0d7cb4947c27018833c2294d51a2696c"],["/2020/01/05/Javascript数组去重/index.html","f15e508a858706dc9155a76c14d4c48d"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","736c05e69d10f8e54d50e5506d3d7b71"],["/2020/09/18/Webpack上传腾讯云/index.html","3f48d9b50a775038379b2cdde6960b60"],["/404.html","c065467aeba6c5b846ea903363e2182c"],["/about/index.html","38a946cf72d98ff30d89798c2c2a99c0"],["/archives/2019/07/index.html","d33cb3f7ed745d9ef848fc2b4a557de3"],["/archives/2019/08/index.html","53314a0d5ee3f80eec0ea9260fdc7c17"],["/archives/2019/08/page/2/index.html","8644e7a4f6f064452135bcb6bd2b1f31"],["/archives/2019/09/index.html","1da206f4a82c53bc6be5f33010c9d1a0"],["/archives/2019/10/index.html","f1ede92c19cdee57eaab19528c8fd94b"],["/archives/2019/11/index.html","5badf0b225a3d8e50e5fb5131241ab05"],["/archives/2019/12/index.html","9b217d1c3e49a0104178e73bce36db09"],["/archives/2019/index.html","aaa9e6690b96c0279a143d18ac88c43f"],["/archives/2019/page/2/index.html","7edc4a1190b64a6a9cc4e6ce50ec105a"],["/archives/2019/page/3/index.html","45850a06dfca2c47653b21e7d95558f3"],["/archives/2019/page/4/index.html","f5f813080ae657bd0ac249821c9dfb33"],["/archives/2019/page/5/index.html","28372fb2331a9d42319ef1c6f12a8bef"],["/archives/2020/01/index.html","31dbcc0f8844380d3016c83f442091c2"],["/archives/2020/09/index.html","3724b0bc4683006f06506faefcd12cd6"],["/archives/2020/index.html","2effcce2d7d84027eefe4461fda8518a"],["/archives/index.html","3ed54f9e709b823e047ea710eb48ca74"],["/archives/page/2/index.html","a809536c00609665b27956ae121a2c29"],["/archives/page/3/index.html","cc1edc7edab95514a4bb9c5c6de9a238"],["/archives/page/4/index.html","9f23d4ad344404f9dcd76b210f084cdd"],["/archives/page/5/index.html","0de0edcc4f77a607a3924d3e177d8568"],["/categories/CSS/index.html","38be4673cad60e056a2960b3a7944681"],["/categories/Git/index.html","3a64fcec7a50665d4795c3f6244752c0"],["/categories/H5/index.html","da12fe79a28b54832d02c2df7c9f3d6a"],["/categories/HTTP/index.html","9018a4cdcb1a2def82826d66e6f58873"],["/categories/JavaScript/index.html","dc8c1ac5f98ba09c58fdc32655cdf025"],["/categories/JavaScript/page/2/index.html","873d5b742df76c1090b53fb796d6abb0"],["/categories/JavaScript/page/3/index.html","8df3f2bbd2d0d0060973a6f529f3a945"],["/categories/JavaScript/page/4/index.html","5d276c0bb386172b2acd9f682ce62c13"],["/categories/Node/index.html","6361a896eae84bc527f80639a50c92a1"],["/categories/Vue/index.html","85a87e9ca9461c7cf0bda7434dac6191"],["/categories/Web/index.html","bd8fce67100ac144aa5ffde20a2a26d7"],["/categories/Webpack/index.html","cda755fa40955a55e73786c7180807df"],["/categories/hexo/index.html","e608b5279211381258a6b9b292e5c394"],["/categories/index.html","6aeec860c9dc75ca5b76bc91b62a7c0f"],["/categories/nextcloud/index.html","2a8a82d8281afcdb0d3932a704c1bd98"],["/categories/微信小程序/index.html","6c930a3442665132ac41b0dc74ada47b"],["/categories/浏览器/index.html","c786741061318acdf253f3c1bbca06aa"],["/categories/面试题/index.html","2f1037993e88ff0ddb30188f62decd5c"],["/css/main.css","9c655171f20f27c64055a1f2bdf8d2fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","53c769e4abd749db2d880ba4fdb2fd89"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","5f5cd2a9d86479ee40b6103aedadd842"],["/page/3/index.html","c4b0b72a6bada26671473fe7b4701c81"],["/page/4/index.html","a1918dc3f81ab07d335e5fafeec49ae3"],["/page/5/index.html","f9d641407d810b49fa1b037f0fbb86b7"],["/sw-register.js","a9000e82d0d13a682d29d92ecf1d665b"],["/tags/CSS/index.html","e4cff38f921ca6bac7723afc63f7035d"],["/tags/Git/index.html","a53039239c3275078c232732177cc90f"],["/tags/H5/index.html","ff4b7702440325612db5cd6e241de6ad"],["/tags/HTTP/index.html","0a093d760a6a32384201962f7354cef4"],["/tags/JavaScript/index.html","0596dea078d505360b39ea1dd80d43be"],["/tags/JavaScript/page/2/index.html","25e73985c1af5098a886f46fa5c80d4f"],["/tags/JavaScript/page/3/index.html","6764b5afe8bed95c0c73815a1c01749a"],["/tags/JavaScript/page/4/index.html","96d844e6561a946d8fa64da133b1f39e"],["/tags/Node/index.html","989d0e0cbc9a0cd6c08ffe73dc8097ff"],["/tags/Vue/index.html","fe4ec341ef490755f044f33b27b4db9c"],["/tags/Web/index.html","8c569afdb5f9882863d1efea84436909"],["/tags/Webpack/index.html","0409b048ee79e182a1d9a6550489a7db"],["/tags/hexo/index.html","f2cfcfefb031869dbf4939671b225e9e"],["/tags/index.html","aa0820c2c7a40db8a4f43df191fc8367"],["/tags/nextcloud/index.html","8df2e8f257067e6ecdb7f40b43f7dcef"],["/tags/微信小程序/index.html","7aa9eec6d0df0e6f812b5e6abe6dde52"],["/tags/浏览器/index.html","bda22f4378875e633abf7ab7bc8bf904"],["/tags/面试题/index.html","4190a364799d120f5511cefb231f22a1"]];
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
