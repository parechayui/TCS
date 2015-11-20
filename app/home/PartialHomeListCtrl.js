/*(function(){
 'use strict';*/

angular.module('app').controller('PartialHomeList',PartialHomeList);
PartialHomeList.$inject = ['$scope','pocRestangularService'];
function PartialHomeList($scope,pocRestangularService){


    pocRestangularService.getdata("customers.php",function(results){

        //alert(JSON.stringify(results));
        toastr.info(JSON.stringify(results));
        $scope.names = ['John', 'Ram', 'Mike'];

    });



}
/*
 })();*/
