var server = require("./server");
var router = require("./router");
var requestHandlers = require('./requestHandlers');

var handle = {};
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/upload"]=requestHandlers.upload;
server.test();
//server.test1();   //该函数没有导出，所以undefined is not a function
server.startServer(router.route,handle);   //将route传入
