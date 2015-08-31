import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';

gulp.task('lint:js', () => {
  return gulp
    .src('./source/index.jsx')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('build:js', ['lint:js'], () => {
  gulp.src('./source/index.jsx')
    .pipe(babel())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch:build:js', () => {
  gulp.watch('./source/index.jsx', 'build:js');
});

gulp.task('build', ['build:js']);

gulp.task('default', ['build', 'watch:build:js']);
