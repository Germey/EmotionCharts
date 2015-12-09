
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

function getChart(type, title, category, data) {
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

$(function () {
    $.getJSON('json/format.json', function(data) {
        $.each(data, function(key, value) {
            addRadioButton(key);
        });
        $('#options .radio input').on('click', function() {
            button_key = $(this).siblings('.val').text();
            $.each(data, function(key, value) {
                if (key == button_key) {
                    chart_datas = new Array();
                    $('#text').html('');
                    $.each(value, function(index, content) {
                        $('<div></div>').text('TIP' + (index + 1) + '：' + content.tip).addClass('item show-none').attr('for', index).appendTo($('#text'));
                        chart_data = getChart(content.table.type, content.table.title, content.table.category, content.table.data);
                        chart_datas.push(chart_data);
                        console.log(content.table.name);
                        $('#chart2-content').highcharts(chart_data);
                    });
                    $('#text .item').on('click', function() {
                        $('#text .item').removeClass('active');
                        $(this).addClass('active');
                        $('#chart2-content').highcharts(chart_datas[$(this).attr('for')]);
                    });
                    $('#text .item').first().trigger('click');
                }
            });
            $('#text .item').fadeIn();
        });
        $('#options .radio input').first().trigger('click');
    });
});