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

function detail(request, response) {
	
}

// 
module.exports.home = home;
module.exports.detail = detail;
