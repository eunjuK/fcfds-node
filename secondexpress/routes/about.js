module.exports = function(app){
	app.get('/about', function(req, res){
		// body 안에 text 값만 넣어짐
		// res.write()와 res.end() 를 한 것과 같다.
		// res.send("about page.");

		res.render("about.ejs");
	});
}

