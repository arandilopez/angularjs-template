const elixir = require('laravel-elixir')
const config = elixir.config
require('./build')

elixir(function (mix) {
  mix.sass("application.scss")
  .browserify("application.js")
  .angularViews()
  .serve()
  .browserSync({
    port: 9000,
    proxy: 'localhost:5000',
    files: [
      config.publicPath + '/**/*.html',
      config.publicPath + '/**/*.css',
      config.publicPath + '/**/*.js',
    ]
  })
})
