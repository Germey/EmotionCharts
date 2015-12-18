function addRadioButton(key) {
    var label = $('<label></label>').addClass('radio').html('<div class="val">' + key + '</div>');
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
function getChart1(title, data) {
    var minY;
    if (title == '争夺头马' || title == '马偶戏')
        minY = 0;
    else
        minY = -0.5;
    return {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: title + '观众关注度上升程度对比图'
        },
        xAxis: {
            title: {
                enabled: true,
                text: '时间(分钟)'
            },
            min: 0,
            maxRange: 1,
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
            tickInterval: 5
        },
        yAxis: {
            title: {
                text: '类别'
            },
            //minRange: 1,
            min: minY,
            //max: 1.25,
            labels: {
                enabled: false
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            y: 0,
            floating: true,
            backgroundColor: '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 3,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} 分钟'
                }
            },
        },
        series: data,
        credits: {
            enabled: false
        },
    }
}
function getChart2(type, title, category, data) {
    if (type == '直方图') {
        return {
            chart: {
                type: 'column',
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
                    text: ''
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
                    color: '#16a085',
                    showInLegend: false
                }
            },
            tooltip: {
                headerFormat: '<span>{point.key}:</span>',
                pointFormat: '{point.y}'
            },
            credits: {
                enabled: false
            },
        }
    } else if (type == '饼图') {
        return {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: title
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
                    showInLegend: false
                }
            },
            series: [{
                type: 'pie',
                name: title,
                data: data
            }],
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
        }
    }
}
$(function() {
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
                        var text = $('<div></div>').text('TIP' + (index + 1) + '：' + content.tip).addClass('item show-none').attr('for', index);
                        if (!content.table) {
                            text.addClass('unclick');
                        }
                        text.appendTo($('#text'));
                        var chart2_data;
                        if (content.table) {
                            chart2_data = getChart2(content.table.type, content.table.title, content.table.category, content.table.data);
                        } else {
                            chart2_data = "";
                        }
                        chart2_datas.push(chart2_data);
                        $('#chart2-content').highcharts(chart2_data);
                    });
                    $.each($('#text .item'), function() {
                        $(this).editable({
                            type: 'textarea',
                            tooltip: '点击编辑',
                            indicator : '正在保存',
                        });
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
                if (key == button_key) {
                    $.each(value, function(index, content) {
                        Papa.parse('csv/' + content.path, {
                            download: true,
                            complete: function(results) {
                                var arr_01 = new Array();
                                var arr_05 = new Array();
                                var data = results.data;
                                var first = data[1];
                                var first_time = first[0];
                                times = new Array();
                                for (var i = 1, l = data.length - 1; i < l; i++) {
                                    var item = data[i];
                                    p_value = parseFloat(item[2]);
                                    if (p_value < 0.01) {
                                        arr_01.push([(item[0] - first_time) / 60, index, 2]);
                                    } else if (p_value > 0.01 & p_value < 0.05) {
                                        arr_05.push([(item[0] - first_time) / 60, index, 2]);
                                    }
                                }
                                chart1_datas.push({
                                    'name': content.name + '极显著',
                                    'data': arr_01,
                                    color: 'rgba(' + colors[index][0] + ',' + colors[index][1] + ',' + colors[index][2] + ', 1)'
                                });
                                chart1_datas.push({
                                    'name': content.name + '较显著',
                                    'data': arr_05,
                                    color: 'rgba(' + colors[index][0] + ',' + colors[index][1] + ',' + colors[index][2] + ', 0.5)'
                                });
                                if (index == value.length - 1) {
                                    setTimeout(function() {
                                        chart1_data = getChart1(key, chart1_datas);
                                        $('#chart1-content').highcharts(chart1_data);
                                        delete chart1_data;
                                        delete chart1_datas;
                                    }, 300);
                                }
                            }
                        });
                    });
                }
            });
        });
        setTimeout(function() {
            $('#options .radio input').first().trigger('click');
        }, 300);
    });
    $('.navbar-nav li a').on('click', function() {
        $(document.body).animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
    });
});