/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","53d253dba6725bce9d398a425ba87a53"],["/2019/08/01/Git常用命令/index.html","17903b89bfc129f2c8004577ccffe12c"],["/2019/08/02/常用正则表达式/index.html","6199889eeb947f6e06d7e0ab72e9cb88"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","981ac57152fb5084a77089a1577aa7a6"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","966c22878992a512810bf5fe94128b4a"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","8434af1e0df945960fd8c8540bfb1a2b"],["/2019/08/05/阿拉伯数字转中文/index.html","405e85fcb46a5667322b90756249f8d3"],["/2019/08/09/Javascript数组工具函数/index.html","b755224bb14f48b1afa9dc60131b6254"],["/2019/08/12/CSS一些易忘的常用点/index.html","ae1167bfd7c4476ac56cbab72a8e1e34"],["/2019/08/13/Javascript-1-DOM/index.html","f901a1b722f124f22e08fa3fe155b48a"],["/2019/08/15/Javascript-2-script/index.html","f53cb4057bca89ba2fe9cdbd5053d704"],["/2019/08/20/Javascript-3-数据类型/index.html","d7629a6b93d7c59b39c7a6661f80e01a"],["/2019/08/23/Javascript-4-操作符/index.html","c4e3725e69348571ee29d1274abe8ecd"],["/2019/08/24/Javascript-5-语句/index.html","f48494e37e009d635f22915ff7a21d2a"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","dfc286b4e841543a351c8d7c1d1bb07b"],["/2019/08/30/HTTP响应状态码说明/index.html","0b753bd2507575ef956c44f02dee7afb"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","e96cf82818266786378a5c6d886fb180"],["/2019/09/01/Javascript-8-垃圾收集/index.html","b18ce1361de1bc6ffff536607d2cf92d"],["/2019/09/02/Javascript-9-引用类型-1/index.html","2ada70ffaacc0961f79259298aa36020"],["/2019/09/10/Javascript-9-引用类型-2/index.html","f102db2b19866d3910bc45573173423f"],["/2019/09/14/Javascript-9-引用类型-3/index.html","3f782b273081406d3bcd9225c35ed9a1"],["/2019/09/20/Javascript-9-引用类型-4/index.html","9c2b9bf30733169c1e1349fbdaca894b"],["/2019/09/21/Javascript-9-引用类型-5/index.html","dfc4544e85103092640635af5d6c6380"],["/2019/09/22/javascript-10-面向对象-1/index.html","246a3fdc0640c4476ebde5d56270f06d"],["/2019/09/25/Javascript-10-面向对象-2/index.html","b10fd612890fde5cf56d2dd3d90a1de0"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","78ac49ee0e09ecb6334372692c041406"],["/2019/10/03/Javascript-10-面向对象-3/index.html","b18f8dd9c6ab608f9efbc107b028c25c"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","f5a2e1668a5a808ecb14992347696b5c"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","6595936209bbcdf932b2c3bc4874392d"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","e0a07f781bd8817e07de054bb4977af3"],["/2019/10/21/Web安全问题和解决方案/index.html","f496ac871a97e0b79c5dfaaacdebec93"],["/2019/10/25/Javascript-12-BOM-1/index.html","0cc2813d545730f6f6f2faa0013a64c8"],["/2019/11/02/Javascript-12-BOM-2/index.html","791703b348e9e13a0b2c8702d83b7f81"],["/2019/11/03/Javascript-13-客户端检测/index.html","0ebdca83bbceab32eecf31fa663f45ed"],["/2019/11/07/Javascript-14-DOM-1/index.html","fbd2b58fc462970671fd702c4a5d1eb8"],["/2019/11/18/Javascript-14-DOM-2/index.html","d60950d1c9881401781193fa110bce08"],["/2019/11/24/Javascript-14-DOM-3/index.html","08682fb4b26226aa80309911424075d1"],["/2019/11/28/Javascript-14-DOM-4/index.html","2e3b4e221b45069d3ecc6dd8fe4333e7"],["/2019/12/04/Javascript-15-DOM-1/index.html","93ad96e8a43f3c2beaedccdf9fa33778"],["/2019/12/05/Javascript-15-DOM-2/index.html","313f71f61d0a3cd1b80e43df82ce38c3"],["/2019/12/15/Javascript-15-DOM-3/index.html","d1b4838629b8cd3d9b6cde911360e32d"],["/2019/12/20/Javascript-15-DOM-4/index.html","a7c7d0fb7e643799def9c03c8c839621"],["/2019/12/24/微信小程序常见问题-1/index.html","4ee32aaf9bc634a6babe89396e747d70"],["/2019/12/27/Linux下安装node/index.html","02261b62a6678f4224e7373197b315c8"],["/2019/12/28/JS计算精度丢失问题/index.html","b06deae2099d1f0e528aa48222455208"],["/2020/01/02/前端常见面试题-1/index.html","b45898f5036ff3f8c3fdcce5717b3205"],["/2020/01/05/Javascript数组去重/index.html","cd7811c26b2b726e6a9ebb082876c30f"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","509686f941f10f5f7d5be9b31e1f2173"],["/2020/09/18/Webpack上传腾讯云/index.html","5bfa06169f6592d129821747aeb3b190"],["/2020/10/07/Docker简单上手01/docker-1-2.png","10789c48fc5616cf1770c40779e6f970"],["/2020/10/07/Docker简单上手01/docker-1-3.png","a36b6699e5cb7afcaed583266936dff6"],["/2020/10/07/Docker简单上手01/index.html","1ae834f395a7c0944d61207b52c400a3"],["/404.html","c065467aeba6c5b846ea903363e2182c"],["/about/index.html","6e008739b770f40257fed898e9736b8f"],["/archives/2019/07/index.html","6b75efd0bc6d508f262f6acd895c7292"],["/archives/2019/08/index.html","ac699376c6430688fb4d97d586cf2a8f"],["/archives/2019/08/page/2/index.html","414735a9a9e44d7e2d10a31e9d9d8570"],["/archives/2019/09/index.html","fc98d0e424381191b56905621bc3f4fc"],["/archives/2019/10/index.html","449418f074a6eb94e65de582e6c4c64c"],["/archives/2019/11/index.html","6c431042eda4932bffe930bdd087f210"],["/archives/2019/12/index.html","554b5953d90d4fec05ab5f16d730db56"],["/archives/2019/index.html","0f91cf614c388465e2f2a91b471be776"],["/archives/2019/page/2/index.html","1296ed27fd7bb86eaad5df73297a0d43"],["/archives/2019/page/3/index.html","1081f44a700f255b41a2e3733f503261"],["/archives/2019/page/4/index.html","ca164789a0b154e22769dde1681bbf27"],["/archives/2019/page/5/index.html","88b14bc34a741796389142ec7f719c65"],["/archives/2020/01/index.html","502acdd997b165855993749ad94a9457"],["/archives/2020/09/index.html","05f98bea666dd5e42fb1b9d6c98f27ff"],["/archives/2020/10/index.html","9067fdd4e5a273239bf2bce4ff5aee28"],["/archives/2020/index.html","ed03ed45cdc9c71ea73ef7906e01707e"],["/archives/index.html","76ff1636d6f1c5a28dc361f90a1fb40f"],["/archives/page/2/index.html","a5ce219e2b8ef8ed9c308ac77d30d75a"],["/archives/page/3/index.html","1d5bf58f66af25fa53553ee6c8d44d6f"],["/archives/page/4/index.html","6544069ca1f99f23b3906efd96137cdd"],["/archives/page/5/index.html","5f55659506913bb6d368b1d556fdaa83"],["/categories/CSS/index.html","e229037b2e34adbc21c1f923c08744fa"],["/categories/Docker/index.html","f4dcd9185ffc820b668a254e45db54cf"],["/categories/Git/index.html","05003110a57a481e4ec3b26cc665e93c"],["/categories/H5/index.html","884c69051cac81566be83afd664a11da"],["/categories/HTTP/index.html","523e09651e20e32a663408e79ba2faf0"],["/categories/JavaScript/index.html","30fa737a4be32a8e2db9d36c2e92c134"],["/categories/JavaScript/page/2/index.html","13479fed3b7997565a87f88f3ed986a0"],["/categories/JavaScript/page/3/index.html","0af7230f02657dd5f0568e79281f0728"],["/categories/JavaScript/page/4/index.html","1adbfdea34c9ef6d5eed6b10b8ccd488"],["/categories/Node/index.html","f822924dfbb45d671f40291000a13920"],["/categories/Vue/index.html","1d201db585648d465e3fd3d3d5491e78"],["/categories/Web/index.html","be4de005f263783bac83737848fcbdfe"],["/categories/Webpack/index.html","0a6f2dca5abf5920cbb2d74a6b7f8f7b"],["/categories/hexo/index.html","ab8fbb2beb60e7723ebf76091303fc33"],["/categories/index.html","e7930b35297510b159397e2abae0414c"],["/categories/nextcloud/index.html","3d7ae68e51c51a059a9ec5ca9781e35a"],["/categories/微信小程序/index.html","b5e1cf326f8a29d2742767780c13f794"],["/categories/浏览器/index.html","1c66bf1d5a17329bb30857523506cc30"],["/categories/面试题/index.html","105c029c990d3434c478c2d83380e440"],["/css/main.css","fd7681cbafa195245c6a2aef5f7fda2e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","8caac3f4d4ee230dfc13c1aacb2e7523"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","16e4dc0c91cded298337b1adce16a261"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e2c9e770cf1b4beb7e6bbb819b167fa0"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","c7524cb654496007c3f7a39b0b8eb2ea"],["/page/3/index.html","689ec6b8cd5e4aea43bb0accb4866c3f"],["/page/4/index.html","e6c9596d06ac404ecffe30031d5d9874"],["/page/5/index.html","05f5927a1ed9a0a014767fe0d1a52cab"],["/sw-register.js","519a390b6c5c901d0e85152e46cc8d58"],["/tags/CSS/index.html","797f8d92bc107ec105070c4c110dc1bb"],["/tags/Docker/index.html","385745fd109b25616a93a5c23c7df2c8"],["/tags/Git/index.html","625ea47a0097328f767decf67320b513"],["/tags/H5/index.html","1a6073729236e9d9fd490fb028b18d6d"],["/tags/HTTP/index.html","b333e351d13e0e9b0ea99cae706620f9"],["/tags/JavaScript/index.html","3906be36bff13d97e7afb9a5a2918242"],["/tags/JavaScript/page/2/index.html","5d8335031431f342b15aeb87e1ff40e3"],["/tags/JavaScript/page/3/index.html","36bc6e41bb9ad6791f853580264c359f"],["/tags/JavaScript/page/4/index.html","65e014418d985622d99af3b5d84b83b9"],["/tags/Node/index.html","4b9f721dca69df385ed14ff90e643b87"],["/tags/Vue/index.html","3a8f0e1882d8b355c22a9d1210957403"],["/tags/Web/index.html","b5f9a0808f25ce1c0b2197ed0b42b715"],["/tags/Webpack/index.html","c116daa51aaf0b4468f49716b121df57"],["/tags/hexo/index.html","d9a8d8ee0822278e6b1915312d18b2ec"],["/tags/index.html","61e3b82c1707d6bd81d7f43d07a681e7"],["/tags/nextcloud/index.html","decf360eab6eb66c1ec303d554ca4081"],["/tags/微信小程序/index.html","fbaf228e21a47c765cf5bfe9a8c22f87"],["/tags/浏览器/index.html","2a9e82dfb1308d45b7a3711eff5084a8"],["/tags/面试题/index.html","b68109f5a40a4b1d36b1313b3aaa550a"]];
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
