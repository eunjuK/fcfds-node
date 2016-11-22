var express = require('express');
var app = express();


app.set("port", process.env.PORT || 8080);

app.get('/', function(req, res){
	res.type("text/plain");
	res.send("Hello Express!!");
});

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
