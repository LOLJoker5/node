function start(){
	console.log('Request handler start is called');
	return "hello start";
}

function upload(){
	console.log('Request handler upload is called');
	return "hello upload";
}

exports.start = start;
exports.upload = upload;
