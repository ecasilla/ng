'use strict';

angular.module('bms')
  .config(function ($stateProvider) {
    $stateProvider.state('support', {
      url: '/support',
      templateUrl: 'states/support/index/main-view.html'
    });
  })
  .controller('SupportCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
