'use strict';

const gulp    = require('gulp');
const eslint  = require('eslint');
const webpack = require('webpack-stream');
const del     = require('del');


gulp.task('eslint', () => {
  gulp.src([ __dirname + '/app/*.js', __dirname + '/app/controllers/*.js', __dirname + '/app/services/*.js', __dirname + '/server.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});


//____________________________________________________________________________________________________________________________________
//build app
gulp.task('build:clear', () => {
  return del([__dirname + '/build/*']);
});
gulp.task('build:html', () => {
  return gulp.src(__dirname + '/app/views/*.html')
    .pipe(gulp.dest(__dirname + '/build'));
});
gulp.task('build:css', () => {
  return gulp.src(__dirname + '/app/css/*.css')
    .pipe(gulp.dest(__dirname + '/build'));
});
gulp.task('build:js', () => {
  return gulp.src(__dirname + '/app/entry.js')
    .pipe(webpack(require(__dirname + '/webpack.config.js')))
    .pipe(gulp.dest(__dirname + '/build'));
});
gulp.task('build:rebuild', ['build:clear', 'build:html', 'build:css', 'build:js'], () => {
  console.log('Rebuilt');
});
gulp.task('build:watch', () => {
  gulp.watch([__dirname + '/app/**/*.js', __dirname + '/app/*.js', __dirname + '/app/views/*.html'], ['build:rebuild']);
});




//____________________________________________________________________________________________________________________________________
//build tests
gulp.task('test:clear', () => {
  return del([__dirname + '/test/bundles/*']);
});
gulp.task('test:buildUnit', () => {
  return gulp.src(__dirname + '/test/unit/*.js')
    .pipe(webpack({ output: { filename: 'unit_bundle.js' }}))
    .pipe(gulp.dest(__dirname + '/test/bundles'));
});
gulp.task('test:buildE2E', () => {
  return gulp.src(__dirname + '/test/e2e/*.js')
    .pipe(webpack({ output: { filename: 'e2e_bundle.js' }}))
    .pipe(gulp.dest(__dirname + '/test/bundles'));
});
gulp.task('test:rebuild', ['test:clear', 'test:buildUnit', 'test:buildE2E'], () => {
  // console.log('Tests rebuilt');
});
gulp.task('test:watch', () => {
  gulp.watch([__dirname + '/test/e2e/*.js', __dirname + '/test/unit/*.js'], ['test:rebuild']);
});
