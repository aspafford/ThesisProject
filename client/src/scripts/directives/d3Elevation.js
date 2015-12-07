;
(function() {
  'use strict';
  angular.module('app.elevation', ['d3'])
    .directive('d3Elevation', ['d3Service', '$window', function(d3Service, $window) {
      return {
        restrict: 'E',
        scope: {},
        link: function(scope, element, attr) {
          d3Service.d3().then(function(d3) {

            var margin = 2,
              barWidth =  2,
              barPadding =  1;

            var svg = d3.select(element[0])
              .append('svg')
              .style('width', '100%', 'height', '400px');

            // Browser onresize event
            window.onresize = function() {
              scope.$apply();
            };

            scope: { obj: '=' }

            // listen for plotRoute function in routeInputController
            scope.$on('routePlotted', function(event, data) {

              scope.data = data.features;

              // Watch for resize event
              scope.$watch(function() {
                return angular.element($window)[0].innerWidth;
              }, function() {
                scope.render(scope.data);
              });

              // render elevation graph
              scope.render = function(data) {

                // remove all previous items before render
                svg.selectAll('*').remove();

                // If we don't pass any data, return out of the element
                if (!data) return;

                // setup variables
                // var height = d3.select(element[0]).node().offsetHeight - margin,
                var height = 400,
                height2 = d3.select(element[0]).node().offsetWidth - margin,
                  // calculate the width
                  width = scope.data.length * (barWidth + barPadding),
                  // Use the category20() scale function for multicolor support
                  color = d3.scale.category20(),
                  // our yScale
                  yScale = d3.scale.linear()
                  .domain([0, d3.max(data, function(d) {
                    return d.properties.elevation;
                  })])
                  .range([0, width]);

                console.log(height, 'height', height2, 'height2');

                // set the height based on the calculations above
                svg.attr('height', height);

                // //create the rectangles for the bar chart
                svg.selectAll('rect') .data(data).enter()
                    .append('rect')
                    .attr('width', barWidth)
                    .attr('height', 140)
                    .attr('y', Math.round(margin / 2))
                    .attr('x', function(d, i) {
                      return i * (barWidth + barPadding);
                    })
                    .attr('fill', function(d) { return color(d.properties.elevation); })
                    .transition()
                      .duration(1000)
                      .attr('height', function(d) {
                        return yScale(d.properties.elevation);
                      });

                      // .attr("height", function(d) { return height - y(d.frequency); });
              }
              // END RENDER

            });
          });
        }
      };
    }]);
})();
