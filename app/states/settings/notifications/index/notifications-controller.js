'use strict';

angular.module('bms')
  .config(function ($stateProvider) {
    $stateProvider.state('settings.notifications', {
      url: '/notifications',
      templateUrl: 'states/settings/notifications/index/main-view.html'
    });
  })
  .controller('NotificationsCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
