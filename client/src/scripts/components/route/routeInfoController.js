;
(function() {
  'use strict';
  angular.module('app.routeInfo', [])
    .controller('RouteInfoController', ['RouteService', function(RouteService) {
      var vm = this;

      // check if route has been submitted before calculating distance
      if (RouteService.turfLine) {
        vm.shortestDistance = turf.lineDistance(RouteService.shortestPath.turfLine).toFixed(2);
        vm.minElevationDistance = turf.lineDistance(RouteService.minElevationPath.turfLine).toFixed(2);
        vm.placeNameStart = RouteService.placeNameStart;
        vm.placeNameEnd = RouteService.placeNameEnd;
        vm.elevation = RouteService.elevationCollection;
        var elevationCoords = vm.elevation.features;
        // console.log(elevationCoords);
        elevationCoords.forEach(function(feature) {
          console.log(feature.geometry.coordinates, 'coords', feature.properties.elevation, 'elevation');
        });
      }
    }])
})();
