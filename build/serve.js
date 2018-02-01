const Elixir = require('laravel-elixir')
const gulp = require('gulp')
const _ = require('lodash')
const connect = require('gulp-connect')
Elixir.extend('serve', (config = {}) => {
  config = _.extend({
    host: '127.0.0.1',
    port: 5000,
    root: 'public',
    livereload: true
  }, config);

  new Elixir.Task('serve', () => {
    connect.server(config)
  }).watch()
})
