module.exports = function(app){
	var users = [
		{id:'1', name:'John Doe', email:'john@gmail.com'},
		{id:'2', name:'Park', email:'park@gmail.com'},
		{id:'3', name:'Kim', email:'kim@gmail.com'},
		{id:'4', name:'Jin', email:'jin@gmail.com'},
		{id:'5', name:'Kwon', email:'kwon@gmail.com'},
		{id:'6', name:'Tei', email:'tei@gmail.com'},
		{id:'7', name:'Joy', email:'joy@gmail.com'},
		{id:'8', name:'Sola', email:'sola@gmail.com'},
		{id:'9', name:'Moon', email:'moon@gmail.com'},
		{id:'10', name:'Doe', email:'doe@gmail.com'}
	];

	app.get('/users', function(req, res){
		//res.send("This is users");

		res.json(users);
	});

	app.get('/users/random', function(req, res){
		var n = Math.floor(Math.random() * users.length);
		var u = users[n];
		res.json(u);
	});

	app.get('/users/:id', function(req, res){
		if(users.length < req.params.id || req.params.id <= 0){
			// 우리가 404를 주입함
			res.statusCode = 404;
			return res.send("404 - Not Found, Choose 1 to 10");
		}

		var u = users[req.params.id - 1];
		res.json(u);
	});

}
