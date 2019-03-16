'use strict';

const { src, task, dest, parallel } = require('gulp');
var image = require('gulp-image');

// // File paths APP
var imgWatch = 'dist/assets/img/**/*';

// // File paths DIST
var imgPath = 'dist/assets/img/';


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
	done();
}

task('img', img);
task('default', parallel(img));
