var gulp = require('gulp');
gulp.task('miniHTML',function(){
    gulp.src('app/*.html')
    .pipe(gulp.dest('dist'))
})