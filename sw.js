/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","d233fd5dc97294a0d9098ff624f651a8"],["/2019/08/01/Git常用命令/index.html","44f77404fd72f93130a6b6088114fc0d"],["/2019/08/02/常用正则表达式/index.html","39e12def0a822a1d9585f77747dd7fdb"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","b73986fa3cb9e0d72901b6e01e821c9a"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","420dc42518a648fcf523e52122b9ceee"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","d43bc71f3376fa606f1d004c7957e2ef"],["/2019/08/05/阿拉伯数字转中文/index.html","5f7c5eed0300935dfa8be110427a26df"],["/2019/08/09/Javascript数组工具函数/index.html","95087b121106b71d858902affad74aab"],["/2019/08/12/CSS一些易忘的常用点/index.html","e6c91233b0ed5051c1ac069bbea15abf"],["/2019/08/13/Javascript-1-DOM/index.html","4a7204c1263c2e6e8350bf64ef54f55e"],["/2019/08/15/Javascript-2-script/index.html","ecc483c8a0bbdc8c4a9700a301b025b2"],["/2019/08/20/Javascript-3-数据类型/index.html","13eb07c718531aeb53be1ec7820e19db"],["/2019/08/23/Javascript-4-操作符/index.html","c920efa61c00cfd45d97478eead218f2"],["/2019/08/24/Javascript-5-语句/index.html","40da1c0715a61222a6eac461ce68970e"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","122702f661e44849cf83d81823676c5c"],["/2019/08/30/HTTP响应状态码说明/index.html","b3f75a1b5efaf74ea28cfaeb08e4422d"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","0f3bd1ff1806553233cd813026388708"],["/2019/09/01/Javascript-8-垃圾收集/index.html","1a1a3b7caa36d25528d3d69b3256c73e"],["/2019/09/02/Javascript-9-引用类型-1/index.html","0f96ced1d5a5b8d24308b82fdabcf2b2"],["/2019/09/10/Javascript-9-引用类型-2/index.html","70e2a65fb52d679ffec142d7c108b146"],["/2019/09/14/Javascript-9-引用类型-3/index.html","38e074e5a56bc76cdd69e83d08667f73"],["/2019/09/20/Javascript-9-引用类型-4/index.html","4acbc2b932e6914bcd43b2d7669ce46b"],["/2019/09/21/Javascript-9-引用类型-5/index.html","5977fa0f886c1f8967ce078aeeeec7b2"],["/2019/09/22/javascript-10-面向对象-1/index.html","394b226ec05607f57d175caded23273e"],["/2019/09/25/Javascript-10-面向对象-2/index.html","9f765dabef9abe06198e562cdb7e4fc8"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","eaccd1b05e4cd62bb665e64779c8edf7"],["/2019/10/03/Javascript-10-面向对象-3/index.html","54c4a6a56c910fa338aceb55ebe60172"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","1c2488837f1814b83a9ed2938a3b28f1"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","a497d19f731d1b510f0ad04d076a6c74"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","15592843358f0e735b99d3fec19145e5"],["/2019/10/21/Web安全问题和解决方案/index.html","ebaf8cc092b5f9eea59a76d729295f46"],["/2019/10/25/Javascript-12-BOM-1/index.html","f8032f19e68f8cc4c56dd294ff50bb71"],["/2019/11/02/Javascript-12-BOM-2/index.html","cc22a63c87bec9975bb983a58c99e26f"],["/2019/11/03/Javascript-13-客户端检测/index.html","e6d8105057df7576ada6e8060cc3d4a7"],["/2019/11/07/Javascript-14-DOM-1/index.html","0eb4c965c3a7f242aa201f140a1d8dfb"],["/2019/11/18/Javascript-14-DOM-2/index.html","0260d72a2ddc215e1cc84d14f386d8cb"],["/2019/11/24/Javascript-14-DOM-3/index.html","f91c673d9fbd860abebead7e0a959e65"],["/2019/11/28/Javascript-14-DOM-4/index.html","388bd640720c8117f5fbe3c93483e5bf"],["/2019/12/04/Javascript-15-DOM-1/index.html","3d1378024a6f754afdf1371ba78eb261"],["/2019/12/05/Javascript-15-DOM-2/index.html","cd18ceb46039aeef317816f908cdf7d8"],["/2019/12/15/Javascript-15-DOM-3/index.html","7cbb71a6e066466080f3898bd648a562"],["/2019/12/20/Javascript-15-DOM-4/index.html","0f2307431289f1e3500bb94c54223c3e"],["/2019/12/24/微信小程序常见问题-1/index.html","dba9117e7c0df31f7d252a1a5a3ef4b3"],["/2019/12/27/Linux下安装node/index.html","bd9c45ecce3a8038ee858ecc8fa73be2"],["/2019/12/28/JS计算精度丢失问题/index.html","ab363dcee90abc896bc83baa8fb0d991"],["/2020/01/02/前端常见面试题-1/index.html","5843738d2db3df056c8454a5f5755fc2"],["/2020/01/05/Javascript数组去重/index.html","9b2d70ff3f295aa5ef2eb369336702ab"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","aa1f6efb573a1a0f9b0301c9db83f6bc"],["/2020/01/18/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（一）/index.html","a6c2da1df0283aa80c8e1042717b5554"],["/2020/01/20/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（二）/index.html","e583515b94d7eea52c398749b119961b"],["/2020/01/26/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（三）/index.html","8c864120e184aa7adab7f1cd079badad"],["/2020/01/28/响应式布局的常用解决方案对比-媒体查询、百分比、rem和vw-vh/index.html","27dfa947a3b51bd828811f322d6714f4"],["/2020/01/30/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（四）/index.html","1c1a1efac60e670150d85cc5a30cf3ba"],["/2020/02/02/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（五）/index.html","df07d693c2c374c33d6ba1d3c828ba6b"],["/2020/02/05/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（六）/index.html","df571704474cdd6927f035c7fc441c90"],["/2020/06/26/Linux基础教程/index.html","e7550f14d21e0ae4dd82d3181342fd64"],["/2020/09/18/Webpack上传腾讯云/index.html","3539255345b2d2e6e41b701d67b05de5"],["/2020/10/07/Docker简单上手01/index.html","660d3c86479fcc519ba2e9c10dfbba56"],["/2020/10/08/Docker简单上手02/index.html","16990cad58403470c4aab61b2077940d"],["/2020/10/09/Docker简单上手03/index.html","87e17b6e8894df81b48840624624a79b"],["/2020/10/09/Hexo写作样式简介/index.html","0c951548255010f89640962c216ea4f7"],["/2020/10/13/Express-MongoDB搭建图片分享社区一/index.html","f6291bb7544534064a34f4dbf1b1694e"],["/2020/10/14/Express-MongoDB搭建图片分享社区二/index.html","c4be8c7eefa2c50a7abf7edd8327ba6a"],["/2020/12/02/Typora-Vue主题-Gitee图床轻松写文章/index.html","05db42b3490875a6fe47829973e95516"],["/2020/12/03/Docker超详细基础教程/index.html","2de3b4ebbf4406842d5378253b8d56fa"],["/2020/12/03/Nginx基础教程/index.html","ccf4457b7fe11d5d415f87f9a0e2c89e"],["/2021/03/01/LeetCode0303题区域和检索-数组不可变-刷题打卡/index.html","c686fafd59f1747af802fc1285bad537"],["/2021/03/01/LeetCode1200-最小绝对差-刷题打卡/index.html","4951a4d1cda17696af17fff7a39b701b"],["/2021/03/02/LeetCode0304题二维区域和检索-矩阵不可变-刷题打卡/index.html","8c5468656bf1857e3626121fc62c4c22"],["/2021/03/02/LeetCode11题盛最多水的容器-刷题打卡/index.html","f41d17b0dbc4856408baa93e470c8ace"],["/2021/03/03/LeetCode0338题比特位计数-刷题打卡/index.html","f8eed2becaf9f44471ceaff67b59786d"],["/2021/03/03/LeetCode209题长度最小的子数组-刷题打卡/index.html","fd0e08e2ce909ec6be3ab330707d032b"],["/2021/03/04/LeetCode141题环形链表-刷题打卡/index.html","fa0eb9f954e0a3fe19272fd31843900e"],["/2021/03/04/LeetCode236题二叉树的最近公共祖先-刷题打卡/index.html","6fab09bd39317f817c91c68d55f4677a"],["/2021/03/05/LeetCode48题旋转图像-刷题打卡/index.html","bbc95f82678a9557d2495acc85495cdf"],["/2021/03/05/LeetCode53题最大子序和-刷题打卡/index.html","7000d3d30dde1ce4612bc26be26bf728"],["/2021/03/07/LeetCode155题最小栈-刷题打卡/index.html","664f17b1d3f3eb5789c898f6c30e4555"],["/2021/03/08/LeetCode1124题表现良好的最长时间段-刷题打卡/index.html","36bdf48bd824906c1e77c50917118336"],["/2021/03/08/LeetCode274题H指数-刷题打卡/index.html","0871d94a5c64c3d21ef537898deb118f"],["/2021/03/08/LeetCode367题有效的完全平方数-刷题打卡/index.html","588f0304f40a366ba22bdcb6dc806989"],["/2021/03/09/LeetCode1047题删除字符串中的所有相邻重复项-刷题打卡/index.html","dfb4cbe7d4ba316abb7ab5ecffbc4a66"],["/2021/03/09/LeetCode1438题绝对差不超过限制的最长连续子数组-刷题打卡/index.html","5c5f71c4480922cf3db3adc94dd21d34"],["/2021/03/09/LeetCode160题相交链表-刷题打卡/index.html","cdb425f5e36b8f9d000ddbab6de436c5"],["/2021/03/10/LeetCode434题字符串中的单词数-刷题打卡/index.html","cf5e3c9d1554dde6e43caf3e7333e580"],["/2021/03/10/LeetCode513题找树左下角的值-刷题打卡/index.html","4b9568812e740aad1c4c625099931105"],["/2021/03/10/LeetCode75题颜色分类-刷题打卡/index.html","0693568026f74df19fcd9a06fd187b6a"],["/2021/03/11/LeetCode617题合并二叉树-刷题打卡/index.html","4a75aabdff3a7bfe871afcff7041b2bd"],["/2021/03/11/LeetCode94题二叉树的中序遍历-刷题打卡/index.html","a662caa2a4a08d77c554c95e9bec0257"],["/2021/03/12/LeetCode1281题整数的各位积和之差-刷题打卡/index.html","ed0b79eb4e2e104cd002363e17a2b093"],["/2021/03/12/LeetCode172题阶乘后的零-刷题打卡/index.html","2c53b682bd8908217646915bb6da84ff"],["/2021/03/12/LeetCode331题验证二叉树的前序序列化-刷题打卡/index.html","1c7a4ca640ab07f835aa2396f9fd5304"],["/2021/03/13/LeetCode1550题存在连续三个奇数的数组-刷题打卡/index.html","682462768d8ca1467316d979d64989d2"],["/404.html","61276cc7e81a47e4544444797fa8d20b"],["/about/index.html","9c4aebf30bd4739830dae0b874d99281"],["/archives/2019/07/index.html","098860de0403d94a5e35e48798c6574e"],["/archives/2019/08/index.html","19e34ef78619b0f239ef61ee9fdcc3eb"],["/archives/2019/08/page/2/index.html","41cd211d21c6e07f745b6e1924010566"],["/archives/2019/09/index.html","d8be89727a2bee9b4c3fce19f8b313cb"],["/archives/2019/10/index.html","3b47d10f3036b9151012bb911f7c76d9"],["/archives/2019/11/index.html","73d8dbe5227bc0af12105ddc81693c89"],["/archives/2019/12/index.html","e2134556793627580dee2a30f6b0f867"],["/archives/2019/index.html","399a741c21244bc2c8c562c3ed7608cb"],["/archives/2019/page/2/index.html","3a869079c53069f386f0a542eaab93b9"],["/archives/2019/page/3/index.html","2401645d03ce4eef885e46d477b8fb6d"],["/archives/2019/page/4/index.html","ca7262cd2020b6b8f63c69e73f026ad2"],["/archives/2019/page/5/index.html","c66aae684832e9e6ed85e34b23d0e7e7"],["/archives/2020/01/index.html","94f41cae52553a665673f201f050f320"],["/archives/2020/02/index.html","8a88b0c5c136c313323eafe4b4e15fa2"],["/archives/2020/06/index.html","03bd40ee3655e3b4bc586a0b94e9ea25"],["/archives/2020/09/index.html","ad5f244004b94c52993ae84aecbb662b"],["/archives/2020/10/index.html","a78d8a1a2886970d4dc5bdbb66c4ff7c"],["/archives/2020/12/index.html","4895133d1a02379a238903c9955efee4"],["/archives/2020/index.html","00cc704660118a591b2486d57a74ac35"],["/archives/2020/page/2/index.html","797ec7cb0a9e9a1a13beb78821f54ac2"],["/archives/2020/page/3/index.html","d75a80b96ddef055243aea1cf483cfea"],["/archives/2021/03/index.html","3de0388693a4ad5cd76de6db7cb3b025"],["/archives/2021/03/page/2/index.html","9e7883571152318de688fa6ecabf0aa0"],["/archives/2021/03/page/3/index.html","67b083b416ab48e8cf8d235940d18984"],["/archives/2021/index.html","a2a147d618bb4921a19e75e1004fd126"],["/archives/2021/page/2/index.html","a4866e5ed76f682a5c84aef790d9315d"],["/archives/2021/page/3/index.html","694b2f74906babcafe713e2ee418284f"],["/archives/index.html","a1a7dd3c3dea3b64e8e1ab06e369e6cb"],["/archives/page/10/index.html","3fe9941f517152bbbc4f1f6b2e4b161e"],["/archives/page/2/index.html","9967e2e5d05ce5158dd815d8a27775d8"],["/archives/page/3/index.html","9e79bd1af5f781f4ad536eb6e416c083"],["/archives/page/4/index.html","e289139f8ce9c318c8555c1d9f9d3c5c"],["/archives/page/5/index.html","1f561520e3573fe923d771bd442656b2"],["/archives/page/6/index.html","d9664b0962c15e64b012675ca6dc6da1"],["/archives/page/7/index.html","09222071e47f4c388a139a618c9af9f1"],["/archives/page/8/index.html","92d09f5522432c66e61e17a8014da88a"],["/archives/page/9/index.html","93d4a534ca01f409002a4409b57f536f"],["/categories/CSS/index.html","471ce84abf63284796ec4924961f5d70"],["/categories/Docker/index.html","7386ac435652ce5da813cc344e7b83ff"],["/categories/Git/index.html","f6e58735c5578dc4797a272ae03b1e0b"],["/categories/H5/index.html","b4361382b7922a99fbb2fe28c447e6d7"],["/categories/HTTP/index.html","dcbd6829cdc169bb970023a6f55434c2"],["/categories/JavaScript/index.html","a2768d132139ceba3c73abec6883bb22"],["/categories/JavaScript/page/2/index.html","9640d715d6764a5111482ed7d934e0ed"],["/categories/JavaScript/page/3/index.html","5cf7f2a82b6e34e4f9862fd257788730"],["/categories/JavaScript/page/4/index.html","7646a2a47a0f5daf0232c1cff749b5ea"],["/categories/LeetCode/index.html","25be3eb106bf4ccedbd1d1db236f5f40"],["/categories/LeetCode/page/2/index.html","be3b638869960ce34c7748ca558856f6"],["/categories/LeetCode/page/3/index.html","0ab1300b4120f00b3e2f944031bac413"],["/categories/Linux/index.html","1d8beed0e51e0c2bd1b06756c5014b31"],["/categories/Node/index.html","5bc0c1ad20a909acd1c7fb06a75fc0ad"],["/categories/Vue/index.html","9d3e40fe8b650d36a4ab80c4d82dfbc1"],["/categories/Web/index.html","f8b3d69f38bbfef46d81ce4a25ad3fe4"],["/categories/Webpack/index.html","f86772cded2a50bbe5a215e01c5e3d01"],["/categories/hexo/index.html","5dd7d875301492d2516a4b3f8bf100c6"],["/categories/index.html","f1ab79c638521eb6155474b3480fb87d"],["/categories/nextcloud/index.html","af16aa3ad07d3a425d394c14d3a374fa"],["/categories/工具/index.html","24ed781697a9c38b71f43a00166b6298"],["/categories/微信小程序/index.html","0864c0495043dae8c4c702c174df4ad7"],["/categories/浏览器/index.html","14b9d2f61c279f7736602eefc9f5b210"],["/categories/面试题/index.html","57045d5f65a74ea62eb6370834b91611"],["/css/main.css","632b2618f08250206a2fc59b1b798d3d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.png","a585e37db015a0b6ff75b88cf4627ccc"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","ef1deb611102fe47a17645edd2b5aeab"],["/js/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","b18bc4dcfacc639dc3947db03fd13cb3"],["/lib/fancybox/source/jquery.fancybox.css","7e72b042400a0d27125fecefd582f14e"],["/lib/fancybox/source/jquery.fancybox.min.css","a7f8e540f2cdcd2d8165cf1810b4b84b"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","dfba6bc6f3d41287ff533085663d3fb5"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","ccbf4aed2b2a87e175253a4cb1b6139b"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","7fb4c32b0d595bc91b9f9ba02d0b7761"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","0b938a16b55d5287c2360132dc204a83"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","83aae793aa17b7281b12156e2dfcdda5"],["/page/2/index.html","4e57e9010e5810e09fc20a3af86ee2a2"],["/page/3/index.html","b17c553f6d8922bcf75df1eb0959aeb3"],["/page/4/index.html","8bf1a6743e1b5a846b9d9adb55fabeb1"],["/page/5/index.html","cc02f32d8aa3733d214c0fd9825fb44a"],["/page/6/index.html","b90d79fc87002f1b34b92166c2e52168"],["/page/7/index.html","27b51b52aee773bf40f23a5f6d848571"],["/page/8/index.html","594f75b6a0cd28ec2df4c60746a51ce2"],["/page/9/index.html","747afc2a095e1b3802551b23e3b9d2d3"],["/sw-register.js","b73d162addf3357377f5954aa9e66b74"],["/tags/CSS/index.html","b0e32b0846edd5cebd4173177a8e8fff"],["/tags/Docker/index.html","b08b244214f5e7c1df2752b3a6145861"],["/tags/Express/index.html","88cb10a0b8b77697ec83e0bd392d1612"],["/tags/Git/index.html","dd7f5e2405e606e09a94fe03d37bc7d9"],["/tags/GitLab/index.html","c06c2d9476cfed061f7d1159011bd284"],["/tags/Gitee/index.html","2f68582a40c2edf4c8cb484ef87b1f04"],["/tags/H5/index.html","db45d1888a0a3293830b4c8102aa0d6d"],["/tags/HTTP/index.html","30044292ddbf305d071440428b683d0a"],["/tags/JavaScript/index.html","f8a11d1d6f09670c53ab437018ed5099"],["/tags/JavaScript/page/2/index.html","9fc8b0e107750919c13dc14eb7ab7dde"],["/tags/JavaScript/page/3/index.html","ad0c05cabae84f8eda6cf997d2e96657"],["/tags/JavaScript/page/4/index.html","2b1dbeaea51e477e8e691eed24089fe0"],["/tags/Jenkins/index.html","c8096acb881be648597c1285e4dfaa69"],["/tags/LeetCode/index.html","2fe3c9f13d548a1ce25eaa2951b2ada5"],["/tags/LeetCode/page/2/index.html","070e2ec045292b4e25c540fa40de1f21"],["/tags/LeetCode/page/3/index.html","63c2f572ce1b3b2c9fefd277198479a6"],["/tags/Linux/index.html","5640531d2c958d57ba27b435f6730d32"],["/tags/MongoDB/index.html","2cae12123b80c2bfeb1b50306c09fa71"],["/tags/Nginx/index.html","0f38f9c92964cf69f60abb445a706e97"],["/tags/Node/index.html","49a47d62d41e0a0ee7dc6ce54c519eb1"],["/tags/Typora/index.html","26225192d1601ab490f5f6f4d39b30b8"],["/tags/Vue/index.html","49a3b6a8a3beb79a2a087d9b7a3e064d"],["/tags/Web/index.html","bd3f01d910015a4b947beab6044fec95"],["/tags/Webpack/index.html","80c39c339c6183c7b047dcf120ce4457"],["/tags/hexo/index.html","8161064932c6925678f61b944171a80c"],["/tags/index.html","cc4f1b08da6f756cf31a2b37e985b939"],["/tags/nextcloud/index.html","24e4d8b4ea623b1d780156e752899ae0"],["/tags/微信小程序/index.html","0ad6281ab3d4cfd146ef3f6b4f16d124"],["/tags/浏览器/index.html","180fc24c5584001cfcf57f77e57f51d0"],["/tags/算法/index.html","1d8ab6a6830b8085c75160a314236e4c"],["/tags/算法/page/2/index.html","6a1593d9c85af900f521dae4f0345b3e"],["/tags/算法/page/3/index.html","d4e13a024829385abc1d308792d324b7"],["/tags/面试题/index.html","3ef4d5e5aa9f86a0fc280ee6a29b8d09"],["/uploads/1024.png","b14832ba758c6bb757add198ae66cbef"]];
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
