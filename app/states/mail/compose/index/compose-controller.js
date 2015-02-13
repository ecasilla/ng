'use strict';

angular.module('bms')
  .config(function ($stateProvider) {
    $stateProvider.state('mail.compose', {
      url: '/compose',
      templateUrl: 'states/mail/compose/index/main-view.html'
    });
  })
  .controller('ComposeCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
