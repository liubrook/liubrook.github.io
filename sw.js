/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","4427aa97c87db23222751c8b123812d1"],["/2019/08/01/Git常用命令/index.html","bdbefb5a68e1d4d7c9168e15092e4dfc"],["/2019/08/02/常用正则表达式/index.html","e01cd53c8bc8056e8afea781cf045de6"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","a96ef7824a00ab2ea5687f81009027c6"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","2ebb1de72861bf64b49bbc96023efc1a"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","a5023bc89da0fb7358ea4a6dfcce89c5"],["/2019/08/05/阿拉伯数字转中文/index.html","54eaabbf1a05d728442c779d7c0cc725"],["/2019/08/09/Javascript数组工具函数/index.html","073afa7618ea7528894940cc7f9b7871"],["/2019/08/12/CSS一些易忘的常用点/index.html","7836740c4c62b729db4006c9a71c2195"],["/2019/08/13/Javascript-1-DOM/index.html","8c8195af0c9374ad235c57ff8c7b9125"],["/2019/08/15/Javascript-2-script/index.html","86d536baa49f3d25e159960edc313911"],["/2019/08/20/Javascript-3-数据类型/index.html","369213a21ae5dc9620f38a98191c64bc"],["/2019/08/23/Javascript-4-操作符/index.html","725d0489fbd6e4c4a90c298ef12989a1"],["/2019/08/24/Javascript-5-语句/index.html","dff8023470b123c378dd9a4906a6e167"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","26d5bbd2e43d6ef8a150a165794d4bab"],["/2019/08/30/HTTP响应状态码说明/index.html","492e47a8571785e3d94517fb253fd070"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","09c8f4ce607e906bfac3d0790778ad9f"],["/2019/09/01/Javascript-8-垃圾收集/index.html","920c850338f911d9d1f163c9d878f24e"],["/2019/09/02/Javascript-9-引用类型-1/index.html","b965145a4db64063bb86e98d358f101e"],["/2019/09/10/Javascript-9-引用类型-2/index.html","07c7debca824264432e5e1b5c9dd7fc0"],["/2019/09/14/Javascript-9-引用类型-3/index.html","43f9a9889ff5617d7986dde967ef9d3a"],["/2019/09/20/Javascript-9-引用类型-4/index.html","c2830c7e6bce45e87347d9ac87b1cf84"],["/2019/09/21/Javascript-9-引用类型-5/index.html","052e20b31bf5e5d41e7b6c954440c40d"],["/2019/09/22/javascript-10-面向对象-1/index.html","ab5d3c6b4c8acd6a63e25b32a434f7c4"],["/2019/09/25/Javascript-10-面向对象-2/index.html","fc95ba6f8d2e49ff9a395831504ecd3f"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","b3e76047165f86953bf5fc8cd929b535"],["/2019/10/03/Javascript-10-面向对象-3/index.html","312eb9e3b8ea291f05b4becaf0c8e7af"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","75d9909c440dbfd11f8338f13eeee62f"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","d71c59b723500a216eeb009c6b7c7514"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","d5900fa70f45b796786ed05ca8700433"],["/2019/10/21/Web安全问题和解决方案/index.html","7ec2b2a2f42d7ae8c347bb12adbbabf3"],["/2019/10/25/Javascript-12-BOM-1/index.html","f677f8c3f95a17dce510479111cfc68c"],["/2019/11/02/Javascript-12-BOM-2/index.html","6515a00e603f1f3b7f2ceeab89d2f0d0"],["/2019/11/03/Javascript-13-客户端检测/index.html","4b9504055e8e82fad6bc8390e019a3a3"],["/2019/11/07/Javascript-14-DOM-1/index.html","8146d6e52e2bd5613af1b713b4d8f560"],["/2019/11/18/Javascript-14-DOM-2/index.html","6824bcb3b530097ced86582d33eb2527"],["/2019/11/24/Javascript-14-DOM-3/index.html","1bd0feea199e7809bfbaaa75d6ae0ddb"],["/2019/11/28/Javascript-14-DOM-4/index.html","9cf3e8bef2e4170b8963015843bcc522"],["/2019/12/04/Javascript-15-DOM-1/index.html","c7224a6e088bdbaef7c45be87e928163"],["/2019/12/05/Javascript-15-DOM-2/index.html","e2bc1293eaf5d8585514daa097ffd7f0"],["/2019/12/15/Javascript-15-DOM-3/index.html","2150a1c38bb7ff245b90d60f8db1acce"],["/2019/12/20/Javascript-15-DOM-4/index.html","2448a316368ed9a7a07dbe21de13f88f"],["/2019/12/24/微信小程序常见问题-1/index.html","f1168552adb324a017e4491a05871c96"],["/2019/12/27/Linux下安装node/index.html","5a75c7232ad0f76e0b151efc5b1da6bc"],["/2019/12/28/JS计算精度丢失问题/index.html","e48980c41c25322354b1a0e1fbeebafe"],["/2020/01/02/前端常见面试题-1/index.html","1fee22e9a01ff88079c633859661b8e1"],["/2020/01/05/Javascript数组去重/index.html","f29c687c079f445fc9b5697c9968271c"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","0bfa9d1e89d2fed16607b4f321e63639"],["/2020/01/18/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（一）/index.html","8a44bf1058b717fbb1489b5b7a269d21"],["/2020/01/20/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（二）/index.html","7c5fd84697f298cc69b72367fb385e49"],["/2020/01/26/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（三）/index.html","045d11df6dc58cb27b176158398e63eb"],["/2020/01/28/响应式布局的常用解决方案对比-媒体查询、百分比、rem和vw-vh/index.html","ebcff83a26a72782a9813d13f93ec316"],["/2020/01/30/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（四）/index.html","e30f4d3195f83fcd1fe4764db64e6369"],["/2020/02/02/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（五）/index.html","5712785a2964d25bda4d7979af894c94"],["/2020/02/05/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（六）/index.html","eaaf9ae6b431a430fafb506df172054b"],["/2020/06/26/Linux基础教程/index.html","8913d2424de07861d1223eb3f0be81b4"],["/2020/09/18/Webpack上传腾讯云/index.html","f0e804f20a3a8272066b123059959834"],["/2020/10/07/Docker简单上手01/index.html","2d8ee5ecf7eab67ca214edbcf75021b3"],["/2020/10/08/Docker简单上手02/index.html","c8890531e84712398011fcde90b795cc"],["/2020/10/09/Docker简单上手03/index.html","17ccbf23fd6c1afc3f61c97db419ef74"],["/2020/10/09/Hexo写作样式简介/index.html","515f77a4f26037b64c79e8867350b7a6"],["/2020/10/13/Express-MongoDB搭建图片分享社区一/index.html","a36baadc33877f06ef71ce1bea606f66"],["/2020/10/14/Express-MongoDB搭建图片分享社区二/index.html","2e6d13484b87a8f7f73b6634d8543d73"],["/2020/12/02/Typora-Vue主题-Gitee图床轻松写文章/index.html","fbf2a0558d462c01d545c9125f526732"],["/2020/12/03/Docker超详细基础教程/index.html","80f0864371da08f73518b9eb17ca0fbc"],["/2020/12/03/Nginx基础教程/index.html","6e0b5301536f234c7ba36e88795a1a20"],["/2021/03/01/LeetCode0303题区域和检索-数组不可变-刷题打卡/index.html","1a29d8db00206a1e63ce007c07c1089c"],["/2021/03/01/LeetCode1200-最小绝对差-刷题打卡/index.html","6f049f65ba839a0a6038bfcf98cbfc11"],["/2021/03/02/LeetCode0304题二维区域和检索-矩阵不可变-刷题打卡/index.html","45ab8772d61ba193bc1a65b34edfdfd5"],["/2021/03/02/LeetCode11题盛最多水的容器-刷题打卡/index.html","4ad5a9006a75cce4aaef2401055dea65"],["/2021/03/03/LeetCode0338题比特位计数-刷题打卡/index.html","99b13996f0afedb8f044d96c91c98be7"],["/2021/03/03/LeetCode209题长度最小的子数组-刷题打卡/index.html","b556290236c55fa3142e295d83003087"],["/2021/03/04/LeetCode141题环形链表-刷题打卡/index.html","674c574fe2fc4925ef02a4d8ee762abc"],["/2021/03/04/LeetCode236题二叉树的最近公共祖先-刷题打卡/index.html","47f0b6d83f08d902699fca1ea3485b14"],["/2021/03/05/LeetCode48题旋转图像-刷题打卡/index.html","f758332c15420060f62129bec68a6c31"],["/2021/03/05/LeetCode53题最大子序和-刷题打卡/index.html","1d146c1469e09c755f28d39bde207c66"],["/2021/03/07/LeetCode155题最小栈-刷题打卡/index.html","68d806339b8d8d65b94545c6410ce394"],["/2021/03/08/LeetCode1124题表现良好的最长时间段-刷题打卡/index.html","ee6480b748ad955ad2c12f67185d307f"],["/2021/03/08/LeetCode274题H指数-刷题打卡/index.html","0fabeb5a06e3e06a09726d27ac0e39ad"],["/2021/03/08/LeetCode367题有效的完全平方数-刷题打卡/index.html","6b94da1e32389eb5fcab8e001c66462d"],["/2021/03/09/LeetCode1047题删除字符串中的所有相邻重复项-刷题打卡/index.html","25f3c8b826896d165429a00872ab1f4a"],["/2021/03/09/LeetCode1438题绝对差不超过限制的最长连续子数组-刷题打卡/index.html","c2d61171a7c3066cfb6b92444ecdbfaf"],["/2021/03/09/LeetCode160题相交链表-刷题打卡/index.html","6665fb6fa0a2bcc35a5d6ed899bc3949"],["/2021/03/10/LeetCode434题字符串中的单词数-刷题打卡/index.html","8278881798f46a4bbc18f97febac5b5d"],["/2021/03/10/LeetCode513题找树左下角的值-刷题打卡/index.html","068a01e9007c1b5717db728183d256e8"],["/2021/03/10/LeetCode75题颜色分类-刷题打卡/index.html","7819f724b401494a3e89569ec8dfa931"],["/2021/03/11/LeetCode617题合并二叉树-刷题打卡/index.html","4e833a714d6a09fd7d4d863b95aa059f"],["/2021/03/11/LeetCode94题二叉树的中序遍历-刷题打卡/index.html","6a2372b660385caca5a48fc604f4c48d"],["/2021/03/12/LeetCode1281题整数的各位积和之差-刷题打卡/index.html","b7f07f2b2ffb151d4590faa96ff84596"],["/2021/03/12/LeetCode172题阶乘后的零-刷题打卡/index.html","b2f4e16589a4180bb33620e5c228d471"],["/2021/03/12/LeetCode331题验证二叉树的前序序列化-刷题打卡/index.html","28b8a7be654ba89de7df7e96d8405367"],["/2021/03/13/LeetCode1550题存在连续三个奇数的数组-刷题打卡/index.html","e8429d2f35e5bad9166a21e7227c176f"],["/404.html","15018747a44f0c776d0e949071fdd840"],["/about/index.html","bcc8b11a0891c9616f5f85c8f0a0c7c3"],["/archives/2019/07/index.html","9e2192241119a6c1844e55619aeb0a09"],["/archives/2019/08/index.html","2b529fcee662c058dcadb6ede5efeca1"],["/archives/2019/08/page/2/index.html","064ff5815da6af8edd8e2f193c141eff"],["/archives/2019/09/index.html","b7604b86e443646dae73a6a3c8903a18"],["/archives/2019/10/index.html","71b121e135e6ae329bffdd4123e48fa5"],["/archives/2019/11/index.html","c507120a3218fbf9eb5962bf98ee1f3e"],["/archives/2019/12/index.html","5700446213ea69605bd576b22a900561"],["/archives/2019/index.html","4bbabceddbf90d312dc1160f464395ab"],["/archives/2019/page/2/index.html","8fde33f80d2e1794575f18cf809d9396"],["/archives/2019/page/3/index.html","409272f69cecf9fb6f207f5b370b1dca"],["/archives/2019/page/4/index.html","6260ea22a754d563bc6fc5433b5fe808"],["/archives/2019/page/5/index.html","7576d35e3133cfd3737404939d9e3fa1"],["/archives/2020/01/index.html","b2ddb8f10aeb738985201bfed13ffb6e"],["/archives/2020/02/index.html","02ae9651aa0621bb4baa577712ef2bd1"],["/archives/2020/06/index.html","613b070e1d3ad09a79b2e2d279b35efd"],["/archives/2020/09/index.html","67546b88ec5097d107e20da143145d01"],["/archives/2020/10/index.html","6f07fb0f7fcfab43deeda1445616ac9f"],["/archives/2020/12/index.html","1f52b6e910b98f383d9e784eaf1f3a5f"],["/archives/2020/index.html","265b75d71ca29cbaa17bddbd113b70b5"],["/archives/2020/page/2/index.html","361e072ba14c65db74fe2701297914e9"],["/archives/2020/page/3/index.html","b65dac579cd2173d80aa0bbc5cd04129"],["/archives/2021/03/index.html","cbe67cc60467e48966b6e65b688f5511"],["/archives/2021/03/page/2/index.html","cedecd4aa789006ecbdac72dc85f1442"],["/archives/2021/03/page/3/index.html","2c7f5bb7f68d162b4ef0702b581bb223"],["/archives/2021/index.html","06ccb8cc1b4fb1bc269a6fadc02c0688"],["/archives/2021/page/2/index.html","9da7d98fa4d174d84c544244383d55bb"],["/archives/2021/page/3/index.html","d20ebedbd58246b559dd7baa5848b8af"],["/archives/index.html","038c1085688aeeba590772df188b7e9a"],["/archives/page/10/index.html","2c142d0d3ced50aff2e46f0a7b9d592d"],["/archives/page/2/index.html","11f3f5caf475004e7a368e608f1940e7"],["/archives/page/3/index.html","d38248ffccb1ec1ec16e2a6eedaeb873"],["/archives/page/4/index.html","7e628647823c06fb4217ed8402a582e9"],["/archives/page/5/index.html","00436494d49b9d8bf70681396149cdab"],["/archives/page/6/index.html","b46295ce4116058b7462b82fd3e3e259"],["/archives/page/7/index.html","7b0dc9dd379ce6ab6d537c7312ee63f8"],["/archives/page/8/index.html","3788379890ed0769ec938c4a14c65dc9"],["/archives/page/9/index.html","9fed50e0a771d222b8c913a5e28a70d7"],["/categories/CSS/index.html","43667f6bde182d84ae2211161f211800"],["/categories/Docker/index.html","c4446e32acc1a3b53e9ee8bf312ab4a9"],["/categories/Git/index.html","6722e62ac0f847099a39dde310986381"],["/categories/H5/index.html","d011688e56d492afe5080df8e28e499d"],["/categories/HTTP/index.html","ec3e1dbbc89bb79f1acc7f5cb1040d3a"],["/categories/JavaScript/index.html","2a640ff6d2686d3c749f18c438810efc"],["/categories/JavaScript/page/2/index.html","87177225ed9e24363dfef36915b8b5e9"],["/categories/JavaScript/page/3/index.html","c9ab77a9da8363e35d0d0033cb2432d5"],["/categories/JavaScript/page/4/index.html","4d51ad4e8e3450316073919eed24c6dc"],["/categories/LeetCode/index.html","4af2413eb903ce3c76ea41ce731179b8"],["/categories/LeetCode/page/2/index.html","2f8abea11e7f3a7509caaa30c006622e"],["/categories/LeetCode/page/3/index.html","187fea06dc1b0f2250f4de8ff8a668a3"],["/categories/Linux/index.html","0dcfa5f201a5a2e1f491b8c1e71dab4d"],["/categories/Node/index.html","a3f73897b5e92d5252c0155e81de59c6"],["/categories/Vue/index.html","57084da392ec812a5e8394668077af54"],["/categories/Web/index.html","7757fee11fc6a00d3e4a07703d9331af"],["/categories/Webpack/index.html","922c137f6e6ba05e5f775c3a505443da"],["/categories/hexo/index.html","dc6b2127f54bd55cb6149fea33ee393a"],["/categories/index.html","40aeeddaba8ea72716b700000e27d01d"],["/categories/nextcloud/index.html","78d8cb99f16ae9ba2ba36698597eb992"],["/categories/工具/index.html","f446568933944aec9c40f8127f1b521c"],["/categories/微信小程序/index.html","c6d5d19964a67078113808cbddc77945"],["/categories/浏览器/index.html","73e20c99a85843ff028ba4bca1dd1490"],["/categories/面试题/index.html","d652be9b5dda10d9f426ac80d17a2778"],["/css/main.css","a14ac95395d6277250f96f3d414436e6"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.png","a585e37db015a0b6ff75b88cf4627ccc"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","1741a8afa66f3851306d05c743fe5eaa"],["/js/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","12cc8645df339339c5c9c1fa65fcfcd7"],["/lib/fancybox/source/jquery.fancybox.css","caf7c408bb13e802cc3566b94f6c6d8d"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","7de0afa6e303619cf8f916cc891dfee2"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","033f6e64a47367c372e3b56192fdb917"],["/page/2/index.html","f6130c0c204a2e4a65540c82dc2ab848"],["/page/3/index.html","84f24aa0f8f6b20e54173f940b1a4d93"],["/page/4/index.html","787c6c80aa4627d440313e12311dce4c"],["/page/5/index.html","5bc31ee6a66114d667425b45c40a7487"],["/page/6/index.html","18c508d3db77e6df7cce73cf7e67c147"],["/page/7/index.html","badf590cc34a9dff4af902035a3101fe"],["/page/8/index.html","1b09a1f51f9454d3d5b8a99975eee072"],["/page/9/index.html","58526f1468b23bc8954709fd1f530b64"],["/sw-register.js","caa298f86ee081652bceb8159642a1f5"],["/tags/CSS/index.html","0ffb500c84256c3516d99a3fa4a4b7f9"],["/tags/Docker/index.html","ca33c90b4c7938cadc2fc9d0a4e9a344"],["/tags/Express/index.html","e8e97b5cad8756421f0ee834ab9fe2c6"],["/tags/Git/index.html","a6e17f1ba6a48e439d21c67b6c584453"],["/tags/GitLab/index.html","4a3bd7fbbc313cc021f6eeaf40a4089b"],["/tags/Gitee/index.html","4cfe02fde6aee2a2dadc6e413e8b2d24"],["/tags/H5/index.html","f48fff9825f8cf8e7b8bc2f7b60e7aa3"],["/tags/HTTP/index.html","d401f8ee377c4bd4f011c22f47d5ead8"],["/tags/JavaScript/index.html","330d8bf3c30344585d085924eda67ec6"],["/tags/JavaScript/page/2/index.html","3e0c31324ad29bfee9901215a6dba786"],["/tags/JavaScript/page/3/index.html","c2d222492888ac5aade61cde45e7dad4"],["/tags/JavaScript/page/4/index.html","04f387cdb7460ae55c97d339e81f9bd0"],["/tags/Jenkins/index.html","81adfac99f129db4e9f72b84ded353c2"],["/tags/LeetCode/index.html","2abacaf02d34430394aa7d35c32b9e9c"],["/tags/LeetCode/page/2/index.html","0120de8bf603bd0544dd90697f7e5150"],["/tags/LeetCode/page/3/index.html","4eca8ec3719b5210ebaaef3e6a791381"],["/tags/Linux/index.html","0355dff92748660f9b73d28b678f96b5"],["/tags/MongoDB/index.html","a3aeea1bcf4082703355404bdf047076"],["/tags/Nginx/index.html","79ee0e38ba512eedb9444bca9f3e5207"],["/tags/Node/index.html","e041424e4e083286a5663306163c962a"],["/tags/Typora/index.html","3bd73e2fde7344f2cc5bcb508666dd1d"],["/tags/Vue/index.html","16d09c8442f5740445c5d51227184e60"],["/tags/Web/index.html","5128b9dd9d42e129a327f83afe079359"],["/tags/Webpack/index.html","e721e18dc477424ca85a75411ada70d3"],["/tags/hexo/index.html","d9f2f4148f2ecd7229b725daa892d81d"],["/tags/index.html","f12c0241a12ea9d5c15cf1916e5cf1ec"],["/tags/nextcloud/index.html","4e690bf158d7469081807e837c2a431c"],["/tags/微信小程序/index.html","f951f19fa91e52b0515069cf5b5f118d"],["/tags/浏览器/index.html","f936dcbdaee3217f5f0e6ad3049afd5d"],["/tags/算法/index.html","e1de1778b3dc7606b13927921892f2ed"],["/tags/算法/page/2/index.html","51acc1bb2e0301f712e3b774da15a1f6"],["/tags/算法/page/3/index.html","218da4b63c33c1b57f1dacf9aa5111bc"],["/tags/面试题/index.html","c47b28f29d8ccdd844a00026a9e13883"],["/uploads/1024.png","b14832ba758c6bb757add198ae66cbef"]];
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
