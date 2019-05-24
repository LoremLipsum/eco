import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from '../config'

const $ = gulpLoadPlugins();

module.exports = () => (
  gulp.src(config.src.webp)
    // .pipe($.rename({
    //   dirname: './source/assets/images',
    // }))
    .pipe($.imagemin())
    .pipe(gulp.dest(config.dest.webp))
    .pipe($.webp())
    .pipe(gulp.dest(config.dest.webp))
);
