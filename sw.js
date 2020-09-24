/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","dbb5e8803b4109431c8260d299dd5401"],["/2019/08/01/Git常用命令/index.html","dad3fe3ca32edcfb660349681b2e1ccd"],["/2019/08/02/常用正则表达式/index.html","32c3a09e30df8ab8c259849b3b0498db"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","01f31a739e220f990b23a01abd65491a"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","defc7256c0d48b37a46cb0ae6234b769"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","6fed4acbe0fa2236f6d0b126b99292b6"],["/2019/08/05/阿拉伯数字转中文/index.html","e21a655cd3cbf814e3b93a093e74a35a"],["/2019/08/09/Javascript数组工具函数/index.html","c1bc3245503244d504665aeeaa89af95"],["/2019/08/12/CSS一些易忘的常用点/index.html","fc761b497d3562bac80a00a36266482d"],["/2019/08/13/Javascript-1-DOM/index.html","e70bf2b46074f76641e7dc2c3a4467f6"],["/2019/08/15/Javascript-2-script/index.html","83c1701f18271c4b090a382629d68696"],["/2019/08/20/Javascript-3-数据类型/index.html","670ce1dee9cfc8b1a91040a85ca6f057"],["/2019/08/23/Javascript-4-操作符/index.html","dc794d96620b3079243cfee6d1c27b02"],["/2019/08/24/Javascript-5-语句/index.html","a2936941a39919da62a7b13e22cfa1b9"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","4c1c1a378a4e25008ddc4feff42e9414"],["/2019/08/30/HTTP响应状态码说明/index.html","6a9373e1792ddfd1a6d4e564cc2838ae"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","1a1802dd50cf10a446a359d154c0c9ef"],["/2019/09/01/Javascript-8-垃圾收集/index.html","4e54259bf509c3944f0b49e6407157af"],["/2019/09/02/Javascript-9-引用类型-1/index.html","bcb4217871800b0279724f47695e235f"],["/2019/09/10/Javascript-9-引用类型-2/index.html","f11a15f0af0355af12300b620b100c89"],["/2019/09/14/Javascript-9-引用类型-3/index.html","4a6da65dcd52fe5d0b4a3540183f2239"],["/2019/09/20/Javascript-9-引用类型-4/index.html","360295f02f304f36cf3a84a12cf34a79"],["/2019/09/21/Javascript-9-引用类型-5/index.html","b2002d55a177a8023838ae86311b2e00"],["/2019/09/22/javascript-10-面向对象-1/index.html","25361d8a38e847a912b293590c337536"],["/2019/09/25/Javascript-10-面向对象-2/index.html","85b4d8afcd21e1442cc482d69ce49efa"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","acfe9efbad8fe88c88e272e2b57ed394"],["/2019/10/03/Javascript-10-面向对象-3/index.html","d1d4fd4de2f25942fb4376a58e2c2d0d"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","465d3ca4fde88963a4a9a8c0eb65c337"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","861142df32d2367c6bd4d8596ec8e563"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","ea3dedeb7d2c962750c0138b4b103dc7"],["/2019/10/21/Web安全问题和解决方案/index.html","0112f312d695e7c99fbd2106d3dc8841"],["/2019/10/25/Javascript-12-BOM-1/index.html","2571c67826d4543e9ab3daae0038d7a3"],["/2019/11/02/Javascript-12-BOM-2/index.html","6be4e229b10a9a1fa20f588676967a32"],["/2019/11/03/Javascript-13-客户端检测/index.html","ab07d8290e51a4c27664fbe8755ea83b"],["/2019/11/07/Javascript-14-DOM-1/index.html","4b76fcb3bea0434d6b3239b03bb603ed"],["/2019/11/18/Javascript-14-DOM-2/index.html","14588ca27464fc55b35fbc7d4f8593cd"],["/2019/11/24/Javascript-14-DOM-3/index.html","3d2d029f8cbd3533c66c5fa19a9bc1f2"],["/2019/11/28/Javascript-14-DOM-4/index.html","22e88c379ce11f973b635bf5938b6205"],["/2019/12/04/Javascript-15-DOM-1/index.html","1e16ad37abc110e7bb883b993f889ea5"],["/2019/12/05/Javascript-15-DOM-2/index.html","0c9b0755317ad800a9db11d3332620e1"],["/2019/12/15/Javascript-15-DOM-3/index.html","6776458d0bb37dcf56dfc0dcc7177e79"],["/2019/12/20/Javascript-15-DOM-4/index.html","4de2ce7de07ed486ea9e6f500ab7626d"],["/2019/12/24/微信小程序常见问题-1/index.html","02ee440db436d663927b2e99593bf470"],["/2019/12/27/Linux下安装node/index.html","b0cde2b4932e5f31ad348225b90f2282"],["/2019/12/28/JS计算精度丢失问题/index.html","ec69af5de9a2a021a99093ecbcd3425c"],["/2020/01/02/前端常见面试题-1/index.html","4c0b4a4966369456087ace0a25f50b59"],["/2020/01/05/Javascript数组去重/index.html","6102044363f6367783e4b04088635236"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","e8036b1e7ff1112493205a9ad8a21854"],["/2020/09/18/Webpack上传腾讯云/index.html","a50035728f407b39520ef4032af2ab77"],["/404.html","c065467aeba6c5b846ea903363e2182c"],["/about/index.html","b65e7a01125b1447d71edfa2f22e9113"],["/archives/2019/07/index.html","762210a8a0c1b019ba1603ca0b6e6f8c"],["/archives/2019/08/index.html","0a2dd6588d703cc5ebd74c713062f8bd"],["/archives/2019/08/page/2/index.html","8d1c3b58f2d0c195d2b0809cbd28b2fd"],["/archives/2019/09/index.html","47052cc5cc05f881b1e3deb57303224a"],["/archives/2019/10/index.html","078ae137412d948e2287a9926c4c551a"],["/archives/2019/11/index.html","173717f876040741aa734e19068f8921"],["/archives/2019/12/index.html","bcdd67db1acb32fa1355e06da6a4e07e"],["/archives/2019/index.html","cc1f127cc2538d1f76cb12395b86263d"],["/archives/2019/page/2/index.html","c4dc7605fbdd7a414abf5bd518f97b69"],["/archives/2019/page/3/index.html","526269aab47b7b1d28309744fe7a1364"],["/archives/2019/page/4/index.html","cdd40807036f0b90c022c012472d300b"],["/archives/2019/page/5/index.html","561dde9776ad2b79e4168a1ed2bbec67"],["/archives/2020/01/index.html","a8ece29a7fb4f01f1dede738d1aa0c60"],["/archives/2020/09/index.html","7a244b14d89162e42eae3740d1162318"],["/archives/2020/index.html","db8886d090c7fab4283e026eae2aeabe"],["/archives/index.html","a4977a192a6056b2d2eb63c2a372afa7"],["/archives/page/2/index.html","a9da0225ab23bf97f2f8e9134717a59c"],["/archives/page/3/index.html","e2e10f628b4ad9f9a708a7c559c110d7"],["/archives/page/4/index.html","31691146127555e615842e429b16c8b8"],["/archives/page/5/index.html","53787ee1bab3c4334db141dd0d6b916c"],["/categories/CSS/index.html","fc6040b412eae0e3d55896221890ca35"],["/categories/Git/index.html","c8fb78cd72623b553d4704333b6f86c8"],["/categories/H5/index.html","6500406ad150a958c44230f3e1d03e47"],["/categories/HTTP/index.html","44d44b738ef2359280e996c6489511f6"],["/categories/JavaScript/index.html","b0317b4755af8d77b8fcb14bcb10ec32"],["/categories/JavaScript/page/2/index.html","a71dba9e53d61c3c56c84f009bfbecee"],["/categories/JavaScript/page/3/index.html","88c355b60ec7bf249860f160d725dee9"],["/categories/JavaScript/page/4/index.html","26cedd27ad91017c0e90e912a848cf44"],["/categories/Node/index.html","6f6519765b7bca602b38a66996d48f84"],["/categories/Vue/index.html","c1cdf3b2cf05e28ab43838fc023c66d8"],["/categories/Web/index.html","c2eb9fa721db7ee43cb21fdcee0de4f2"],["/categories/Webpack/index.html","186664a676806f3bba3c3f594e4a1b78"],["/categories/hexo/index.html","9d3dfa4768374a9012886cda2f0cefa6"],["/categories/index.html","f09768b05be294260cf0aaad6032aaf3"],["/categories/nextcloud/index.html","2df765241adca8cf123eaf35c12a96e4"],["/categories/微信小程序/index.html","251aa8dc62018dd3d7c5c8053453f32c"],["/categories/浏览器/index.html","4cc16b3c6fa49e297dad39b75ebab9b8"],["/categories/面试题/index.html","315ec1bf2c2172b6c96351d65eca8c04"],["/css/main.css","50474fe1fcb9f685c4f6fc93aea11851"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","f22de82084b1ddc1b45ae6e4d4826ee4"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","fc62629de32920bb5307592447b2b1a6"],["/page/3/index.html","e71ccea4e232faa150cc11b75a70ac5c"],["/page/4/index.html","c837ff8ef5607f8ed3e54ea6331226e6"],["/page/5/index.html","e7362d185a073930964ca6ed1d2ce4ff"],["/sw-register.js","994d85a9abe16a042afe8c96f00ca51f"],["/tags/CSS/index.html","8e1b303c01d5f387777fefdd6ae720b8"],["/tags/Git/index.html","3c6e062c693a5969eea43c930c8b594a"],["/tags/H5/index.html","c71cdbee825fbb91a5d91e22cbd13c47"],["/tags/HTTP/index.html","3d51b443f29c6da84bd4bb1a9bda1c53"],["/tags/JavaScript/index.html","554ac66a75e8fad3ad2e6abf43acc0b8"],["/tags/JavaScript/page/2/index.html","94a778c575dfcb5aa53443752e7047f2"],["/tags/JavaScript/page/3/index.html","4ff8abf24c7e1403f0d7ca3a34b7286b"],["/tags/JavaScript/page/4/index.html","ed9279cb9a47154a4130efbf0a829e30"],["/tags/Node/index.html","94a2d823db00e6a4ad241b670407aeb7"],["/tags/Vue/index.html","b7641a0b514f6d4ce47141a613f8dda9"],["/tags/Web/index.html","ac313b72bd6131f98b3e88ec2949d11f"],["/tags/Webpack/index.html","18389a656daae690b2c361399586e37f"],["/tags/hexo/index.html","f60b741b4efaf3cedfe41ee570cc5fc3"],["/tags/index.html","d613eca62e45f32bdb582b8a1ec9b10a"],["/tags/nextcloud/index.html","2d9e70d248683111101e86e855730477"],["/tags/微信小程序/index.html","e64e0dd03a861a3e3bdcc16fb8162975"],["/tags/浏览器/index.html","c1ebd5dfc731bba91e2d265fd821db97"],["/tags/面试题/index.html","292607a9e51ee1a47b9cff798c34d064"]];
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
