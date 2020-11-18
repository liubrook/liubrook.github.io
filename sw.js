/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","643748a2c85b016990e3d691d81f43d4"],["/2019/08/01/Git常用命令/index.html","fb70f48fdb75aaa7654132e51404c201"],["/2019/08/02/常用正则表达式/index.html","59ed56a418c7dbab56160ee118cf4c51"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","3de4a6565e5c47ae920bd9644990dadf"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","451b803deff225540834802dc36cdb2b"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","b63fc29ec636266c8ee60ac35ba58b6c"],["/2019/08/05/阿拉伯数字转中文/index.html","08cc953eb8860673b6ab0eb7e83e2457"],["/2019/08/09/Javascript数组工具函数/index.html","902af39db6941e4f218f1f5b011a1efa"],["/2019/08/12/CSS一些易忘的常用点/index.html","ac464c1c145b182193bceda1bb8fecf1"],["/2019/08/13/Javascript-1-DOM/index.html","9531eeb6200929a97fe772c4b2ce7574"],["/2019/08/15/Javascript-2-script/index.html","656c1f6c0e4ae95303725239f50f66b7"],["/2019/08/20/Javascript-3-数据类型/index.html","fcdab8efa36f1abb9ee2fb81ab0eb6b8"],["/2019/08/23/Javascript-4-操作符/index.html","897a016e37cc14784caead7ebcbdbb1c"],["/2019/08/24/Javascript-5-语句/index.html","5b13ef7938d9cae9c2f1acefdee5af63"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","1832b6eb271bc721ccade06f157377fe"],["/2019/08/30/HTTP响应状态码说明/index.html","7676a3c3db7616d979d04e4d431d7ec6"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","bec129a5a7c712e03aaafbd59967ac2e"],["/2019/09/01/Javascript-8-垃圾收集/index.html","528d798574c0660b6434f09ee6601b0a"],["/2019/09/02/Javascript-9-引用类型-1/index.html","e289ea57ebecb972100fbc3785ec9993"],["/2019/09/10/Javascript-9-引用类型-2/index.html","56cd30a8bc07813a6c310286fc881f5d"],["/2019/09/14/Javascript-9-引用类型-3/index.html","22c7b71584a21f2da56f922621ca081b"],["/2019/09/20/Javascript-9-引用类型-4/index.html","5ab51225a3ea1169b59a52b9fdf2a198"],["/2019/09/21/Javascript-9-引用类型-5/index.html","53ac4871dc1fc1fd536ba8aeb1240a74"],["/2019/09/22/javascript-10-面向对象-1/index.html","0d0634cf9347b571db9dab886b58b41c"],["/2019/09/25/Javascript-10-面向对象-2/index.html","659fb362023b79cb1cba0b665357cc26"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","c0a5d74f90c032ecf5f770f14a0a8c9b"],["/2019/10/03/Javascript-10-面向对象-3/index.html","5e11392518e67ecefaeb4b0937e28796"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","a9aabe242a842f9ff03c705f62d96c37"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","fa1fb17ea098c54926e27762ac814985"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","ab0ef48100e4d98995143b092f41dad5"],["/2019/10/21/Web安全问题和解决方案/index.html","06d80e562590af8bca62f4896f56bb7a"],["/2019/10/25/Javascript-12-BOM-1/index.html","0829e60a988d5d8608514024d76af596"],["/2019/11/02/Javascript-12-BOM-2/index.html","af605a4d4f7d1f2cf9574fdb1a9bc0a2"],["/2019/11/03/Javascript-13-客户端检测/index.html","c0556aa1bd5645c1fd61dd1e6fbb6d1f"],["/2019/11/07/Javascript-14-DOM-1/index.html","c46317f6fd5a1957d0c7445319ad60bb"],["/2019/11/18/Javascript-14-DOM-2/index.html","97119b6e061f1f0f38aedef7c11d07e6"],["/2019/11/24/Javascript-14-DOM-3/index.html","6be3788dafde93932b85fa14da88a799"],["/2019/11/28/Javascript-14-DOM-4/index.html","407adb63d765dbcc960fc700eb40d1f4"],["/2019/12/04/Javascript-15-DOM-1/index.html","107b767c4830fb20ddef41aff0f42fdd"],["/2019/12/05/Javascript-15-DOM-2/index.html","20f969f5940ac7dad7723dab19817d0c"],["/2019/12/15/Javascript-15-DOM-3/index.html","685f136fe7e309d22f0048e0e968a53b"],["/2019/12/20/Javascript-15-DOM-4/index.html","c8f53905723fea465cdcaf324adeff75"],["/2019/12/24/微信小程序常见问题-1/index.html","53bf4b402bd54d3010f3152acd403996"],["/2019/12/27/Linux下安装node/index.html","9cc01e3448b96a179ac21a61af126455"],["/2019/12/28/JS计算精度丢失问题/index.html","80db6857c78aa70431b4efe5a2287995"],["/2020/01/02/前端常见面试题-1/index.html","a395559927c1f9ad2b9a15b99f565c37"],["/2020/01/05/Javascript数组去重/index.html","08066ff787bdb4f02e167c859a5dd100"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","f1b6a98af9e2de4bd7135ef5016ae955"],["/2020/01/18/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（一）/index.html","21a61c07dbafa1ef6efc670e09f5dbf0"],["/2020/01/20/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（二）/index.html","49c66012133ef8fabe5a29d809d55952"],["/2020/01/26/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（三）/index.html","3046115e9cb6b93aad74a06cda8b6111"],["/2020/01/28/响应式布局的常用解决方案对比-媒体查询、百分比、rem和vw-vh/index.html","8ce767cf7057fc07be31d9dbe0d47381"],["/2020/01/30/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（四）/index.html","8504c12f77babe9ce76a9c625c573c37"],["/2020/02/02/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（五）/index.html","30945488175cd8f5c52ad4d8ecf231c4"],["/2020/09/18/Webpack上传腾讯云/index.html","741e398144d9a4c52e3e4f32c787727d"],["/2020/10/07/Docker简单上手01/index.html","8363c89cbefeed5255e8c46d9ade2920"],["/2020/10/08/Docker简单上手02/index.html","0c968dc73ac2dc9ce34a594a096b55f0"],["/2020/10/09/Docker简单上手03/index.html","c6ff9d2eecead6128b355b4d7fd5f24c"],["/2020/10/09/Hexo写作样式简介/index.html","16016f5c59e6308a7ab4dd1c24f81f2f"],["/2020/10/13/Express-MongoDB搭建图片分享社区一/index.html","214491edf58803235a4ee6975b74cb04"],["/2020/10/14/Express-MongoDB搭建图片分享社区二/index.html","c904dc4d5021339a1f1ba16fbe31f8b0"],["/404.html","bea9515c52296577ec360a786310b45c"],["/about/index.html","266b20c88770690290e9f159c2962512"],["/archives/2019/07/index.html","b8ef11fc378dacd5646af914f14ade83"],["/archives/2019/08/index.html","ac03c4756d387907b389e53c9b92ed0e"],["/archives/2019/08/page/2/index.html","a98711a7d4a79916eedf813625750d5d"],["/archives/2019/09/index.html","e399e2ebd2549d13caacb1ccf7ad6663"],["/archives/2019/10/index.html","574725e2726a6478a5b0ccf7560e9710"],["/archives/2019/11/index.html","559c114a4eba12cfaeebec9f5397715c"],["/archives/2019/12/index.html","101861ffe1ba82eddf281e1ed6cee651"],["/archives/2019/index.html","c2945e8a96dd3dd6af91b26087eba071"],["/archives/2019/page/2/index.html","95d85f7949dbb462eed4e1ef2709e80f"],["/archives/2019/page/3/index.html","2d33992c8fcc0975a8e3a6711b2b203b"],["/archives/2019/page/4/index.html","79ed5068561254355445153a80776d4c"],["/archives/2019/page/5/index.html","ac0e9d9e95f0d01881089ff89d909e6a"],["/archives/2020/01/index.html","359f6a0102ed010181272fabd785f201"],["/archives/2020/02/index.html","89ed521c440c35a347ae4ee94cfc5b0a"],["/archives/2020/09/index.html","3e6c8bc95125ebc1f15b101149778525"],["/archives/2020/10/index.html","aa9b3dfbe5fd8acbb86b0518b023a53e"],["/archives/2020/index.html","75432c8ae129cb09810914dda2800705"],["/archives/2020/page/2/index.html","3e63f7a317abc93d1b768571ba144de4"],["/archives/index.html","b87132c091a4b328fe4299e2c77b4aba"],["/archives/page/2/index.html","3fca90b87083cedf87579b80b0652e33"],["/archives/page/3/index.html","8852aeefae1d02bb160372f406f5ce96"],["/archives/page/4/index.html","3cd464bc827ef59659db0bf02796aa43"],["/archives/page/5/index.html","93f4c44990b600bba794d7ee2f623809"],["/archives/page/6/index.html","2465939072ed8997e3257b207f28b43b"],["/archives/page/7/index.html","5d4b7aff655036fd5685f8627e0d88a8"],["/categories/CSS/index.html","d01bbc2d7f392aeb6de726588e2f2cc6"],["/categories/Docker/index.html","b70c5c3058ed29df0572677616fdab66"],["/categories/Git/index.html","27ed2b461df91a3bc735163c61ff532b"],["/categories/H5/index.html","eed812a7647e67c7058d3b5aefaf5db0"],["/categories/HTTP/index.html","7c76eeb64cb4f1f6b7e343999cf805b9"],["/categories/JavaScript/index.html","aa5cef474edb4bda7ac33e2bab5870dd"],["/categories/JavaScript/page/2/index.html","88739107d4748636df95c8686850ea13"],["/categories/JavaScript/page/3/index.html","8c8b2ec027943046ae17b83b2ef33a2d"],["/categories/JavaScript/page/4/index.html","65e6f873b0a9a377a2e3c9da103904c3"],["/categories/Node/index.html","c7325f5a575bcefa66ed89b2113dbe26"],["/categories/Vue/index.html","5ad2379d4136262a3a5e00bffc94b43d"],["/categories/Web/index.html","34114860f53f7f72915ea573c67fe83e"],["/categories/Webpack/index.html","8e554b67cca3fd069ad3bcd9d524c9dc"],["/categories/hexo/index.html","169643a9f06c9f43e68f7dea5eaf98a5"],["/categories/index.html","d64825ee5ab00c7adc85eda332c395dc"],["/categories/nextcloud/index.html","8352ab231051a617031ec1728c14f5e7"],["/categories/微信小程序/index.html","7cb4181202d1520e26c59cd415cff659"],["/categories/浏览器/index.html","08ce532517410b3b13e150e148f374de"],["/categories/面试题/index.html","58ac78123a5c97391dc8733724e3c564"],["/css/main.css","97a5456848f7c1b82afde2f325968f22"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","408ca4d63c2cf6da829a62c367bc71dc"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","16e4dc0c91cded298337b1adce16a261"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e2c9e770cf1b4beb7e6bbb819b167fa0"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","df56c180a66846908ac259163f3b27bd"],["/page/3/index.html","27f3a2cb5b9e2d5e76b9bcaa62f1a8ce"],["/page/4/index.html","391f832656c70de379ea548110fb556d"],["/page/5/index.html","e63dd2080345ffc18eec03fdec0e40ec"],["/page/6/index.html","50222581b71af1bc4db4296d94d31356"],["/page/7/index.html","8370a920e8ad905cb037c7f3b09dc769"],["/sw-register.js","e9e59a2ae54cd5b065d5bbb9279f094b"],["/tags/CSS/index.html","05ec01ab4d2f02fbbdcf8b4bbb91037a"],["/tags/Docker/index.html","abb522ed5917a8b6b4287b2c13431f7f"],["/tags/Express/index.html","85f175acc98a28990510c66bae3e8fcd"],["/tags/Git/index.html","6150ac73287537931c03edf547d488e7"],["/tags/H5/index.html","4cc02dde117167a8da601098773e8d6d"],["/tags/HTTP/index.html","d713834586323bcb87c872a40bc26a5a"],["/tags/JavaScript/index.html","7ee842b2d353271bfa5e9158542c0528"],["/tags/JavaScript/page/2/index.html","19ff5f430aab63a48e6ad42b2442d955"],["/tags/JavaScript/page/3/index.html","c8368d470709da18224e655fd55e1ff2"],["/tags/JavaScript/page/4/index.html","5f57bc0f015963249c73a78f8c9656a4"],["/tags/MongoDB/index.html","1701dfee16c25b5271f9f5d7767dabdf"],["/tags/Node/index.html","8c6f0a6415234d90eb4ec83c8f3dd7dc"],["/tags/Vue/index.html","2a6988c5e18c8ee03473f459e83236a7"],["/tags/Web/index.html","85b51c2a01beb47f0f4c75062e2d6be0"],["/tags/Webpack/index.html","d7cdf3bf3a5c1229b8c714785285c2ec"],["/tags/hexo/index.html","894d53557d8b5021d1ed87a9419b2f78"],["/tags/index.html","41904bd9b33d8ed73f531d98472d7d07"],["/tags/nextcloud/index.html","e4470340362bbb681d76158e23410f01"],["/tags/微信小程序/index.html","f15e955bbab6b4012b08590fc87cf7c9"],["/tags/浏览器/index.html","c5155af8acaa74296cc2bad99f5aab80"],["/tags/面试题/index.html","4cb2310d045ac7646df402771f6d033e"]];
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
