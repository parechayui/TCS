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


            $scope.options = wmchartFun("Products","Values","barChart", modifyChart);


            $scope.data = bardata;
              $scope.onReady = function(scope, el){
                 chart= scope.chart;
              }
              function modifyChart(svg){

                  console.log(svg);
              }


       });
    }})();

