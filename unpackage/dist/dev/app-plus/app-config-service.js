
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/search/search","pages/messagecenter/messagecenter","pages/order/order","pages/assign/assign","pages/assignWin/assignWin","pages/orderDetail/orderDetail","pages/notice/notice","pages/noticeDetail/noticeDetail","pages/review/review","pages/subscribe/subscribe","pages/subDetail/subDetail","pages/turnover/turnover"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#f6f6f6"},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"婚匠","compilerVersion":"3.5.3","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/messagecenter/messagecenter","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/order/order","meta":{},"window":{"navigationBarTitleText":"我的订单","enablePullDownRefresh":false}},{"path":"/pages/assign/assign","meta":{},"window":{"navigationBarTitleText":"指派人员","enablePullDownRefresh":false}},{"path":"/pages/assignWin/assignWin","meta":{},"window":{"navigationBarTitleText":"指派结果","enablePullDownRefresh":false}},{"path":"/pages/orderDetail/orderDetail","meta":{},"window":{"navigationBarTitleText":"订单详情","enablePullDownRefresh":false}},{"path":"/pages/notice/notice","meta":{},"window":{"navigationBarTitleText":"公告列表","enablePullDownRefresh":false}},{"path":"/pages/noticeDetail/noticeDetail","meta":{},"window":{"navigationBarTitleText":"公告详情","enablePullDownRefresh":false}},{"path":"/pages/review/review","meta":{},"window":{"navigationBarTitleText":"酒店评论","enablePullDownRefresh":false}},{"path":"/pages/subscribe/subscribe","meta":{},"window":{"navigationBarTitleText":"预约看店","enablePullDownRefresh":false}},{"path":"/pages/subDetail/subDetail","meta":{},"window":{"navigationBarTitleText":"预约详情","enablePullDownRefresh":false}},{"path":"/pages/turnover/turnover","meta":{},"window":{"navigationBarTitleText":"营业额录入","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
