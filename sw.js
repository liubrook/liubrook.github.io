/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/31/hello-world/index.html","178ebd5828cd872b38c5059070c4d567"],["/2019/08/01/Git常用命令/index.html","5a37d377466c9f471696fcb09333b82a"],["/2019/08/02/常用正则表达式/index.html","aac60edadd1896609a783b55c11daf9b"],["/2019/08/03/通用字体重量对应的font-weight值/index.html","ec3d04ec433b211381de4fc6b47816f9"],["/2019/08/04/H5移动端开发中一些小技巧/index.html","a6a040fe9d28c33395da687491c65772"],["/2019/08/04/vue中监听浏览器关闭方法/index.html","d828a8f24bcc75b8f6e416c7d7ee22a5"],["/2019/08/05/阿拉伯数字转中文/index.html","a25d332a10658c52e996fb52ac8b9391"],["/2019/08/09/Javascript数组工具函数/index.html","58413798934ff0782c1c95c67cc6602d"],["/2019/08/12/CSS一些易忘的常用点/index.html","c5545381e857d93941471ee958499ad8"],["/2019/08/13/Javascript-1-DOM/index.html","078462bd011ef2cd3f9d8a88c9c96313"],["/2019/08/15/Javascript-2-script/index.html","5eb47444fff91a8c0690ac190d336f54"],["/2019/08/20/Javascript-3-数据类型/index.html","f62e2a6a555cc924e7737c8c8dae5a80"],["/2019/08/23/Javascript-4-操作符/index.html","9f67e46fa196a0ee63d7fd30b741db83"],["/2019/08/24/Javascript-5-语句/index.html","1623ba3be42c081e74ae16708f720c5a"],["/2019/08/28/Javascript-6-基本类型和引用类型的值/index.html","835dc20e9de7f7580f60b6b791b41086"],["/2019/08/30/HTTP响应状态码说明/index.html","0c72564b2aa36010c5122e164d9fa89c"],["/2019/08/31/javascript-7-执行环境及作用域/index.html","f726d47f5c5d4fb7223d2960bb5d75e6"],["/2019/09/01/Javascript-8-垃圾收集/index.html","7841db09d2461c54c49eb83f963590e8"],["/2019/09/02/Javascript-9-引用类型-1/index.html","ed25b16883ea1bfbb8915f4d5423ac0c"],["/2019/09/10/Javascript-9-引用类型-2/index.html","e2b5eeab162b6fc9e1c861a29a41c9f8"],["/2019/09/14/Javascript-9-引用类型-3/index.html","9831143782b5c8c42cde1c8dd52b58d5"],["/2019/09/20/Javascript-9-引用类型-4/index.html","aa99316eadcbcba0e75598bb0ea3ac4a"],["/2019/09/21/Javascript-9-引用类型-5/index.html","b0ea05225273917b51528ad945133d28"],["/2019/09/22/javascript-10-面向对象-1/index.html","7f916a398f2d84859ffc468195042214"],["/2019/09/25/Javascript-10-面向对象-2/index.html","57f9ef9f6a88ee2eb2436bf043e6a618"],["/2019/09/29/用nextcloud搭建个人网盘/index.html","ed4cb3f6127bf16c54d64e4a1f16004e"],["/2019/10/03/Javascript-10-面向对象-3/index.html","f52a1c380cf8dbd1454aa2ff091842b4"],["/2019/10/07/hexo-next-日常问题解决方案/index.html","303ec79fd4a54f6f463c0fd3ad11ad9c"],["/2019/10/14/Javascript-11-函数表达式-1/index.html","01dc6ad16823f17709b140a3bf06d141"],["/2019/10/16/Javascript-11-函数表达式-2/index.html","e55fb50b0dc77072edb18cd1aaa2f363"],["/2019/10/21/Web安全问题和解决方案/index.html","6e8f1d7a59765b63fa628c3dcdadee82"],["/2019/10/25/Javascript-12-BOM-1/index.html","7db0d20f83e6808274ea888d4fa5b28d"],["/2019/11/02/Javascript-12-BOM-2/index.html","da32701f2d531f22122fafbb456b96c7"],["/2019/11/03/Javascript-13-客户端检测/index.html","583b8e055bdb69e9ddf9aff69c5ec648"],["/2019/11/07/Javascript-14-DOM-1/index.html","73cc139bca859779c6de8072b74c8733"],["/2019/11/18/Javascript-14-DOM-2/index.html","27dfd1a6e48b6b822fbfdb9344588191"],["/2019/11/24/Javascript-14-DOM-3/index.html","3ca67cf4b665d4cef409a87603c2e633"],["/2019/11/28/Javascript-14-DOM-4/index.html","b7f1ad740e97252fe236e8348749937a"],["/2019/12/04/Javascript-15-DOM-1/index.html","a5e40669cea3a35a6315c88a2bc2601b"],["/2019/12/05/Javascript-15-DOM-2/index.html","fe272dc9b27c345fc3ec9f1a310df30d"],["/2019/12/15/Javascript-15-DOM-3/index.html","0af5700e575f08a2d75e1e46d8bdb0d8"],["/2019/12/20/Javascript-15-DOM-4/index.html","1cef2371ee7139ebe785193a91ba848f"],["/2019/12/24/微信小程序常见问题-1/index.html","69489bdd82e3fe808b12d1abe9b12e4b"],["/2019/12/27/Linux下安装node/index.html","c5541cf912424bee6dba4b7f15d7381b"],["/2019/12/28/JS计算精度丢失问题/index.html","fa85307a749b40d0537a76f164434cbd"],["/2020/01/02/前端常见面试题-1/index.html","1bb61123f3687848e927bd3ebf5234cf"],["/2020/01/05/Javascript数组去重/index.html","c29cc4ec4c3f7926fb5c6907fc4d3cdd"],["/2020/01/15/浏览器输入URL后发生了什么？/index.html","c110f93ac75e8d9de3c681e71fc977cc"],["/2020/01/18/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（一）/index.html","63d032f31b10d288bc99ca5416f587fa"],["/2020/01/20/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（二）/index.html","0de7314df5f7d1e7b15b2d3d982d0ee7"],["/2020/01/26/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（三）/index.html","3240608ac6596b7cc4960aed571d96fd"],["/2020/01/28/响应式布局的常用解决方案对比-媒体查询、百分比、rem和vw-vh/index.html","4602bf0e12a316c2b90f0152ebbcf014"],["/2020/01/30/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（四）/index.html","a141a9c6afb5509f893ee45ab66f8d73"],["/2020/02/02/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（五）/index.html","09ef23934fc20d5b0f08de724930ef2b"],["/2020/02/05/从零到部署：用-Vue-和-Express-实现迷你全栈电商应用（六）/index.html","d6e9c485270fb309f1165aed433b5726"],["/2020/06/26/Linux基础教程/index.html","37e3e9c6cab8089afaafa2e08de71ab0"],["/2020/09/18/Webpack上传腾讯云/index.html","9bea5af1765f15ae8466b3a6e430f5fa"],["/2020/10/07/Docker简单上手01/index.html","67a8bad487b8ed44e372528cb2d06896"],["/2020/10/08/Docker简单上手02/index.html","58a4b38edd0fd7ef357d4bac1843e939"],["/2020/10/09/Docker简单上手03/index.html","c6fa0cd183a96d7f7bc7e399ecf7ddc9"],["/2020/10/09/Hexo写作样式简介/index.html","3c3d2b6da8b2e59636d988c765e8fb09"],["/2020/10/13/Express-MongoDB搭建图片分享社区一/index.html","30b0dd694be6f1fe5b79c60d7dd60356"],["/2020/10/14/Express-MongoDB搭建图片分享社区二/index.html","f0ebcbfc3e63f829e51d5954969e8572"],["/2020/12/02/Typora-Vue主题-Gitee图床轻松写文章/index.html","dfd6b5b720106a6cec3f925d7585673b"],["/2020/12/03/Docker超详细基础教程/index.html","60d4d6b37114f15eb0936e689b864a3c"],["/2020/12/03/Nginx基础教程/index.html","585112f27c14284bc21ad38291e574f7"],["/2021/03/01/LeetCode0303题区域和检索-数组不可变-刷题打卡/index.html","f30c64ad4155e8da4a81253079373220"],["/2021/03/01/LeetCode1200-最小绝对差-刷题打卡/index.html","c3442b53bec3d80681aa959d5f24547c"],["/2021/03/02/LeetCode0304题二维区域和检索-矩阵不可变-刷题打卡/index.html","740677c1e2139835b1e2a2b05e555d9c"],["/2021/03/02/LeetCode11题盛最多水的容器-刷题打卡/index.html","e63bc6f8f006d82674694d37ce21a088"],["/2021/03/03/LeetCode0338题比特位计数-刷题打卡/index.html","23e098ffefb5ae6c89f4fd5d96e82ce6"],["/2021/03/03/LeetCode209题长度最小的子数组-刷题打卡/index.html","f12576f7f5904c81cc8b27d4524b2347"],["/2021/03/04/LeetCode141题环形链表-刷题打卡/index.html","5539b1c43128eff98c4ca986e9aada1f"],["/2021/03/04/LeetCode236题二叉树的最近公共祖先-刷题打卡/index.html","0bc024af0e0b33d7a97969f979a26ad6"],["/2021/03/05/LeetCode48题旋转图像-刷题打卡/index.html","379537281f24b1fbee0ff7ce53108439"],["/2021/03/05/LeetCode53题最大子序和-刷题打卡/index.html","7a2e3f510280dd709b3129a8ca9c1912"],["/2021/03/07/LeetCode155题最小栈-刷题打卡/index.html","97a3fa4b76994965446645b6f7d97af3"],["/2021/03/08/LeetCode1124题表现良好的最长时间段-刷题打卡/index.html","8a7cb2c31fbb44732fde9e6294e809a1"],["/2021/03/08/LeetCode274题H指数-刷题打卡/index.html","2021aa7f5293626e1a3dbc65c7c96960"],["/2021/03/08/LeetCode367题有效的完全平方数-刷题打卡/index.html","75182a902670c13469fb621d3458257d"],["/2021/03/09/LeetCode1047题删除字符串中的所有相邻重复项-刷题打卡/index.html","db70c4bbf36b89692aac0334a6aefb0b"],["/2021/03/09/LeetCode1438题绝对差不超过限制的最长连续子数组-刷题打卡/index.html","4d2e7d5507c6833ab039179d421ad513"],["/2021/03/09/LeetCode160题相交链表-刷题打卡/index.html","b2f5b6595119e812085ce425ee897f86"],["/2021/03/10/LeetCode434题字符串中的单词数-刷题打卡/index.html","86e83336c72cee2010a47224291da943"],["/2021/03/10/LeetCode513题找树左下角的值-刷题打卡/index.html","0c7a9cb0053c09841f5fdc4e87d08265"],["/2021/03/10/LeetCode75题颜色分类-刷题打卡/index.html","4c9c7ffb392857a37f098658816ee5ab"],["/2021/03/11/LeetCode617题合并二叉树-刷题打卡/index.html","0429072a0e581cf61eaa8b322db98892"],["/2021/03/11/LeetCode94题二叉树的中序遍历-刷题打卡/index.html","dc3849ff3a294e618da2ae6a89bb595d"],["/2021/03/12/LeetCode1281题整数的各位积和之差-刷题打卡/index.html","d866787155d6084071feda5530c980e8"],["/2021/03/12/LeetCode172题阶乘后的零-刷题打卡/index.html","22c573cc342717c53036dbf273ff8709"],["/2021/03/12/LeetCode331题验证二叉树的前序序列化-刷题打卡/index.html","4d01489a9face7f1cbc666f766f56d76"],["/2021/03/13/LeetCode1550题存在连续三个奇数的数组-刷题打卡/index.html","61ee9e984da313ffc476a54b81c87c82"],["/2021/08/10/CentOS7系统中mysql8安装配置/index.html","3365a5b84ec3ab9e16a985f4e4f75271"],["/404.html","edcea95d787f3f3c704760f946e1f09e"],["/about/index.html","9b9c5373ebf6950226a14e717e56a6ba"],["/archives/2019/07/index.html","be786fdc5d45a96a20cbf9679c919b68"],["/archives/2019/08/index.html","8ed876f9fe53b22e9d49f63b71fca6aa"],["/archives/2019/08/page/2/index.html","09714e1cd37df05eecfb5b3852c7f28e"],["/archives/2019/09/index.html","19f1e0e626e7edb4d288e32e4677fe5e"],["/archives/2019/10/index.html","b6da38621ac4d9ba1b19ee4471dacad0"],["/archives/2019/11/index.html","fbfc2458ebd2d9a0492aa317b0ac0268"],["/archives/2019/12/index.html","08f17bc1f5a5c0c0b8fefa987c194688"],["/archives/2019/index.html","5cd1c17e40b2d2a0de361236d55d3af7"],["/archives/2019/page/2/index.html","98f7b9851f879610dbea642e045b22c1"],["/archives/2019/page/3/index.html","ba6db22cd21f6bff5bbd163414de3034"],["/archives/2019/page/4/index.html","60be89cf5f011244d142fee3d740d118"],["/archives/2019/page/5/index.html","41c1432ca2b2302577bbe0bd8a2cd35a"],["/archives/2020/01/index.html","e51932b8b69937270155313318bbbfe3"],["/archives/2020/02/index.html","4f1b5bef02f39a520f9a4f1b6a552eaf"],["/archives/2020/06/index.html","a3c20b01983c02921ca5f860620c086b"],["/archives/2020/09/index.html","7572f82c8dd6e830f8374be631c7f7b0"],["/archives/2020/10/index.html","5bf02fa7c546bdded7262cd71faf78f5"],["/archives/2020/12/index.html","1f669f7870ab5c1b2d83f7459f85a2b4"],["/archives/2020/index.html","f750f35cf0215d2639a4f518096aca20"],["/archives/2020/page/2/index.html","dfa9850703228c285b6d9c100d275d2a"],["/archives/2020/page/3/index.html","ffc50b0a72a8d2768ba79bd91068ddfd"],["/archives/2021/03/index.html","2615e8be4621286717bdc65876a287cb"],["/archives/2021/03/page/2/index.html","6cc35cef621fe3c1ba870e3decb65eb9"],["/archives/2021/03/page/3/index.html","cc179795de3a9db302f4f842d209ea62"],["/archives/2021/08/index.html","223094315b2d6afc7dd69f061f3f4301"],["/archives/2021/index.html","0bf6f473db0e96b3c5d1dd8592489673"],["/archives/2021/page/2/index.html","ac108a1b1daffe5af0c589e64c386c40"],["/archives/2021/page/3/index.html","66cb0d7f6392ab27e2822d46abf4e158"],["/archives/index.html","6f915f166acfcc1954a02be541144eb5"],["/archives/page/10/index.html","82c41498d38596f38a05bcd18cf38c92"],["/archives/page/2/index.html","4e7a3415ce85b889e585a64bcc52814b"],["/archives/page/3/index.html","636ea8fd8ef664e64df115306c1ab288"],["/archives/page/4/index.html","6daa06a12a4a1fcea49cde59ec823dd6"],["/archives/page/5/index.html","f1cc8d932a76fd678b9174081355a895"],["/archives/page/6/index.html","974f4b58e1c00d2ec6c1ba60b29b8218"],["/archives/page/7/index.html","8c92e65ffd96d8886886a98fb848df4c"],["/archives/page/8/index.html","80cca486719edb0ca4b4e58877ab47a8"],["/archives/page/9/index.html","994f8137bd91f8f3c4cb805ccc777035"],["/categories/CSS/index.html","443a42c8407840b9e56a0e28933d9a2a"],["/categories/Docker/index.html","61191fdbe3503218ffec9cc92a7dbc2e"],["/categories/Git/index.html","9e972b46129480acb4743d51189b9a92"],["/categories/H5/index.html","e639db6338c179a63fc560dae3674eac"],["/categories/HTTP/index.html","fe6d17e96a20faf25f17f8e4bbcf5a6d"],["/categories/JavaScript/index.html","b0178a1f62766a9412fe95f50d8501f8"],["/categories/JavaScript/page/2/index.html","ec23de524ef24b0ea52ba3b0b53b138e"],["/categories/JavaScript/page/3/index.html","f0a845df3db80a8ba376909a89a1b070"],["/categories/JavaScript/page/4/index.html","a1912df8115e81dc4c70c6a7cfe394e5"],["/categories/LeetCode/index.html","b070366fca564f892c072686dffea94d"],["/categories/LeetCode/page/2/index.html","8de5b46e9eb8491a9ad18836e0649228"],["/categories/LeetCode/page/3/index.html","32f77159b5934a3d9e53ebbaaf70972d"],["/categories/Linux/index.html","2c5e8b4ae80e595db6e11cd4afccb694"],["/categories/Node/index.html","883dc78ceba61c4703fcc1c372a79fed"],["/categories/Vue/index.html","d3da0a2c2d417b8497149efc7322560e"],["/categories/Web/index.html","141ee31266594c16c6bd0e18f759da03"],["/categories/Webpack/index.html","95d21df91f660c19973328bee8867e18"],["/categories/hexo/index.html","0810bc913b2e0239aa438a668a3e02b4"],["/categories/index.html","53b50396f12410c55adcc6573d9bb5f1"],["/categories/nextcloud/index.html","ea5dca129bc8aa08e9258d4d2398b857"],["/categories/工具/index.html","0b4461a25a4ade478352710fc4c60575"],["/categories/微信小程序/index.html","01e32751af4f13d1cf59b88821ec6cdf"],["/categories/浏览器/index.html","628641e7ca3979974325fd2104592932"],["/categories/面试题/index.html","631677e7496e4287a4b169c2a65b01ea"],["/css/main.css","632b2618f08250206a2fc59b1b798d3d"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.png","a585e37db015a0b6ff75b88cf4627ccc"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/index.html","92500b1bda81a10d1fcc8b93b93af507"],["/js/clicklove.js","19be90ba392fa4530e59588ceea51517"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/fancybox/README.html","b18bc4dcfacc639dc3947db03fd13cb3"],["/lib/fancybox/source/jquery.fancybox.css","7e72b042400a0d27125fecefd582f14e"],["/lib/fancybox/source/jquery.fancybox.min.css","a7f8e540f2cdcd2d8165cf1810b4b84b"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/all.min.css","dfba6bc6f3d41287ff533085663d3fb5"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","ccbf4aed2b2a87e175253a4cb1b6139b"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","7fb4c32b0d595bc91b9f9ba02d0b7761"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","0b938a16b55d5287c2360132dc204a83"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/10/index.html","e44553eddd0dc2e46b15e484f7c2c1b3"],["/page/2/index.html","27a965c5de59799b925592bc99637f3d"],["/page/3/index.html","ed1c3fc6100ba1e78f93f0cc80bdb199"],["/page/4/index.html","4ac05e73a90a3d0ffb968a06dca86e0e"],["/page/5/index.html","b130463413d46046d49131d13c0194b3"],["/page/6/index.html","8eb5dc7df98c359b68832c11278f2be9"],["/page/7/index.html","07f867315ff0b9cafef4e578351f0c77"],["/page/8/index.html","1562824d5a39d78ad62b151f9fbbb354"],["/page/9/index.html","28a9d8eac3dd5e97d26db4c5cc663a73"],["/sw-register.js","c859730aaa84de426270e98b690f6947"],["/tags/CSS/index.html","d9ef7c9741a3aa17257b16a96023ccd3"],["/tags/Docker/index.html","94bc26b1999e61a3a486bbb8da6d2937"],["/tags/Express/index.html","5a202c99c4c2828f5c0f4c983696ebf7"],["/tags/Git/index.html","1060ab19238bf521d715a4e09afb9527"],["/tags/GitLab/index.html","48b180c73d7430c9722d021837aab051"],["/tags/Gitee/index.html","f7406378f624c7702f039d1066fa65ef"],["/tags/H5/index.html","a3eeca118190a44816d3f45d74723a56"],["/tags/HTTP/index.html","6b52fe466772af713c4d6ff3076fd035"],["/tags/JavaScript/index.html","dba678f701e7ab143ae9e7a23572a152"],["/tags/JavaScript/page/2/index.html","bfb6067872830e7738679a96da79f521"],["/tags/JavaScript/page/3/index.html","67b95f0db17c6eaec88336e2cdc99483"],["/tags/JavaScript/page/4/index.html","0d717b95a8a0a160a8b2b3b56857d351"],["/tags/Jenkins/index.html","a0fc2ead28cb0b3c965af77645627383"],["/tags/LeetCode/index.html","a612ddf5fefc027ed635937de74339b7"],["/tags/LeetCode/page/2/index.html","09a1e191e493b053b3bbceef449d6539"],["/tags/LeetCode/page/3/index.html","db75295dad3c096fb54e400ec29afce0"],["/tags/Linux/index.html","be95a36eddff3b31c8bc0d31c7aaac7d"],["/tags/MongoDB/index.html","8e9595f5959a5091ad67eb61891c2a9d"],["/tags/MySQL/index.html","8c888d80495f40f3542cbf8bc3873b76"],["/tags/Nginx/index.html","d9b04e32427a7f4708e62032cfdc059a"],["/tags/Node/index.html","95aadea99d613d5ed42525e7e4fd6bf2"],["/tags/Typora/index.html","d5cfef86437964d965626390e512e8fc"],["/tags/Vue/index.html","41e7710ea099f699857bb91f2cc4b763"],["/tags/Web/index.html","cebaaba72b4d00921e8430b8ea4f907f"],["/tags/Webpack/index.html","1b95dcfa3997b3eece8debebc202adec"],["/tags/hexo/index.html","e3879340a0a3ce28d9f52ccb7c491a4c"],["/tags/index.html","cc54b43565b488fdd6e93dc781883b72"],["/tags/nextcloud/index.html","268deaab812600abaf200e03bc91dcd8"],["/tags/微信小程序/index.html","07269dc1245879fef3b55b005f0494fa"],["/tags/浏览器/index.html","1325a3164fa3d003b695b49aacc86615"],["/tags/算法/index.html","d45a2fb071e6531c7667217cdabbed43"],["/tags/算法/page/2/index.html","838de13af84268fea70409f55a6658e1"],["/tags/算法/page/3/index.html","7f470282f47654984b016ca2df2c1c22"],["/tags/面试题/index.html","405bb0bb29cb139430e04a18c01bca01"],["/uploads/1024.png","b14832ba758c6bb757add198ae66cbef"]];
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
