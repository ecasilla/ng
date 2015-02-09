'use-strict';

angular.module('bms',['ui.router','ngMaterial'])

.config(function($urlRouterProvider,$stateProvider,$locationProvider,$mdThemingProvider) {

  //$locationProvider.html5Mode(true);

  $mdThemingProvider.theme('default')
  .primaryPalette('blue')
  .accentPalette('gray');

  $urlRouterProvider.otherwise('/');


  $stateProvider
  .state('chat', {
    url: '/chat',
    templateUrl: '../views/chat/chat.html',
    controller: 'ChatCtrl'
  })  
  .state('main', {
    url: '/',
    templateUrl: '../views/common/main.html',
    controller: 'MainCtrl'
  })  
  .state('login', {
    url: '/login',
    templateUrl: '../views/account/login.html',
    controller: 'LoginCtrl'
  });
});

