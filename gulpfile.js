'use strict';

require('coffee-script/register');

var path = require('path');
var gulp = require('gulp');

var tasks = {
    assets:     require('./gulp/assets'),
    templates:  require('./gulp/templates'),
    browserify: require('./gulp/browserify'),
    server:     require('./gulp/server')
};

gulp.task('templates:angular', tasks.templates.angular(gulp));
gulp.task('templates:index', tasks.templates.index(gulp));
gulp.task('templates', ['templates:index', 'templates:angular']);
gulp.task('compile', ['templates'], tasks.browserify(gulp));
gulp.task('assets:fonts', tasks.assets.fonts(gulp));
gulp.task('assets:images', tasks.assets.images(gulp));
gulp.task('assets', ['assets:fonts', 'assets:images']);
gulp.task('styles', tasks.assets.styles(gulp));

gulp.task('build', ['templates', 'compile', 'styles', 'assets']);

gulp.task('dev', function () {
    gulp.watch([
        'gulpfile.js',
        'gulp/*',
        'app/*',
        'lib/**/*',
        'views/**/*',
        'assets/**/*'
    ], ['build']);
});

gulp.task('serve', ['build', 'dev'], tasks.server(gulp));

gulp.task('default', ['build']);
