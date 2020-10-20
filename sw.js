/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","e22696dd7dbf69aa3a69b51b1f023c64"],["/2019/08/01/Git常用命令/index.html","441ee93a48918c5a0b6fb513c6550ebf"],["/2019/08/02/常用正则表达式/index.html","781d2ca12dc9e50780601ec4067bdd9f"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","8bb92a464dcaa9be180c3e479d0b1108"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","feba51b7329660cd78017ea551bec251"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","9d3ae8f43d85c2f8dcdf22e6f8bffbbd"],["/2019/08/05/阿拉伯数字转中文/index.html","69864a7f1fa0b52c26492a8128be280d"],["/2019/08/09/Javascript数组工具函数/index.html","fc53326596fd0d50bbd3abcaa37c3547"],["/2019/08/12/CSS一些易忘的常用点/index.html","d65ec1d732f544e764ff9c68150a0a6d"],["/2019/08/13/Javascript-1-DOM/index.html","a9db1b7cd174a2d59db71bb07e47a75e"],["/2019/08/15/Javascript-2-script/index.html","115fedff44e1a5f25a749b6a2a0b3c5a"],["/2019/08/20/Javascript-3-数据类型/index.html","c627de6ce680dccdb04dd7b5745e14b3"],["/2019/08/23/Javascript-4-操作符/index.html","cd8550160b5b388f1da77e12488d2e92"],["/2019/08/24/Javascript-5-语句/index.html","c6378d072f7cc94f98e593d1aa2e9a43"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","31207bbc6c1178d6011b75c67e06cc02"],["/2019/08/30/HTTP响应状态码说明/index.html","1276270366ececcdf0f64432857c64e9"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","5dfd38c7ff483b4b65bb65f001206a68"],["/2019/09/01/Javascript-8-垃圾收集/index.html","714dafb585b31da901d213b4fdf97edd"],["/2019/09/02/Javascript-9-引用类型-1/index.html","e9a0663b8b05f55eb174c333b1b43bf4"],["/2019/09/10/Javascript-9-引用类型-2/index.html","4c1ead0e252e5636521e64b06f91a7da"],["/2019/09/14/Javascript-9-引用类型-3/index.html","127c6544bc67420f6caef81ff7b39850"],["/2019/09/20/Javascript-9-引用类型-4/index.html","c488e5c6749ec0145b9ee13782766a90"],["/2019/09/21/Javascript-9-引用类型-5/index.html","58972eb40620976d413af737810aca06"],["/2019/09/22/javascript-10-面向对象-1/index.html","94c88d7f7a00905bc32192581084cbbf"],["/2019/09/25/Javascript-10-面向对象-2/index.html","1ea4c693ba8c164780641f68b8978b17"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","22260f7a12a6ae5a3b7110bb09e08f80"],["/2019/10/03/Javascript-10-面向对象-3/index.html","119475e7fb6f1c5742515211c6ba03f5"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","8bf558416acd1f0119630ec5c30226ea"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","42bde939d3fccc2fe7613185036ac5f4"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","8792836f479521872e7f99175370baa3"],["/2019/10/21/Web安全问题和解决方案/index.html","e691c633382ef09fa43e7feb9451a8f4"],["/2019/10/25/Javascript-12-BOM-1/index.html","1cde60a894ddba41f984959e378430d3"],["/2019/11/02/Javascript-12-BOM-2/index.html","d650222eed9f7ff606962414628e6925"],["/2019/11/03/Javascript-13-客户端检测/index.html","71a4fe57603d86ddb6ac52f2d06167c6"],["/2019/11/07/Javascript-14-DOM-1/index.html","8292868e01b2f271efcccbc5051451fe"],["/2019/11/18/Javascript-14-DOM-2/index.html","e6415e89f84d1e8f4c13fa3db235dae5"],["/2019/11/24/Javascript-14-DOM-3/index.html","994f5e922066955278de53a428b10d0b"],["/2019/11/28/Javascript-14-DOM-4/index.html","15c25c1de89934634399ed3ece709772"],["/2019/12/04/Javascript-15-DOM-1/index.html","693b52c6aa99b188f4eb7eee475a3061"],["/2019/12/05/Javascript-15-DOM-2/index.html","e961d39a1931de91ee3be7ddba4a67d2"],["/2019/12/15/Javascript-15-DOM-3/index.html","e48eff6479d5799b6dacd5149fadfea5"],["/2019/12/20/Javascript-15-DOM-4/index.html","5ab98fd010cf919e7de67f7a4d3373fe"],["/2019/12/24/微信小程序常见问题-1/index.html","61da09a214383d55c24d2c870329e439"],["/2019/12/27/Linux下安装node/index.html","4b12b6eeba307fb2859713c13995fb34"],["/2019/12/28/JS计算精度丢失问题/index.html","f8f2185e49fd6ac419e4e89260285736"],["/2020/01/02/前端常见面试题-1/index.html","4d74db9106b0c40e25ece6f86fa5ff24"],["/2020/01/05/Javascript数组去重/index.html","40604cc4bbda2fb686f7e070995147d3"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","5161df8e510b423cbbf70fc3fe252279"],["/2020/01/18/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（一）/index.html","aeff17e92589920102df8940f6d7625e"],["/2020/09/18/Webpack上传腾讯云/index.html","b06fcfc92eb630dba9d5478d79a2f3e4"],["/2020/10/07/Docker简单上手01/index.html","d8a7af8f79d210b78abd6fccead89e30"],["/2020/10/08/Docker简单上手02/index.html","d9f96a65368bbabfd6c80a3c9533e786"],["/2020/10/09/Docker简单上手03/index.html","0a9c16961a938ff539b120c70d7ca671"],["/2020/10/09/Hexo写作样式简介/index.html","ba44b65ba0ca7982116749d3e2b66329"],["/2020/10/13/Express-MongoDB搭建图片分享社区一/index.html","58024543d80fdc183e11e103e7e4bc2d"],["/2020/10/14/Express-MongoDB搭建图片分享社区二/index.html","795bb212d218eb16dcbc97f3a3ea024e"],["/404.html","bea9515c52296577ec360a786310b45c"],["/about/index.html","49702a6e63a37075820eead8258d1b89"],["/archives/2019/07/index.html","49e0424c0bafc898ab959c5786005a90"],["/archives/2019/08/index.html","e97026d2c5ef6d90644397d64afeded0"],["/archives/2019/08/page/2/index.html","caafd9e6545db341b2f9d4706b270812"],["/archives/2019/09/index.html","d89b4121dc8f60d96d70396fe61273dc"],["/archives/2019/10/index.html","1f073754d59c80b52447917b081e3d3b"],["/archives/2019/11/index.html","d56f84f81c2a1c398a642f1d05dcd1b0"],["/archives/2019/12/index.html","89fd67dc069227aff9e621fbafc91486"],["/archives/2019/index.html","f2f0231c3f332422876b08d806618f8a"],["/archives/2019/page/2/index.html","6079b79ae4d784c8463fe92b7a4a368a"],["/archives/2019/page/3/index.html","fcdc60535bc3a124667b3b4dc6f08f59"],["/archives/2019/page/4/index.html","88a59fcaf43a3c363dafa53b87ad70ee"],["/archives/2019/page/5/index.html","ff32d895096440ca8273819b44300971"],["/archives/2020/01/index.html","855de44bf7ed087d77be8da4c9e18816"],["/archives/2020/09/index.html","8ee9ed03784f4c55d1696266f18a4409"],["/archives/2020/10/index.html","2c3eff37f83c8731e41aff36be6ae7c2"],["/archives/2020/index.html","cf9e188cb4d763eb0dc356bbf062ba63"],["/archives/2020/page/2/index.html","f102548c21a3ff853b0002b8695ee338"],["/archives/index.html","01e47563ae2eb376d443dc433f38a6ad"],["/archives/page/2/index.html","b5572704d2c86041ad596ffa1dafa30d"],["/archives/page/3/index.html","8fca429de7cad678a0fda010c3502767"],["/archives/page/4/index.html","ad9037f852fbf618c19694b1a5564b46"],["/archives/page/5/index.html","d147b4524ff52485bd40fe85ec01d4f0"],["/archives/page/6/index.html","611556cb0d893e6b617c51cee27a9da3"],["/categories/CSS/index.html","920de98f89615f97321be80048b4eee4"],["/categories/Docker/index.html","09117ddd72c7fcb3593434e401a7e511"],["/categories/Git/index.html","7321506ca60eca122c893a6f27254ac1"],["/categories/H5/index.html","f5fe130de56c8620086c7606b8598252"],["/categories/HTTP/index.html","18fed28fb29933142abafc7f98120c05"],["/categories/JavaScript/index.html","aec4c22f41132f843147ea6516582dca"],["/categories/JavaScript/page/2/index.html","954e9b97d8710b8ebfdc2d235c52d2af"],["/categories/JavaScript/page/3/index.html","04adb011609a6770a15491ba794fd4b3"],["/categories/JavaScript/page/4/index.html","9041bf517b8d40bd0e910e37fe41960a"],["/categories/Node/index.html","37df600b6a76032e03637019e132bcfe"],["/categories/Vue/index.html","3457551b2cae7e2f8b258935a3fdfedb"],["/categories/Web/index.html","c8da4935beb27ca3a0ea9286bb0550ae"],["/categories/Webpack/index.html","f4df5bfd2afee655abf312ee7e179edf"],["/categories/hexo/index.html","280ce9bd013e54b6f3a4ff27faafa375"],["/categories/index.html","b72b532ac579e94f1f89cc1055c7b1f8"],["/categories/nextcloud/index.html","8dd3c77985718fa42beffb6ce526c988"],["/categories/微信小程序/index.html","a0acd383cd6949f2d34bfe1c699b894d"],["/categories/浏览器/index.html","ce6d21d914b7291b75c9e6252f0fce43"],["/categories/面试题/index.html","8e79caa1704ee18f5df3bc5b7c390028"],["/css/main.css","83422577d71f4760f93c74bd4e2ee45d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","8a30ea89baa956425492bc3b6822b4c3"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","16e4dc0c91cded298337b1adce16a261"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e2c9e770cf1b4beb7e6bbb819b167fa0"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","87581ff6dc454f4ab1daf9145389a9b3"],["/page/3/index.html","0305284993912805b8c5236c7e63e04a"],["/page/4/index.html","f8f6cf9446515a324a433c349b9680b6"],["/page/5/index.html","72277b4e6083d9c3862a2881edd550c1"],["/page/6/index.html","9cbc81c6f9fab4c1fc94872a742b7128"],["/sw-register.js","6fc90d633597aac7864fa58eb67e8020"],["/tags/CSS/index.html","4af9b643ea39381ca78a99a972a304d8"],["/tags/Docker/index.html","841b452dc99d0224cd2d6883ba090f09"],["/tags/Express/index.html","5243da2cddf2e3e74ea4689167718597"],["/tags/Git/index.html","44a8738f2ae93d4cfab7b0bef07968e7"],["/tags/H5/index.html","2d0552fd777749b7ded5be1ffb8e0836"],["/tags/HTTP/index.html","2507b284d41e35d2cee230bded973937"],["/tags/JavaScript/index.html","e53f688f46b75d31baf369b31783a7bd"],["/tags/JavaScript/page/2/index.html","4004e4999ba43aaf3d2b0bccaf2ce7a7"],["/tags/JavaScript/page/3/index.html","4c82381609dfa7ebd049be82a13bd2ad"],["/tags/JavaScript/page/4/index.html","38e9886e4b8946c2b08a72a5ae282a60"],["/tags/MongoDB/index.html","3334266b827d871aed99732a61d71c82"],["/tags/Node/index.html","de0228b4b04a3abc52af3d65c6d58150"],["/tags/Vue/index.html","0bd4569aaf3c62758f9347b0638a13a9"],["/tags/Web/index.html","2e384bd2b5c20f8f2cd48a6210e13169"],["/tags/Webpack/index.html","af04d6ec11592f341fbc9487fb7ad7da"],["/tags/hexo/index.html","48a21490719f76e95191e3d5b6c7f228"],["/tags/index.html","a45ed2d43a05435991ceb3baa6cbb035"],["/tags/nextcloud/index.html","a751b6e6e3c9e36e72a5e0095fd04587"],["/tags/微信小程序/index.html","0fea750c1f1b27c9016654d011e58320"],["/tags/浏览器/index.html","bde4c18365de21ebb80260d9dfb92ee5"],["/tags/面试题/index.html","1dacb9bea02dfdad9969de58726d003b"]];
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
