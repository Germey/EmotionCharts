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
    color: '#306157',
}, {
    value: 0.005,
    color: '#356C61',
}, {
    value: 0.01,
    color: '#387B6D',
}, {
    value: 0.02,
    color: '#3B8B7A',
}, {
    value: 0.03,
    color: '#3D9A86',
}, {
    value: 0.04,
    color: '#3FA58F',
}, {
    value: 0.05,
    color: '#40B299',
}, {
    value: 0.06,
    color: '#41CCAE',
}, {
    value: 0.08,
    color: '#3CD9B7',
}, {
    value: 0.10,
    color: '#34E8C1',
}, {
    value: 0.15,
    color: '#4BF0CC',
}, {
    value: 0.20,
    color: '#65F6D7',
}, {
    value: 0.25,
    color: '#7FFBE1',
}, {
    value: 0.30,
    color: '#96F8E3',
}, {
    value: 0.35,
    color: '#B0FBEB',
}, {
    value: 0.40,
    color: '#CAFDF2',
}, {
    color: '#FCFCFC',
}];