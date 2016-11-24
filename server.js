var http = require('http');  //使用http模块
//Node.js 中自带了一个叫做"http"的模块
//require请求这个模块并且把返回值赋给了http这个本地的变量
//http变量就变成了一个拥有http模块所提供的公共方法的对象
//一般为了方便 变量命名和模块名一样

function startServer(){
    http.createServer(function(request,response){

        //发送http头部
        //http状态值：200：OK
        //内容类型：text/plain
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write('我的弄的js');
        //发送响应数据 “hello world”
        response.end('hello world\n');
    }).listen(8080);

    console.log('server is running port is 80');
}

function test(){
    console.log('我是test函数');
}

function test1(){
    console.log('我是一个不导出的test函数');
}

exports.startServer = startServer;  //导出startServer这个函数
exports.test = test;  //导出test函数
// 我们把server封装成一个模块  可以在入口做统一的调用
