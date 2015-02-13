'use strict';

angular.module('bms')
  .config(function ($stateProvider) {
    $stateProvider.state('mail', {
      url: '/mail',
      views: {
        '': {
          templateUrl: 'views/layout.html'
        },
        'aside': {
          templateUrl: 'views/partials/asides/aside.nav.mail.html'
        },
        'nav':{
         templateUrl: 'views/partials/navs/nav.main.html'
        }
      }
    });
  })
  .controller('MailCtrl', function ($scope) {
     $scope.mail = 'hello';
  });
