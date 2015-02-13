'use strict';

angular.module('bms')
.config(function ($stateProvider) {
  $stateProvider

  .state('index', {
    url: '/',
    abstract:true,
    controller: 'MainCtrl',
    views: {
      '': {
        templateUrl: 'views/layout.html'
      },
      'aside': {
        templateUrl: 'views/aside.html'
      },
      'nav':{
        templateUrl: 'views/nav.html'
      }
    }
  });
});
