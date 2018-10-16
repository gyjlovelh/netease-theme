
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefix = require('gulp-autoprefixer');
const sequence = require('gulp-sequence');
const concat = require('gulp-concat');
const del = require('del');

// 源代码目录
const src_paths = {
    sass: ['src/scss/**/*.scss'],
    sass_variable: ['src/scss/variables.scss'],
    font: ['src/iconfont/**'],
    img: ['src/img/**'],
    file: ['package.json', 'README.md']
};

const dist_paths = {
    sass: 'dist/',
    font: 'dist/iconfont/',
    img: 'dist/img/',
    file: 'dist/'
};

// 清除dist中上一次编译结果
gulp.task('clear', function () {
    del.sync(['dist/**']);
});

gulp.task('build-sass', function (done) {
    gulp.src(src_paths.sass)
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(autoprefix({browsers: ['last 2 versions']}))
        .pipe(concat('netease-theme.css'))
        .pipe(gulp.dest(dist_paths.sass))
        .on('end', done);
});

gulp.task('copy-variables', function (done) {
    gulp.src(src_paths.sass_variable)
        .pipe(gulp.dest(dist_paths.sass))
        .on('end', done);
});

gulp.task('copy-font', function (done) {
    gulp.src(src_paths.font)
        .pipe(gulp.dest(dist_paths.font))
        .on('end', done);
});

gulp.task('copy-img', function (done) {
    gulp.src(src_paths.img)
        .pipe(gulp.dest(dist_paths.img))
        .on('end', done);
});

gulp.task('copy-file', function (done) {
    gulp.src(src_paths.file)
        .pipe(gulp.dest(dist_paths.file))
        .on('end', done)
});

// 构建dist工程(顺序执行，执行构建前先进行单元测试)
gulp.task('build',
    sequence(
        'clear',
        'build-sass',
        'copy-variables',
        'copy-font',
        'copy-img'
    )
);

// 构建本地link工程，主要用于本地link时使用
gulp.task('build-link',
    sequence(
        'clear',
        'build-sass',
        'copy-variables',
        'copy-font',
        'copy-img',
        'copy-file'
    )
);
