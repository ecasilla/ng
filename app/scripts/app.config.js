angular.module('bms',['ui.router','ngMaterial'])
.config(function($urlRouterProvider,$stateProvider,$locationProvider,$mdThemingProvider) {
'use-strict';

  $mdThemingProvider.theme('default')
            .primaryPalette('pink')
            .accentPalette('orange');

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('chat', {
    url: '/',
    templateUrl: '../views/chat.html'
  })  
  .state('login', {
    url: '/login',
    templateUrl: '../views/login.html',
    controller: 'LoginCtrl'
  });
});

