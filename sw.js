/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","fe916d0522719c3ebe38548df06a34bb"],["/2019/08/01/Git常用命令/index.html","5a4bcb6423bdea69653428312181cbe9"],["/2019/08/02/常用正则表达式/index.html","f83e9227d67b28605eeb2eb44e209cf8"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","607c1cf739750d0c8dbb08980603e34d"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","5e01a72436e9a9f6c664c4c1e68e75c1"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","2446c4792c46d187cfe3e40889b352c1"],["/2019/08/05/阿拉伯数字转中文/index.html","e55d97b7fb7f41f0f292c2b10be35c4f"],["/2019/08/09/Javascript数组工具函数/index.html","39b6cb51e3176e976106d6fded4efc2b"],["/2019/08/12/CSS一些易忘的常用点/index.html","5bfe6d6c2f707cbf7a56778d7dbe0a97"],["/2019/08/13/Javascript-1-DOM/index.html","28dec5d0db716ea93feac3a43231ee59"],["/2019/08/15/Javascript-2-script/index.html","a4f8bffbd904d263e7a3df391fb71e16"],["/2019/08/20/Javascript-3-数据类型/index.html","0902d40a359f947e031ad786c1be1bff"],["/2019/08/23/Javascript-4-操作符/index.html","a868a86f46c691e28fd67550cd4ba310"],["/2019/08/24/Javascript-5-语句/index.html","aa6ef5958cbee4caeb24b4b4321131d8"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","b2796966c083d2f3a00de8df119301d6"],["/2019/08/30/HTTP响应状态码说明/index.html","a973d148ded61823667020e2284c74c5"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","0b3496a3f6feac7e1da9fe425afd9975"],["/2019/09/01/Javascript-8-垃圾收集/index.html","27878c033ca4be25640cc3ea928d2365"],["/2019/09/02/Javascript-9-引用类型-1/index.html","f091a076848b9286a938942f274f7e65"],["/2019/09/10/Javascript-9-引用类型-2/index.html","bf889ee7afa6c553fcbca376c7366b47"],["/2019/09/14/Javascript-9-引用类型-3/index.html","7ee8b568c41a20e5997aa933817021f1"],["/2019/09/20/Javascript-9-引用类型-4/index.html","1d857410876c1b22db799562787a664e"],["/2019/09/21/Javascript-9-引用类型-5/index.html","b44e2e1647dea3b80dab9020ccab68ef"],["/2019/09/22/javascript-10-面向对象-1/index.html","4262999bdd3908d638114802414a7d04"],["/2019/09/25/Javascript-10-面向对象-2/index.html","c655674f6528eaad8f3bd2f2727a247c"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","73cd7121093ac9980705609d90935be6"],["/2019/10/03/Javascript-10-面向对象-3/index.html","f7d9fb214892a1447ce304ba840098e4"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","f79575f362914fd91771d76ba6d2fd6a"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","eb0d64e61fd9abeacf86adfe3aa9af58"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","4a083d47dd0c3a4ca9e7918500780df0"],["/2019/10/21/Web安全问题和解决方案/index.html","8dba1ecf246236e793aa19cd5ec34f1c"],["/2019/10/25/Javascript-12-BOM-1/index.html","112c13ff65b99cd3ec9305bd3d64573d"],["/2019/11/02/Javascript-12-BOM-2/index.html","cf0c514bc7381b5ce379aab84b2a2afd"],["/2019/11/03/Javascript-13-客户端检测/index.html","acab63b531fa4838716f20b0e7859dee"],["/2019/11/07/Javascript-14-DOM-1/index.html","785df62b206666ab4d5fa5d1ea5bc680"],["/2019/11/18/Javascript-14-DOM-2/index.html","935252cd314327ecff7ba230975dcbba"],["/2019/11/24/Javascript-14-DOM-3/index.html","801103f60028ff3640be13640d06a81b"],["/2019/11/28/Javascript-14-DOM-4/index.html","d47626c4f7f851e08dad31e997f94992"],["/2019/12/04/Javascript-15-DOM-1/index.html","3dc75c420edd5125d6ce52cc843d8107"],["/2019/12/05/Javascript-15-DOM-2/index.html","962ca20ee97540157477ac14779468a4"],["/2019/12/15/Javascript-15-DOM-3/index.html","90fd9f2f98399f0dd92bdd70319dde5b"],["/2019/12/20/Javascript-15-DOM-4/index.html","1cd14d00e709cbf3f07bf885f44444f2"],["/2019/12/24/微信小程序常见问题-1/index.html","c5cdbf4628f9ed91bb842a10c4f5335f"],["/2019/12/27/Linux下安装node/index.html","dc12e21181ee4bb7a6718f0b5bf82a9d"],["/2019/12/28/JS计算精度丢失问题/index.html","e7817709018660983a2c11eb3e861bfe"],["/2020/01/02/前端常见面试题-1/index.html","0c915f758b6999e0830c5392eb5aae95"],["/2020/01/05/Javascript数组去重/index.html","480fdc1b23ff3debd3d0855e370ef26c"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","322bf3d765d45dbe7e31621d0333d47d"],["/2020/09/18/Webpack上传腾讯云/index.html","3e60f2ed09ea10c0fb5b8b8719982056"],["/2020/10/07/Docker简单上手01/index.html","d96c0cfffeaa1308f9cda11c1ce2fb61"],["/2020/10/08/Docker简单上手02/index.html","ccdf50638b778aa777525d09296c80bc"],["/404.html","bea9515c52296577ec360a786310b45c"],["/about/index.html","38b85341973f52f6d60c51007226d9ee"],["/archives/2019/07/index.html","ca96f65b2ff3609a82669704a7995013"],["/archives/2019/08/index.html","9d62561a853e30aefd79645441f6527a"],["/archives/2019/08/page/2/index.html","fc875a0bbc0ed75c3b65ecb91209b4ae"],["/archives/2019/09/index.html","f6137d3147a7c99384f8a2af4aaec85d"],["/archives/2019/10/index.html","fb6f309518bc4f86dde9d059887d3650"],["/archives/2019/11/index.html","f9b70224da5e1bf990da74a9c037637e"],["/archives/2019/12/index.html","65a4752045aa454be45ba68863d65f5a"],["/archives/2019/index.html","13e75837c45ebc0bec64d2dd7e9dc3ba"],["/archives/2019/page/2/index.html","53016e19af9df290b04c2aececbe7166"],["/archives/2019/page/3/index.html","a548f4e763d3df1728d7bebdbfd182e8"],["/archives/2019/page/4/index.html","0ad24dd51fee3f9dba5347ab974be001"],["/archives/2019/page/5/index.html","1bdd5d670495713acf0e2d3aabd11383"],["/archives/2020/01/index.html","3ac975cd0330ddf5c10fa1dd6c211701"],["/archives/2020/09/index.html","7bafba6c8737c2a8f19e71e5f95fc4ab"],["/archives/2020/10/index.html","14b8572cdd4edaed52a29f2118e0d194"],["/archives/2020/index.html","7f5ab0b2449480b8b21a0aff5f24d23c"],["/archives/index.html","9c47fe53b686ab73655cc973fbf7de03"],["/archives/page/2/index.html","0504d3756f94a550b8adb96fe38627ac"],["/archives/page/3/index.html","94ab58cfc127f14e2f5230e374682581"],["/archives/page/4/index.html","674d48e71188f9b7a3c6ff23dd2c79f1"],["/archives/page/5/index.html","6d730f4f962fd122080cfd279202754a"],["/archives/page/6/index.html","c43f73a11390c8616a35450b240dbca1"],["/categories/CSS/index.html","022e376fbc4ce788ffd79705f3e4ce4d"],["/categories/Docker/index.html","61074e2d60eaf8bed3711b95a45a1fa7"],["/categories/Git/index.html","27e6517d28702dfaeec58cb4570dc05d"],["/categories/H5/index.html","ca8b98355e1fe46c4509ba6ec57e2696"],["/categories/HTTP/index.html","9fe838ae588b918f4a3bd35af1f789f8"],["/categories/JavaScript/index.html","4907acefdf544030ce4e2c780fe4000d"],["/categories/JavaScript/page/2/index.html","50801813fa597669ad89fe138b49b5fe"],["/categories/JavaScript/page/3/index.html","8e980904108c4ea0f8888ada54acbc12"],["/categories/JavaScript/page/4/index.html","23bc875f1863d631a8d5bc1f6ffacdf5"],["/categories/Node/index.html","c2cbfc0699529b520488378dd8b2aa7f"],["/categories/Vue/index.html","6afe99b790e78906f99f7c01e9394c8d"],["/categories/Web/index.html","4969d5ef48d6c0e0cca7d301392b9912"],["/categories/Webpack/index.html","4e63074b1ea5b56ff87be3b70c44e34f"],["/categories/hexo/index.html","f55156828c71e8fdc17bc5c58f280c41"],["/categories/index.html","aca52855b679062f74c5a93346552902"],["/categories/nextcloud/index.html","a0f002a1aa1fa80260662af821863266"],["/categories/微信小程序/index.html","f6fea65b8da293dd1ec43ced5b37363f"],["/categories/浏览器/index.html","149ea63f1f34301e26e7ce81f254156c"],["/categories/面试题/index.html","7002be54f58a2f91942b2314ef126542"],["/css/main.css","c66e2df0117400e55288c9b7f903e56e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","ef4f91d0754980840f55583f3af9027f"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","16e4dc0c91cded298337b1adce16a261"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e2c9e770cf1b4beb7e6bbb819b167fa0"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","a79ea89fb080e7f3ca833f19f3684d5a"],["/page/3/index.html","53f85d7bad74bd845236a5c5a7650545"],["/page/4/index.html","6111b752efa3928d437f452344c74589"],["/page/5/index.html","bcee8e592f3b0d9f31ebff82da8bc8e5"],["/page/6/index.html","06a78f6ead9e3be04019e6031621c719"],["/sw-register.js","79b788e90ca3e4ed668f420ced632f85"],["/tags/CSS/index.html","d18652e1a271cec257731e7e91736227"],["/tags/Docker/index.html","5e497a4ec6f03764715f3714db98fd29"],["/tags/Git/index.html","bd8fffe8c569ad7e738892253a4af257"],["/tags/H5/index.html","e2f1569eeacb6e59f5380d398db5fa8a"],["/tags/HTTP/index.html","0aa32f294067f0d9080f4a641dd88abd"],["/tags/JavaScript/index.html","399f12b84695b224617549f6be6f695f"],["/tags/JavaScript/page/2/index.html","08b6609ebdf79af6dec4d29065d89cab"],["/tags/JavaScript/page/3/index.html","7035d6251382b8abc735b2b5cc2e686c"],["/tags/JavaScript/page/4/index.html","c92511ecb879a2f67abbf16a1f597522"],["/tags/Node/index.html","a42a76e49604641fcc7b1b954751b474"],["/tags/Vue/index.html","b53c09735420f51ae043b73ae6f2bbb3"],["/tags/Web/index.html","51f1809ea122f2b15873e5eb11da9f57"],["/tags/Webpack/index.html","4943b77c99c6078d05de45dc9202dc56"],["/tags/hexo/index.html","d373ebcc47ca961b1cf3166efb7be5a3"],["/tags/index.html","10908248e11c80b53353a7760856b251"],["/tags/nextcloud/index.html","3c1bf610c522daa49f87d123ff0a39df"],["/tags/微信小程序/index.html","7671882198fff24f3c3ba1faecc733b9"],["/tags/浏览器/index.html","84167e87fcf4d50e627ed5cccf754004"],["/tags/面试题/index.html","014b301128e567827a27b9a1226f805e"]];
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
