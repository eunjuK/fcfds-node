// 모든 동작에 관한 설정을 이곳에서 함

var express = require('express');
var app = express();

// app의 구조가 넘어간다는 의미
// app을 여기서 넘겨주기 때문에 main.js 파일에서 require 할 필요가 없다.
var indexRouter = require("./routes/main")(app);
var aboutRouter = require("./routes/about")(app);
var kikikiRouter = require("./routes/kikiki")(app);

app.set("port", process.env.PORT || 8080);

/*
app.get('/', function(req, res){
	res.type("text/plain");
	res.send("Hello Express!!");
});
*/


// view로 보여지는 파일이 모여있는 폴더
// 동적인 디렉토리명 뒤에 /views라는 폴더가 있으면 html로 인식하라
// __dirname == 동적인 디렉토리명
// views앞에 디렉토리명은 항상 바뀌므로. __dirname을 사용함.
app.set("views", __dirname + "/views");

// ejs모듈이 html과 가장 비슷하여 사용.
// view engine을 ejs로 사용하겠다.
app.set("view engines", "ejs");

// ejs에서 파일 렌더링을 한 다음 html을 가져옴
app.engine("html", require("ejs").renderFile);


// status 이기 때문에 따로 인자를 받아오는 것은 없음
app.use(function(req, res){
	res.type("text/plain");
	res.status("404");
	res.send("404 - Not Found");
});

app.use(function(req, res){
	res.type("text/plain");
	res.status("500");
	res.send("500 - Server Error");
});

app.listen(app.get("port"), function(){
	console.log("First express Server is running at localhost:" + app.get("port"));
});
