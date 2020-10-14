/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","eb692fea66a2c3cb1e742df285608b74"],["/2019/08/01/Git常用命令/index.html","713e98651cff6f36d10250f0db4cf6ea"],["/2019/08/02/常用正则表达式/index.html","45781ca8ebbe105cabc752b75576dae3"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","d877d755053abda6a4b0ea5a03efd73b"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","d5694396680727d96d3699f6fec15567"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","78563f80f793cf2b001e4ba4a2741141"],["/2019/08/05/阿拉伯数字转中文/index.html","4e25742605e0f8b315b10f1e0614965a"],["/2019/08/09/Javascript数组工具函数/index.html","62f34b5541e5ee9aaf3025d9c6655454"],["/2019/08/12/CSS一些易忘的常用点/index.html","925fd3f2a1bacf4dc2900819e60c02a5"],["/2019/08/13/Javascript-1-DOM/index.html","05f3ae045065f537e73cbfede67f56ba"],["/2019/08/15/Javascript-2-script/index.html","f647333411ba0aea271da08481d9783f"],["/2019/08/20/Javascript-3-数据类型/index.html","bce9504a6667c3577af17b6f76ba5971"],["/2019/08/23/Javascript-4-操作符/index.html","5fdd4db63d438ebcf1ad0265550c6dde"],["/2019/08/24/Javascript-5-语句/index.html","e41b76c359d0546ced57c3690f7ba4cc"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","a09cd20b3063906e894c7aaf9d5a5de9"],["/2019/08/30/HTTP响应状态码说明/index.html","1af45e1642a80b7e6571d2cb907d378f"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","42a058d56d9698ff214abae0c733d514"],["/2019/09/01/Javascript-8-垃圾收集/index.html","e8058f1e84df2503359621966f712633"],["/2019/09/02/Javascript-9-引用类型-1/index.html","856a428a56024dfa601800e867392439"],["/2019/09/10/Javascript-9-引用类型-2/index.html","a5fcabf9793b03477e593ba9bd145fd2"],["/2019/09/14/Javascript-9-引用类型-3/index.html","c21abc3cabc6d20dc44aeadf906255a7"],["/2019/09/20/Javascript-9-引用类型-4/index.html","fba346b9cecb863a8c60ec752c6e3028"],["/2019/09/21/Javascript-9-引用类型-5/index.html","613006df08b766a6402320b84dfdfe04"],["/2019/09/22/javascript-10-面向对象-1/index.html","12c400ef48503d68034a94eecb2efc06"],["/2019/09/25/Javascript-10-面向对象-2/index.html","f5a08edafb22d0814678573ff5a07595"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","d0e0eb0aa71a97092297735db13f92a8"],["/2019/10/03/Javascript-10-面向对象-3/index.html","632c511b08e8b6d866693e2ef594dbe0"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","fbcd83c1a8554cac17bdb6ff1631b778"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","2dde0e765c76bccef2651216a6a6559e"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","bdf5630d4dcfea37c65cb1cedc7876c1"],["/2019/10/21/Web安全问题和解决方案/index.html","948b70b3f927702eaac10c98ec2d1325"],["/2019/10/25/Javascript-12-BOM-1/index.html","d79508a3c24e8a05a7cdf9ce0ba84a9f"],["/2019/11/02/Javascript-12-BOM-2/index.html","5fd9b6528bae191876ab15f63d5a53ab"],["/2019/11/03/Javascript-13-客户端检测/index.html","cb2a99231ce3220af004793fb7860c4a"],["/2019/11/07/Javascript-14-DOM-1/index.html","61b336574b7db3945b964eed53fb8365"],["/2019/11/18/Javascript-14-DOM-2/index.html","bb05058e2b0d5deb2a60ed050a5d1f80"],["/2019/11/24/Javascript-14-DOM-3/index.html","385d59cce643ca3ddc703d44417791eb"],["/2019/11/28/Javascript-14-DOM-4/index.html","d8c1aa34303712a6a95a0e3181429f8d"],["/2019/12/04/Javascript-15-DOM-1/index.html","8852c53465ed57b9f3fd3f82eddbb8a3"],["/2019/12/05/Javascript-15-DOM-2/index.html","1cbd43308e78dd40baf9c41a54be14bb"],["/2019/12/15/Javascript-15-DOM-3/index.html","055eb0700ba5c0bdb44d9946415d7b84"],["/2019/12/20/Javascript-15-DOM-4/index.html","54751d95a5129efecd22b82ef79893d7"],["/2019/12/24/微信小程序常见问题-1/index.html","ac626410fbc66e53cb19c70a6f7adfcc"],["/2019/12/27/Linux下安装node/index.html","b245b0ea7c1b08ebe8a4e864a9d1782f"],["/2019/12/28/JS计算精度丢失问题/index.html","baa82a77c06aae985e99a42c1a6fef24"],["/2020/01/02/前端常见面试题-1/index.html","d61dabd50d79f2afa4a619a472cab6fb"],["/2020/01/05/Javascript数组去重/index.html","8bf2b52a7210574e9c6b6361a8dd23c9"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","a818813f9ddad134e6debb5e215bcb9d"],["/2020/09/18/Webpack上传腾讯云/index.html","bebb654a9e6733dfa632f777afded30d"],["/2020/10/07/Docker简单上手01/index.html","75ee3b68f3cc21ac78af028536afead8"],["/2020/10/08/Docker简单上手02/index.html","755245a8989626cbb7d2c415b67ae40f"],["/2020/10/09/Docker简单上手03/index.html","d135be043331e2be50600e97b56c0844"],["/2020/10/09/Hexo写作样式简介/index.html","f9ead4215f5cfc03362b48075ec65d32"],["/2020/10/13/Express-MongoDB搭建图片分享社区一/index.html","5793ab8b4cdc2e16a3408d183bc06f69"],["/2020/10/14/Express-MongoDB搭建图片分享社区二/index.html","9b6f797ad80b04784f4ae32c2dc40d6d"],["/404.html","bea9515c52296577ec360a786310b45c"],["/about/index.html","36b733eb5bdd5700aabfcebcb327e2d7"],["/archives/2019/07/index.html","47f3563a70ea8d782aeac908b88c7558"],["/archives/2019/08/index.html","d50c49747b1233b1b356918b95566a2d"],["/archives/2019/08/page/2/index.html","db351eb979406b59f3f8cc9588b7a682"],["/archives/2019/09/index.html","6cad749e76bd32947615b3d83fe8966e"],["/archives/2019/10/index.html","9a144be702f4407c1cc38def45736b6e"],["/archives/2019/11/index.html","1c208aff83e7b56e4becaa348ef5cbb6"],["/archives/2019/12/index.html","d51755bf7b3815c8b40ece9aa6e731c4"],["/archives/2019/index.html","d62864a5a972746745f77e2ec7533fd1"],["/archives/2019/page/2/index.html","b00b7f1b65dcd5e05f524aa990f811ba"],["/archives/2019/page/3/index.html","f0aa1a40fd25ba5882fdf1d0c89cab35"],["/archives/2019/page/4/index.html","930082e2762274c00acdb85b6a87a7ba"],["/archives/2019/page/5/index.html","c385003cdabba76830a486ce684c9b8c"],["/archives/2020/01/index.html","deb085a7fd4a452bb6163128f83969ed"],["/archives/2020/09/index.html","3f5c0169ccb3e4f9620ab5d83b215f8d"],["/archives/2020/10/index.html","73f16149e2062704977a58c15b5f3217"],["/archives/2020/index.html","b2c0e2c23eca04f5af04e7f622c12ed7"],["/archives/index.html","449c51a9afadbb229c6029d14ed5b80a"],["/archives/page/2/index.html","66b9bb92381596296c82570a7def087b"],["/archives/page/3/index.html","8ca388509752bf9e89964de7c44316d6"],["/archives/page/4/index.html","10d082398ee196a549faf517768a28f5"],["/archives/page/5/index.html","61bf6ef9cb41fdabfcdc0e5e2d47d613"],["/archives/page/6/index.html","dc51a425404440410c2a397cd96fcd5a"],["/categories/CSS/index.html","fdf1e81596a2cc6a8dc0ceba498ff1f2"],["/categories/Docker/index.html","6e3dcc979445e049ab8130779ec1cacf"],["/categories/Git/index.html","1facb60e9b4ce72aa15b9e5302d33734"],["/categories/H5/index.html","5b9a3e575dbebefcb8f257d089c1fe06"],["/categories/HTTP/index.html","9999e25c3064eab35cb7c24e57c021ff"],["/categories/JavaScript/index.html","d72ea45cf5c15857aafbcf9f8c2f7d5b"],["/categories/JavaScript/page/2/index.html","b36d9b00cf10857667afa2f0e6924549"],["/categories/JavaScript/page/3/index.html","085274f0036069ae2c65bb500d234d3e"],["/categories/JavaScript/page/4/index.html","ccf1146c3ddd22d1d245eee3fa20714c"],["/categories/Node/index.html","ba66f05131ae05f243abafbd8317a330"],["/categories/Vue/index.html","63be99065be955a7d08fdf0a616703b7"],["/categories/Web/index.html","84b60a45bbb97e3faac797d777ef5191"],["/categories/Webpack/index.html","e85adab287052ae93ea02883bfeb7cac"],["/categories/hexo/index.html","8d832ba98f79912d83e9204c81b3a314"],["/categories/index.html","e5b94cafbc5645fda68be0592d80dd37"],["/categories/nextcloud/index.html","974103f3ca96ee92909c060257dd33c8"],["/categories/微信小程序/index.html","8609b3647dbc8ecc60bf6a6249deb9e3"],["/categories/浏览器/index.html","d21ed6fb6825047d26525567e4fe9ef3"],["/categories/面试题/index.html","2ef96485072f7e1694a6c888f9c31fe4"],["/css/main.css","785c3fd0903916024ad8d9ed45665c5d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","dc504449a48cae73b217e49a4e20face"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","c7f81f0c6ee46b3d31dedd1f06474378"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","16e4dc0c91cded298337b1adce16a261"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","e2c9e770cf1b4beb7e6bbb819b167fa0"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","352c56777381fce771dc4fb27e716c30"],["/page/3/index.html","5991fdb3a44212d413fef11a591b2c36"],["/page/4/index.html","94b4f5a7d5e38989fefe9feb6694f8e3"],["/page/5/index.html","f25dfcfe79d5060ff3748da11ea235e9"],["/page/6/index.html","dad17e120633d1c2f6010f67689f38db"],["/sw-register.js","078deee0b47f4e0c907063da5c36ed81"],["/tags/CSS/index.html","d3172aa6251cb0011087108020d68e72"],["/tags/Docker/index.html","ef66cb9c7a4efed3fd21c387f53e4832"],["/tags/Express/index.html","f7fbcc77daa9bbe0b527abe0e393436f"],["/tags/Git/index.html","0b451ec3ff219d2cd43e1bba3f64015d"],["/tags/H5/index.html","e1893bab5962734f67ba7e276bf043d7"],["/tags/HTTP/index.html","5d5f8c23fa5f0b8618448f4964b453b7"],["/tags/JavaScript/index.html","9f3329da30b44fb8988b069dbecfdaea"],["/tags/JavaScript/page/2/index.html","9077e0cb3d1a916505233162d2da078e"],["/tags/JavaScript/page/3/index.html","c6ee4b9de783114f637c616ec5ae26b3"],["/tags/JavaScript/page/4/index.html","23406d7dc9c97b79eb936c41bc1dc55f"],["/tags/MongoDB/index.html","732ca5530ced9e65c9ad0a49f4718b09"],["/tags/Node/index.html","23a17333f295dbe435d5334595d8186a"],["/tags/Vue/index.html","0d67b387ea8845e35697efe7d7dfc9b6"],["/tags/Web/index.html","83cec32c7afef97b425306efbacc53ca"],["/tags/Webpack/index.html","59cea56e1778877c322bae13e69cddbf"],["/tags/hexo/index.html","a517e04f8ac0c73b86a79aa5dff20152"],["/tags/index.html","855794714b2574366c933ac3eb0a2dfd"],["/tags/nextcloud/index.html","9cd45415b3724d0996e8450dab0ded83"],["/tags/微信小程序/index.html","7fcbf41845078e8fc7a21764c4f6d8dd"],["/tags/浏览器/index.html","843d872553ce521b03ce04648aa71bb8"],["/tags/面试题/index.html","a5cdb713c55d8f95745c9c31afe1bb4e"]];
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
