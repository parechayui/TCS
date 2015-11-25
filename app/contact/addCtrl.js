(function(){angular
             .module('app')
             .controller('AddCtrl', ['$scope',function($scope) {
                $scope.sum = function () {
                     return $scope.a+$scope.b;
                 }
                }]);
         })();