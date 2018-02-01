require('./bootstrap')
require('./modules')

angular.module('application', [
  'ui.router',
  '_html_',
  'application.home'
]).config(($stateProvider) => {
  $stateProvider.state({
    name: 'app',
    url: '',
    abstract: true,
    template: '<ui-view/>'
  })
})
