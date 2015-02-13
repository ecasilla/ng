'use strict';

/**
* @ngdoc function
* @name bms.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the bmsApp
*/
angular.module('bms')
.controller('MainCtrl', 

function ($scope,$mdSidenav,$timeout,$mdBottomSheet,$location) {
  /**
  * Hide or Show the sideNav area
  * @param menuId
  */
  function toggleSideNav( name ) {
    $mdSidenav(name).toggle();
  }

  $scope.toggleSideNav = toggleSideNav;

  $scope.showGridBottomSheet = function($event) {
    $mdBottomSheet.show({
      templateUrl: '../../views/common/footer_grid.html',
      controller: 'GridCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $location.path(clickedItem.name);
    });
  };
})
.controller('GridCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Mail', icon: 'mail' },
    { name: 'Message', icon: 'message' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Facebook', icon: 'facebook' },
    { name: 'Twitter', icon: 'twitter' },
  ];
  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
});
