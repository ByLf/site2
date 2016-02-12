'use strict' 

var gulp=require("gulp"),
    browserSync=require('browser-sync');
gulp.task ('server', function () {
    browserSync ({
        port: 9000,
        server: {
            baseDir: 'app'
        }
    });
});

gulp.task ('watch', function () {
    gulp.watch([
        '*.html',
        '*.js'
        '*.css'
    ]).on('change', browserSync.reload);
});

gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');

    return gulp.src('./src/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 5 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest'));
});
gulp.task('default', ['server', 'watch', 'autoprefixer']);
