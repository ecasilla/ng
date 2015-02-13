'use strict';

angular.module('bms')
  .config(function ($stateProvider) {
    $stateProvider.state('settings', {
      url: '/settings',
      templateUrl: 'states/settings/index/main-view.html'
    });
  })
  .controller('SettingsCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
