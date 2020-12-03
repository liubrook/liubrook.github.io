/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","7b0e072195145fa7be672a1623617656"],["/2019/08/01/Git常用命令/index.html","dec5abb8789aedcf28f71ae7bb5f0581"],["/2019/08/02/常用正则表达式/index.html","a43457bea20203a1139296841fd0d9b7"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","065bb74f0d6e560065d06ca13a0403f9"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","65b588982eed557bda00727aeb5463e7"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","7c2a7736a85506621d223655da41a858"],["/2019/08/05/阿拉伯数字转中文/index.html","08dcf2fb85da3db5b96ecc867bb977fd"],["/2019/08/09/Javascript数组工具函数/index.html","7823cddf1f5bec15225d9b4031dc5545"],["/2019/08/12/CSS一些易忘的常用点/index.html","1f7ffc11603e197344fb203ad1606e75"],["/2019/08/13/Javascript-1-DOM/index.html","2e2d0ace66e355da35b06b1af9d7246a"],["/2019/08/15/Javascript-2-script/index.html","9c2cb4e6b852f252bd97304eeb07a444"],["/2019/08/20/Javascript-3-数据类型/index.html","d76f76902468d33c7fa65b86b47cb5da"],["/2019/08/23/Javascript-4-操作符/index.html","a31760b1a223136b5c3ed70a0e95e097"],["/2019/08/24/Javascript-5-语句/index.html","7ff74ff0d3d7b07da0bc372207a37b0f"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","4c586daa201248b765ec656a9b39833e"],["/2019/08/30/HTTP响应状态码说明/index.html","d7bfe00a7a01d9d85e9e1d6a093ffb47"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","ac6d4248e7239e1dd2c65946772603f7"],["/2019/09/01/Javascript-8-垃圾收集/index.html","618a6f4b44aa273db9d6c0c37f1cf7eb"],["/2019/09/02/Javascript-9-引用类型-1/index.html","23e52b113503797fe32ffc07c38c6fce"],["/2019/09/10/Javascript-9-引用类型-2/index.html","cae16111f473f9e9d49ca1de20f09eef"],["/2019/09/14/Javascript-9-引用类型-3/index.html","23262f5ed3f29d6663d29ea9a2a1cde8"],["/2019/09/20/Javascript-9-引用类型-4/index.html","ed4769c0f2ba5357e33b203dd999224f"],["/2019/09/21/Javascript-9-引用类型-5/index.html","3762d28e07133a5c5b6422ce1d157f0f"],["/2019/09/22/javascript-10-面向对象-1/index.html","1533ebc80d70ff558e55eee484ffbb3c"],["/2019/09/25/Javascript-10-面向对象-2/index.html","14353595dcb428c6250b67ed7decf8c4"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","b16b8e5a72f450dc97f3e53d10d8807f"],["/2019/10/03/Javascript-10-面向对象-3/index.html","fa0ebf5bb69e5667157fb181940a108e"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","ad1373cd5f9905dc994b36449a9e5756"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","812152c65ed98220d0f1ec650b72efb2"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","283fd9c2a00668c87eb874e9917267e0"],["/2019/10/21/Web安全问题和解决方案/index.html","e4c1f46f7d782d9c628e5ff7b2985594"],["/2019/10/25/Javascript-12-BOM-1/index.html","2659036d921a9345aad1e7f1403d5b49"],["/2019/11/02/Javascript-12-BOM-2/index.html","abb18d050d272653f993656e7b3727fa"],["/2019/11/03/Javascript-13-客户端检测/index.html","51d026100023dea0b8a22fcbf59c1ef7"],["/2019/11/07/Javascript-14-DOM-1/index.html","391071f5c3d72921a7ce1cae2b4bc9fe"],["/2019/11/18/Javascript-14-DOM-2/index.html","cf5e0449fbc5ab9552790671b9d82db2"],["/2019/11/24/Javascript-14-DOM-3/index.html","79663ada6e5315c66fc13535c39249c4"],["/2019/11/28/Javascript-14-DOM-4/index.html","574cca0d875cd5b04109954deacff25b"],["/2019/12/04/Javascript-15-DOM-1/index.html","ffe9518221738bba602867e6a850527c"],["/2019/12/05/Javascript-15-DOM-2/index.html","826c77cc7c6a611850a66a95e95a9b4a"],["/2019/12/15/Javascript-15-DOM-3/index.html","609c628aa95513a1f78b2831a26234ba"],["/2019/12/20/Javascript-15-DOM-4/index.html","4996d07f802e0147c32ad67c1327e316"],["/2019/12/24/微信小程序常见问题-1/index.html","6f67731beed45477c424347f2f048f90"],["/2019/12/27/Linux下安装node/index.html","5b59e3e87cec5c27385add4e16af1e84"],["/2019/12/28/JS计算精度丢失问题/index.html","4294b4e5fee0f8d1a45ec6823ff8fc0f"],["/2020/01/02/前端常见面试题-1/index.html","c87ab9a93f1be773a0c49c3be0dec258"],["/2020/01/05/Javascript数组去重/index.html","151ddea4c10ca1487454ab3c53f92a1c"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","65521f69abd66f717ebbc8279a0b64ee"],["/2020/01/18/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（一）/index.html","aad50a17d15b345042340785e541ebe5"],["/2020/01/20/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（二）/index.html","fa4108e189277d13386d5f0751ed2ef3"],["/2020/01/26/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（三）/index.html","0fc13da9ab97179ec1551ba24662f4d2"],["/2020/01/28/响应式布局的常用解决方案对比-媒体查询、百分比、rem和vw-vh/index.html","bc0c7c9d40713f57c067c67a62cee8da"],["/2020/01/30/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（四）/index.html","da1f1ffc6c6d20e7e989fa9dd2c69ac8"],["/2020/02/02/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（五）/index.html","d1681f138b7357ed163ac27d313dca02"],["/2020/02/05/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（六）/index.html","9c0d257fb1aac90be40a6bcd42dc4659"],["/2020/06/26/Linux基础教程/index.html","a9760172ea68fac32b92c266b524ae27"],["/2020/09/18/Webpack上传腾讯云/index.html","d9af38a7162376b9332a2f63a9e651ad"],["/2020/10/07/Docker简单上手01/index.html","61e0d35fc5d75328ccdafb871a63ce0e"],["/2020/10/08/Docker简单上手02/index.html","92920608fa15badd54f7b695f5844546"],["/2020/10/09/Docker简单上手03/index.html","d91592cead5492688dfb3b7ad817fed2"],["/2020/10/09/Hexo写作样式简介/index.html","5e9071eab57af7c6de9bee8dfcad7b0a"],["/2020/10/13/Express-MongoDB搭建图片分享社区一/index.html","dd24968d9ad42e8b2c39dae53946c034"],["/2020/10/14/Express-MongoDB搭建图片分享社区二/index.html","6e8bb0ec56f1139d60ac698f0806a972"],["/2020/12/02/Typora-Vue主题-Gitee图床轻松写文章/index.html","04dd74d8b71077236bbc098493858fdc"],["/2020/12/03/Docker超详细基础教程/index.html","148d24bc2ebb9032cb998e0a13325b5d"],["/404.html","15018747a44f0c776d0e949071fdd840"],["/about/index.html","40f4c915154416be392ad53929f0c1f8"],["/archives/2019/07/index.html","4d674f9b8ce62ffc612974b872e763cb"],["/archives/2019/08/index.html","a72a770eebd6f9d23d63b765a250b3ec"],["/archives/2019/08/page/2/index.html","71e0c56fda6bc05285f947a0329bb5a8"],["/archives/2019/09/index.html","6229c44afbbd1c46c911c251d4d35ef1"],["/archives/2019/10/index.html","e09425c288e65a66be5c19c911707ed6"],["/archives/2019/11/index.html","4456b1cd051663f2654d19ef69eb087a"],["/archives/2019/12/index.html","c5df4af137a94ad2d71c3f828f55156b"],["/archives/2019/index.html","4b68b8fca02c87903a75e1f2c91cb585"],["/archives/2019/page/2/index.html","0786fd5914e59915ee8f5adda3505577"],["/archives/2019/page/3/index.html","45f99cf6a571198ffdfa55784d749af4"],["/archives/2019/page/4/index.html","664a550b501c6b51e200f6ad33f89a6a"],["/archives/2019/page/5/index.html","787294af36386ad321d8a6a37c0de8b0"],["/archives/2020/01/index.html","5fd18c908f5ff635123142df6300cf6d"],["/archives/2020/02/index.html","5f7a4499a3794fb653f5924d2ad7363a"],["/archives/2020/06/index.html","32adc41b7328621df5755b944118f4e5"],["/archives/2020/09/index.html","3d3c87dc07696d7bb3611dbcebd7ff89"],["/archives/2020/10/index.html","00398a58dc91e4c42e26b3df96ab91dd"],["/archives/2020/12/index.html","3b8133269ef920b834ad6280c1259fe2"],["/archives/2020/index.html","9556b4810668b27327fd1318ba977043"],["/archives/2020/page/2/index.html","2195baa0917baa0608e8e99066336abd"],["/archives/index.html","6fb3d41b4012f102e0b69cfb82aac520"],["/archives/page/2/index.html","2572025f5e697d2bb02b38c1ab1bcdca"],["/archives/page/3/index.html","c41de334058b98559c2a433eec0a9d30"],["/archives/page/4/index.html","c19abb2aaa314d804d173be8f808e0e4"],["/archives/page/5/index.html","1f0eae0433ebb59b4a2645127dd986c8"],["/archives/page/6/index.html","a8c572dcb182b08f6c2dee52faa76985"],["/archives/page/7/index.html","f23b7c5e7013f79562692fd367bb7334"],["/categories/CSS/index.html","6d78064b57aca40283ae096f4217ed9c"],["/categories/Docker/index.html","369346737d125889aefca4b2708e45e5"],["/categories/Git/index.html","a026f3b4e7ba3f9db419dcfb321c01f1"],["/categories/H5/index.html","2aae7724f8ab35be3382236e866131ab"],["/categories/HTTP/index.html","0f028a3a137c11e546307360405eec2c"],["/categories/JavaScript/index.html","e936f6f338d48e02c00334788b72ef7d"],["/categories/JavaScript/page/2/index.html","c34db2ab85fdb78cc687b4ac41d570ba"],["/categories/JavaScript/page/3/index.html","cda8c1ad1ca14700a910c79be9beb48b"],["/categories/JavaScript/page/4/index.html","56c62182d1f724a8a417c56c99771d8e"],["/categories/Linux/index.html","8913234ef1b56f151245018cb4a9d95b"],["/categories/Node/index.html","f2c75f812c7aab2b5b4a07a8d8f9099b"],["/categories/Vue/index.html","91f82d035653a5bf1575656ae7464f36"],["/categories/Web/index.html","abe5037b26c8e8ebd3f880216f1cfd9d"],["/categories/Webpack/index.html","5fd15e8c2fb58ab32f954b327c760171"],["/categories/hexo/index.html","671597cc8b96fd7b9426fa35a24e1c5e"],["/categories/index.html","01b6baac384674751d69fdee4370dd33"],["/categories/nextcloud/index.html","756ba18a12766679a008170fbc752b81"],["/categories/工具/index.html","fa74ca0feaec4152709bb1b7a2d63f34"],["/categories/微信小程序/index.html","bcf0a67b29edbf5fc88e034a4982898f"],["/categories/浏览器/index.html","cde477cddbdeb9bcaa7141f12beca655"],["/categories/面试题/index.html","fa43b913999de927272165f05da31913"],["/css/main.css","ce9f2e2e47739fcbb8fc6c4541f1e216"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.png","a585e37db015a0b6ff75b88cf4627ccc"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","59d0442597816ab82803c24e1f98f849"],["/js/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","7de0afa6e303619cf8f916cc891dfee2"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","ccd0454d8fcdbd0d0391f526c6c2ba47"],["/page/3/index.html","54ac880d16e9303db48f5e7955aaf817"],["/page/4/index.html","75c78058f7fab4007b54ef41cf8e7a1d"],["/page/5/index.html","da18798e8543e9618de563de2229ad2f"],["/page/6/index.html","8290457d158eba3dbf25345c7fb4d3bc"],["/page/7/index.html","9a6110bb2c0ba81041e666d002bf0b41"],["/sw-register.js","9f577bb1d15cd41df566bd2d31ce90f2"],["/tags/CSS/index.html","3e931c0fe53ab06f4558f6283bbcb60d"],["/tags/Docker/index.html","04b9787a0f56af426a0a54cc26fad0d1"],["/tags/Express/index.html","b5f394f39b37efd1f6d5b6a83c626193"],["/tags/Git/index.html","939dfcb0f3b1623bf92109895bc6f9c5"],["/tags/GitLab/index.html","7e1933181b28e1dce511a808a8c5babd"],["/tags/Gitee/index.html","49e1f6cbc6baf28a9509ab14be941427"],["/tags/H5/index.html","0c18a31cbed4d2bf6d8636d5be9a99bb"],["/tags/HTTP/index.html","8b0652a52b1116e8ce23acc5992e47bd"],["/tags/JavaScript/index.html","e37cb1311be3357789c068f107e75a22"],["/tags/JavaScript/page/2/index.html","e1daf2d0cb7c6926b4d93f7f21297718"],["/tags/JavaScript/page/3/index.html","51425da98e26e87b058fd5f2e2178650"],["/tags/JavaScript/page/4/index.html","1fcbf9f968d09b0155ae7209f624ccbd"],["/tags/Jenkins/index.html","c4247c1e0adcb9eb7c24f68948a47f43"],["/tags/Linux/index.html","97043140cf5204c6196c91f691d76e6e"],["/tags/MongoDB/index.html","e860879ac7431892635c3f6b8e314f26"],["/tags/Node/index.html","ba054bc48d233f76f1193cff317ca77c"],["/tags/Typora/index.html","05474c995ee0e26d4378c6bc44309b06"],["/tags/Vue/index.html","1818ec88f1c091330329fcf0b383abb3"],["/tags/Web/index.html","83692f55fc2912506abb7849ea765458"],["/tags/Webpack/index.html","02007dc7652d25888b2a1d34786cc6c7"],["/tags/hexo/index.html","c21a6c3017e8b5585cc0fd376fa7f962"],["/tags/index.html","7b618da6241cb439ca44afaa55f49540"],["/tags/nextcloud/index.html","3ca28cb3f273aa5da1aad6a3a3fa64c3"],["/tags/微信小程序/index.html","27492eb6543037d67dcc98fce14cd9e5"],["/tags/浏览器/index.html","b5d3b8f1ff5495a05e2d761d5ef9c5b2"],["/tags/面试题/index.html","569112522535f505a7e192bf775720b7"],["/uploads/1024.png","b14832ba758c6bb757add198ae66cbef"]];
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
