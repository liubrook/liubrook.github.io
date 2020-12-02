/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","6b8933c76e861bcddfaed5bf6bd4039d"],["/2019/08/01/Git常用命令/index.html","101eee674b7ffb029e0df08ee2da0101"],["/2019/08/02/常用正则表达式/index.html","8a983a2ee50b1762c2fabfac8d0f2e8d"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","d57b70d44a586acfd03b9a609e0cdda1"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","59e83671efc1020264d25314da53e843"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","d0c4cf930c52a8a55aaa36f60fe90917"],["/2019/08/05/阿拉伯数字转中文/index.html","019bb86a50c1cfd3626fc3d6cb710f26"],["/2019/08/09/Javascript数组工具函数/index.html","2e85c3f251072e55ddbfaf29cb08150c"],["/2019/08/12/CSS一些易忘的常用点/index.html","ebff6d0f65bb07932a288220a6cf3884"],["/2019/08/13/Javascript-1-DOM/index.html","16a99b10bd56d1b0e8bfdf2c454242fb"],["/2019/08/15/Javascript-2-script/index.html","63fccdb8c7309956b54725b019e01e48"],["/2019/08/20/Javascript-3-数据类型/index.html","cf404c439627378a0e78cf24e30bbb2d"],["/2019/08/23/Javascript-4-操作符/index.html","05b356c7f455f33c51ad658246098295"],["/2019/08/24/Javascript-5-语句/index.html","69b6d1413f4b11c90d3c5d800de962b0"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","863f8f8f034f84e654e866899912146c"],["/2019/08/30/HTTP响应状态码说明/index.html","aeacf93dc3065926423ab74fa2a6d451"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","c4823fc565415f659cad3789ddf0dc11"],["/2019/09/01/Javascript-8-垃圾收集/index.html","5e9fe878ab4c620e320397f167202d83"],["/2019/09/02/Javascript-9-引用类型-1/index.html","20920cfca515a80cee3d21c306a64e38"],["/2019/09/10/Javascript-9-引用类型-2/index.html","7f460f23a52908754270a819d8cb276d"],["/2019/09/14/Javascript-9-引用类型-3/index.html","8c5526cd9e7a7e75aeddfd1c407e95f6"],["/2019/09/20/Javascript-9-引用类型-4/index.html","47ba7a9bdaed6f691d112f3e9659a489"],["/2019/09/21/Javascript-9-引用类型-5/index.html","c6d78c6c0199191bb769706e19ff6f33"],["/2019/09/22/javascript-10-面向对象-1/index.html","122471df67b8d2f32d2b20c68c01de59"],["/2019/09/25/Javascript-10-面向对象-2/index.html","a9d6eafaaec850a4912bdeb318dd947f"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","14c5cd45f67f1bd4c8298b5bf324d7ef"],["/2019/10/03/Javascript-10-面向对象-3/index.html","a0b1894bd780ab3e45d017d52a31dedd"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","3dfe103792107909194b01f2025b461c"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","545ba5144257e036fc4ef5cd15a82e1e"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","eda29d097c46df378bf0cf9f1dfb71e0"],["/2019/10/21/Web安全问题和解决方案/index.html","a630547137de96a5dc54d38acbbd1fce"],["/2019/10/25/Javascript-12-BOM-1/index.html","b848e5722aa76110a2fdabe5796a0de7"],["/2019/11/02/Javascript-12-BOM-2/index.html","edc01ffe8c32497e5b4046950470005b"],["/2019/11/03/Javascript-13-客户端检测/index.html","63c88a925e16f08690e96ec553d59984"],["/2019/11/07/Javascript-14-DOM-1/index.html","e9e1344c51119f18a24b6e2887fa54aa"],["/2019/11/18/Javascript-14-DOM-2/index.html","b738fbae12a70ee6c65534200cfb8dfd"],["/2019/11/24/Javascript-14-DOM-3/index.html","ebe8ab1d5693b650736e1f7843372003"],["/2019/11/28/Javascript-14-DOM-4/index.html","c970236aceb84458593f910c0a522caa"],["/2019/12/04/Javascript-15-DOM-1/index.html","5cfb8f3041b541ff0f7d9a69c578e39d"],["/2019/12/05/Javascript-15-DOM-2/index.html","486315facd4c0e7471f6d422f3819b46"],["/2019/12/15/Javascript-15-DOM-3/index.html","d4fafbb3bbbdba71812a195b0bb8fd37"],["/2019/12/20/Javascript-15-DOM-4/index.html","4b390a78c00b8ce936a7fbf2779c417e"],["/2019/12/24/微信小程序常见问题-1/index.html","b5b408615be98c9ca0b60b06bd90fe71"],["/2019/12/27/Linux下安装node/index.html","259b693fbe6c15d6914b8f0b961e28c7"],["/2019/12/28/JS计算精度丢失问题/index.html","06525dbbbfba9e85e3ea986d2c18b071"],["/2020/01/02/前端常见面试题-1/index.html","e6ca9fe35a2f2fb2e66fc175d8d1d502"],["/2020/01/05/Javascript数组去重/index.html","11127246cdc5c3446d94055eb0e7e02d"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","fe9bf7c593aad84a950987052a179df9"],["/2020/01/18/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（一）/index.html","f4d661c6d9d1266b51e1c92ed798efcc"],["/2020/01/20/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（二）/index.html","3e3adcba147d5d8e6d209e9ae880caef"],["/2020/01/26/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（三）/index.html","7016816e250e04418fef11bae99ddfaf"],["/2020/01/28/响应式布局的常用解决方案对比-媒体查询、百分比、rem和vw-vh/index.html","4c2752bb0da4b0e884d4aa85af5af3ba"],["/2020/01/30/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（四）/index.html","2398c065950d97be0031440f0d36c5cf"],["/2020/02/02/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（五）/index.html","df25f848145537059e9651ab1510309b"],["/2020/02/05/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（六）/index.html","e1b8a66ea5600c974fc1df4d560904c4"],["/2020/06/26/Linux基础教程/index.html","0f3053a44c36f75b2db0d729cc86ee75"],["/2020/09/18/Webpack上传腾讯云/index.html","ec2d12ccf30aaf751ef04934760821f6"],["/2020/10/07/Docker简单上手01/index.html","e52980615677bb9ae809a29f3a3ac977"],["/2020/10/08/Docker简单上手02/index.html","d51bad9ab99b610779ae0ce5b72d5377"],["/2020/10/09/Docker简单上手03/index.html","d56698e38a296c30b61482a11175fdef"],["/2020/10/09/Hexo写作样式简介/index.html","4a91132bbe21c9459a3e5b34f4ff01d6"],["/2020/10/13/Express-MongoDB搭建图片分享社区一/index.html","daf06ab2764357ccd26634a6927df87a"],["/2020/10/14/Express-MongoDB搭建图片分享社区二/index.html","f751b9bd511298a2807b13dfaafe75ec"],["/2020/12/02/Typora-Vue主题-Gitee图床轻松写文章/index.html","bf2fab8f60c7e3316344a34e4186a818"],["/404.html","15018747a44f0c776d0e949071fdd840"],["/about/index.html","8bb77bc6cf3989d465bec8d878582357"],["/archives/2019/07/index.html","a3051e4445fe6a1391932e59f5fdfbbe"],["/archives/2019/08/index.html","bab53b83a8499c379f3201d4eba8963d"],["/archives/2019/08/page/2/index.html","8dea2e608681ec15901a2fa2b5c62019"],["/archives/2019/09/index.html","b0670680d7ccd61477dab8e0884e3d42"],["/archives/2019/10/index.html","82279d12edf3ead228c1fb77d97eb6f5"],["/archives/2019/11/index.html","312a3b2aa7d385fac72f40eba11fe51f"],["/archives/2019/12/index.html","d13e6bc9043d70db650b50ab75eb7733"],["/archives/2019/index.html","e8d8a933d3e4dd62431d6f33e30b88ed"],["/archives/2019/page/2/index.html","8e536de2fc567e4be8261e31feda8aa1"],["/archives/2019/page/3/index.html","34e655a9ebdbf9af29af05d36e726b23"],["/archives/2019/page/4/index.html","09699ae9685b3b89b9d99c205f5a0c48"],["/archives/2019/page/5/index.html","81c0bbb41a0693ec4f3ab7c6e1dbcb92"],["/archives/2020/01/index.html","a99b66556690fbb2dcce7a2b28a6ccb8"],["/archives/2020/02/index.html","3606f813015fd3aa41a9c64cae7f9bbe"],["/archives/2020/06/index.html","e39c47a5918d52195246860405ecf2b2"],["/archives/2020/09/index.html","757f103ba9738be895ca275ed9cbc617"],["/archives/2020/10/index.html","878ee0fcc5bb4995b91345cafb0e1711"],["/archives/2020/12/index.html","8b3b3cff1ee5ba2d8ec7522dc398e1e7"],["/archives/2020/index.html","6f31d639fb5727e9b97adcff2b5beb35"],["/archives/2020/page/2/index.html","e43f053d7dd077d70aa54cdf24461e24"],["/archives/index.html","7669cd13e6eff7ac6f03b9d692fab05d"],["/archives/page/2/index.html","6b3beef6a475325a4351444c1dbeef10"],["/archives/page/3/index.html","628750ec1f63371cc1e132fd71119a22"],["/archives/page/4/index.html","d1e6946fc0cdc70fbb9f3dbabb0b6bea"],["/archives/page/5/index.html","7b181a6430a95dfc8e329174f91272f0"],["/archives/page/6/index.html","82a150aa75bb86285f479fdd2ba44270"],["/archives/page/7/index.html","820eda897fbf8d4c78aeb008381a127d"],["/categories/CSS/index.html","3cd77341e4caff1136b035d53f064e29"],["/categories/Docker/index.html","8c5cdb3713157e43a166334737d6764d"],["/categories/Git/index.html","bbf0759ced0545d4e8197b0a0d3abcfb"],["/categories/H5/index.html","77115b248917aaa6a7223a8ceaaaa839"],["/categories/HTTP/index.html","5adfa48641067782791ec9b57e938a6d"],["/categories/JavaScript/index.html","9333050a7070e8af5e176c35f1ac72df"],["/categories/JavaScript/page/2/index.html","dad4ac0b9b09be893ca13b2c9004c119"],["/categories/JavaScript/page/3/index.html","99f607f70bae48c56f5d9a3d1c1a0a9f"],["/categories/JavaScript/page/4/index.html","85f30054bf5c567014af43f72b6ae244"],["/categories/Linux/index.html","b91f8d64fbff3111a7c5465d255404d7"],["/categories/Node/index.html","b9c83135c86c099e5b8fa9569d0e49af"],["/categories/Vue/index.html","b8c219774b09931d61029eea0f06e30c"],["/categories/Web/index.html","eb2a5143f55b6985bc24a09c06018e37"],["/categories/Webpack/index.html","d2201b5bf61bcd5095fd3b93e67d8f73"],["/categories/hexo/index.html","5c811c8d3c0103a685bad2daf4348db3"],["/categories/index.html","5eaea294e2491f073be0dc65cfc74021"],["/categories/nextcloud/index.html","77c47d43c1559ae965b2698a181c0252"],["/categories/工具/index.html","9884398f6c70ef750b08121df88da91d"],["/categories/微信小程序/index.html","2adb15263817ecd8f3dee5b26fec612b"],["/categories/浏览器/index.html","e0a21297ce3bf64ab724830eb487f381"],["/categories/面试题/index.html","f7015a353e76b1887b5f31299cab9c25"],["/css/main.css","3251caa1d7d022605829b8c81f8c77f8"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.png","a585e37db015a0b6ff75b88cf4627ccc"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","44e091c638fda1e7069bf576bca48636"],["/js/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","7de0afa6e303619cf8f916cc891dfee2"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","8db0a272000c37fc04fef1fedd5cfc8c"],["/page/3/index.html","c7343a3009fa026e9b1d51b3542c4c30"],["/page/4/index.html","50cc802d5a8d3e5d573419b3506f3c31"],["/page/5/index.html","bfbfd6d4d7da993c758b37ad66d6d8bd"],["/page/6/index.html","725ea754e9c6cb554d227ebf90198110"],["/page/7/index.html","5e6dfa546babdd2406d24e2cdeba576e"],["/sw-register.js","27bc9c4dde2884635508aae84becd322"],["/tags/CSS/index.html","3c5622f97ed78cbb20d5cb0ea03a5bd6"],["/tags/Docker/index.html","fa765d7cac20b5e27221b5da068d08b0"],["/tags/Express/index.html","e8bdffc29f0ce6d7924278baff5a6c0f"],["/tags/Git/index.html","c73b5b072ba28d5f86831d47b17ae0f6"],["/tags/Gitee/index.html","b512a31f4df2c6bfdd64755b31c01b6c"],["/tags/H5/index.html","0d9a50d1e634b151676e0490a2befd9d"],["/tags/HTTP/index.html","1b71d6511fbede897289386864a7c6ee"],["/tags/JavaScript/index.html","ccf0c41b65d3f178d402249042947917"],["/tags/JavaScript/page/2/index.html","08716d42a07b885b8ad9f8b8a94e60ae"],["/tags/JavaScript/page/3/index.html","afa9cd87d6870c514e4957f9509fd5e6"],["/tags/JavaScript/page/4/index.html","bb0f6361fa2d242acf53ff0b1e0f167a"],["/tags/Linux/index.html","56f922f27ef7b44eb6319224ff73fe9d"],["/tags/MongoDB/index.html","c110b57a16d056975152717abc5198ff"],["/tags/Node/index.html","2c1e445b01b897930deb7f2846e57e0b"],["/tags/Typora/index.html","1ae51af421a370069645fa435528e000"],["/tags/Vue/index.html","6c9595f64b1c12fe934b5c1bd6daa871"],["/tags/Web/index.html","741ad096327b701a8522b1de2a9dd98d"],["/tags/Webpack/index.html","d41a7d9758ed1b00d0a0222137d4c404"],["/tags/hexo/index.html","66cd8261893c9484fabdea350e1ff38d"],["/tags/index.html","76d42a65b2019bd6daa5ef1200ddd2a3"],["/tags/nextcloud/index.html","10166feb48cc8b689fb9329622384d38"],["/tags/微信小程序/index.html","3ae62d5ee35a803118e103994e13cb4f"],["/tags/浏览器/index.html","9d3eabcc9fd7a15acdc0c18b2d136505"],["/tags/面试题/index.html","53668af2b55c86c5468346dfd6e98158"],["/uploads/1024.png","b14832ba758c6bb757add198ae66cbef"]];
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
