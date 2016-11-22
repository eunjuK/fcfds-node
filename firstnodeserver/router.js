// 파일을 불러오거나, 입출력하기 위해 'fs'파일을 불러옴
var fs = require('fs');
var renderer = require("./renderer");



function home(request, response) {
	if(request.url ==="/") {
		// 11. 21.
		// fs 파일을 가져옴
		//fs.readFile("./layout/home.html", function(err, data){
		//	response.write(data);
		//	response.end();
		//});

		// 11. 22
		/*
		var baseResource = fs.readFileSync("./layout/layout.html", "utf8");
		var headerResource = fs.readFileSync("./layout/partials/header.html", "utf8");
		var footerResource = fs.readFileSync("./layout/partials/footer.html", "utf8");
		var homeResource = fs.readFileSync("./layout/home.html", "utf8");

		baseResource = baseResource.replace("{% header %}", headerResource);
		baseResource = baseResource.replace("{% footer %}", footerResource);
		baseResource = baseResource.replace("{% content %}", homeResource);

		response.write(baseResource);
		response.end();
		*/

		return renderer(request, response, "home");
	}
}

/*
function detail(request, response) {
	var detailId = request.url.replace("/", "");
	if(detailId.length > 0) {
		// 11. 21
		
		fs.readFile("./layout/about.html", function(err, data){
			response.write(data);
			response.end();
		});

	}
}*/

function about(request, response) {
	if(request.url === "/about") {
		// 11.21
		/*
		fs.readFile("./layout/about.html", function(err, data) {
			response.write(data);
			response.end();
		});
		*/

		return renderer(request, response, "about");
	}
}

function fastcampus(request, response) {
	if(request.url == "/fastcampus") {

		// 11. 21
		/*
		fs.readFile("./layout/fastcampus.html", function(err, data) {
			response.write(data);
			response.end();
		});
		*/

		return renderer(request, response, "fastcampus");
	}
}


// 
module.exports.home = home;
// module.exports.detail = detail;
module.exports.about = about;
module.exports.fastcampus = fastcampus;
