'use strict';

var gulp = require('gulp'),
	pkg = require('./package.json'),
	paths = {
		dest: './dist',
		gulp: './gulpfile.js',
		src: './index.js'
	};

gulp.task('default', ['build']);

gulp.task('build', function () {
	var browserify = require('browserify'),
		source = require('vinyl-source-stream'),
		options = { standalone: 'country-data' };

	return browserify(paths.src, options)
		.bundle()
		.pipe(source(pkg.name + '.js'))
		.pipe(gulp.dest(paths.dest));
});