/*(function(){
 'use strict';*/

angular.module('app').controller('PartialHomeList',PartialHomeList);
PartialHomeList.$inject = ['$scope','pocRestangularService'];
function PartialHomeList($scope,pocRestangularService){


    pocRestangularService.getdata("customers.php",function(results){
        console.log("Data",results);
        alert(JSON.stringify(results));
        $scope.names = ['John', 'Ram', 'Mike'];

    });



}
/*
 })();*/
