(function()
{
 'use strict';
    angular
        .module('app')
        .controller('HomeList',['$scope','pocRestangularService',HomeList]);

    function HomeList($scope,pocRestangularService){
            pocRestangularService.getdata("customers.php",function(results){
            //alert(JSON.stringify(results));
            toastr.info(JSON.stringify(results));
            $scope.names = ['John', 'Ram', 'Mike'];
    });
}})()

