'use strict';

angular.module('bms')
  .config(function ($stateProvider) {
    $stateProvider.state('settings.security', {
      url: '/security',
      templateUrl: 'states/settings/security/index/main-view.html'
    });
  })
  .controller('SecurityCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
