'use strict';

var server = require('gulp-webserver');

module.exports = (gulp) => {
    return () => gulp
      .src('dist')
      .pipe(server({
          host: '0.0.0.0',
          port: 1337,
          livereload: true
      }));
};
