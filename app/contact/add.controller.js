angular
    .module('app')
    .controller('addController',['$scope',addController]);

function addController($scope) {
    $scope.sum = function() {
        return this.a + this.b;
    };
}

/*
 function add(a,b){
 return a+b;

 }
 */