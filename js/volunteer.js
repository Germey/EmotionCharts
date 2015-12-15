/**
 * Created by CQC on 2015/12/16.
 */
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
$(function() {
    $.getJSON('json/volunteer.json', function(data) {
        console.log(data);
        $.each(data, function(key, value) {
            console.log(key);
            addRadioButton(key);
        });
    });
    Papa.parse('csv/volunteer_70.csv', {
        download: true,
        encoding: "utf-8",
        complete: function(results) {
            var data = results.data;
            for (var i = 1, l = data.length - 1; i < l; i++) {
                var item = data[i];
                $('<tr>'
                + '<td>' + item[2] + '</td>'
                + '<td>' + item[3] + '</td>'
                + '<td>' + item[4] + '</td>'
                + '<td>' + item[5] + '</td>'
                + '<td>' + item[6] + '</td>'
                + '<td>' + item[7] + '</td>'
                + '<td>' + item[8] + '</td>'
                + '<td>' + item[9] + '</td>'
                + '<td>' + item[10] + '</td>'
                + '<td>' + item[11] + '</td>'
                + '<td>' + item[12] + '</td>'
                + '<td>' + item[13] + '</td>'
                + '<td>' + item[14] + '</td>'
                + '</tr>'
                ).appendTo($('#volunteer table'));
            }
        }
    });
});