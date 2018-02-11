var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var postcss_import = require('postcss-import');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/*.css')
    .pipe(postcss([postcss_import, cssvars, nested, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles/'));
});
// cssvars, nested, autoprefixer are filters, transformations that we want postcss to apply