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
function template_signIn() {
    return gulp.src('./pug/signIn/*.pug')
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest('dist/signIn/'))
      .pipe(browserSync.stream());
}
function template_signUp() {
  return gulp.src('./pug/signUp/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist/signUp/'))
    .pipe(browserSync.stream());
}

async function build() {
    await style();
    await template();
    await template_signIn();
    await template_signUp();
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
    gulp.watch('./pug/signIn/*.pug', template_signIn);
    gulp.watch('./pug/signUp/*.pug', template_signUp);
}

exports.style = style;
exports.template = template;
exports.template_signIn = template_signIn;
exports.template_signUp = template_signUp;
exports.build = build;
exports.watch = watch;
exports.default = build;