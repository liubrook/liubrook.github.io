/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","7203594ce18290a027512de91538ad74"],["/2019/08/01/Git常用命令/index.html","6b59f7ec5daa31e84d2cb163fc253354"],["/2019/08/02/常用正则表达式/index.html","2b31bccd523258057b80fef0f5c18575"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","ceaad009eda4ddc2ea43df18c0e8e30e"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","862ac884abc9d2d58a10badda0575e98"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","9051986eb88d6e44a83b076f18a717de"],["/2019/08/05/阿拉伯数字转中文/index.html","a0d2282751caeb7d8ecaf909f496254b"],["/2019/08/09/Javascript数组工具函数/index.html","6ba33cdeb23e7c8aeb9d249e2ef518ce"],["/2019/08/12/CSS一些易忘的常用点/index.html","13533af7a9becbdaed22ddfcbc687cc2"],["/2019/08/13/Javascript-1-DOM/index.html","9078c27b77f606683464e6f895a1df7a"],["/2019/08/15/Javascript-2-script/index.html","c4fca30625302607ee3e453b4188ec86"],["/2019/08/20/Javascript-3-数据类型/index.html","15c32db2ad9443e01c6c2b13b10a1cc2"],["/2019/08/23/Javascript-4-操作符/index.html","2302cefe48d595ff2dd182f4121bd8a9"],["/2019/08/24/Javascript-5-语句/index.html","2c96fb25255ec287f2734734eefadc64"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","dbfaf1bc6b8e4c0e87817220c6af4cfc"],["/2019/08/30/HTTP响应状态码说明/index.html","267b8a1c0b2adc5a61ec766591548622"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","1e996a614a9e84a28228ec94d37e1ce7"],["/2019/09/01/Javascript-8-垃圾收集/index.html","4cb3a3999984bcfefea72009155b54f7"],["/2019/09/02/Javascript-9-引用类型-1/index.html","e084ae1cc454a77f16da33eee031c99e"],["/2019/09/10/Javascript-9-引用类型-2/index.html","1d6cf3aa1aff3f71626c4115481a5d75"],["/2019/09/14/Javascript-9-引用类型-3/index.html","2f0f7360779e5bc1efa314911a3ac3d3"],["/2019/09/20/Javascript-9-引用类型-4/index.html","8f8a07f9960759f87ef277d98fc83ec2"],["/2019/09/21/Javascript-9-引用类型-5/index.html","4c5cc2d98d36074dd093ec1ce78b48d3"],["/2019/09/22/javascript-10-面向对象-1/index.html","4b94d68872b4440a0e55f734a29e3489"],["/2019/09/25/Javascript-10-面向对象-2/index.html","eae7749925069f2f2b9bce7754653eef"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","627183c9e577a04f7b012c4fbb274a89"],["/2019/10/03/Javascript-10-面向对象-3/index.html","a1175aac54d239a6a5ee163c0081f3e6"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","2d704c8be3b5508a3320bf95a56cb144"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","34de5818f12f0e5dcdfa8adf98286474"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","82bc0c914bdd7a51740326673a847b2b"],["/2019/10/21/Web安全问题和解决方案/index.html","813c8a62e786ede6896e8b42a50ee78d"],["/2019/10/25/Javascript-12-BOM-1/index.html","8aaa21a6433019785da47ed8ebebc890"],["/2019/11/02/Javascript-12-BOM-2/index.html","846c60564451248ac2236264e1aeda62"],["/2019/11/03/Javascript-13-客户端检测/index.html","8462955a2a9e8ea836c26f6e101403d9"],["/2019/11/07/Javascript-14-DOM-1/index.html","f05092fa0b20025480281cab724bdff6"],["/2019/11/18/Javascript-14-DOM-2/index.html","fc14be3d2bd352f079ab75de02755a08"],["/2019/11/24/Javascript-14-DOM-3/index.html","2270a7d20d33457a8e02d2c88e845ba5"],["/2019/11/28/Javascript-14-DOM-4/index.html","2d69cc525972d39d537c28b45b36f0c4"],["/2019/12/04/Javascript-15-DOM-1/index.html","fd74c6816f073ea3c2e069cfa6cfa773"],["/2019/12/05/Javascript-15-DOM-2/index.html","1e524c4e76db46daff0f505520b2691b"],["/2019/12/15/Javascript-15-DOM-3/index.html","73a11cb5075103a02f8dcf2874952918"],["/2019/12/20/Javascript-15-DOM-4/index.html","8c012cd71105de29aba90735d1d8b700"],["/2019/12/24/微信小程序常见问题-1/index.html","d8d9d247b673b363f440784d4d65e7e1"],["/2019/12/27/Linux下安装node/index.html","04224a4e11e7bb2a0ff4e9e351a6811e"],["/2019/12/28/JS计算精度丢失问题/index.html","70e63b700c97a91381b38afe65f25913"],["/2020/01/02/前端常见面试题-1/index.html","0d4e0cec2dd8067dd889e68a122469af"],["/2020/01/05/Javascript数组去重/index.html","d53a9126d7d0490ebeceeda55e491168"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","7893b6a11e1ceb55c39215e44deb374c"],["/2020/09/18/Webpack上传腾讯云/index.html","e7de846f3becc320671bf9b01286a83a"],["/2020/10/07/Docker简单上手01/docker-1-2.png","10789c48fc5616cf1770c40779e6f970"],["/2020/10/07/Docker简单上手01/docker-1-3.png","a36b6699e5cb7afcaed583266936dff6"],["/2020/10/07/Docker简单上手01/index.html","6b86f9c6cacac033fae37a495d025a88"],["/404.html","c065467aeba6c5b846ea903363e2182c"],["/about/index.html","a71d3885ff58bff892313f9560cc9773"],["/archives/2019/07/index.html","3712d7bc35e42789c14d6c9f56e5384b"],["/archives/2019/08/index.html","1b70f91fbe1fc1db086d28f56bcbaaf5"],["/archives/2019/08/page/2/index.html","aeec6d44c18017238a3a8264b3365fe1"],["/archives/2019/09/index.html","656edc14c5fd1ccbd808a2d5e8b2878b"],["/archives/2019/10/index.html","1109274162cf0498c8b041a7851c461f"],["/archives/2019/11/index.html","6d55581d52a8f0371d25af9b98f1a4fb"],["/archives/2019/12/index.html","8c05beecf02d16bba318261e11244366"],["/archives/2019/index.html","113d65bbeccc5f8765a92a1f5c262868"],["/archives/2019/page/2/index.html","5f418e63bcad2232fb9d12419a3b8fd8"],["/archives/2019/page/3/index.html","212d668b69e747b6afa2d4a8a9ba6548"],["/archives/2019/page/4/index.html","9c95ef6cb4ba14774fb9984f4c2300f3"],["/archives/2019/page/5/index.html","95d7e720571545ed7f3f7ca311c75940"],["/archives/2020/01/index.html","3f2a24fe59b3984ba788da8c41f237b9"],["/archives/2020/09/index.html","1545abada7feb4d7b77ffe6d797354e4"],["/archives/2020/10/index.html","974ca59521a3d17c851fa4094e60733b"],["/archives/2020/index.html","95be9617802e80db9a115cfa93485440"],["/archives/index.html","6685e58d183eabde519e59c03981d891"],["/archives/page/2/index.html","51d4815d9c56f97ee087a0e8ea0c822f"],["/archives/page/3/index.html","8e5f4634d2795e716f74b74d7d9ad0af"],["/archives/page/4/index.html","e199ae0b284324a7219c3a8f7c0fecb4"],["/archives/page/5/index.html","a005e41ca9c297ad8ae31131b0b11548"],["/categories/CSS/index.html","51acb75e9cbdeafdbb4c27793e58572f"],["/categories/Docker/index.html","b01ff17e74e767c261888ed77e742412"],["/categories/Git/index.html","6a653c3554afded87ba1957e7bd5789d"],["/categories/H5/index.html","0d0cbbe56d1af97567ffbf96d604f553"],["/categories/HTTP/index.html","4e40bc20fbb0278b17f140ba8d8cf420"],["/categories/JavaScript/index.html","5dd4847b3106b5336c00f0b1cf4dcb9d"],["/categories/JavaScript/page/2/index.html","3d31a14d5d2a65821351e8be1ffc4117"],["/categories/JavaScript/page/3/index.html","4ef4abc7403adc947d842f489100fd12"],["/categories/JavaScript/page/4/index.html","82486dacb155b3d0007e6268d4d512d8"],["/categories/Node/index.html","7670f4a806e3f4a778c9df6ad95aa473"],["/categories/Vue/index.html","86992bf4877bb7c824f32f913a70d198"],["/categories/Web/index.html","5c9dcd68cc525853d93201c6d854476f"],["/categories/Webpack/index.html","704c813f670b28b9038d0290c3346328"],["/categories/hexo/index.html","315b90fb0690e3da9b3559fbbcefa08b"],["/categories/index.html","8f86bb954c7a0caae7f377dc798bc062"],["/categories/nextcloud/index.html","2af7fa072d39958b0eff4c7bfeaf233d"],["/categories/微信小程序/index.html","e8d5d983075a45e275383b48c01ad83d"],["/categories/浏览器/index.html","ec37751312988f866045cd3c492ad134"],["/categories/面试题/index.html","344a00b60ea41023cd4fad28fbc6c28d"],["/css/main.css","af70c520b5e62aebbc62e05ef12b8aac"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","1ebd51b6a55b2611ed8cafb684539fb6"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","16e4dc0c91cded298337b1adce16a261"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e2c9e770cf1b4beb7e6bbb819b167fa0"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","694167bac25a3f8e7b0c20b2c4e7e00b"],["/page/3/index.html","4a46bcb413126e975a460f7fe817d9c7"],["/page/4/index.html","a3197fdba060474c9311245247530e74"],["/page/5/index.html","d14c0660f367632f427b66bba6ce92ed"],["/sw-register.js","43907b2f132d61f875c66c61cf20471d"],["/tags/CSS/index.html","bd3fb531184a5f21e2cc063cf56676c0"],["/tags/Docker/index.html","f978c9c47f341e668e85603c42a95d52"],["/tags/Git/index.html","000a57aef941ffd2ab91bea56896eaaf"],["/tags/H5/index.html","8d27b305341bf8918da1b26e8bf616e4"],["/tags/HTTP/index.html","635aea762698223cdb60edb9ec02ac2d"],["/tags/JavaScript/index.html","6bd84bcb61c1ac2f0c960c37af00683c"],["/tags/JavaScript/page/2/index.html","c0da9137b52a807c4ed0604847db4ca9"],["/tags/JavaScript/page/3/index.html","25a5230de92a2ac79d6a2510953b1f80"],["/tags/JavaScript/page/4/index.html","b0c3ff53cea128781ed8203d7f332aba"],["/tags/Node/index.html","159e39eb8b7700aedeeb0511d2d3a25e"],["/tags/Vue/index.html","151c55e00674d9c489faeb737f2fd486"],["/tags/Web/index.html","c584241fd12022b887129cd9e0cd21c4"],["/tags/Webpack/index.html","1b689a579e041925703a0ab3429dd3db"],["/tags/hexo/index.html","38f30a312c057860990c1f3cc5906137"],["/tags/index.html","e7d5f116f923f4dc5c03afefe79a1f79"],["/tags/nextcloud/index.html","f6b2e487dbcfe648b4d5430d596deb62"],["/tags/微信小程序/index.html","cd6ae76d6fe4c303b0a2639145384f0b"],["/tags/浏览器/index.html","8cd1d5ce98967a43e389c38028801154"],["/tags/面试题/index.html","09d6752b260c5e26443b79962ef297be"]];
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
