$(function () {
    var chart2 = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        xAxis: {
            categories: [
                '男',
                '女',
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: '人数'
            }
        },
        series: [{
            name: '人数',
            data: [6,35]
        }],
        exporting: {
            enabled: false
        },
        plotOptions: {
            series: {
                color: '#16a085'
            }
        },
    };
    $('#chart2-content').highcharts(chart2);
    $.getJSON('json/format.json', function(data) {
        $.each(data, function(key, value) {
            alert(key);
        })
    });
});