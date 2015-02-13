'use strict';

angular.module('bms')
  .config(function ($stateProvider) {
    $stateProvider.state('settings.account',{
      url: '/account',
      templateUrl: 'states/settings/account/index/main-view.html'
    });
  })
  .controller('AccountCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
