'use strict';

angular.module('bms')
  .config(function ($stateProvider) {
    $stateProvider.state('user', {
      url: '/user',
      templateUrl: 'states/user/index/main-view.html'
    });
  })
  .controller('UserCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
