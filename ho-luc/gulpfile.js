const gulp = require('gulp');
const webpack = require('webpack-stream');

const sources = {
  html: __dirname + '/app/index.html',
  js: __dirname + '/app/js/app.js',
  test: __dirname + '/tests/*_spec.js'
};

gulp.task('bundle:dev', () => {
  return gulp.src(sources.js)
    .pipe(webpack({output: {filename: 'bundle.js', watch: true}}))
    .pipe(gulp.dest('./build'))
});

gulp.task('copy-html', () => {
  return gulp.src(sources.html)
    .pipe(gulp.dest('./build'))
});

gulp.task('bundle:test', () => {
  return gulp.src(sources.test)
    .pipe(webpack({output: {filename: 'test_bundle.js'}}))
    .pipe(gulp.dest('./tests'));
});

gulp.task('default', ['bundle:dev', 'copy-html']);
