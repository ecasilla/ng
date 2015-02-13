'use strict';

angular.module('bms')
  .config(function ($stateProvider) {
    $stateProvider.state('mail.draft', {
      url: '/draft',
      templateUrl: 'states/mail/draft/index/main-view.html'
    });
  })
  .controller('DraftCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
