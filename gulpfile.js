var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');

gulp.task('default', function() {
  console.log("Hooray - you have created a Gulp task!");
});

gulp.task('html', function() {
  console.log("Imagine doing something useful with HTML!");
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/**/*.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles/'));
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });
  
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});

/*
// We imported gulp-waatch plugin, but we could have just used the main gulp, that has a built-in
// watch task.
gulp.task("watch", function(){
 console.log("starting watch task")
 gulp.watch(TEMPLATES_PATH, ["html"]);
 gulp.watch(STYLES_PATH, ["styles"]);
});
*/