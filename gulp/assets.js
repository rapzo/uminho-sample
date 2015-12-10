'use strict';

let path = require('path');
let sass = require('gulp-sass');

exports.fonts = (gulp) => {
    return () => gulp
        .src([
            'assets/fonts/**/*'
        ])
        .pipe(gulp.dest('dist/fonts'));
};

exports.images = (gulp) => {
    return () => gulp
        .src([
            'app/images/**/*'
        ])
        .pipe(gulp.dest('dist/images'));
};

exports.styles = (gulp) => {
    return () => gulp
        .src('app/stylesheets/app.scss')
        .pipe(
            sass({ includePaths: [] })
            .on('error', sass.logError)
        )
        .pipe(gulp.dest('dist'));
};
