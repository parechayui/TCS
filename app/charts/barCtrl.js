var bardata=[
    {
        key: "Cumulative Return",
        values: [
            {
                "label" : "A" ,
                "value" : -29.765957771107
            } ,
            {
                "label" : "B" ,
                "value" : 45
            } ,
            {
                "label" : "C" ,
                "value" : 32.807804682612
            } ,
            {
                "label" : "D" ,
                "value" : 196.45946739256
            } ,
            {
                "label" : "E" ,
                "value" : 2.19434030906893
            } ,
            {
                "label" : "F" ,
                "value" : -98.079782601442
            } ,
            {
                "label" : "G" ,
                "value" : -13.925743130903
            } ,
            {
                "label" : "H" ,
                "value" : -5.1387322875705
            },
            {
                "label" : "I" ,
                "value" : -29.765957771107
            },
            {
                "label" : "J" ,
                "value" : -29.765957771107
            },
            {
                "label" : "K" ,
                "value" : -25.1387322875705
            },
            {
                "label" : "L" ,
                "value" : 60.765957771107
            },
            {
                "label" : "M" ,
                "value" : 19.765957771107
            },
            {
                "label" : "N" ,
                "value" : 35.1387322875705
            },
            {
                "label" : "O" ,
                "value" : 29.765957771107
            }
        ]
    }
];
var barchart=
    {
        chart: {
            type: 'discreteBarChart',
                height: 450,
                margin : {
                top: 20,
                    right: 20,
                    bottom: 100,
                    left: 65
            },
            x: function(d){return d.label;},
            y: function(d){return d.value;},
            showValues: true,
                valueFormat: function(d){
                return d3.format(',.4f')(d);
            },
            transitionDuration: 500,
                xAxis: {
                axisLabel: 'X Axis'
            },
            yAxis: {
                axisLabel: 'Y Axis'
            }
        }
}

angular
    .module('app')
    .controller('BarChartCtrl', function($scope) {
        $scope.options =barchart;
        $scope.data = bardata;
});
