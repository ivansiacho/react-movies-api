var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
	browserify('./src/js/main.js')
		.transform('reactify')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
	gulp.src('src/css/*.*')
		.pipe(gulp.dest('dist/css'));
	gulp.src('src/js/vendors/*.*')
		.pipe(gulp.dest('dist/js'));
});

gulp.task('app', function(){
  	connect.server({
  		root: 'dist',
    	port: 8888
  	});
});

gulp.task('default', ['app', 'browserify', 'copy'], function() {
	return gulp.watch('src/**/*.*', ['browserify', 'copy']);
});