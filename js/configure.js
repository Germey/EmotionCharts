/*
* chart1的配置选项，索引为 options 的名字，例如 男性-女性 ，值为一个列表，包括了要统计的文件名。
* 例如，点击 男性-女性 这个标签，代表统计 female.csv 和 male.csv, 统计表中显示的统计条目名称为 女性和男性
* */

var chart1_json = {
    '男性-女性': [{
        'path': 'female.csv',
        'name': '女性',
    }, {
        'path': 'male.csv',
        'name': '男性',
    }],
    '成人-儿童': [{
        'path': 'female.csv',  /* 暂作测试 */
        'name': '成人',
    }, {
        'path': 'male.csv',
        'name': '儿童',
    }]
};

/*
* 颜色配置，例如如下配置则为 0-0.005 的 p_value 值显示 #306157, 0.005-0.01 的 p_value 值显示 #356C61,
* 数组大小可变，最后一项为默认项，不带value参数。
* 通过如下配置可以控制画点颜色深浅。
* */

zones = [{
    value: 0,
    color: '#071E1A',
}, {
    value: 0.005,
    color: '#1B5147',
}, {
    value: 0.01,
    color: '#33766A',
}, {
    value: 0.02,
    color: '#4B9689',
}, {
    value: 0.03,
    color: '#73BCAF',
}, {
    value: 0.04,
    color: '#9BD7CD',
}, {
    value: 0.05,
    color: '#B2F0E4',
}, {
    color: '#FFF',
}];