var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');


gulp.task("hello", function() {
	return console.log("hello!");
});

gulp.task("gulpworld", ["hello"], function(){
	return console.log("gulpworld.");
});

/*
gulp.task("uglify", function(){
	return gulp.src("./public/src/*.js").pipe(uglify()).pipe(gulp.dest("./public/dest/js/"));
});
*/

gulp.task("compress", ["gulpworld"], function(cb){
	pump([
		gulp.src("./public/src/js/*.js"),
		uglify(),
		gulp.dest("./public/dest/js/")
	], cb);
});

gulp.task("default", ["compress"]);


