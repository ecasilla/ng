'use strict';

angular.module('bms')
  .config(function ($stateProvider) {
    $stateProvider.state('faq', {
      url: '/faq',
      templateUrl: 'states/faq/index/main-view.html'
    });
  })

  .controller('FaqCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
