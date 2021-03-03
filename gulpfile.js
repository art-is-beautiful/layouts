const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('./scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream());
}

function template() {
  return gulp.src('./pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
}

async function build() {
    await style();
    await template();
}

function watch() {
    browserSync.init({
      server: {
        baseDir: "./dist",
        index: 'index.html'
      }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./pug/*.pug', template);
}

exports.style = style;
exports.template = template;
exports.build = build;
exports.watch = watch;
exports.default = build;