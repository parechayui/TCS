(function()
{
 'use strict';
    angular
        .module('app')
        .controller('HomeList',['pocRestangularService',HomeList]);

    function HomeList(pocRestangularService){
        var vm=this;
        pocRestangularService.getdata("db",function(results){//This is db.json file
        vm.person=results.data['records'];
    });
        pocRestangularService.postdata("db","city",function(results){//This is db.json file
            console.log(results[0]);
        });


}})();

