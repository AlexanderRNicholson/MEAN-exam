var app = angular.module('app', ['ngRoute', 'ngMessages'])

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'UserController'
    })
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'DashboardController'
    })
    .when('/create', {
      templateUrl: 'partials/create.html',
      controller: 'CreateController'
    })
    .when('/poll/:id', {
      templateUrl: 'partials/poll.html',
      controller: 'PollController'
    })
    .when('/logout', {
      templateUrl: 'partials/login.html',
      controller: 'UserController'
    })
    // .otherwise({
    //   redirectTo: '/'
    // })
})
