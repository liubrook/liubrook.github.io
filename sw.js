/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","6444aa0e43882661826eac8ffefdba27"],["/2019/08/01/Git常用命令/index.html","1b5745ed2f6d58f86eda451199f7b169"],["/2019/08/02/常用正则表达式/index.html","636ab8ba5e583b9888e3e5ceab8251ee"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","785bc689f756b368399d7898f9b930ec"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","82b67d8167f54f03ae66d99e971a704e"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","5c1bb37dd1c1f69ad43651dd717e0251"],["/2019/08/05/阿拉伯数字转中文/index.html","f5d9b1c2e179efcacacdaf1149898b0e"],["/2019/08/09/Javascript数组工具函数/index.html","df879e684e08e094a6fd436e1ac07353"],["/2019/08/12/CSS一些易忘的常用点/index.html","58434b29cfe82a6d10edd234be3a0b01"],["/2019/08/13/Javascript-1-DOM/index.html","d1beceb7405a96f064fadb407e71e069"],["/2019/08/15/Javascript-2-script/index.html","b89d38308a8d754f838113a3bc400e47"],["/2019/08/20/Javascript-3-数据类型/index.html","56fd1aa5e973225e8bdd8d6322f8d9b4"],["/2019/08/23/Javascript-4-操作符/index.html","d09cdb8e081dcd1251b3dd7386d02662"],["/2019/08/24/Javascript-5-语句/index.html","ef69a7b8b6ce24c8a7e87da03bdfdeb5"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","5a4548281854ef80d4abaa35d7bf1629"],["/2019/08/30/HTTP响应状态码说明/index.html","f68818063e0a282a03311928393ea946"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","e375395188f8b18369acb752adae784d"],["/2019/09/01/Javascript-8-垃圾收集/index.html","c61bb0e1a3269ad0ecc43046b1849830"],["/2019/09/02/Javascript-9-引用类型-1/index.html","c54ae395646cdec884656b740fe5b81b"],["/2019/09/10/Javascript-9-引用类型-2/index.html","5f6db45232623ba71ec0e62d83e03d38"],["/2019/09/14/Javascript-9-引用类型-3/index.html","eef1b6308b80424dfda0ece1d9aa9c0c"],["/2019/09/20/Javascript-9-引用类型-4/index.html","5398409e45f08a922b00544c64b431c0"],["/2019/09/21/Javascript-9-引用类型-5/index.html","8039290a9510e1ceb7c64a79775e88b3"],["/2019/09/22/javascript-10-面向对象-1/index.html","2288592933d7aeedf4e6355743c72024"],["/2019/09/25/Javascript-10-面向对象-2/index.html","56057a9458c4ec00c8276429e0a9165f"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","0a6cf116afea8871177e82664c82ba84"],["/2019/10/03/Javascript-10-面向对象-3/index.html","11ca9cf84fa301daffa8198c254454ef"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","bbce4c4d89c0e2b10c42ebc1738d8c96"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","fa2bb11a42bd91f085ae80aec5241e66"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","84019076c5b56af86858bdc375ee79bd"],["/2019/10/21/Web安全问题和解决方案/index.html","e31277a1c0f5b8fc7424e98756b9c352"],["/2019/10/25/Javascript-12-BOM-1/index.html","e62aea9136913e3fac7e2e81bfab04ac"],["/2019/11/02/Javascript-12-BOM-2/index.html","86e946539f542dc1e0de2c998fcbee84"],["/2019/11/03/Javascript-13-客户端检测/index.html","85cb22124fb212f4a9b3bb5d2a9960ed"],["/2019/11/07/Javascript-14-DOM-1/index.html","dd4d9ff084289b8b780f8ae936a6a453"],["/2019/11/18/Javascript-14-DOM-2/index.html","a4668cd922138df88b6365f939feb40c"],["/2019/11/24/Javascript-14-DOM-3/index.html","1550270673ede99de59c2d53ca500ab2"],["/2019/11/28/Javascript-14-DOM-4/index.html","771c6e57c00d7c4711cd89f78b16aafc"],["/2019/12/04/Javascript-15-DOM-1/index.html","53b3bf864fc6fa19437fa8e141d60880"],["/2019/12/05/Javascript-15-DOM-2/index.html","4b0fe445269dcb8449a41f9323c962a7"],["/2019/12/15/Javascript-15-DOM-3/index.html","ed5f32603111e9e723bacc7dd391476b"],["/2019/12/20/Javascript-15-DOM-4/index.html","024c011b162f91af3f76476f1f299f94"],["/2019/12/24/微信小程序常见问题-1/index.html","a6bec49893c92282942b9f3ddba08e4f"],["/2019/12/27/Linux下安装node/index.html","1b16b5075d47a3be45831ba79215eda3"],["/2019/12/28/JS计算精度丢失问题/index.html","ade5f31df841cf208c745cd6100b3159"],["/2020/01/02/前端常见面试题-1/index.html","a50068d3a158e09993567e53a68ac2b2"],["/2020/01/05/Javascript数组去重/index.html","60b70609e354e51c0aae3181db377730"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","0cac6c8c4338bf3ca88b95ced8eb1e03"],["/2020/01/18/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（一）/index.html","25765a4f703e444348a9e3c6c744b2ec"],["/2020/01/20/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（二）/index.html","3a65225794ba2fc20b19f407c3c97dcd"],["/2020/09/18/Webpack上传腾讯云/index.html","fb85f84eb48926da08c8693da6f1702f"],["/2020/10/07/Docker简单上手01/index.html","6bd3d49cc2d2519d0a8658c90fabd8ff"],["/2020/10/08/Docker简单上手02/index.html","89a003573ab4182b3192c650c6f7af2e"],["/2020/10/09/Docker简单上手03/index.html","9fd33687c12f90917dc230e67d815908"],["/2020/10/09/Hexo写作样式简介/index.html","bb39a6e80db60166a7a64e861b02d892"],["/2020/10/13/Express-MongoDB搭建图片分享社区一/index.html","9c47ae78a41e9d77c7fa762c1295b8ac"],["/2020/10/14/Express-MongoDB搭建图片分享社区二/index.html","cb49355b95ca4de0de6865ac414d0740"],["/404.html","bea9515c52296577ec360a786310b45c"],["/about/index.html","896b1e6be6c8e1117e21ceda9d90ef7a"],["/archives/2019/07/index.html","810aca213ba981b384c07fb284d5fe25"],["/archives/2019/08/index.html","120546597a3bc85a568332651a44a5ae"],["/archives/2019/08/page/2/index.html","b0b8448d3891363f10126b25fef2792a"],["/archives/2019/09/index.html","ae3f2fc2984c92e5d94727eabb5c09a7"],["/archives/2019/10/index.html","a3df20dc2acf59e4b81974e6e16ca30f"],["/archives/2019/11/index.html","c20ee5ce3ba5ebe7c0367ae9eaa7ee78"],["/archives/2019/12/index.html","e54e54294b9e7156a7b1440cf103f411"],["/archives/2019/index.html","caaba80237651c08e56807c1def5d8f4"],["/archives/2019/page/2/index.html","03642e247d1ca47dcf08fb50fa73a820"],["/archives/2019/page/3/index.html","8422dc2be0959c57544c5061c01c49e9"],["/archives/2019/page/4/index.html","26f4ce5386f6b8698e5f2d50b45cabfa"],["/archives/2019/page/5/index.html","45905b4214a883100264c131f5a5a8ff"],["/archives/2020/01/index.html","ae19eae7abfe832b6c3ccbcb237a6711"],["/archives/2020/09/index.html","80c0f3c15611fa738034cdc2673bdcfc"],["/archives/2020/10/index.html","d108c0be1b485d211408c3f43cb67e06"],["/archives/2020/index.html","f0ca2ca0bac2847e97d2d8988a0be822"],["/archives/2020/page/2/index.html","28f18d32d733fb30a91d3fe40d5b63a7"],["/archives/index.html","58a13c2151d7dac94c3bf38d2d455f41"],["/archives/page/2/index.html","96198a25c69d5bcc39c756771d00a431"],["/archives/page/3/index.html","afef8e8075f2cf8184329f709027c40a"],["/archives/page/4/index.html","0bc9443f0778e8e73a6c1de05caa18f5"],["/archives/page/5/index.html","5df530f27509577ba9cfa9effd9ec790"],["/archives/page/6/index.html","ac4e1b70d597f1e6b1255152abd0c8c0"],["/categories/CSS/index.html","0a62fc8a4674d4eb9ed6c78cbe4a9a38"],["/categories/Docker/index.html","3d3d110f5dbadd4e7636b4c542d38391"],["/categories/Git/index.html","e1ed7469a094a5c9fdf97a7cb1b6938b"],["/categories/H5/index.html","6e0679abed55155488459e3b26fc967b"],["/categories/HTTP/index.html","3b006bdf5308b551383a1d52f00a0e2e"],["/categories/JavaScript/index.html","0e41f185f7893c539e5a820a22ef8eb0"],["/categories/JavaScript/page/2/index.html","38c5d41ecb5a561ea979175257af8cc6"],["/categories/JavaScript/page/3/index.html","93c16ba7677ae3a28bdb96543d7eb265"],["/categories/JavaScript/page/4/index.html","ace661ed4939e247689f03faa3ec1c29"],["/categories/Node/index.html","c1bb00c0ae7fcf12b1e38991a3604372"],["/categories/Vue/index.html","a99bff495a1e7ccebbb1f4eff46db402"],["/categories/Web/index.html","75002d694b05b57bea1c2c82bcb76fd3"],["/categories/Webpack/index.html","a8b81aa9a88aa0379aa457645fececf7"],["/categories/hexo/index.html","cb57ae4b4ff86f107d69f69c38c44b37"],["/categories/index.html","b7c5c14f9fd161a5aaa0ead930fd1225"],["/categories/nextcloud/index.html","d837eca530ae12640bba46a0fa0b4171"],["/categories/微信小程序/index.html","a1528db08d9999eb210eab9be70b0122"],["/categories/浏览器/index.html","5515ea5e813ea25ee693eb5b91ae5214"],["/categories/面试题/index.html","9fbf5ed8a785d859bdf872a3eed5880d"],["/css/main.css","24aa3f25befa585127fbc7f03cb7dd18"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","329bc59fa7b4feef8907b525fbe4c91f"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","16e4dc0c91cded298337b1adce16a261"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e2c9e770cf1b4beb7e6bbb819b167fa0"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","37198713cd0de38a84f588d46b8c9b93"],["/page/3/index.html","0343e8b7fb06d8110b8f7462d0ae0270"],["/page/4/index.html","b19e13ce7bdcd8f1cff8c2aed2e69002"],["/page/5/index.html","5aeb88ffa0f018030e20fee1694d19ce"],["/page/6/index.html","8f744dea809a1f1efb15d40f87a74285"],["/sw-register.js","11280c0e5a99ddb30da6447f522f07ec"],["/tags/CSS/index.html","62a2198dd4a9a2557bc276c1a27c31fb"],["/tags/Docker/index.html","4e4843acc50522f470375cb2062ffe4f"],["/tags/Express/index.html","0b868bead91db00fb18086fc2927d39b"],["/tags/Git/index.html","d868fc0dca0dd2bbb3a76715c8eae2b5"],["/tags/H5/index.html","2deebb5d56bc5bce9374311c50069518"],["/tags/HTTP/index.html","92368ce8e8a26ecdb4a89da3c777a5bf"],["/tags/JavaScript/index.html","b6d34286dd146983a3081f1b0106c55a"],["/tags/JavaScript/page/2/index.html","4cca1c0245be6e3648a146f6c2b90a70"],["/tags/JavaScript/page/3/index.html","66812f61e7f5af2829cafd790128a1e0"],["/tags/JavaScript/page/4/index.html","19167d519a3d94748e94572be3324ae7"],["/tags/MongoDB/index.html","dca6c7abaf36b7493214d0403f7ea9fd"],["/tags/Node/index.html","dd9c52f2cc3eb2db1e1ae6ef8e402744"],["/tags/Vue/index.html","834df9e9484bb7fa7bb690a0b67b25f1"],["/tags/Web/index.html","2e8ccfdf816e1e48cfa1b127142a8ea7"],["/tags/Webpack/index.html","e6627603c9dff8893d7ca5e23bced51a"],["/tags/hexo/index.html","59a800a67a7952f9b3e116b53e47c17b"],["/tags/index.html","589c147e1a3d06beedc85cc22ad0a0f2"],["/tags/nextcloud/index.html","dece60939a4ec12ca05f1bc94afa3fe0"],["/tags/微信小程序/index.html","dcefa9714fe89bba5cecd2c4984e9fee"],["/tags/浏览器/index.html","9f7eaa165f26ac71af3f2e52704e1b46"],["/tags/面试题/index.html","c8d3eb004ab01d344e08711181605b77"]];
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
