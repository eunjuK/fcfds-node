module.exports = function(app){
	app.get('/kikiki', function(req, res){
		res.render("kikiki.html");
	});
}
