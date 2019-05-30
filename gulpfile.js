"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var posthtml = require('gulp-posthtml');
var autoprefixer = require('autoprefixer');
var include = require('posthtml-include');
var server = require('browser-sync').create();
var minify = require('gulp-csso');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var webp = require('gulp-webp');
var svgstore = require('gulp-svgstore');
var del = require('del');


gulp.task('style', gulp.series(function (done) {
  gulp.src('source/sass/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer()
  ]))
  .pipe(gulp.dest('build/css/'))
  .pipe(minify())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('build/css/'))
  .pipe(server.stream());
  done();
}));

gulp.task('serve', function() {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  gulp.watch('source/sass/**/*.{scss,sass}', gulp.series('style'));
  gulp.watch('source/*.html').on('change', gulp.series('html',server.reload));
});

gulp.task('images', function () {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest('source/img'));
});

gulp.task('webp', function() {
  return gulp.src('source/img/**/*.{png,jpg}')
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest('source/img'));
});

gulp.task('sprite', function() {
  return gulp.src('source/img/icon-*.svg')
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('build/img'));
});

gulp.task('html', function() {
  return gulp.src('source/*.html')
  .pipe(posthtml([
    include()
  ]))
  .pipe(gulp.dest('build'));
});

gulp.task('copy', function () {
  return gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**',
    'source/js/**',
    'source/css/normalize.css'
  ], {
    base: 'source'
  })
  .pipe(gulp.dest('build'));
});

gulp.task('clean', function() {
  return del('build');
});

gulp.task('build', gulp.series('clean', 'copy', 'style', 'sprite', 'html'));
