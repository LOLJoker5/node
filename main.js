var server = require("./server");

server.test();
//server.test1();   //该函数没有导出，所以undefined is not a function 
server.startServer();
