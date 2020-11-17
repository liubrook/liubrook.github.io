/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","59e7f401debeea722c99ac4419a6db77"],["/2019/08/01/Git常用命令/index.html","82f170141711640e8fb70dd02e1ea83d"],["/2019/08/02/常用正则表达式/index.html","9799dabd1de114d741872c1c897fa02c"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","8b1394a5f86dec31b7622eab41514cdf"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","58c4004e0eae8a06d00311189b031e7f"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","da46a15098a774e16ccefbbb308adc3f"],["/2019/08/05/阿拉伯数字转中文/index.html","27eb635376f9782189c28ce20f9b6247"],["/2019/08/09/Javascript数组工具函数/index.html","6171fc2938ae99d9e92090bd2e48a81b"],["/2019/08/12/CSS一些易忘的常用点/index.html","0e364fbb1ca928557d46b3e24ba7fea1"],["/2019/08/13/Javascript-1-DOM/index.html","6f52fcb31db4e960e7593f047d286725"],["/2019/08/15/Javascript-2-script/index.html","e8e8388fd7719538986002ee143541a8"],["/2019/08/20/Javascript-3-数据类型/index.html","674b5619442076a5f3f0c7475af82cf8"],["/2019/08/23/Javascript-4-操作符/index.html","047312f504ec533e6f5b85f954f45416"],["/2019/08/24/Javascript-5-语句/index.html","559767931c380d975c0236cecf21b5df"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","c01f40f8a528c9d057a8e270343f2363"],["/2019/08/30/HTTP响应状态码说明/index.html","0d1dad71706e73f0a8402818b379d532"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","c71b2520990d2e495186f96cb1e5dd46"],["/2019/09/01/Javascript-8-垃圾收集/index.html","bf96a82fe0a328329fa6129f1998bd61"],["/2019/09/02/Javascript-9-引用类型-1/index.html","66b93c3cb938949f1af12d15de86feed"],["/2019/09/10/Javascript-9-引用类型-2/index.html","b68aea454a2a0cc2dde0520245969358"],["/2019/09/14/Javascript-9-引用类型-3/index.html","2e4ce074c0dfbd21b2d4cbd9310c76cf"],["/2019/09/20/Javascript-9-引用类型-4/index.html","1b2cf589f7e4fc5e062490014c1435d3"],["/2019/09/21/Javascript-9-引用类型-5/index.html","f8ecd4569eee40f1469781df05391c07"],["/2019/09/22/javascript-10-面向对象-1/index.html","36ab04c149c46d436695da15641b3f06"],["/2019/09/25/Javascript-10-面向对象-2/index.html","578bd89c63220de25d080a69869eef4c"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","423731e7d311349e3c4e95e89eb89492"],["/2019/10/03/Javascript-10-面向对象-3/index.html","c7c7cfd7f0fb577ca60b92e70a508af2"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","22c796cc9d211bb212995279a131bb61"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","2adfed13325883119644f7207cfb7e60"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","86078b6823f1acd9326b082c5d7ed0fa"],["/2019/10/21/Web安全问题和解决方案/index.html","2cd7302c6663bfdc16b337f53d75574c"],["/2019/10/25/Javascript-12-BOM-1/index.html","97bdae943e8129c4dfab7d3dec7e1008"],["/2019/11/02/Javascript-12-BOM-2/index.html","0f890fd6ae37997dd29ee114d76c53bb"],["/2019/11/03/Javascript-13-客户端检测/index.html","6057607de7fd0dd18997e32586c9678e"],["/2019/11/07/Javascript-14-DOM-1/index.html","06837de3e209faf8217bed88cf7fae7c"],["/2019/11/18/Javascript-14-DOM-2/index.html","659e4e7e428d74caebded956bef5d849"],["/2019/11/24/Javascript-14-DOM-3/index.html","5fefbaaa0ed82b9c461ad7ef9210b8e0"],["/2019/11/28/Javascript-14-DOM-4/index.html","15b083697f4f3f27364601d1941241c6"],["/2019/12/04/Javascript-15-DOM-1/index.html","8e29a21a1c15523aec4eb3e837ec0359"],["/2019/12/05/Javascript-15-DOM-2/index.html","37a3e4dcbddf134554a352ef5b678824"],["/2019/12/15/Javascript-15-DOM-3/index.html","6792babe67879991229e7bbf18282cd8"],["/2019/12/20/Javascript-15-DOM-4/index.html","8234344070058a667104a7ab337887ab"],["/2019/12/24/微信小程序常见问题-1/index.html","4777a4c1ed5fd644661151fd26ef9d34"],["/2019/12/27/Linux下安装node/index.html","f2f7184dab89000539ca09bd54874cc8"],["/2019/12/28/JS计算精度丢失问题/index.html","da95203804dc0782d0e918f5e9480c27"],["/2020/01/02/前端常见面试题-1/index.html","e35befaf2c45551e3a29426d39218e16"],["/2020/01/05/Javascript数组去重/index.html","67ec2ba56371500ef3cdc1e088c33ff0"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","981a07e9a8448722180d6ee347e4e641"],["/2020/01/18/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（一）/index.html","32c7f14bdda930509969a5d893362d63"],["/2020/01/20/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（二）/index.html","8b34392c06f28fdf51698d615a9f0248"],["/2020/01/26/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（三）/index.html","5a6512b2829d1805d31ebecd9a1ecbfa"],["/2020/01/28/响应式布局的常用解决方案对比-媒体查询、百分比、rem和vw-vh/index.html","214f0b4feae30ad7ed2919d583aaf80f"],["/2020/01/30/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（四）/index.html","2156a38d1317fd8f4ea5cc9dc590e60e"],["/2020/09/18/Webpack上传腾讯云/index.html","25873f16e8cde31f2fb7581d92a31b49"],["/2020/10/07/Docker简单上手01/index.html","f60350707f0a4f7aca94ffd87e4f1296"],["/2020/10/08/Docker简单上手02/index.html","50435e01a66fad51d56eea2ece5d8b38"],["/2020/10/09/Docker简单上手03/index.html","33b3274b5e0ca0e26fa3747076cbaa13"],["/2020/10/09/Hexo写作样式简介/index.html","38fe5cd1189d415e41cb6471f3fd4289"],["/2020/10/13/Express-MongoDB搭建图片分享社区一/index.html","498491a6bc2da242246aa70df4631a59"],["/2020/10/14/Express-MongoDB搭建图片分享社区二/index.html","450d5c04c9a669f34541a561e942095f"],["/404.html","bea9515c52296577ec360a786310b45c"],["/about/index.html","56f8579cef6241069aad41cd3ad77c6f"],["/archives/2019/07/index.html","e0c2cbe939211c1fe3b3e5ed9df257f1"],["/archives/2019/08/index.html","4783733c9b9ec3ac68367224b31622ae"],["/archives/2019/08/page/2/index.html","ce2c493e30f6acbef34b0b136261acde"],["/archives/2019/09/index.html","c93cbea5a43bf4f696398829e3fb2299"],["/archives/2019/10/index.html","cc47ae1a30b0939842eca6783f5ad5ec"],["/archives/2019/11/index.html","d3d3ad34afe4cef37607d6ec2e74bf63"],["/archives/2019/12/index.html","5256df3e924ef687d8a75bedf9daee0e"],["/archives/2019/index.html","c112efadcd7f680a2bf4a0032869af26"],["/archives/2019/page/2/index.html","52c56d669b4f6f4e056ecc3f194ba5ae"],["/archives/2019/page/3/index.html","fb0caa532dc3257632b9709bbf38636f"],["/archives/2019/page/4/index.html","17aa1dd4a8cad676a7a3134bcf00fa86"],["/archives/2019/page/5/index.html","d8794312ed1897f3337cb35bdb1499d5"],["/archives/2020/01/index.html","fc8f45fd3caa21c03947dd045c592a69"],["/archives/2020/09/index.html","839a8f5ff19fff8801288980a4c5d449"],["/archives/2020/10/index.html","6365ef1d769ea4fba97121747852dd33"],["/archives/2020/index.html","bee3d868dd44fa6bc01b330263b7ad62"],["/archives/2020/page/2/index.html","3df3039b1b0e4a722654bf87d86237f6"],["/archives/index.html","b5ea8f27d2baf9ffeb0340794ac33096"],["/archives/page/2/index.html","ed0d9cad2ccce4f60690572b693bbe70"],["/archives/page/3/index.html","fda0fbca8095ebaf81171f6de01e6f53"],["/archives/page/4/index.html","b55d489064c5670f95d837e093b952e7"],["/archives/page/5/index.html","41f2910d83237759ed96a30cb816ddcf"],["/archives/page/6/index.html","ff3535b18fc050c9342fabfce0fffeb7"],["/categories/CSS/index.html","282f532d37a1832afe5ee8a58c76e49d"],["/categories/Docker/index.html","6270a9817c041629e2686ec1304219d8"],["/categories/Git/index.html","2a1571e3ec0e112c77dead7de4924dfc"],["/categories/H5/index.html","a7fca0fd703ea477cdb16d04d5a23793"],["/categories/HTTP/index.html","418cec0e02455a2d8b5d32be1085a981"],["/categories/JavaScript/index.html","d6be84386eae29236254491d9a907c8c"],["/categories/JavaScript/page/2/index.html","0eec43f179aa10476201f75a85a17bb6"],["/categories/JavaScript/page/3/index.html","dc0867ef9e35cab231172b36b64de149"],["/categories/JavaScript/page/4/index.html","aae6d609dfc07434c824a95c99e1dcb3"],["/categories/Node/index.html","a1f01e8fa839b5ef543c45879ac0e592"],["/categories/Vue/index.html","f27a35c8786ec54fcdd08f58f548681a"],["/categories/Web/index.html","b87e373b4d2f24cf37cf2d7f9fb2f8fd"],["/categories/Webpack/index.html","67f50aea9ca389f7636c050e307f0f4d"],["/categories/hexo/index.html","27c2d3465b382d572bbb4a960bf059d8"],["/categories/index.html","8fafce16d746229ba28283ff5e8437de"],["/categories/nextcloud/index.html","88c70696d0cd0e68a8a4e2db5c0eb79b"],["/categories/微信小程序/index.html","2da978f51f001e3fd82e358675b4f6a7"],["/categories/浏览器/index.html","6d6abe5074800e813785cd27cd1806b5"],["/categories/面试题/index.html","f1088c4b367a88a469e826f8398879ce"],["/css/main.css","6e4b45d4cbc6d9ac81362d5850133b13"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","547fb470b241a3c3071e7f1dca9676ac"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","16e4dc0c91cded298337b1adce16a261"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e2c9e770cf1b4beb7e6bbb819b167fa0"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","8c8866ec81374d71c06e0fc671b153d0"],["/page/3/index.html","54dd6b4da6f0fccf2f5e068134af82d9"],["/page/4/index.html","38b0f99ed59b45bf61fee2ce8950db81"],["/page/5/index.html","69817486fa8cc5ce53503f2a6f5fac8a"],["/page/6/index.html","fd345e1093328dd69a23253e8a40e4be"],["/sw-register.js","a5af1d0b369e5805ab142e6ba1a1b5af"],["/tags/CSS/index.html","a92780dd024f0956ccc052dd6db930b6"],["/tags/Docker/index.html","141bd42274a1592ec2ae7a3f0d4462e5"],["/tags/Express/index.html","83f813a9b031e8caa74aa5fd69fcdae2"],["/tags/Git/index.html","cb99325c20ecbb8919e0727b8fa792de"],["/tags/H5/index.html","2bb94751ee9617abade1b65d36943360"],["/tags/HTTP/index.html","e436d7c98886350cd8a3fb8dfeae7d47"],["/tags/JavaScript/index.html","a222897d008df785e7821404d5c23ade"],["/tags/JavaScript/page/2/index.html","88d1d54c591deedf10b8af73c70cdd3c"],["/tags/JavaScript/page/3/index.html","ef7b94487d9a411429d6e54900a7ba97"],["/tags/JavaScript/page/4/index.html","28385bd2dc48316bd661a36652e5c6e4"],["/tags/MongoDB/index.html","fcdcb0fa2bd35cf412d8f0453d66edfd"],["/tags/Node/index.html","7091366f7936a65fb9db37f7beede81f"],["/tags/Vue/index.html","5fd1959421391e51764bc16312633ff1"],["/tags/Web/index.html","1fa5a9f3f1450c3877b3982373b291e8"],["/tags/Webpack/index.html","29220be9ea76cd0979f10c0557b24939"],["/tags/hexo/index.html","9e423699657abfde5b0140252b5dd22e"],["/tags/index.html","af26fccc1a41057ea1d0a51a3697bd36"],["/tags/nextcloud/index.html","ad121a07134c3282f4d6d6dd53b6fcdc"],["/tags/微信小程序/index.html","7c1725b84db2c0d2c52b393ef317c1a0"],["/tags/浏览器/index.html","a09142917ae0c995ffe982110dd4dc79"],["/tags/面试题/index.html","a1c2345c9c16a155fadef99d3588064b"]];
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
