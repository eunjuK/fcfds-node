module.exports = function(app) {
	// 16.11.24
	var http = require('http').Server(app);
	var io = require('socket.io')(http);

	app.get('/chat', function(req, res){
		res.render("chat.ejs");
	});

	io.on("connection", function(socket){
		console.log("New user connected!");

		socket.on("chat message", function(msg){
			console.log("message: " + msg);
			io.emit("chat message", msg);
		});

		socket.on("disconnect", function(){
			console.log("User disconnected");
		});
	});

	http.listen(process.env.PORT || 8080, function(){
		console.log("Chat Server is running...");
	});


	// 16.11.23
	/*
	var http = require('http').Server(app);
	var io = require('socket.io')(http);

	app.get('/chat', function(req, res){
		res.render("chat.ejs");
	});
	io.on("connection", function(socket){
		console.log("new user is connected!!");
	});
	// 다른곳에서 3000번으로 들어온 사람과 연결
	http.listen(3000, function(){
		console.log("Chat server is listen on 3000");
	});


	// app.get('/chat', function(req, res){
	//	res.send("chat server start");
	// });
	*/
}
