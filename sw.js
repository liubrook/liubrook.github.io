/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","6697001453214e2479de4cd7c1aa9f7b"],["/2019/08/01/Git常用命令/index.html","08e9e1db1f841e6549622b398e0c3979"],["/2019/08/02/常用正则表达式/index.html","125152649118f10f8e16bd348f9b34bc"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","2de1f5a1e866ce3ecb300e56040d8b4e"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","701bf2099c530f04d6d3646443aa0ee4"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","32e97d448dbfce2e65132aced3da3474"],["/2019/08/05/阿拉伯数字转中文/index.html","90015faa2393ae7705f6c055ee8886ac"],["/2019/08/09/Javascript数组工具函数/index.html","5cf102ff62bb0a2fc83022f56a2babd3"],["/2019/08/12/CSS一些易忘的常用点/index.html","dbdcfebc353de9b9b363606579f050fe"],["/2019/08/13/Javascript-1-DOM/index.html","50394a6d21ac1a0ef7c2641f8a446fee"],["/2019/08/15/Javascript-2-script/index.html","b69a7997d8553ebb17cdf8c2a0bf34be"],["/2019/08/20/Javascript-3-数据类型/index.html","35d5b3c22dbada18bc5c66cd88321f7a"],["/2019/08/23/Javascript-4-操作符/index.html","51cb224ed04892faf2784fe2d29c7ea1"],["/2019/08/24/Javascript-5-语句/index.html","41d32d14bf889078285b0f2c40a638dd"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","28e952c9bc2ebbb28c7b5553d0d3d560"],["/2019/08/30/HTTP响应状态码说明/index.html","f3b1e331cfe46ff91ae944ea2d041037"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","ee2cd6e10b6a3ca451bcc1e7fd8ad2e3"],["/2019/09/01/Javascript-8-垃圾收集/index.html","8b0d7734eec2f2469cf217f826787774"],["/2019/09/02/Javascript-9-引用类型-1/index.html","9bd11bab8ec4b194a32fa3fedd540891"],["/2019/09/10/Javascript-9-引用类型-2/index.html","106bb3d8a4aa8a4af287ff7e15aebbba"],["/2019/09/14/Javascript-9-引用类型-3/index.html","2d3673b40512526362d0b957e8a1c965"],["/2019/09/20/Javascript-9-引用类型-4/index.html","36e41d3ac1d6ef458680165146897e19"],["/2019/09/21/Javascript-9-引用类型-5/index.html","82df4fad616777ccd19c9aa49416e8f9"],["/2019/09/22/javascript-10-面向对象-1/index.html","9b1d16b019769db1028a2326861d82d4"],["/2019/09/25/Javascript-10-面向对象-2/index.html","e1b27bff83c092c4238dd553e2485b47"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","c8a48991b0295508c5ccf53b24e81aa8"],["/2019/10/03/Javascript-10-面向对象-3/index.html","ad48dab4d002de2659936d7674fad313"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","e3ecadcb93a21311aeeaa5f56ade8ca7"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","6142ee53846cb3f200220051fce06ee2"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","9171340499d735746c4e308d1e135418"],["/2019/10/21/Web安全问题和解决方案/index.html","b7952a14f583d1e80078aa01953e42b5"],["/2019/10/25/Javascript-12-BOM-1/index.html","853a89f99430e22c206f0bf9fbd58abb"],["/2019/11/02/Javascript-12-BOM-2/index.html","4dac59c3564fb6ec486ff2bc4c0b1b40"],["/2019/11/03/Javascript-13-客户端检测/index.html","b8b2bbc21f9079d8dfebf54beb29d7f9"],["/2019/11/07/Javascript-14-DOM-1/index.html","97b3fab4a26c74350e7a4538c4c5dae9"],["/2019/11/18/Javascript-14-DOM-2/index.html","88f4a590f1eae2ac13502051db5a730d"],["/2019/11/24/Javascript-14-DOM-3/index.html","839a3fbb5aff40e6b00befdb04ef4e18"],["/2019/11/28/Javascript-14-DOM-4/index.html","225425ff200ef098a6d8d6381d432c7d"],["/2019/12/04/Javascript-15-DOM-1/index.html","5d02a742ae9181de47dd9815deccdab4"],["/2019/12/05/Javascript-15-DOM-2/index.html","44e7c6b346c2319e0c519517537826d1"],["/2019/12/15/Javascript-15-DOM-3/index.html","03408dad708328cb072aed1cf605ef8f"],["/2019/12/20/Javascript-15-DOM-4/index.html","9d0f2ff7e230eb2aa57f09e305f04bfe"],["/2019/12/24/微信小程序常见问题-1/index.html","0c5c9f19b27fcfb2b13d04a16ec74664"],["/2019/12/27/Linux下安装node/index.html","caab32e21cab71435467da8b49deb4f2"],["/2019/12/28/JS计算精度丢失问题/index.html","037d3c54e2438a5168ebbda50880d903"],["/2020/01/02/前端常见面试题-1/index.html","a22fae49807d22c4e3b02352a61d5eb4"],["/2020/01/05/Javascript数组去重/index.html","590a88389f514e4bf97e3d008e217905"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","e37ad98aa69d67b4d8556e93a4496909"],["/2020/09/18/Webpack上传腾讯云/index.html","7b96bacbc5df601e0ee3e8433b2e81b8"],["/2020/10/07/Docker简单上手01/index.html","945bbe4290119897611a9c65905c9d96"],["/2020/10/08/Docker简单上手02/index.html","a21434297dc4e90a0f2bac4ef94034ab"],["/2020/10/09/Docker简单上手03/index.html","69f6269d8827cb4754eed2f4af05f56a"],["/2020/10/09/Hexo写作样式简介/index.html","92b9f23c8c52f1403bc3a7fcc83b3096"],["/2020/10/13/Express-MongoDB搭建图片分享社区一/index.html","b71ccc84ade8a672b19b595d831f43dc"],["/404.html","bea9515c52296577ec360a786310b45c"],["/about/index.html","c65d88b8debaa4e9ee266923f10d96aa"],["/archives/2019/07/index.html","0ead304f3186ee47e93b9faee0455ecd"],["/archives/2019/08/index.html","8954c2e9f396e77e541fff9beff48067"],["/archives/2019/08/page/2/index.html","df07c9a0cf33a76a3647db615279fae9"],["/archives/2019/09/index.html","d363c256d10adab6fa9910ce1b8578ea"],["/archives/2019/10/index.html","a41becb90ab8de9f8e79cc8506e0a667"],["/archives/2019/11/index.html","eb914c1b90a076c9e8529ff0cbb9eb5f"],["/archives/2019/12/index.html","a3f98f06cecc24dc6c41fee568b5bf8f"],["/archives/2019/index.html","b17dd3f3a56bf6e2ab8ae1dd7d35fdd2"],["/archives/2019/page/2/index.html","d4dce7012d3986d5db6c802cd04b0209"],["/archives/2019/page/3/index.html","91b2b31e3cd3bd23a3e0fd31dc410f3d"],["/archives/2019/page/4/index.html","df81dd47a5eee9f58536ee9201176111"],["/archives/2019/page/5/index.html","504ec293307ce3a018b3a07c4441c691"],["/archives/2020/01/index.html","17dca88d5803a50f00e119ad1e5c2e89"],["/archives/2020/09/index.html","a0475a255ddff67dd62ecb4693cd1a5e"],["/archives/2020/10/index.html","44c5545b41b4b91ad8870a1438b2a3a0"],["/archives/2020/index.html","256c2ce8809f4a211bfaf499ffa6a674"],["/archives/index.html","adf6b5e32630e0b13f85965b4569917a"],["/archives/page/2/index.html","ab89179a053edb7e1315ca9d585c2fac"],["/archives/page/3/index.html","acc2b95633fdff473c4cb68309a3dbe4"],["/archives/page/4/index.html","41d74208c9e272d2f99b2fb49f24ffd0"],["/archives/page/5/index.html","db074932b8ac49dbe6eeff312bfed035"],["/archives/page/6/index.html","604b6c56fcd4a901e6734e085352b5ef"],["/categories/CSS/index.html","039ddd3783f8dfc3bd60991b5bed6269"],["/categories/Docker/index.html","c63855689dce5b0992dda97463ceecab"],["/categories/Git/index.html","21c4e74ed00caf789a0c2388137d7497"],["/categories/H5/index.html","5206ce5bfb2eb8ebe7e11845982f5073"],["/categories/HTTP/index.html","e1f0d6f33650856b242ca4c6e659b594"],["/categories/JavaScript/index.html","d4cc778a6f90b19f72ee98f4ebaf4501"],["/categories/JavaScript/page/2/index.html","27ec0356f5c03823f9171bfe93b44581"],["/categories/JavaScript/page/3/index.html","201ea40cf89c5ee2b6ffee765dd3a9e7"],["/categories/JavaScript/page/4/index.html","1a8615341835776822605a3d2053fb0f"],["/categories/Node/index.html","ae6efff5805daad52db31b11f36331da"],["/categories/Vue/index.html","2d6cfdf32542a62d0eb300a52e75128a"],["/categories/Web/index.html","5595c0b31594014a82b17f07036fed2c"],["/categories/Webpack/index.html","1246be5da010d46f8e65cd067ffa8cca"],["/categories/hexo/index.html","f7a30151df1ef07c46a707185be42a65"],["/categories/index.html","e514a7f1472027f2c8b1864eacb80422"],["/categories/nextcloud/index.html","047a6753b6c1a6f714c0ef2c375f0d12"],["/categories/微信小程序/index.html","429576cb5e6170b689b068898bf5f2b3"],["/categories/浏览器/index.html","f9a8d521e6abba11297ee74c3f787a04"],["/categories/面试题/index.html","a139106c286c28349423967d70913e53"],["/css/main.css","079c08054f5fa41efdd5a51ac12c5d97"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","fc9d31328e94522582e3b47a82919c21"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","16e4dc0c91cded298337b1adce16a261"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e2c9e770cf1b4beb7e6bbb819b167fa0"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","8d218f5171d510e26c9ccb989a1a848d"],["/page/3/index.html","26799cdf2177bee1aa4b4d0611320b79"],["/page/4/index.html","a78833d6da31a3a3283b75d186b7c413"],["/page/5/index.html","6a9e8da7edbcab55e90f66637fd5efaa"],["/page/6/index.html","be5a943c96dab7cec263f6c1b3b8f835"],["/sw-register.js","521e6ceccaf6450e702fbfbea91a0700"],["/tags/CSS/index.html","df10bdc5905e1ef955ce117159ce7995"],["/tags/Docker/index.html","8542aec90a4714c356e3a09dd4d9b6d5"],["/tags/Express/index.html","f6f15296a1858f9fc505340b7e2c435a"],["/tags/Git/index.html","006a339f931b15e1f3660c2f43b3c0fb"],["/tags/H5/index.html","224a23ebbcba98f088aed37ee073c956"],["/tags/HTTP/index.html","faa1e85bcb61e83ea4cb8cbc5fb50653"],["/tags/JavaScript/index.html","90dc5abb0a2ea4597024cccf7e30f5aa"],["/tags/JavaScript/page/2/index.html","a84d8107c2badac2c12859291e4a48b3"],["/tags/JavaScript/page/3/index.html","56ad05039883d1de991d3db18a6a4520"],["/tags/JavaScript/page/4/index.html","75973307eeb54ebd6fe01d01630ecb21"],["/tags/MongoDB/index.html","49b286b1ae1cb66c65a9de1fd11c7077"],["/tags/Node/index.html","6a39b040364a84c9cf501ff76562d4cc"],["/tags/Vue/index.html","00f5bfb2e0feddcb9a5b58ac9d2582f6"],["/tags/Web/index.html","679a380c3843d21486c9ef31d2c2f08d"],["/tags/Webpack/index.html","1599229dbbb06498f5773d922085ef78"],["/tags/hexo/index.html","02dbdfdd5e0db821089f1a142f324853"],["/tags/index.html","6f8ff8e046ed5b49307336f3eb4b1564"],["/tags/nextcloud/index.html","4aaea49eca8f881ec9be3420ebed68eb"],["/tags/微信小程序/index.html","8a0f3d24d605442c78da84c7af6c3db5"],["/tags/浏览器/index.html","e0f87d890d91cff6fbbbe8647ce901fe"],["/tags/面试题/index.html","ced8d746bc6c74307af95dbd5a4de520"]];
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
