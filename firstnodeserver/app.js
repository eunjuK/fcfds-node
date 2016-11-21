var http = require("http");

// http Status(200): OK, send response "hello world"
// 웹 서버에는 요청과 응답만 있음
// 요청과 응답을 참조값으로 넣어줌
var app = http.createServer(function(request, response) {
	// response.writeHead(200, {"Content-Type": "text/plain"});
	// response.write("Hello world! \n");
	// response.end();
	console.log(request.url);

	if(request.url === "/") {
		response.write("This is HOME!");
		response.end();
	}

	// id 값에 따라 출력값이 달라지는 화면 설정
	var detailId = request.url.replace("/", "");
	if(detailId.length > 0) {
		response.write(detailId);
		response.end();
	}



}).listen(process.env.PORT || 3030);

// 서버가 동작했는지 확인하기위함.
// 습관적으로 적어주자.
// server listen
console.log("Server is running is running at localhost:3030");



