const gulp = require('gulp');
const webpack = require('webpack-stream');

const sources = {
  test: __dirname + '/test/*_spec.js'
};

gulp.task('bundle:test', () => {
  return gulp.src(sources.test)
    .pipe(webpack({output: {filename: 'test_bundle.js'}}))
    .pipe(gulp.dest('./test'));
});
