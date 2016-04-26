'use strict';
const gulp = require('gulp');

const webpack = require('gulp-webpack');
const webpackS = require('webpack-stream');



const sources = {
  html: __dirname + '/app/index.html',
  js: __dirname + '/app/js/index.js',
  test: __dirname + '/test/*_spec.js'
};

gulp.task('bundle:test', () => {
  return gulp.src(sources.test)
    .pipe(webpackS({output: {filename: 'test_bundle.js'}}))
    .pipe(gulp.dest('./test'));
});
