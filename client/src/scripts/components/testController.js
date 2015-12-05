app.directive('passObject', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attr) {
          console.log(scope.test, 'test');
        }
    };
});

app.controller('MyCtrl', function ($scope) {
    $scope.test = "world22";
});
