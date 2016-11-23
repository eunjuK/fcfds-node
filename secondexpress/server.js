var express = require('express');
var app = express();

var indexRouter = require("./routes/index")(app);
var aboutRouter = require("./routes/about")(app);
var userRouter = require("./routes/users")(app);


app.set("port", process.env.PORT ||3030);
// views for rendering
app.set("views", __dirname + "/views");
// view engine을 ejs 하는 순간 자동으로 ejs를 렌더링 해줌
// view engine을 ejs로 사용하겠다.
app.set("view engine", "ejs");
// 
app.engine("html", require('ejs').renderFile);


// routes 폴더에 index.js 파일로 분리
/*
app.get('/', function(req, res){
	res.send("hello second express!!");
});
*/


// express.static이 public 폴더에 있고 그것을 사용하겠다.
// public for express static files
app.use("/public", express.static(__dirname + "/public"));


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
	console.log("Second Express Server is running at localhost:" + app.get("port"));
});
