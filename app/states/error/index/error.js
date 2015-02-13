'use strict';

angular.module('bms')
  .config(function ($stateProvider) {
    $stateProvider.state('error', {
      url: '/error?code'
    });
  })
  .controller('ErrorCtrl', function ($scope, $stateParams) {
    $scope.errorCode = $stateParams.code;
  });
