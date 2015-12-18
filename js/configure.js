/*
 * chart1的配置选项，索引为 options 的名字，例如 男性-女性 ，值为一个列表，包括了要统计的文件名。
 * 例如，点击 男性-女性 这个标签，代表统计 female.csv 和 male.csv, 统计表中显示的统计条目名称为 女性和男性
 * */
var chart1_json = {
    '男性-女性': [{
        'path': 'females.csv',
        'name': '女性',
    }, {
        'path': 'males.csv',
        'name': '男性',
    }],
    '成人-儿童': [{
        'path': 'adults.csv',
        'name': '成人',
    }, {
        'path': 'children.csv',
        'name': '儿童',
    }],
    '专业-非专业': [{
        'path': 'friends.csv',
        'name': '专业',
    }, {
        'path': 'strangers.csv',
        'name': '非专业',
    }],
    '男童-女童': [{
        'path': 'boys.csv',
        'name': '男童',
    }, {
        'path': 'girls.csv',
        'name': '女童',
    }],
    '一年内观剧不同次数': [{
        'path': '0frequency.csv',
        'name': '0次',
    }, {
        'path': '1_3frequency.csv',
        'name': '1-3次',
    }, {
        'path': '4_10frequency.csv',
        'name': '4-10次',
    }, {
        'path': '11frequency.csv',
        'name': '11次以上',
    }],
    '不同观剧氛围': [{
        'path': 'theatre.csv',
        'name': '独自观剧',
    }, {
        'path': 'non_theatre.csv',
        'name': '跟朋友观剧',
    }],
    '争夺头马': [{
        'path': 'all.csv',
        'name': '全场',
    }],
    '马偶戏': [{
        'path': 'all.csv',
        'name': '全场',
    }]
};
/*
 * 颜色配置，例如如下配置则为 0-0.005 的 p_value 值显示 #306157, 0.005-0.01 的 p_value 值显示 #356C61,
 * 数组大小可变，最后一项为默认项，不带value参数。
 * 通过如下配置可以控制画点颜色深浅。
 * */
zones = [[{
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
}], [{
    value: 0,
    color: '#530909',
}, {
    value: 0.005,
    color: '#6D1818',
}, {
    value: 0.01,
    color: '#933535',
}, {
    value: 0.02,
    color: '#A84F4F',
}, {
    value: 0.03,
    color: '#C77676',
}, {
    value: 0.04,
    color: '#E2A5A5',
}, {
    value: 0.05,
    color: '#F1C8C8',
}, {
    color: '#FFF',
}]];
colors = [
    [5, 116, 94],
    [214, 29, 46],
    [4, 232, 16],
    [64, 22, 126],
    [94, 242, 216],
    [24, 122, 16],
    [85, 22, 16],
    [64, 220, 116],
    [24, 22, 186],
]