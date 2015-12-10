'use strict';

var templates = require('gulp-angular-templatecache');
var minifyHtml = require('gulp-minify-html');

exports.angular = (gulp) => {
    return () => gulp
        .src(['views/**/*.html'])
        .pipe(minifyHtml({ quotes: true }))
        .pipe(templates('templates.js', { moduleSystem: 'browserify', standalone: true }))
        .pipe(gulp.dest('dist'));
};

exports.index = (gulp) => {
    return () => gulp
        .src('app/index.html')
        .pipe(minifyHtml({ quotes: true }))
        .pipe gulp.dest('dist')
