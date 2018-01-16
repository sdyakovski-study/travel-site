var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Hooray - you have created a Gulp task!");
});

gulp.task('html', function() {
  console.log("Imagine doing something useful with HTML!");
});

gulp.task('styles', function() {
  console.log("Imagine SaSS or PostCSS running here!");
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