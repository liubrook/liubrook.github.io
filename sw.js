/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","44aaf9ba119bec3c0ea0c96fc926fcda"],["/2019/08/01/Git常用命令/index.html","3e9ed839384392115f363107c9e1007f"],["/2019/08/02/常用正则表达式/index.html","cd2e83e8a7b3e0e28bd78f1ed929a658"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","0957e3e865d4cfe1a88c9da0bc44f8b8"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","c6d3c5bb522a3394712b83680e1ddc3d"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","06cf9148e3d8782279c7d869656b6c26"],["/2019/08/05/阿拉伯数字转中文/index.html","f81a55c3d63e0e6064b73982bbaefa92"],["/2019/08/09/Javascript数组工具函数/index.html","2e2b8cc82abcde11ad0d0147397a6f52"],["/2019/08/12/CSS一些易忘的常用点/index.html","75ba7062469a0fdf612010c924115f28"],["/2019/08/13/Javascript-1-DOM/index.html","89ddc894111072e685c539d3ccf9591f"],["/2019/08/15/Javascript-2-script/index.html","5b40343d543243253a621d01d9adba58"],["/2019/08/20/Javascript-3-数据类型/index.html","6cb5aa28e5230c835a72f46119e02aa2"],["/2019/08/23/Javascript-4-操作符/index.html","82a8f02607f457ff730d1944198dcbce"],["/2019/08/24/Javascript-5-语句/index.html","0c809400327a9a6e65d70e271be4f9f0"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","61cced2f43e1573f37fe8f62384414c6"],["/2019/08/30/HTTP响应状态码说明/index.html","2fe19f1b6f2df9c78405d73e8f5cbcde"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","27512573e0731300707b7510cb1ab6f7"],["/2019/09/01/Javascript-8-垃圾收集/index.html","280996c6a91fa3c25acd4b542af0beb5"],["/2019/09/02/Javascript-9-引用类型-1/index.html","5c5ba66e4179e39bee9cce3313945609"],["/2019/09/10/Javascript-9-引用类型-2/index.html","b031c0403f1b8a39dac2f41b2ffebb77"],["/2019/09/14/Javascript-9-引用类型-3/index.html","360876e4b027003800c4dcfb364c1724"],["/2019/09/20/Javascript-9-引用类型-4/index.html","125733d77b0b84272c77b1480bd240bc"],["/2019/09/21/Javascript-9-引用类型-5/index.html","285cd02cf30dfa89566afe20462b00e1"],["/2019/09/22/javascript-10-面向对象-1/index.html","11c458a280aeaaa5afbed9861c1ae984"],["/2019/09/25/Javascript-10-面向对象-2/index.html","f6b067ffdb277b51d5bd083fab7b0946"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","d125718db82dd45d354c04a9a27f3059"],["/2019/10/03/Javascript-10-面向对象-3/index.html","db8f9757d1be8a8f2796a774027bdc2e"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","540ee18bfecbabf8226440f98482f369"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","4b21a7bd11692b7b7a7fc65c4daa266d"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","a559601f9b7d9b784410da4cd92bd2d0"],["/2019/10/21/Web安全问题和解决方案/index.html","949b84b30873f1f9c413f8401803d550"],["/2019/10/25/Javascript-12-BOM-1/index.html","73e552e6a24e20d2a186a6ed80eba7f6"],["/2019/11/02/Javascript-12-BOM-2/index.html","aa3f8275f0aaa09103063e498e5771d0"],["/2019/11/03/Javascript-13-客户端检测/index.html","42a036a80c0cccdf08254a2f76a179ab"],["/2019/11/07/Javascript-14-DOM-1/index.html","52a33f6e8d4a565376fae60e744c8cba"],["/2019/11/18/Javascript-14-DOM-2/index.html","24618d91f732d4fa201f45184fe93985"],["/2019/11/24/Javascript-14-DOM-3/index.html","be46b7e3eb264e29abad97769a0d1ee7"],["/2019/11/28/Javascript-14-DOM-4/index.html","4d79f5637a1bb26ad889ebebaea649d4"],["/2019/12/04/Javascript-15-DOM-1/index.html","c2ec3f69a8990a7c3f42ca01025144c6"],["/2019/12/05/Javascript-15-DOM-2/index.html","2d77ec9360787cacfddf647bd03de7b2"],["/2019/12/15/Javascript-15-DOM-3/index.html","96c1a778e9f093c1bc16d38fa95fbf66"],["/2019/12/20/Javascript-15-DOM-4/index.html","dc7364f955cbffa6337029498bb6faf5"],["/2019/12/24/微信小程序常见问题-1/index.html","a7b5a3abb04848e7d23b0f61d4bbb18a"],["/2019/12/27/Linux下安装node/index.html","029d152655881bd4e53dcb5a56c7981e"],["/2019/12/28/JS计算精度丢失问题/index.html","790381a119551848e770111407ec1934"],["/2020/01/02/前端常见面试题-1/index.html","a922c6063fc50cec2d236291f6f60629"],["/2020/01/05/Javascript数组去重/index.html","19e27f8018052af725a8bf6ef5b8dc00"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","96f9416bbbf26d9c7cd74ddc98cecd20"],["/2020/01/18/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（一）/index.html","11cb84fb25f6b2bb8b195b2b793a6004"],["/2020/01/20/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（二）/index.html","873fecfa5dcd6867dffd40f36c993f01"],["/2020/01/26/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（三）/index.html","bf2271995d4077437097817c4436efc7"],["/2020/01/28/响应式布局的常用解决方案对比-媒体查询、百分比、rem和vw-vh/index.html","5ebd2bf0f469ab5abdd6175d0d9be6e1"],["/2020/01/30/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（四）/index.html","2e9280f84106ff8105c5891a243f9fb0"],["/2020/02/02/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（五）/index.html","2c2ea01176af265f3768072d7a6a1df6"],["/2020/02/05/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（六）/index.html","4d5526e679581a363e2d3a18bda2805a"],["/2020/06/26/Linux基础教程/index.html","c79f208a4332287d10f3117a231fbda9"],["/2020/09/18/Webpack上传腾讯云/index.html","6d5ca3e533f3646e626983a461c39888"],["/2020/10/07/Docker简单上手01/index.html","3dd15e9518f4706e4956f1aaa4bfac53"],["/2020/10/08/Docker简单上手02/index.html","38ec1e4894c5b4ca83e3cec60b87b800"],["/2020/10/09/Docker简单上手03/index.html","d429e06df895197a3b6a0ec2803e5391"],["/2020/10/09/Hexo写作样式简介/index.html","f0766478a6e80d3ffede5aa418941068"],["/2020/10/13/Express-MongoDB搭建图片分享社区一/index.html","2c65fcb4eb0eb0979f1befb78ef3a8ee"],["/2020/10/14/Express-MongoDB搭建图片分享社区二/index.html","9de5710dd88a0040eabd8bb2a5ec42fd"],["/404.html","15018747a44f0c776d0e949071fdd840"],["/about/index.html","30de3e08ede1312a64e71e4a14e1e426"],["/archives/2019/07/index.html","d9ac0d0982ae95246a7f33d66972d240"],["/archives/2019/08/index.html","29f2d0b6a1559f65b6632e3ff6a899ff"],["/archives/2019/08/page/2/index.html","0114c81fb28030d960323e4d5a23f44a"],["/archives/2019/09/index.html","f2d8bd7cdda9c5cfad672142a0278cb3"],["/archives/2019/10/index.html","0f38aa368b4185c854d78b0d8dd5cf0a"],["/archives/2019/11/index.html","f7cf835f211f0cce48aba2a44066615d"],["/archives/2019/12/index.html","41b54b04ea79c1ec235cb63f33df3ace"],["/archives/2019/index.html","c6cc4987207e0086dc3b8dc78e038ea8"],["/archives/2019/page/2/index.html","a41d114dae3d04690e640004e8cc4a99"],["/archives/2019/page/3/index.html","efbe0406ac36cde279f35fccbd7976de"],["/archives/2019/page/4/index.html","7d31a47babb7e00e5cf84961a54dc9ef"],["/archives/2019/page/5/index.html","17aa805d7eebe54e95cb0e7e9de65386"],["/archives/2020/01/index.html","264eb8cdf8c5f4f8bf5a0eb6e8a4ccae"],["/archives/2020/02/index.html","04b8552cc69a2126d5c86e38593c3e8d"],["/archives/2020/06/index.html","2b8f3d96175695c11e3f4101de825d78"],["/archives/2020/09/index.html","e02966d075850357222e40bb94f6f2e5"],["/archives/2020/10/index.html","207d5adb1b768de354f825d2971c967c"],["/archives/2020/index.html","8d0ac67c061e361f5a8fd0751e20c797"],["/archives/2020/page/2/index.html","965f0e5fbf569a9d4ddf0c80872131f5"],["/archives/index.html","76adc25681612f16a8162f0144bd5a95"],["/archives/page/2/index.html","ad6b5309371e0ead372a3117576bc363"],["/archives/page/3/index.html","ec2c646087130043da036121e7a10a4f"],["/archives/page/4/index.html","308cc2fb0d5b03bcecd509751a04f15e"],["/archives/page/5/index.html","5707e3118f85dbf22be0d796b0a32750"],["/archives/page/6/index.html","d4f6ea9cf39591af0784a4e887226400"],["/archives/page/7/index.html","13569635085c2b60a731b32cbfca9cba"],["/categories/CSS/index.html","ac5f9b7451bff112d6c47922e9e109ca"],["/categories/Docker/index.html","d34815e0db077cf3e3beda91a170aff2"],["/categories/Git/index.html","d720ce72cb9a69c0429a1faf9e64a791"],["/categories/H5/index.html","2c9df0e0e50aa41a12055a14c59ae9b4"],["/categories/HTTP/index.html","3d7f1762a2f19babe9067d13e35e5f93"],["/categories/JavaScript/index.html","d61c58d4937297657b7dfd29598f9439"],["/categories/JavaScript/page/2/index.html","977c958125fb81d1c9b14bc9cef6e98a"],["/categories/JavaScript/page/3/index.html","83e30d3f8c0c3af57e477049179ae799"],["/categories/JavaScript/page/4/index.html","5c5598175c5319e5ed684b5b9410251c"],["/categories/Linux/index.html","2b44450b739103802b22e3ee1674323c"],["/categories/Node/index.html","470929c415d4de518b80e23f9cce30d8"],["/categories/Vue/index.html","6d1f0fd1afb63b5a3f9c163b1f028095"],["/categories/Web/index.html","a5b448f3eef5165609212c00bc8a86f7"],["/categories/Webpack/index.html","34939cdd6d6f5b4a33e9469c7bd7b97b"],["/categories/hexo/index.html","93868bc31f6b16f426c8eb5edc014206"],["/categories/index.html","fc3f2fea7cb611865240515902701ed8"],["/categories/nextcloud/index.html","a915cf0b1d96295aaf5c200e795fecf9"],["/categories/微信小程序/index.html","70d0b3bbd964bebcb0760fe30ad6630c"],["/categories/浏览器/index.html","37f3817758f4ac8abd4790886f42fd9f"],["/categories/面试题/index.html","99ba3f320f22e42a5bdde9e228b0916d"],["/css/main.css","2d729a53d669f665aa9ff0be5bde67dc"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.png","a585e37db015a0b6ff75b88cf4627ccc"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","24b4f828e65ebf9d0e51e0bdeb731654"],["/js/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","7de0afa6e303619cf8f916cc891dfee2"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","f95f3bdad9ea77cf430094f4bf9a95fd"],["/page/3/index.html","b229372e89bbe0ccea316b98eb204d41"],["/page/4/index.html","22097b5f8ab8690f98b7a99673d87252"],["/page/5/index.html","9a8c1cf3c3f676891750d8090fdc110a"],["/page/6/index.html","d643b92796acb0433536ed09ef0547c7"],["/page/7/index.html","0daa847cb24daf811708ea929fc230f4"],["/sw-register.js","ba9c95d6f87f76cdf3a4cff07db6e1e4"],["/tags/CSS/index.html","79c8fc3e5b68ca861f06867468530be4"],["/tags/Docker/index.html","d02c480ed40e34c1810270dd2654ce70"],["/tags/Express/index.html","8c7ee76e8490b932fdbc26ec4d82a153"],["/tags/Git/index.html","53ca40d303979407e6796c3366e57cf9"],["/tags/H5/index.html","2a28d43f856e6d4a9c4bd321d410be44"],["/tags/HTTP/index.html","d6ed56c8bbe58b1dda7860c8f6907a2c"],["/tags/JavaScript/index.html","4d8a7746398ec73ea0464ee31a12a2e0"],["/tags/JavaScript/page/2/index.html","e289c88edde948b7761d5c5f65954c0b"],["/tags/JavaScript/page/3/index.html","3e4d975aa2ab4c0c755790cbd6a41af4"],["/tags/JavaScript/page/4/index.html","ee4d4c96944d5e2f43b8624e57374fe7"],["/tags/Linux/index.html","9a8a22ac9380fd6f4d45b751256ad910"],["/tags/MongoDB/index.html","fc66462b87cc9e6c96e60ce6df1856ad"],["/tags/Node/index.html","35b7a6a136d01bc0f10dca6f561cc9e2"],["/tags/Vue/index.html","6266514001ce4e1781ff791f7124061b"],["/tags/Web/index.html","699a3d06801feb835ef3bdb0c4fb77a6"],["/tags/Webpack/index.html","06e5407a39f38a21f69de604811c06d8"],["/tags/hexo/index.html","8e31c073ddb32454d9636cf009823fb7"],["/tags/index.html","7261b89e35cb5b0786055c3549748769"],["/tags/nextcloud/index.html","39ea7de9026985fa8327f8324a9e3501"],["/tags/微信小程序/index.html","60a79825f9145cb158d6c676e4737d68"],["/tags/浏览器/index.html","dc21f3a2f6ef45c829c37d20419bc219"],["/tags/面试题/index.html","5319ff6065e8fd8ae0c90d469fd2a10b"],["/uploads/1024.png","b14832ba758c6bb757add198ae66cbef"]];
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
