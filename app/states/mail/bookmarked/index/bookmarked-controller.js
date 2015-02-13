'use strict';

angular.module('bms')
  .config(function ($stateProvider) {
    $stateProvider.state('mail.bookmarked',{
      url: '/bookmarked',
      templateUrl: 'states/mail/bookmarked/index/main-view.html'
    });
  })
  .controller('BookmarkedCtrl', function ($scope) {
    $scope.foo = 'bar';
  });
