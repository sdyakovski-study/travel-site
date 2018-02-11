var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');

browserSync.init({
  notify: false,
  server: {
    baseDir: "app" 
  }
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    browserSync.reload();
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
// We imported gulp-watch plugin, but we could have just used the main gulp, that has a built-in
// watch task.
gulp.task("watch", function(){
 console.log("starting watch task")
 gulp.watch(TEMPLATES_PATH, ["html"]);
 gulp.watch(STYLES_PATH, ["styles"]);
});
*/