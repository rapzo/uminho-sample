'use strict';

var browserify = require('browserify');
var babelify = require('babelify');

module.exports = (gulp) => {
    return () => browserify({
        entries: 'app/index.js'
        debug: true
    })
        .require([{ file: './dist/templates.js', expose: 'templates' }])
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist/'));
};
