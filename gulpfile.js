var gulp = require('gulp');
var tsc = require('gulp-typescript');
var inlineNg2Template = require('gulp-inline-ng2-template');
var Config = require('./gulpfile.config');
var config = new Config();
var clean = require('gulp-clean');
var del = require('del');
var webpack = require("webpack-stream");

gulp.task('clean', function () {
    var tsGeneratedFiles = [
        'src/lib/index.d.ts',
        'src/lib/index.js',
        'src/lib/index.d.ts',
        'src/lib/index.js',
        'src/lib/rotator.component.d.ts',
        'src/lib/rotator.module.d.ts',
        'src/lib/rotator.module.js',
        'src/lib/rotator.component.js'
    ];
   
    return gulp.src(tsGeneratedFiles, { read: false })
        .pipe(clean());
});

gulp.task('compile', ['clean'], function () {
    var sourceTsFiles = [
        './src/lib/rotator.component.ts',
        './src/lib/index.ts',
        './src/lib/rotator.module.ts',
        config.libraryTypeScriptDefinitions
    ];

    var tsResult = gulp.src(sourceTsFiles)
        .pipe(inlineNg2Template({ base: '/src/lib/' }))
        .pipe(tsc(config.tsConfig));

    tsResult.dts.pipe(gulp.dest('./src/lib'));
    return tsResult.js
                    .pipe(gulp.dest('./src/lib'));
});


gulp.task("webpack", ["compile"], function () {
    return gulp.src(['./src/demo-app/vendor.ts', './src/demo-app/polyfills.ts', './src/demo-app/main.ts'])
    .pipe(webpack(config.webpackConfig))
    .pipe(gulp.dest('src/demo-app/'));
});

gulp.task('watch', ['webpack'],function () {
    gulp.watch(
        [
            './src/lib/rotator.component.ts',
            './src/lib/rotator.component.html',
            './src/lib/rotator.component.css',
            './src/lib/index.ts',
            './src/lib/rotator.module.ts'
        ],
        ['compile', 'webpack']);
});


gulp.task('default',['compile', 'webpack', 'watch']);


