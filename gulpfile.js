'use strict';

const { src, task, dest, parallel, series, watch } = require('gulp');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var image = require('gulp-image');

// File paths APP
var rootWatch = 'app/*.html';
var scssWatch = 'app/sass/**/*.scss';
var scssMain = 'app/sass/main.scss';
var jsWatch = 'app/js/**/*.js';
var imgWatch = 'app/img/**/*';

// Vendors path
var jqueryLibs = 'app/libs/jquery/dist/jquery.min.js';

// File paths DIST
var rootPath = 'dist/';
var cssPath = 'dist/css/';
var jsPath = 'dist/js/';
var imgPath = 'dist/img/';

// Root
function rootFile(done) {
	src(rootWatch)
		.pipe(
			plumber(function(err) {
				console.log('Styles Task Error');
				console.log(err);
				this.emit('end');
			})
		)
		.pipe(dest(rootPath))
		.pipe(browserSync.stream());
	done();
}

// Styles SCSS
function scss(done) {
	src([scssMain])
		.pipe(
			plumber(function(err) {
				console.log('Styles Task Error');
				console.log(err);
				this.emit('end');
			})
		)
		.pipe(sourcemaps.init())
		.pipe(
			sass({
				outputStyle: 'compressed'
			})
		)
		.pipe(
			autoprefixer({
				browsers: 'last 5 version'
			})
		)
		.pipe(sourcemaps.write())
		.pipe(concat('style.css'))
		.pipe(dest(cssPath))
		.pipe(browserSync.stream());
	done();
}

function scssW(done) {
	src([scssMain])
		.pipe(
			plumber(function(err) {
				console.log('Styles Task Error');
				console.log(err);
				this.emit('end');
			})
		)
		.pipe(sass())
		.pipe(
			autoprefixer({
				browsers: 'last 5 version'
			})
		)
		.pipe(concat('style.css'))
		.pipe(dest(cssPath))
		.pipe(browserSync.stream());
	done();
}

// Scripts
function js(done) {
	src(jsWatch)
		.pipe(plumber(function(err) {
				console.log('Styles Task Error');
				console.log(err);
				this.emit('end');
			}))
		.pipe(sourcemaps.init())
		.pipe(babel({ presets: ['@babel/env'] }))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(concat('script.min.js'))
		.pipe(dest(jsPath))
		.pipe(browserSync.stream());
	done();
}
function libs(done) {
	src(jqueryLibs).pipe(dest(jsPath));
	done();
}

// Images
function img(done) {
	src(imgWatch)
		.pipe(
			image({
				jpegRecompress: true,
				optipng: true
			})
		)
		.pipe(dest(imgPath))
		.pipe(browserSync.stream());
	done();
}

// Browser Sync
function browser_sync(done) {
	browserSync.init({
		server: {
			baseDir: 'dist'
		},
		notify: false
	});
	done();
}

function reload(done) {
	browserSync.reload();
	done();
}

function watch_files() {
	watch(rootWatch, series(rootFile, reload));
	watch(scssWatch, series(scssW, reload));
	watch(jsWatch, series(js, reload));
	watch(imgWatch, series(img, reload));
	console.log('Starting Watch Task');
}

task('rootFile', rootFile);
task('scss', scss);
task('js', js);
task('libs', libs);
task('img', img);
task('default', parallel(rootFile, scss, js, libs, img));
task('watch', parallel(watch_files, browser_sync));
