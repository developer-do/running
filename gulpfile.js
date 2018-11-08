const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');


let SRC = {
    es6: './src/es6/**/*.js',
    dist: './src/dist'
};

let PUBLIC = {
    es6: './public/es6/**/*.js',
    dist: './public/dist'
};


gulp.task("default", function () {
    gulp.src([SRC.es6, PUBLIC.es6])
        .pipe(eslint())
        .pipe(eslint.format());
    gulp.src(SRC.es6)
        .pipe(babel())
        .pipe(gulp.dest(SRC.dist));
    gulp.src(PUBLIC.es6)
        .pipe(babel())
        .pipe(gulp.dest(PUBLIC.dist));
});
