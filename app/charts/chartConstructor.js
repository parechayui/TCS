function chart(xval,yval,chartStructure) {
    var wmchart = {
        "barChart": {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 100,
                    left: 65
                }
                ,
                x: function (d) {
                    return d.label;
                }
                ,

                y: function (d) {
                    return d.value;
                }
                ,

                showValues: true,
                valueFormat: function (d) {
                    return d3.format(',.4f')(d);
                }
                ,
                transitionDuration: 500,
                xAxis: {
                    axisLabel: xval
                }
                ,

                yAxis: {
                    axisLabel: yval
                }
            }
        },

        "lineChart": {
            chart: {
                type: 'cumulativeLineChart',
                height: 500,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 100,
                    left: 65
                }
                ,
                x: function (d) {
                    return d[0];
                }
                ,
                y: function (d) {
                    return d[1] / 100;
                }
                ,
                average: function (d) {
                    return d.mean / 100;
                }
                ,

                color: d3.scale.category10().range(),
                duration: 300,
                useInteractiveGuideline: true,
                clipVoronoi: true,

                xAxis: {
                    axisLabel: xval,
                    tickFormat: function (d) {
                        return d3.time.format('%m/%d/%y')(new Date(d))
                    }

                    ,
                    showMaxMin: true,
                    staggerLabels: true
                }
                ,

                yAxis: {
                    axisLabel: yval,
                    tickFormat: function (d) {
                        return d3.format(',.1%')(d);
                    }

                    ,
                    axisLabelDistance: 0
                }
            }

        }
    }
    return wmchart[chartStructure];
}
