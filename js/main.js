
function addRadioButton(key) {
    var label = $('<label></label>').addClass('radio').html('<div class="val">'+ key + '</div>');
    $('<span class="icons"><span class="icon-unchecked">' +
        '</span><span class="icon-checked"></span></span>').prependTo(label);
    $('<input>').attr({
        'name': 'optionsRadios2',
        'type': 'radio',
        'data-toggle': 'radio',
        'required': 'required',
        'class': 'custom-radio'
    }).prependTo(label);
    label.appendTo('#options .form-group');
}

function getChartType(kind) {
    var chart_type = {
        "直方图" : 'column',
    }
    return chart_type[kind];
}

function getChart1(category, data) {
    return {
        title: {
            text: "P_VALUE变化一览表",
            x: -20
        },
        xAxis: {
            categories: category
        },
        yAxis: {
            title: {
                text: 'P_VALUE'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: data,
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
    }
}

function getChart2(type, title, category, data) {
    return {
        chart: {
            type: getChartType(type)
        },
        title: {
            text: title,
        },
        xAxis: {
            categories: category
        },
        yAxis: {
            min: 0,
            title: {
                text: '人数'
            }
        },
        series: [{
            name: '人数',
            data: data,
        }],
        exporting: {
            enabled: false
        },
        plotOptions: {
            series: {
                color: '#16a085'
            }
        },
        credits: {
            enabled: false
        },
    }
}


var chart1_json = {
    '男性-女性': [{
        'path' : 'female.csv',
        'name': '女性',
    }, {
        'path' : 'male.csv',
        'name': '男性',
    }],
    '成人-儿童': [{
        'path' : 'female.csv',
        'name': '成人',
    }, {
        'path' : 'male.csv',
        'name': '儿童',
    }]
};



$(function () {
    $.getJSON('json/format.json', function(data) {
        $.each(data, function(key, value) {
            addRadioButton(key);
        });
        $('#options .radio input').on('click', function() {
            button_key = $(this).siblings('.val').text();
            $.each(data, function(key, value) {
                if (key == button_key) {
                    chart2_datas = new Array();
                    $('#text').html('');
                    $.each(value, function(index, content) {
                        $('<div></div>').text('TIP' + (index + 1) + '：' + content.tip).addClass('item show-none').attr('for', index).appendTo($('#text'));
                        chart2_data = getChart2(content.table.type, content.table.title, content.table.category, content.table.data);
                        chart2_datas.push(chart2_data);
                        $('#chart2-content').highcharts(chart2_data);
                    });
                    $('#text .item').on('click', function() {
                        $('#text .item').removeClass('active');
                        $(this).addClass('active');
                        $('#chart2-content').highcharts(chart2_datas[$(this).attr('for')]);
                    });
                    $('#text .item').first().trigger('click');
                }
            });
            $('#text .item').fadeIn();
        });
        $('#options .radio input').on('click', function() {
            button_key = $(this).siblings('.val').text();
            $.each(chart1_json, function(key, value) {
                chart1_datas = new Array();
                times = new Array();
                if (key == button_key) {
                    $.each(value, function(index, content) {
                        Papa.parse('csv/' + content.path, {
                            download: true,
                            complete: function(results) {
                                var data = results.data;
                                var first = data[1];
                                var first_time = first[0];
                                times = new Array();
                                console.log(first_time);
                                var p_values = new Array();
                                for(var i = 1, l = data.length-1; i < l; i++) {
                                    var item = data[i];
                                    times.push((item[0] - first_time)/60 + '分钟');
                                    p_values.push(parseFloat(item[2]));
                                }
                                chart1_datas.push({'name': content.name, 'data': p_values});
                                if (index == value.length - 1) {
                                    chart1_data = getChart1(times, chart1_datas);
                                    console.log(chart1_data);
                                    $('#chart1-content').highcharts(chart1_data);
                                    delete chart1_data;
                                    delete chart1_datas;
                                }
                            }
                        });

                    });
                }

            });
        });
        $('#options .radio input').first().trigger('click');
    });
    $('.navbar-nav li a').on('click', function() {
        $(document.body).animate({scrollTop:$($(this).attr('href')).offset().top}, 1000);
    });


    /*
    csvData = getOneCsvData('csv/female.csv', '女');
    console.log(csvData);
    */

});

$(function () {

});