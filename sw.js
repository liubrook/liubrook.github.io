/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","3c82a05268fdf3d4d6f187360e8404e9"],["/2019/08/01/Git常用命令/index.html","66b86e37a7992ff9ca285f0aee787561"],["/2019/08/02/常用正则表达式/index.html","11e4d1b119db9a3beec0f223a55ed363"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","9297854ab89c690f2468b9a8aea25ad3"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","8af0c5d75e89ff7aedd6e896cc81fe93"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","f146d0c6608e9dfca90845e2cde248b8"],["/2019/08/05/阿拉伯数字转中文/index.html","c6e75e32867d18480f07d50e78ee1d3b"],["/2019/08/09/Javascript数组工具函数/index.html","f69c2db1cac7c3c916e1ab69d70491ca"],["/2019/08/12/CSS一些易忘的常用点/index.html","b305d4113261251f7a5b315853b41468"],["/2019/08/13/Javascript-1-DOM/index.html","fa57413ebdf70e5381a2ea6c3228846e"],["/2019/08/15/Javascript-2-script/index.html","adbadffee617ebf9f0b1bb4112fe7261"],["/2019/08/20/Javascript-3-数据类型/index.html","ef2488a532db82296e74b00095286654"],["/2019/08/23/Javascript-4-操作符/index.html","9a14a974554aa82abefb5e286d68d999"],["/2019/08/24/Javascript-5-语句/index.html","166d63240daf1868ebb5f46682576857"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","28743dd15c6ebfaf9fa08c1e67e368ce"],["/2019/08/30/HTTP响应状态码说明/index.html","572c7008a868c4d2bb3a416472577519"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","448cca581d56358ebd4c044b75f08c66"],["/2019/09/01/Javascript-8-垃圾收集/index.html","81cdb84c22b1c850090761e4d419c832"],["/2019/09/02/Javascript-9-引用类型-1/index.html","addd513b233884ebe483ee3f3648df34"],["/2019/09/10/Javascript-9-引用类型-2/index.html","977484a5d162d2e135fd8d7f42bfeb8d"],["/2019/09/14/Javascript-9-引用类型-3/index.html","e00c382efceed1470e18c1b72c1ae46f"],["/2019/09/20/Javascript-9-引用类型-4/index.html","d1b8ca74f94e2a853bcd2ba077bb534b"],["/2019/09/21/Javascript-9-引用类型-5/index.html","45b9ec64775e8a7e5f7ec1fba528aefe"],["/2019/09/22/javascript-10-面向对象-1/index.html","14e2f4cdc671676fd6d1dc576db06f0f"],["/2019/09/25/Javascript-10-面向对象-2/index.html","8d7573886a29585befdc901e7df34a42"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","a6a53dcd6e7997af8a16f1cd518c8c08"],["/2019/10/03/Javascript-10-面向对象-3/index.html","48fd49ef6c580f0ec07b78569053117b"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","3c8eea2707c94d12c0e9415b4d7d5920"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","11585ef3348e58a371ea00ccaa54ee0b"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","53a4e57e7b63dc5b1581265e75544f9c"],["/2019/10/21/Web安全问题和解决方案/index.html","a40bbb6ed1063e558c95083947267169"],["/2019/10/25/Javascript-12-BOM-1/index.html","980476bc909fc9c531088df0525524d3"],["/2019/11/02/Javascript-12-BOM-2/index.html","6a31357de777524bd89b388bafc64f5f"],["/2019/11/03/Javascript-13-客户端检测/index.html","c46a3f67d8b115b3cb491f6d10c77909"],["/2019/11/07/Javascript-14-DOM-1/index.html","c4da3faaa1b824a3b43e49ab91c48ed0"],["/2019/11/18/Javascript-14-DOM-2/index.html","4bdf17d651e4a67e1ced77793bed7d1c"],["/2019/11/24/Javascript-14-DOM-3/index.html","6009d15871b091a7401b63f1ce602646"],["/2019/11/28/Javascript-14-DOM-4/index.html","107c4c036418eafe22b9f4dd4abb8c28"],["/2019/12/04/Javascript-15-DOM-1/index.html","a242215689a502cb095508e5900d386e"],["/2019/12/05/Javascript-15-DOM-2/index.html","01e15095d586a7f94196f361e4422dd6"],["/2019/12/15/Javascript-15-DOM-3/index.html","edbdebd55c621e2c9217018cdc9bc506"],["/2019/12/20/Javascript-15-DOM-4/index.html","5db42d58ebff25b7b1cd53d442fee449"],["/2019/12/24/微信小程序常见问题-1/index.html","9d8f01c03fd9c9ff93f91f03bff61ca2"],["/2019/12/27/Linux下安装node/index.html","1541775bf722681644228a009f7242ce"],["/2019/12/28/JS计算精度丢失问题/index.html","75f8a7112d80d699c43eff58f7a7532e"],["/2020/01/02/前端常见面试题-1/index.html","40c4c3480d47411021c519dabb4c9e88"],["/2020/01/05/Javascript数组去重/index.html","46601b269d33f61c5c90501c532d6d0e"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","4a1d1ea7bb4c7ab2539eceeaf84253af"],["/2020/01/18/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（一）/index.html","63e9a7e0c4610729ed425e211a703d8e"],["/2020/01/20/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（二）/index.html","950e12c266f3f85da2d048167386000a"],["/2020/01/26/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（三）/index.html","a10881ad4e90c80097e11cd00a5b64b6"],["/2020/01/28/响应式布局的常用解决方案对比-媒体查询、百分比、rem和vw-vh/index.html","bd371e56e12e322ba1eca87ba74fa4ce"],["/2020/01/30/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（四）/index.html","2563175e5059bc60285bc7ad9bfeeaff"],["/2020/02/02/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（五）/index.html","ea1262358428a037c73502428de6507e"],["/2020/02/05/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（六）/index.html","80e765ab76c4dedc2435b104e75ec8f3"],["/2020/06/26/Linux基础教程/index.html","e5fcab15b5796dca026886e9b008028d"],["/2020/09/18/Webpack上传腾讯云/index.html","3be0ffac83c86be9e39b3e04ccc41373"],["/2020/10/07/Docker简单上手01/index.html","323a824c34374729d063ae2451452131"],["/2020/10/08/Docker简单上手02/index.html","afead953701e5c65f5da44bd383e5480"],["/2020/10/09/Docker简单上手03/index.html","eb7ba187193ae29f1e204764c935a925"],["/2020/10/09/Hexo写作样式简介/index.html","bcc46ab7986c35834b26cba7bbe1ba3f"],["/2020/10/13/Express-MongoDB搭建图片分享社区一/index.html","d2304eb67d57b8238b6f587049d94896"],["/2020/10/14/Express-MongoDB搭建图片分享社区二/index.html","9e5fd529cd8109c17ab44368c7e64f3b"],["/2020/12/02/Typora-Vue主题-Gitee图床轻松写文章/index.html","6bacc8415c3b6db9beea32b09acce948"],["/2020/12/03/Docker超详细基础教程/index.html","2ffeef35510dae7372ff8dff38d67c3d"],["/2020/12/03/Nginx基础教程/index.html","963726b8b83d84b3a9936605ae8536f3"],["/404.html","15018747a44f0c776d0e949071fdd840"],["/about/index.html","357fa27c086e17348169be3744fba016"],["/archives/2019/07/index.html","656e23e93dd1d8f277b0f415953a4315"],["/archives/2019/08/index.html","35d94f2f55fb909f59eab9602ef1ec0f"],["/archives/2019/08/page/2/index.html","f6d638782fb12ce6919f0c10d557aafa"],["/archives/2019/09/index.html","9b0c394d1dfefade410adb396a3e098b"],["/archives/2019/10/index.html","1eeb25fc5afee6836d11f21a7eded865"],["/archives/2019/11/index.html","d4c128a4b2ec54180a4fd5b160a5caa6"],["/archives/2019/12/index.html","0d8f7c25b8948b1f597885655685e6dd"],["/archives/2019/index.html","3617ea2d91e97c51197324aa38a28912"],["/archives/2019/page/2/index.html","48fe52e4b702a53740955db023bf3764"],["/archives/2019/page/3/index.html","c15bb1d139d33f9ab135f4f9da5a8a64"],["/archives/2019/page/4/index.html","07df8491b5fbe5f134f89d5c3d32df9e"],["/archives/2019/page/5/index.html","067d81472dad39cc0819082213208284"],["/archives/2020/01/index.html","b140334c37c953951e7ef782f53f7d91"],["/archives/2020/02/index.html","33bead18e29cd919cd392ac6e4c63d6c"],["/archives/2020/06/index.html","d8ab37ef30b2bf0e8fae17ecb587eea2"],["/archives/2020/09/index.html","f06a52b623fdd40c0045fc95d98e7162"],["/archives/2020/10/index.html","f76b6f65ddd4a7be36d0f5e31ed2fe5e"],["/archives/2020/12/index.html","b287a7cfb2b8b6173a699c16ad68513c"],["/archives/2020/index.html","bb49e30a4250309ec2eaf53ca348b1b9"],["/archives/2020/page/2/index.html","a3e130e819e6bb3748a488fafea0e291"],["/archives/2020/page/3/index.html","9ea50c9010c27bd9fa182c6b344db677"],["/archives/index.html","fbda6f82116c5402e3f2ae090c7602c6"],["/archives/page/2/index.html","6614b50ba17febda0b91355840024e90"],["/archives/page/3/index.html","7411fce7e35bd81f8d75f2e0ec341977"],["/archives/page/4/index.html","901daacc67bd5010a5ce0b26432b1c74"],["/archives/page/5/index.html","316aaa22d36e1d9754a897a726003a57"],["/archives/page/6/index.html","6e7b10de7e11ca97e536cfdc504a6ccc"],["/archives/page/7/index.html","0b30caf36a6d9403fbc051f4b24a4c94"],["/categories/CSS/index.html","85917b713ca3f6c89d920a36f9053801"],["/categories/Docker/index.html","82006514e7fcd552faa4b5835a33606b"],["/categories/Git/index.html","35d3a4408f06d94bcaaffa7dcfb72db2"],["/categories/H5/index.html","cc453e03b801043aef27f3e4fdc6b444"],["/categories/HTTP/index.html","40f05985906c101f6bc87b2da17eb7de"],["/categories/JavaScript/index.html","bacb1bcce30f7e862ed20bdeed4e231c"],["/categories/JavaScript/page/2/index.html","38d89fd2fa0fc19e3bc4c89b41225639"],["/categories/JavaScript/page/3/index.html","2eb9a618ca69dbcf2ad689990f591dda"],["/categories/JavaScript/page/4/index.html","cbbcb9aee474a1c21e9203b77f8a93c7"],["/categories/Linux/index.html","2bb3cd7976347aa3fe0d357c7d4cd783"],["/categories/Node/index.html","936d835a1c1ec5e54513fa412a54e46f"],["/categories/Vue/index.html","216c1cd25e2172d73a718e0685a4e8f8"],["/categories/Web/index.html","000ef7178b0d70a0db0de7b5eac80c1e"],["/categories/Webpack/index.html","28e1e37c1a1df94051adc2a5c9f9898a"],["/categories/hexo/index.html","09dda954320a01c3a2ec2682132d20e8"],["/categories/index.html","b4487d6f4ea0a18b71add4ed68a30bba"],["/categories/nextcloud/index.html","037b80cc6a38f6f582595ce8d0283291"],["/categories/工具/index.html","1f4a810301a67dcb30a4568ab5cb82b8"],["/categories/微信小程序/index.html","1e59327aab723992dc04099c10e17dd2"],["/categories/浏览器/index.html","ead0825edb959bf8a40385bbad6f579a"],["/categories/面试题/index.html","49ab6e25056a3596ffe48ed5a12f68e4"],["/css/main.css","f51fa1371018f3146ec58ad000445905"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.png","a585e37db015a0b6ff75b88cf4627ccc"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","bb4d06177ab184edda02fd6630bb0bbd"],["/js/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","7de0afa6e303619cf8f916cc891dfee2"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","7be2b11ff03371fe5f4820a337dc42c0"],["/page/3/index.html","30d96f8f93346c26873852698ce1de7a"],["/page/4/index.html","50acd0502f357ed45ed20a90acc03cd1"],["/page/5/index.html","7fcd9b6a2014ddd9831a7121d280af70"],["/page/6/index.html","39971034c401c0d6b66b586ba7c50495"],["/page/7/index.html","1c20f2042f6d86a82476fc9b41db34f2"],["/sw-register.js","94b97b9694f509e650f7b2c81fbb0113"],["/tags/CSS/index.html","9e7156ad1566426249d341909f8adc0b"],["/tags/Docker/index.html","3058d95d6e17989f06e4ed6b412640b5"],["/tags/Express/index.html","bec954a9e63f8442886c27ddace12d93"],["/tags/Git/index.html","ac820bf31e1eab997b255148222101c8"],["/tags/GitLab/index.html","355bab10128fc137c51c754efce44fdf"],["/tags/Gitee/index.html","f5fba70663b6128a66ff593792b1f013"],["/tags/H5/index.html","5a6cbab3de812be8e9d233421341ed9f"],["/tags/HTTP/index.html","ceae45ef4c3617182edb7962890a2976"],["/tags/JavaScript/index.html","0271eb6dc16502ba9ccf63a2433e7577"],["/tags/JavaScript/page/2/index.html","abf94916dc368a3e53042456405dafb1"],["/tags/JavaScript/page/3/index.html","0e3d4581471b5408000b656ad5aecac1"],["/tags/JavaScript/page/4/index.html","b6d051e91b2efc9d17e5dcea2d9a3d6b"],["/tags/Jenkins/index.html","d716e1ad8a4465c7a04974335dfe5c69"],["/tags/Linux/index.html","4e40bfe974a161e99fd682bea03d61e3"],["/tags/MongoDB/index.html","28fde546472ce34eb104237c0c7ea9ee"],["/tags/Nginx/index.html","8683ff7347f26f19e0a59153f32dbc36"],["/tags/Node/index.html","265d4cccd73c5e90d6ff33a45a6f59d1"],["/tags/Typora/index.html","bcdb7fbf823bd4ea616e8b690badf370"],["/tags/Vue/index.html","543657b645877a429445a7be9888d8b3"],["/tags/Web/index.html","cb5412218f44bfc9a326d9895b64c512"],["/tags/Webpack/index.html","b6202cfe5f4a0a7309e73da040afa95c"],["/tags/hexo/index.html","9c3362b8418970116f057d308f7407e6"],["/tags/index.html","28de19cf522eaf776d23a35f73e0583b"],["/tags/nextcloud/index.html","8e64d0ff5c4f1039d5c14c00f44e930b"],["/tags/微信小程序/index.html","429190638288dc1813d44094a3325eea"],["/tags/浏览器/index.html","a26fc31ca71c8ca044373ee1c7234645"],["/tags/面试题/index.html","dd4f8aac8467d6810e59cbeabe8b5dbe"],["/uploads/1024.png","b14832ba758c6bb757add198ae66cbef"]];
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
