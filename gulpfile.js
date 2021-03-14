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
function template_profile() {
  return gulp.src('./pug/profile/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist/profile/'))
    .pipe(browserSync.stream());
}
function template_search() {
  return gulp.src('./pug/search/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist/search/'))
    .pipe(browserSync.stream());
}
function template_admin() {
  return gulp.src('./pug/admin/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist/admin/'))
    .pipe(browserSync.stream());
}

async function build() {
    await style();
    await template();
    await template_signIn();
    await template_signUp();
    await template_profile();
    await template_search();
    await template_admin();
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
    gulp.watch('./pug/profile/*.pug', template_profile);
    gulp.watch('./pug/search/*.pug', template_search);
    gulp.watch('./pug/admin/*.pug', template_admin);
}

exports.style = style;
exports.template = template;
exports.template_signIn = template_signIn;
exports.template_signUp = template_signUp;
exports.template_profile = template_profile;
exports.template_search = template_search;
exports.template_admin = template_admin;
exports.build = build;
exports.watch = watch;
exports.default = build;