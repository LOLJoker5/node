var http = require('http');  //使用http模块
//Node.js 中自带了一个叫做"http"的模块
//require请求这个模块并且把返回值赋给了http这个本地的变量
//http变量就变成了一个拥有http模块所提供的公共方法的对象
//一般为了方便 变量命名和模块名一样
var url = require('url');

function startServer(route,handle){   //将route函数以参数的方式传入
    http.createServer(function(request,response){
        // var pathname = url
        //发送http头部
        //http状态值：200：OK
        //内容类型：text/plain
        var pathname = url.parse(request.url).pathname;
        console.log("Request for"+pathname+"   received.");
        // route(handle,pathname);

        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write(route(handle,pathname));

        //发送响应数据 “hello world”
        response.end();

    }).listen(8080);

    console.log('server is running port is 80');
    // console.log('url模块'+JSON.parse(url));
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
