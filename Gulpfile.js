

var gulp = require('gulp'),
  webpack = require('webpack');

var distDir = 'dist';

gulp.task('webpack', function(cb) {
  webpack({
    entry: './lib/nope',
    output: {
      path: [process.cwd(), distDir].join('/'),
      filename: 'nope.js',
      library: 'nope',
      libraryTarget: 'umd'
    }
  },function(err, stats) {
    err && console.error(err);
    console.log(stats.toString());
    cb();
  });
});

gulp.task('default', ['webpack']);