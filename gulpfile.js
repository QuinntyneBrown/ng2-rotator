﻿var gulp = require('gulp');
var tsc = require('gulp-typescript');
var inlineNg2Template = require('gulp-inline-ng2-template');
var Config = require('./gulpfile.config');
var config = new Config();
var clean = require('gulp-clean');
var del = require('del');
var webpack = require("webpack-stream");

gulp.task('clean', function () {
    var tsGeneratedFiles = [
        'src/lib/rotator.component.d.ts',
        'src/lib/rotator.component.js',
        'src/lib/rotator.module.d.ts',
        'src/lib/rotator.module.js',
        'src/lib/index.d.ts',
        'src/lib/index.js'
    ];

    return gulp.src(tsGeneratedFiles, { read: false })
        .pipe(clean());
});

gulp.task('compile', ['clean'], function () {
    var sourceTsFiles = [
        './src/lib/src/rotator.component.ts',
        './src/lib/src/rotator.module.ts',
        './src/lib/src/index.ts',
        config.libraryTypeScriptDefinitions
    ];

    var tsResult = gulp.src(sourceTsFiles)
        .pipe(inlineNg2Template({ base: '/src/lib/src/' }))
        .pipe(tsc(config.tsConfig));

    tsResult.dts.pipe(gulp.dest('./src/lib'));
    return tsResult.js
                    .pipe(gulp.dest('./src/lib'));
});

gulp.task('watch', function () {
    gulp.watch(
        [
            './src/lib/src/rotator.component.ts',
            './src/lib/src/rotator.component.html',
            './src/lib/src/rotator.component.css',
            './src/lib/src/rotator.module.ts',
            './src/lib/src/index.ts',
        ],
        ['clean','compile']);
});

gulp.task('default', ['clean', 'compile', 'watch']);


