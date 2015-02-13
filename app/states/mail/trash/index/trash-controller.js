'use strict';

angular.module('bms')
  .config(function ($stateProvider) {
    $stateProvider.state('mail.trash',{
      url: '/trash',
      templateUrl: 'states/mail/trash/index/main-view.html'
    });
  })
  .controller('TrashCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
