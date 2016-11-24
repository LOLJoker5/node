// 路由 模块
function route(handle,pathname){
	console.log('About to route a request for'+pathname);

	// 判断该路由的类型
	if (typeof handle[pathname] === 'function') {
	   return handle[pathname]();
	 } else {
	   console.log("No request handler found for " + pathname);
	   return "404 not found";
	 }
}

exports.route = route; //导出路由
