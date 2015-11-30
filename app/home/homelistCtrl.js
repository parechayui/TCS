
(function()
{
    angular.module('app').controller('HomeList',HomeList);
    HomeList.$inject = ['$scope','pocRestangularService'];
    function HomeList($scope,pocRestangularService){
            pocRestangularService.getdata("custoers.php",function(results){
            //alert(JSON.stringify(results));
            toastr.info(JSON.stringify(results));
            $scope.names = ['John', 'Ram', 'Mike'];
    });
}})()

