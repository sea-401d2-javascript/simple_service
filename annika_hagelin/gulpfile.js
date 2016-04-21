const gulp = require('gulp');
const webpack = require('webpack-stream');

const sources = {
  html: __dirname + '/app/index.html',
  js: __dirname + '/app/index.js'
}

gulp.task('bundle:dev', () => {
  return gulp.src(sources.js)
    .pipe(webpack({output: {filename: 'bundle.js'}}))
    .pipe(gulp.dest('./build'));
});

gulp.task('copy', () => {
  return gulp.src(sources.html)
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['bundle:dev', 'copy']);
