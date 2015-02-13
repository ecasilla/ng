'use strict';

angular.module('bms')
  .config(function ($stateProvider) {
    $stateProvider.state('settings.organization', {
      url: '/organization',
      templateUrl: 'states/settings/organization/index/main-view.html'
    });
  })
  .controller('OrganizationCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
