var gulp = require('gulp'),
        gutil = require('gulp-util'),
        uglify = require('gulp-uglify'),
        concat  = require('gulp-concat')
        cleanCSS = require('gulp-clean-css');

gulp.task('build', function () {
    gulp.src(['./dist/*.js'])
            .pipe(uglify())
    .pipe(concat('ion-floating-menu.min.js'))
            .pipe(gulp.dest('dist/'));

    gulp.src(['./dist/*.css'])
            .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('ion-floating-menu.min.css'))
            .pipe(gulp.dest('dist'))
});

/*gulp.watch('./js/*', function () {
 gulp.run('js');
 });*/

gulp.task('default', ['build'], function () {

});