// server.js 에서 파생된 것.
// app에서 돌아가는 것이기 때문에 app을 인자를 받아 app을 그대로 가져온다.
module.exports = function(app){
	app.get('/', function(req, res){
		res.render("index.html");
	});
}
