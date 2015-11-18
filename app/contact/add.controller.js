angular
    .module('app')
    .controller('addCtrl',function addCtrl($scope){
        $scope.sum = function() {
            return $scope.a + $scope.b;
        };


    });
/*
function addCtrl($scope) {

    $scope.sum = function() {
        return this.a + this.b;
    };
}
*/
/*
 function add(a,b){
 return a+b;

 }
 */