/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","4761cae6cdde94f5759bdb65f4684ab4"],["/2019/08/01/Git常用命令/index.html","bd2d154c9e78385c464dbca47206e3d9"],["/2019/08/02/常用正则表达式/index.html","e5b04bd8cdb6cbf0821bf937545324bc"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","c9abb740eecaa11404147bae9ec63ff9"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","048be1f7815104170cfd4812598cd0d1"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","3bcdaa0ce5c50d696507e8f8b18d3060"],["/2019/08/05/阿拉伯数字转中文/index.html","89410c836252ab27144ba3cbf9a98cb2"],["/2019/08/09/Javascript数组工具函数/index.html","2dd3a3fbe93b8ab62cf65acaedc5d626"],["/2019/08/12/CSS一些易忘的常用点/index.html","72be061a79d17d67f46372c2140f7b67"],["/2019/08/13/Javascript-1-DOM/index.html","8194f756834db2f455b0661cb164a0f4"],["/2019/08/15/Javascript-2-script/index.html","b64feeacd1ff362a7119f78ce92a801e"],["/2019/08/20/Javascript-3-数据类型/index.html","cb3950a0e6535500ad081fee4545b98a"],["/2019/08/23/Javascript-4-操作符/index.html","467d166ec581424862cb8bbd5ce29f3e"],["/2019/08/24/Javascript-5-语句/index.html","723c0f8592aff32bb906380177d52c6b"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","3fe5f05380a8e24e884f5d540f5a5f4c"],["/2019/08/30/HTTP响应状态码说明/index.html","efd20b0e392531272505eb594ec054f7"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","e8fb2a3c6fe4902925649f4617c9684e"],["/2019/09/01/Javascript-8-垃圾收集/index.html","1fd05979e4123012d8ac26d0b227242d"],["/2019/09/02/Javascript-9-引用类型-1/index.html","54e5db654f9fa0336ddff13837dd525a"],["/2019/09/10/Javascript-9-引用类型-2/index.html","55a717c1d13c5d23c1a97e0a41ef8697"],["/2019/09/14/Javascript-9-引用类型-3/index.html","dd8300c45b26189bad2796d406c6a081"],["/2019/09/20/Javascript-9-引用类型-4/index.html","474530014430bfd8fafcadbdb6af64d6"],["/2019/09/21/Javascript-9-引用类型-5/index.html","e3b0970cddb9932b6a7b0a017516b12c"],["/2019/09/22/javascript-10-面向对象-1/index.html","cd3fb622608a4277ab04aa55b537cab2"],["/2019/09/25/Javascript-10-面向对象-2/index.html","7643e6273c605f572e5220d842edae7c"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","b00c897271265511c9a510190100ffa6"],["/2019/10/03/Javascript-10-面向对象-3/index.html","4c6b10b00a97b53d0885580f5821cbfb"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","1a9dcb3fb7a523331845ad0b9c5c0f89"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","c4e3f02329514d03cd386f51eb003b65"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","f91676073f58beba27ab3515c0689a3d"],["/2019/10/21/Web安全问题和解决方案/index.html","ee2367dbdd44f73e78f047a1b121a567"],["/2019/10/25/Javascript-12-BOM-1/index.html","b82f6f8b4e146b09feea665629d3f5d3"],["/2019/11/02/Javascript-12-BOM-2/index.html","47bea062e2b3ff04eb122673e197937e"],["/2019/11/03/Javascript-13-客户端检测/index.html","735c7fc44e21dcf9810d0335c44ce768"],["/2019/11/07/Javascript-14-DOM-1/index.html","e01b01987051956336525ce34844cf89"],["/2019/11/18/Javascript-14-DOM-2/index.html","cdee6e6f0d329345a2bef4cfeb8d6257"],["/2019/11/24/Javascript-14-DOM-3/index.html","cc72a8449a70ce822059cb3bd51a451b"],["/2019/11/28/Javascript-14-DOM-4/index.html","96923bf77139bbebab549b46d2a1bbf9"],["/2019/12/04/Javascript-15-DOM-1/index.html","0d1ce02721d9e671d9575985c1058af3"],["/2019/12/05/Javascript-15-DOM-2/index.html","6eb6e6f5f611e6659073287d6568117e"],["/2019/12/15/Javascript-15-DOM-3/index.html","ae436e7803546f30af161f89eb0b1f52"],["/2019/12/20/Javascript-15-DOM-4/index.html","7c798b87980981fc4a7251ae062c2458"],["/2019/12/24/微信小程序常见问题-1/index.html","53b86c9d3e0fe1cf28f628d8dd99cd4e"],["/2019/12/27/Linux下安装node/index.html","6c72af288af6f227e8e649f038d201f4"],["/2019/12/28/JS计算精度丢失问题/index.html","7a5d6778b4fe102f96dcee76083b6014"],["/2020/01/02/前端常见面试题-1/index.html","eb4d51e7b0465ffb4cc9eccf1e71e309"],["/2020/01/05/Javascript数组去重/index.html","34fa4e0599b95ec7c2cc8322578803da"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","6d3b90332398f682f731e20ee3901c5a"],["/2020/01/18/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（一）/index.html","0074435876845e5f0e7d6df0d20da2dd"],["/2020/01/20/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（二）/index.html","6605549979a3de1d7d467711c39a8bf5"],["/2020/01/26/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（三）/index.html","bb2b1957b1f36f79bfe3290262ead40d"],["/2020/01/28/响应式布局的常用解决方案对比-媒体查询、百分比、rem和vw-vh/index.html","2a8e0a7d3e4ffa7b935acce368cfcae4"],["/2020/01/30/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（四）/index.html","f27558a2a27342f08b017db068f8dae4"],["/2020/02/02/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（五）/index.html","1e643f844d4743ab7b4db6168518e78c"],["/2020/02/05/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（六）/index.html","65b56bcfad60bc1ef6de19565784af31"],["/2020/09/18/Webpack上传腾讯云/index.html","5c5cc5bff96b2d6dab7d2e8bc2a5b00b"],["/2020/10/07/Docker简单上手01/index.html","c8ba9c003c48e2328be5f21f154ffa2f"],["/2020/10/08/Docker简单上手02/index.html","b8522785b611be51483fb83eb4824143"],["/2020/10/09/Docker简单上手03/index.html","d4f70e474e7ecca30eac039474341f36"],["/2020/10/09/Hexo写作样式简介/index.html","a448a6e837f333e185d449fe1b14e303"],["/2020/10/13/Express-MongoDB搭建图片分享社区一/index.html","8f5960e6d6b4d0ad66c90c2a7eaf438d"],["/2020/10/14/Express-MongoDB搭建图片分享社区二/index.html","b894fb7912f02c93a795473e6011256e"],["/404.html","c80ae7b00d7862438d0d3269cc1303cd"],["/about/index.html","15a5201be552a37dc7c17f0fb6e6d7c2"],["/archives/2019/07/index.html","426fcd537bab3d3d550fb7a1721388b0"],["/archives/2019/08/index.html","c5d39054953e1b763df5c8c21d449b7d"],["/archives/2019/08/page/2/index.html","d38d7f5d425f28a4a8ee7d5775c4bb97"],["/archives/2019/09/index.html","1a700c154db1d56f69b80c4286709cea"],["/archives/2019/10/index.html","a82d5bb963e1d0febfe9a00891cb0ff2"],["/archives/2019/11/index.html","fdcd40f4bd75ba026d3f75f366eb2eb9"],["/archives/2019/12/index.html","709071ff2ce780137835a7a3eea6f98f"],["/archives/2019/index.html","7a1bbd667c440e72fd88370b245a6413"],["/archives/2019/page/2/index.html","11dc3f0c6d773baa9db90f04e85c2b91"],["/archives/2019/page/3/index.html","1aa13b2fb5e02bb4089770d51ea178fd"],["/archives/2019/page/4/index.html","f4b2a0ac88abe1d4e59d1fd100f39813"],["/archives/2019/page/5/index.html","7a758b03ed64257c7f7a7f8191f65c1c"],["/archives/2020/01/index.html","703ccd0a33060836d7891e51c8184cc2"],["/archives/2020/02/index.html","a79e67ca88bc9f9e4728954dfc138936"],["/archives/2020/09/index.html","cc36b08f8815c5370d433eca27a58a16"],["/archives/2020/10/index.html","e3459d7cff8ba56be5ee4949f00cb16c"],["/archives/2020/index.html","a414d1fcf4b0ed1520c233ee5bf08db4"],["/archives/2020/page/2/index.html","d745cf4beb4fa2ab7c0542b90dcbaeed"],["/archives/index.html","9d4a579d974090a3565a2c55327d52d1"],["/archives/page/2/index.html","daea411c29bf834e2fba153f41c9c3be"],["/archives/page/3/index.html","5e70ecf895cafc20c86e4eca09ab6fcd"],["/archives/page/4/index.html","5887f276b0d081ca96ae2b6d4c811f47"],["/archives/page/5/index.html","2ac0bc835a6888401daafadb72af2d44"],["/archives/page/6/index.html","6748fde711ed9e355a0c8e4a986b4e51"],["/archives/page/7/index.html","a933351b8c933c3589b25fd3cd6231e9"],["/categories/CSS/index.html","301e41ec3bf2c6094f613401bde4c3da"],["/categories/Docker/index.html","64e12768ffd97a6dab41c7bec936b883"],["/categories/Git/index.html","0ffd68ff7dc91cf8a674d71fab964786"],["/categories/H5/index.html","8116011faf80c0212dbec1f43747bd9d"],["/categories/HTTP/index.html","fe585ac722ee23e6d4466818fadb695b"],["/categories/JavaScript/index.html","5ad4e9b399a1791965b3bd407c00c0c8"],["/categories/JavaScript/page/2/index.html","18ae7f05865bd5806fb83a5adb6d726c"],["/categories/JavaScript/page/3/index.html","ee87a5fa6fa36751e688e3e1c5f0cfeb"],["/categories/JavaScript/page/4/index.html","9d923caf1822a9af91f15c0a8c0ea5cb"],["/categories/Node/index.html","c6e618b98a4fb682ed30999d8abf6f5b"],["/categories/Vue/index.html","ad09984934f95aaa708e755633a99a07"],["/categories/Web/index.html","d9af2373c59dcfc286ca43603e114810"],["/categories/Webpack/index.html","6379868f52c6d18711da1aa9710ffd38"],["/categories/hexo/index.html","a2f81dcb36f21b63545c5d1b2878385a"],["/categories/index.html","9d17a3d5162d32bb77103712772acf60"],["/categories/nextcloud/index.html","ff39a97d7f89ff9d21fdbbfdc1d04f1e"],["/categories/微信小程序/index.html","ddb758c55ef46873d44461f5fd258a78"],["/categories/浏览器/index.html","bf14ada7ad35c6071bf4d3760feab54e"],["/categories/面试题/index.html","e3ac51277448121458f85106b84d7cf9"],["/css/main.css","ee69f75771f3c61f76ed236942b4bda0"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","a585e37db015a0b6ff75b88cf4627ccc"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","b469ed43383fda52539f2b6a1e67ce72"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","16e4dc0c91cded298337b1adce16a261"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e2c9e770cf1b4beb7e6bbb819b167fa0"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","74d4508f01a7cf6f9dadec7f33118f49"],["/page/3/index.html","63149443891116d58413a07f1850dd81"],["/page/4/index.html","8a96148d8b696faf4b6ea797e2eff1c8"],["/page/5/index.html","7682d9124cbfe36de9b935bd9ff3d761"],["/page/6/index.html","8d014bbbc2fbd291be04cab4274dc595"],["/page/7/index.html","6e3c34245604cda3643cadd316f2cc6f"],["/sw-register.js","65861ecba5ed9a67da47c835149bbd6e"],["/tags/CSS/index.html","a8b11213167e6299c7c5673087b2cf62"],["/tags/Docker/index.html","5fe576018e994cccc19eac3e039be5e4"],["/tags/Express/index.html","aa7c53d84f7ea08d07390e856b98f95c"],["/tags/Git/index.html","87c2204c129013d827a17a0f6ae5f5a0"],["/tags/H5/index.html","45c792bdaf9bed62b43fad4d59822c95"],["/tags/HTTP/index.html","0689a7cb141304ece0aec917dc9f6b50"],["/tags/JavaScript/index.html","ef1117284cf55594a4001b71cf428d4d"],["/tags/JavaScript/page/2/index.html","accbbb2e7ebd9f86f19f5ae64bc52f92"],["/tags/JavaScript/page/3/index.html","bb84147839d307f84ae352e5488052dc"],["/tags/JavaScript/page/4/index.html","b1a679c37aff3989b612e473ed45c504"],["/tags/MongoDB/index.html","27a3ff7fc7d762c5eadd88122c7092e4"],["/tags/Node/index.html","c89be8eeaca17f60c6191a9e9e662a18"],["/tags/Vue/index.html","9a6feec1b2e2a346a1223740f6d75082"],["/tags/Web/index.html","f456fcfcdeeacc5e62447255d09c3c96"],["/tags/Webpack/index.html","933afe4515dc92f1dfc6668f14962ea0"],["/tags/hexo/index.html","8b9aedb7a2a71906db0be5211655361f"],["/tags/index.html","11562d1145cb1deeaed35bd79a55b778"],["/tags/nextcloud/index.html","351b36c73356145d41d77294e2b56c07"],["/tags/微信小程序/index.html","0b59375cd16bcabfc3176f0b76d1a378"],["/tags/浏览器/index.html","08f606058d4d345b3b59cc15ed238748"],["/tags/面试题/index.html","979c8b18d3ba63d921ee06e2caa5a05a"]];
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
