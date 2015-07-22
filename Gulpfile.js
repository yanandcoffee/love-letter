// Plugins
var gulp = require('gulp');

var jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    webserver = require('gulp-webserver');

// Variable Paths
var srcPaths = {
  js_src: 'js/*.js',
  styles_src: 'styles/*.scss'
};

var distPaths = {
  js_src: 'dist/js/',
  styles_src: 'dist/css/'
};

// Tasks
gulp.task('lint', function() {
  return gulp.src(srcPaths.js_src)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', function() {
  return gulp.src(srcPaths.styles_src)
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(minifyCSS())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest(distPaths.styles_src));
});

gulp.task('scripts', function() {
  return gulp.src(srcPaths.js_src)
    .pipe(concat('all.js'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(distPaths.js_src));
});

gulp.task('watch', function() {
  gulp.watch(srcPaths.js_src, ['lint', 'scripts']);
  gulp.watch(srcPaths.styles_src, ['sass']);
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'serve', 'watch']);
