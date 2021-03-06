'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var webpack = require('webpack-stream');


var sources = {
  html: __dirname + '/app/index.html',
  js: __dirname + '/app/index.js',
  test: __dirname + '/tests/*_spec.js'
};

var paths = ['*.js', 'tests/*.js', 'app/*.js'];

gulp.task('eslint', function() {
  return gulp.src(paths)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('webpack', function() {
  return gulp.src(__dirname + '/app/index.js')
  .pipe(webpack({
    watch: true,
    module: {
      loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.png$/, loader: "url-loader?limit=100000" },
        { test: /\.jpg$/, loader: "file-loader" }
      ],
    },
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('bundle:dev', function () {
  return gulp.src(sources.js)
  .pipe(webpack({output: {filename: 'bundle.js'}}))
  .pipe(gulp.dest('./build'))
});

gulp.task('copy', function () {
  return gulp.src(sources.html)
  .pipe(gulp.dest('./build'))
});

gulp.task('bundle:test', function() {
  return gulp.src(sources.test)
  .pipe(webpack({output: {filename:'test_bundle.js'}}))
  .pipe(gulp.dest('./tests'))
});

gulp.task('default', ['eslint', 'webpack', 'bundle:dev', 'copy']);
