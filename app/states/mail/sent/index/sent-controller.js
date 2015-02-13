'use strict';

angular.module('bms')
  .config(function ($stateProvider) {
    $stateProvider.state('mail.sent',{
      url: '/sent',
      templateUrl: 'states/mail/sent/index/main-view.html'
    });
  })
  .controller('SentCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
