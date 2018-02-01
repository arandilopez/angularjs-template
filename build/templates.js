const gulp = require('gulp')
const uglify = require('gulp-uglify')
const util = require('gulp-util')
const Elixir = require('laravel-elixir')
const html2js = require('gulp-html2js');

Elixir.extend('angularViews', (src, output, outputFilename) => {
  const config = Elixir.config
  const baseDir = src || config.assetsPath + '/views'

  new Elixir.Task('angularViews', function () {
    return gulp.src([
      baseDir + '/**/*.html'
    ]).pipe(
      html2js(outputFilename || 'views.js', {
        adapter: 'angular',
        base: config.assetsPath,
        name: false
      })
    )
    .pipe(config.production ? uglify(Elixir.config.js.uglify.options) : util.noop())
    .pipe(
      gulp.dest( output || config.get('public.js.outputFolder') )
    )
    .pipe(this.onSuccess('Angular views compiled!'))

  }).watch(baseDir + '/**/*.html')
})
