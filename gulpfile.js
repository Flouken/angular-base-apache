// jshint ignore: start
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var htmlmin = require('gulp-htmlmin');
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var babel = require('gulp-babel');


var FILEPATHS = {
	JS: ['./app/**/*.module.js', './app/**/*.js'],
	HTML: './app/**/*.html',
	OUTPUT_DIR: './dist/',
	OUTPUT_JS: 'app-dist.js',
	OUTPUT_TEMPLATES: 'app-templates.js'
};

var templateCacheSettings = {
	module: 'app.templates',
	root: '../app/',
	moduleSystem: 'IIFE',
	standalone: true
};

var htmlminSettings = {
	collapseWhitespace: true,
	conservativeCollapse: true,
	removeAttributeQuotes: true,
	removeComments: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true
};

function swallowError (error) {
  // If you want details of the error in the console
  console.log(error.toString());
  this.emit('end');
}

gulp.task('dist-js', ['lint'], function() {
	return gulp.src(FILEPATHS.JS)
			.pipe(babel({ presets: ['es2015'] }))
			.pipe(ngAnnotate())
			.pipe(uglify())
			.pipe(concat(FILEPATHS.OUTPUT_JS))
			.pipe(gulp.dest(FILEPATHS.OUTPUT_DIR));
});

gulp.task('dist-html', function() {
	return gulp.src(FILEPATHS.HTML)
			.pipe(htmlmin(htmlminSettings))
			.pipe(templateCache(templateCacheSettings))
			.pipe(concat(FILEPATHS.OUTPUT_TEMPLATES))
			.pipe(gulp.dest(FILEPATHS.OUTPUT_DIR));
});

gulp.task('dev-js', function() {
	return gulp.src(FILEPATHS.JS)
			.pipe(concat(FILEPATHS.OUTPUT_JS))
			.pipe(babel({presets:['es2015'], compact: false}))
			.on('error', swallowError)
			.pipe(gulp.dest(FILEPATHS.OUTPUT_DIR));
});

gulp.task('dev-html', function() {
	return gulp.src(FILEPATHS.HTML)
			.pipe(templateCache(templateCacheSettings))
			.pipe(concat(FILEPATHS.OUTPUT_TEMPLATES))
			.pipe(gulp.dest(FILEPATHS.OUTPUT_DIR));
});

gulp.task('lint', function() {
	return gulp.src(FILEPATHS.JS)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('watch', ['dev-js', 'dev-html'], function() {
	gulp.watch(FILEPATHS.JS, ['dev-js']);
	gulp.watch(FILEPATHS.HTML, ['dev-html']);
});

gulp.task('dist', ['dist-js', 'dist-html']);
