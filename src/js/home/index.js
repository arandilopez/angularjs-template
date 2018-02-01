angular.module('application.home', [])
.config(($stateProvider) => {
  $stateProvider.state({
    name: 'app.home',
    url: '',
    templateUrl: 'views/home.html'
  })
})
