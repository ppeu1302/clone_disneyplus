const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// Compilar SCSS para CSS
function styles() {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
}

// Otimizar e copiar imagens
function images() {
  return gulp.src('./src/images/**/*.{jpg,jpeg,png,svg,gif}')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

// Observa alterações nos arquivos
function watch() {
  gulp.watch('./src/styles/*.scss', styles);
  gulp.watch('./src/images/**/*.{jpg,jpeg,png,svg,gif}', images);
}

// Exporta as tasks
exports.styles = styles;
exports.images = images;
exports.watch = watch;
exports.default = gulp.parallel(styles, images);
