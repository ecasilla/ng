'use strict';

angular.module('bms')
  .config(function ($stateProvider) {
    $stateProvider.state('settings.email', {
      url: '/email',
      templateUrl: 'states/settings/email/index/main-view.html'
    });
  })
  .controller('EmailCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
