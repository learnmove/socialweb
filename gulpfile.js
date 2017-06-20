var gulp =require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
gulp.task('css',function(){
	 
return gulp.src(['./sasss/*.scss'])	
.pipe(plugins.sourcemaps.init())
.pipe(plugins.sass().on('error',plugins.sass.logError))
.pipe(plugins.autoprefixer())
.pipe(plugins.sourcemaps.write())
.pipe(gulp.dest('./dist'))
.pipe(browserSync.stream());


});
gulp.task('serve',function(){
	// return 不用return
browserSync.init({
	server:{
		baseDir:'./',
		port: 3010

	},
	notify:false
});
gulp.watch("./sasss/**/*.scss", ['css']);
gulp.watch('*.html').on('change',browserSync.reload);

});


gulp.task('js',function(){
	
return	gulp.src(['./node_modules/jquery/dist/jquery.js']) //return 位置一定要放在gulp前面
	.pipe(gulp.dest('./dist'))
	.pipe(browserSync.stream());

});
gulp.task('default',['css','js','serve'])