;
(function() {
  'use strict';
  angular.module('app.elevation', [])
    .controller('ElevationCtrl', ['$scope', function($scope) {
      console.log('in myctrl');
      $scope.test = "ElevationCtrl controller data";
    }]);
})();
