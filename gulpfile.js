var gulp = require("gulp");
var uglify = require("gulp-uglify");
var rename=require("gulp-rename");

gulp.task("scripts",function(){
	gulp.src("gulpfile.js") 
	.pipe(gulp.sedt("dist/js"))
	.pipe(uglify())
	.pipe(rename("gulpfile.min.js"))
	.pipe(gulp.dest("dist/js"));
})
