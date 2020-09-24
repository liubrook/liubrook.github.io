/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","5b0b49239a91de9ea5ec7f5a66a44398"],["/2019/08/01/Git常用命令/index.html","d714f4c5d69f58e628706bac048016c2"],["/2019/08/02/常用正则表达式/index.html","e5f26337bea5b0fa645041ede1966fae"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","5a0fded1db1ea1a6c6225f254c80f960"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","70da72a94f866225a203abd23e101f8e"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","7c7653950739b678feb08971541843a4"],["/2019/08/05/阿拉伯数字转中文/index.html","82e08c38d26dc94ee0b38c5c77bf544c"],["/2019/08/09/Javascript数组工具函数/index.html","539b34a4d27147274e369ab9bfdcae57"],["/2019/08/12/CSS一些易忘的常用点/index.html","f1dcf97c1c63ec24c5a6c898d248f056"],["/2019/08/13/Javascript-1-DOM/index.html","22febe2703ee7f4ed8f01fa2912f9a6f"],["/2019/08/15/Javascript-2-script/index.html","0462636d51e1ac0db377cc8aa2359b32"],["/2019/08/20/Javascript-3-数据类型/index.html","df287a69c8528232cc4b5a214a243ab6"],["/2019/08/23/Javascript-4-操作符/index.html","a785fd3b93efb6d644f908dec70a6205"],["/2019/08/24/Javascript-5-语句/index.html","50224173425a5df03288a3296e68f6c3"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","317034afba528cd1022401cd5e1bdc5e"],["/2019/08/30/HTTP响应状态码说明/index.html","e264d4d332c175b86e80615f51d31441"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","9f6f61032aa6ba40f6fcd8ca3aa24ff6"],["/2019/09/01/Javascript-8-垃圾收集/index.html","f5fc9d1c18305c0c90f0dc1706ec5857"],["/2019/09/02/Javascript-9-引用类型-1/index.html","b26d7ee1de8fab373b712fa3247b38bd"],["/2019/09/10/Javascript-9-引用类型-2/index.html","391912f5d5f095bf6b88535f8272e8d5"],["/2019/09/14/Javascript-9-引用类型-3/index.html","b91284333a132934380e1c2670517ed8"],["/2019/09/20/Javascript-9-引用类型-4/index.html","afdd0068d099bd2136b89f12daefd7ef"],["/2019/09/21/Javascript-9-引用类型-5/index.html","6b74f9ec1b414328f2dd6fa3c2eeb140"],["/2019/09/22/javascript-10-面向对象-1/index.html","3546f77272012f1c9b619f9778d751fd"],["/2019/09/25/Javascript-10-面向对象-2/index.html","b02e170a6e6def18c1b58dec430fc4a6"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","8beb48969f9b00b66810179ea4e4e03f"],["/2019/10/03/Javascript-10-面向对象-3/index.html","11bdd82c1a1366b5fb2bcfe45c917346"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","a440c8b88c4b48766666c987007ff193"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","7b15090bc388e28e12a5e7f17de59d8e"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","6699365630a4297ae4d64ff1e7fffe44"],["/2019/10/21/Web安全问题和解决方案/index.html","bec0f0c3a98604f46e6dbb3a54b9f98d"],["/2019/10/25/Javascript-12-BOM-1/index.html","ba19cc2adde894d702bebed6bf4ff4ea"],["/2019/11/02/Javascript-12-BOM-2/index.html","e2fdc1089d5570149b86026a9080a11a"],["/2019/11/03/Javascript-13-客户端检测/index.html","960128aead53edcbe1b4508851d013da"],["/2019/11/07/Javascript-14-DOM-1/index.html","09ac59ef97f43782820d822f3abece76"],["/2019/11/18/Javascript-14-DOM-2/index.html","29db127202673d6cad232d8644ff7f0b"],["/2019/11/24/Javascript-14-DOM-3/index.html","95f797e18517f23e8001c27ace85f7ac"],["/2019/11/28/Javascript-14-DOM-4/index.html","d2c70dd033db0404da97b3e111bedad4"],["/2019/12/04/Javascript-15-DOM-1/index.html","bd4fbda667b3c0950aad152e01483770"],["/2019/12/05/Javascript-15-DOM-2/index.html","a64c23fe44e8dc5846d7269a1711b576"],["/2019/12/15/Javascript-15-DOM-3/index.html","e637dd9ede154d69a4f2a08ebe97f3ad"],["/2019/12/20/Javascript-15-DOM-4/index.html","ff32d54ede60431141fed7ff25e13288"],["/2019/12/24/微信小程序常见问题-1/index.html","35b9c71f10e1da61d29b6a0e1717c14b"],["/2019/12/27/Linux下安装node/index.html","868f9c5ab6c63d9fccdfe41fd8421e0b"],["/2019/12/28/JS计算精度丢失问题/index.html","a9cc986d2411a9b5850b352603e1665a"],["/2020/01/02/前端常见面试题-1/index.html","f7d0f4c3f935630f19224e76048262ee"],["/2020/01/05/Javascript数组去重/index.html","66d46d60718a7e4aaa0e6a3fd0d45dee"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","6ad20624945c02ef183177e23f49c2ea"],["/2020/09/18/Webpack上传腾讯云/index.html","f8e39c8d1df1734c72752a64f68e0ba5"],["/404.html","c065467aeba6c5b846ea903363e2182c"],["/about/index.html","fa533a17cb6c2b4ad5fbb86aaeef6052"],["/archives/2019/07/index.html","9f3bb90fb00c9338ba97ccc2e296f282"],["/archives/2019/08/index.html","8f7c08af4ae4142b6b6ef70187d2f9d4"],["/archives/2019/08/page/2/index.html","1966fb60ed6552f47f731ccc5872dfb2"],["/archives/2019/09/index.html","40796eb7957a3b905a21e7e5f11fedec"],["/archives/2019/10/index.html","0b38e9c1e50912ae4a6bdfd6c5e251c1"],["/archives/2019/11/index.html","cded158a00ec289be6365dc5fb47316f"],["/archives/2019/12/index.html","b7bb03eef4f93e7d9b3bbef3ce2498b4"],["/archives/2019/index.html","1df403fef3b4c97961c81fc01587ba28"],["/archives/2019/page/2/index.html","c8c3f326d5b00d23a38361291f05ff56"],["/archives/2019/page/3/index.html","6dde02742847f6ec89ec4e49b65c26d3"],["/archives/2019/page/4/index.html","20f94895775b381e34140b3001e50fbe"],["/archives/2019/page/5/index.html","7a181e93857479e3b6136bf88ef6de09"],["/archives/2020/01/index.html","b6e5b70b9bde590f51971f42597eb44e"],["/archives/2020/09/index.html","e4ef7361eb3ea34c7da40277f088099a"],["/archives/2020/index.html","20d2af2830c67acbb7a68c0fc247ee82"],["/archives/index.html","af7e0c9b7c73e69a8cb869b5b60ba21b"],["/archives/page/2/index.html","eb1d8943896f5ef71da34a4d72a9a9eb"],["/archives/page/3/index.html","44e57b7b7de31f0836e08bd82fc4605e"],["/archives/page/4/index.html","e615dab59c77983f63b658e67d5b1957"],["/archives/page/5/index.html","7a9e1be03e5f9e5b090865c2f5e81c7a"],["/categories/CSS/index.html","5535eb7f299c7a7374a07c04591453ee"],["/categories/Git/index.html","4da35185722d2db1e652db657ae384d9"],["/categories/H5/index.html","81736a4d79326a5e982451ab9194d971"],["/categories/HTTP/index.html","c629eb82f1d7702ec1a87996b36d75b5"],["/categories/JavaScript/index.html","7f57a1eaeb611921addab43bd27b5df2"],["/categories/JavaScript/page/2/index.html","f1abc768b35fc8b5b035e2bced42489f"],["/categories/JavaScript/page/3/index.html","967e3f33d4fc2db6a7e4d177536c4a93"],["/categories/JavaScript/page/4/index.html","5d299cea01bd027d3297d274035e959a"],["/categories/Node/index.html","360b236f632af6f6ef49a50bc62862ef"],["/categories/Vue/index.html","a3e613a826b46e9518c8ae29a64eb089"],["/categories/Web/index.html","661342c719202144bf38cd1ccf1366db"],["/categories/Webpack/index.html","31df76edda545e6be700bacaca902eb0"],["/categories/hexo/index.html","e002559001a3c3020b5eac9802b3aaa7"],["/categories/index.html","5caffe63897c5f3c08b7b8b78780eb63"],["/categories/nextcloud/index.html","3cfdd4217f44426df24074ff4c3a2b62"],["/categories/微信小程序/index.html","eb6d88fbad14d27e92c2552905081b63"],["/categories/浏览器/index.html","423ecd423e760f1a41c3bdc858427c14"],["/categories/面试题/index.html","89d492a986eda377b985da798626d42c"],["/css/main.css","478dd759cd32ea7c6d387882f57c3c9d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","0665bc605a412a8c9923528840dddd3d"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","28574e01c89f62c0eac12d8c3d0d80af"],["/page/3/index.html","2a7ca908481b00554c58e4979bae314a"],["/page/4/index.html","f48c8a4dafdb82680495f1f8bec59965"],["/page/5/index.html","0980b698be65be0c3c169ff3431452a0"],["/sw-register.js","a87f34697b3494cda4979c9b8af8b535"],["/tags/CSS/index.html","8a0392654a5a4fa6c7a45778870fc931"],["/tags/Git/index.html","4d17a09e4e01abcd6ed57a7345c1f101"],["/tags/H5/index.html","7d3bd2739f5c56313ff70d7af0698253"],["/tags/HTTP/index.html","418c7a27f2fdd215025c5407610efc8c"],["/tags/JavaScript/index.html","1a2a8753fd353adfeae692a538478898"],["/tags/JavaScript/page/2/index.html","8102484f63ccd0201acb480c32b6f286"],["/tags/JavaScript/page/3/index.html","ca3f1898829d4e1893324c7494805cca"],["/tags/JavaScript/page/4/index.html","45678fb5f98db6839038ac981e7bf253"],["/tags/Node/index.html","4a7f706b72b8b6be4738eed488f0da61"],["/tags/Vue/index.html","34550234d98f95d67af632b81f8de50b"],["/tags/Web/index.html","6197551f9d0ec3483b4e5249092070bb"],["/tags/Webpack/index.html","82a3f01e54d33ad5461acd63e7a3647c"],["/tags/hexo/index.html","47d197cebfd2209c1927b585bfc00064"],["/tags/index.html","0e010842c2f06b666ef4692775a0d1d5"],["/tags/nextcloud/index.html","31da22012b0c0fbb9350604740fdd8e7"],["/tags/微信小程序/index.html","cd44df86ced0ddba26921f45b53428d2"],["/tags/浏览器/index.html","217601a08e64756b7b875ad88c4c8602"],["/tags/面试题/index.html","eff0e767c4793c4d42b9734490649a72"]];
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
