;
(function() {
  'use strict';
  angular.module('app.elevation')
    .directive('d3Elevation', function() {
      return {
        restrict: 'E',
        link: function(scope, elem, attr) {
          console.log(scope.test, '<< d3Elevation directive scope');
        }
      };
    });
})();
