/**
 * Created by CQC on 2015/12/16.
 */
function getPieData(key, value) {
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: key + '比例统计图'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: '比例统计',
            data: value
        }],
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
    };
}

$(function() {
    $.getJSON('json/percent.json', function(data) {
        $.each(data, function(key, value) {
            con = $('<div></div>').addClass('pie');
            console.log(con);
            con.appendTo($('#percent'));
            con.highcharts(getPieData(key, value));
        })
    });
});