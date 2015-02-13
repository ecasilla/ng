'use strict';

angular.module('bms')
  .config(function ($stateProvider) {
    $stateProvider.state('mail.inbox', {
      url: '/inbox',
      templateUrl: 'states/mail/inbox/index/inbox.html'
    });
  })
  .controller('InboxCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
