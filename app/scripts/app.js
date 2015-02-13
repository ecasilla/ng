'use strict';

/**
 * @ngdoc overview
 * @name bms
 * @description
 * # bmsApp
 *
 * Main module of the application.
 */
angular.module('bms', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'angular-loading-bar',
    'ngMaterial',
    'ui.router',
    'firebase',
    'firebase.utils',
    'simpleLogin'
  ])
.config(function($urlRouterProvider,$locationProvider,$mdThemingProvider) {

  //$locationProvider.html5Mode(true).hashPrefix('!');

  $mdThemingProvider.theme('default')
  .primaryPalette('blue')
  .accentPalette('grey');

  $urlRouterProvider.otherwise('/');

})
.run(function($state,$log,$rootScope) {
  $rootScope.$on('$stateChangeError',
  function(event, toState, toParams, fromState, fromParams, error) {
    event.preventDefault();
   $log(error, '\n' + toState);
  });
});
  

