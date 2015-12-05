;
(function() {
  'use strict';
  angular.module('app.elevation', [])
    .controller('ElevationCtrl', ['$scope', function($scope) {
      $scope.$on('routePlotted', function(event, data) {
       console.log('in elevationController', data)
        $scope.test = 'heerre!';
      });
    }]);
})();
