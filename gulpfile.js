var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var postcss_import = require('postcss-import');
var browserSync = require('browser-sync');

browserSync.init({
  notify: false,
  server: {
    baseDir: "app" 
  }
});

gulp.task('default', function() {
  console.log("Hooray - you have created a Gulp task!");
});

gulp.task('html', function() {
  browserSync.reload();
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/*.css')
    .pipe(postcss([postcss_import, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles/'));
});
// cssvars, nested, autoprefixer are filters, transformations that we want postcss to apply

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });
  
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
    //gulp.start('styles');
    //browserSync.reload();
    //gulp.start('cssInject');
  });

  //watch("./app/temp/styles/styles.css", function() {
  //  gulp.start('cssInject');
  //});
});


gulp.task('cssInject', ['styles'], function() {
  return gulp.src("./app/temp/styles/styles.css")
  .pipe(browserSync.stream());
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