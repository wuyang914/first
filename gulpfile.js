const gulp = require("gulp");
// const sass=require('gulp-sass');


gulp.task("copy",async()=>{
	gulp.src("./**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\weiershop"));
});

//监听所有
// gulp.task("watchall", async ()=>{
// 	//监听sass
//     gulp.watch("sass/**/*",async ()=>{
//         gulp.src("sass/**/*")
//         .pipe(sass())
//         .pipe(gulp.dest("D:\\phpStudy\\WWW\\weiershop\\css"))
// 	})
	//监听js
	// gulp.watch("js/*.js",async ()=>{
	// 	gulp.src("js/*.js")
	// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\weiershop\\js"))
// 	// });
// })



