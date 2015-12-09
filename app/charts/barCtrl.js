(function()
{
    'use strict';
    angular
        .module('app')
        .controller('BarChartCtrl',["$scope","pocRestangularService",BarChartCtrl]);

    function BarChartCtrl($scope,pocRestangularService){
        var vm=this;
          pocRestangularService.getdata("db",function(results){//This is json/index.js file
            var bardata=[
                {
                    key: "Cumulative Return",
                    values: results.data['values']
                }
            ];


            $scope.options =chart("Products","Values","barChart");
            $scope.data = bardata;
             // console.log(d3.svg.attr("width",12));


              //console.log( d3.select(element[0]).select('svg'));
                  /*.data(dataset)
             selectAll("text")
             .enter()
             .append("text").
                  text(function(d) {
                      return d;
                  })*/
       });
    }})();

