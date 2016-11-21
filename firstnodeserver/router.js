// 파일을 불러오거나, 입출력하기 위해 'fs'파일을 불러옴
var fs = require('fs');


function home(request, response) {
	if(request.url ==="/") {
		// fs 파일을 가져옴
		fs.readFile("./layout/home.html", function(err, data){
			response.write(data);
			response.end();
		});
	}
}

/*
function detail(request, response) {
	var detailId = request.url.replace("/", "");
	if(detailId.length > 0) {
		fs.readFile("./layout/about.html", function(err, data){
			response.write(data);
			response.end();
		});
	}
}*/

function about(request, response) {
	if(request.url === "/about") {
		fs.readFile("./layout/about.html", function(err, data) {
			response.write(data);
			response.end();
		});
	}
}

function fastcampus(request, response) {
	if(request.url == "/fastcampus") {
		fs.readFile("./layout/fastcampus.html", function(err, data) {
			response.write(data);
			response.end();
		});
	}
}


// 
module.exports.home = home;
// module.exports.detail = detail;
module.exports.about = about;
module.exports.fastcampus = fastcampus;
