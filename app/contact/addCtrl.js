         angular
              .module('app')
              .controller('addCtrl', ['$scope',function($scope) {
                  $scope.sum = function () {
                      return this.a + this.b;
                  }
              }]);

          /* function which manipulates the controllers
          function addCtrl($scope) {
              $scope.sum = function () {
                  return this.a + this.b;
              }
          }
           */
