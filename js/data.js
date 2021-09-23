(function (window) {
    var data = {
        // 城市信息
        getCityData() {
            var data = [
                {
                    "name": "A",
                    "data": [
                        "阿拉善盟",
                        "鞍山市",
                        "安庆市",
                        "安阳市",
                        "阿坝藏族羌族自治州",
                        "安顺市",
                        "阿里地区",
                        "安康市",
                        "阿克苏地区",
                        "阿勒泰地区",
                        "阿拉尔市",
                        "澳门"
                    ]
                },
                {
                    "name": "B",
                    "data": [
                        "保定市",
                        "包头市",
                        "巴彦淖尔市",
                        "本溪市",
                        "白山市",
                        "白城市",
                        "蚌埠市",
                        "亳州市",
                        "滨州市",
                        "北海市",
                        "百色市",
                        "白沙黎族自治县",
                        "保亭黎族苗族自治县",
                        "巴中市",
                        "毕节市",
                        "保山市",
                        "宝鸡市",
                        "白银市",
                        "博尔塔拉蒙古自治州",
                        "巴音郭楞蒙古自治州",
                        "北屯市",
                        "北京市"
                    ]
                },
                {
                    "name": "C",
                    "data": [
                        "承德市",
                        "沧州市",
                        "长治市",
                        "赤峰市",
                        "朝阳市",
                        "长春市",
                        "常州市",
                        "滁州市",
                        "池州市",
                        "长沙市",
                        "常德市",
                        "郴州市",
                        "潮州市",
                        "崇左市",
                        "澄迈县",
                        "昌江黎族自治县",
                        "成都市",
                        "楚雄彝族自治州",
                        "昌都市",
                        "昌吉回族自治州",
                        "重庆市"
                    ]
                },
                {
                    "name": "D",
                    "data": [
                        "定州市",
                        "大同市",
                        "大连市",
                        "丹东市",
                        "大庆市",
                        "大兴安岭地区",
                        "东营市",
                        "德州市",
                        "东莞市",
                        "东方市",
                        "定安县",
                        "德阳市",
                        "达州市",
                        "大理白族自治州",
                        "德宏傣族景颇族自治州",
                        "迪庆藏族自治州",
                        "定西市"
                    ]
                },
                {
                    "name": "E",
                    "data": [
                        "鄂尔多斯市",
                        "鄂州市",
                        "恩施土家族苗族自治州"
                    ]
                },
                {
                    "name": "F",
                    "data": [
                        "抚顺市",
                        "阜新市",
                        "阜阳市",
                        "福州市",
                        "抚州市",
                        "佛山市",
                        "防城港市"
                    ]
                },
                {
                    "name": "G",
                    "data": [
                        "赣州市",
                        "广州市",
                        "桂林市",
                        "贵港市",
                        "广元市",
                        "广安市",
                        "甘孜藏族自治州",
                        "贵阳市",
                        "甘南藏族自治州",
                        "果洛藏族自治州",
                        "固原市"
                    ]
                },
                {
                    "name": "H",
                    "data": [
                        "邯郸市",
                        "衡水市",
                        "呼和浩特市",
                        "呼伦贝尔市",
                        "葫芦岛市",
                        "哈尔滨市",
                        "鹤岗市",
                        "黑河市",
                        "淮安市",
                        "杭州市",
                        "湖州市",
                        "合肥市",
                        "淮南市",
                        "淮北市",
                        "黄山市",
                        "菏泽市",
                        "鹤壁市",
                        "漯河市",
                        "黄石市",
                        "黄冈市",
                        "衡阳市",
                        "怀化市",
                        "惠州市",
                        "河源市",
                        "贺州市",
                        "河池市",
                        "海口市",
                        "红河哈尼族彝族自治州",
                        "汉中市",
                        "海东市",
                        "海北藏族自治州",
                        "黄南藏族自治州",
                        "海南藏族自治州",
                        "海西蒙古族藏族自治州",
                        "哈密市",
                        "和田地区"
                    ]
                },
                {
                    "name": "J",
                    "data": [
                        "晋城市",
                        "晋中市",
                        "锦州市",
                        "吉林市",
                        "鸡西市",
                        "佳木斯市",
                        "嘉兴市",
                        "金华市",
                        "景德镇市",
                        "九江市",
                        "吉安市",
                        "济南市",
                        "济宁市",
                        "焦作市",
                        "济源市",
                        "荆门市",
                        "荆州市",
                        "江门市",
                        "揭阳市",
                        "嘉峪关市",
                        "金昌市",
                        "酒泉市"
                    ]
                },
                {
                    "name": "K",
                    "data": [
                        "开封市",
                        "昆明市",
                        "克拉玛依市",
                        "克孜勒苏柯尔克孜自治州",
                        "喀什地区",
                        "可克达拉市",
                        "昆玉市"
                    ]
                },
                {
                    "name": "L",
                    "data": [
                        "廊坊市",
                        "临汾市",
                        "吕梁市",
                        "辽阳市",
                        "辽源市",
                        "连云港市",
                        "丽水市",
                        "六安市",
                        "龙岩市",
                        "莱芜市",
                        "临沂市",
                        "聊城市",
                        "洛阳市",
                        "娄底市",
                        "柳州市",
                        "来宾市",
                        "临高县",
                        "乐东黎族自治县",
                        "陵水黎族自治县",
                        "乐山市",
                        "凉山彝族自治州",
                        "六盘水市",
                        "丽江市",
                        "临沧市",
                        "拉萨市",
                        "林芝市",
                        "兰州市",
                        "陇南市",
                        "临夏回族自治州"
                    ]
                },
                {
                    "name": "M",
                    "data": [
                        "牡丹江市",
                        "马鞍山市",
                        "茂名市",
                        "梅州市",
                        "绵阳市",
                        "眉山市"
                    ]
                },
                {
                    "name": "N",
                    "data": [
                        "南京市",
                        "南通市",
                        "宁波市",
                        "南平市",
                        "宁德市",
                        "南昌市",
                        "南阳市",
                        "南宁市",
                        "内江市",
                        "南充市",
                        "怒江傈僳族自治州",
                        "那曲地区"
                    ]
                },
                {
                    "name": "P",
                    "data": [
                        "盘锦市",
                        "莆田市",
                        "萍乡市",
                        "平顶山市",
                        "攀枝花市",
                        "普洱市",
                        "平凉市"
                    ]
                },
                {
                    "name": "Q",
                    "data": [
                        "秦皇岛市",
                        "齐齐哈尔市",
                        "七台河市",
                        "衢州市",
                        "泉州市",
                        "青岛市",
                        "潜江市",
                        "清远市",
                        "钦州市",
                        "琼海市",
                        "琼中黎族苗族自治县",
                        "黔西南布依族苗族自治州",
                        "黔东南苗族侗族自治州",
                        "黔南布依族苗族自治州",
                        "曲靖市",
                        "庆阳市"
                    ]
                },
                {
                    "name": "R",
                    "data": [
                        "日照市",
                        "日喀则市"
                    ]
                },
                {
                    "name": "S",
                    "data": [
                        "石家庄市",
                        "朔州市",
                        "沈阳市",
                        "四平市",
                        "松原市",
                        "双鸭山市",
                        "绥化市",
                        "苏州市",
                        "宿迁市",
                        "绍兴市",
                        "宿州市",
                        "三明市",
                        "上饶市",
                        "三门峡市",
                        "商丘市",
                        "十堰市",
                        "随州市",
                        "神农架林区",
                        "邵阳市",
                        "韶关市",
                        "深圳市",
                        "汕头市",
                        "汕尾市",
                        "三亚市",
                        "三沙市",
                        "遂宁市",
                        "山南市",
                        "商洛市",
                        "石嘴山市",
                        "石河子市",
                        "双河市",
                        "上海市"
                    ]
                },
                {
                    "name": "T",
                    "data": [
                        "唐山市",
                        "太原市",
                        "通辽市",
                        "铁岭市",
                        "通化市",
                        "泰州市",
                        "台州市",
                        "铜陵市",
                        "泰安市",
                        "天门市",
                        "屯昌县",
                        "铜仁市",
                        "铜川市",
                        "天水市",
                        "吐鲁番市",
                        "塔城地区",
                        "图木舒克市",
                        "铁门关市",
                        "天津市",
                        "台湾"
                    ]
                },
                {
                    "name": "W",
                    "data": [
                        "乌海市",
                        "乌兰察布市",
                        "无锡市",
                        "温州市",
                        "芜湖市",
                        "潍坊市",
                        "威海市",
                        "武汉市",
                        "梧州市",
                        "五指山市",
                        "文昌市",
                        "万宁市",
                        "文山壮族苗族自治州",
                        "渭南市",
                        "武威市",
                        "吴忠市",
                        "乌鲁木齐市",
                        "五家渠市"
                    ]
                },
                {
                    "name": "X",
                    "data": [
                        "邢台市",
                        "辛集市",
                        "忻州市",
                        "兴安盟",
                        "锡林郭勒盟",
                        "徐州市",
                        "宣城市",
                        "厦门市",
                        "新余市",
                        "新乡市",
                        "许昌市",
                        "信阳市",
                        "襄阳市",
                        "孝感市",
                        "咸宁市",
                        "仙桃市",
                        "湘潭市",
                        "湘西土家族苗族自治州",
                        "西双版纳傣族自治州",
                        "西安市",
                        "咸阳市",
                        "西宁市",
                        "香港"
                    ]
                },
                {
                    "name": "Y",
                    "data": [
                        "阳泉市",
                        "运城市",
                        "营口市",
                        "延边朝鲜族自治州",
                        "伊春市",
                        "盐城市",
                        "扬州市",
                        "鹰潭市",
                        "宜春市",
                        "烟台市",
                        "濮阳市",
                        "宜昌市",
                        "岳阳市",
                        "益阳市",
                        "永州市",
                        "阳江市",
                        "云浮市",
                        "玉林市",
                        "宜宾市",
                        "雅安市",
                        "玉溪市",
                        "延安市",
                        "榆林市",
                        "玉树藏族自治州",
                        "银川市",
                        "伊犁哈萨克自治州"
                    ]
                },
                {
                    "name": "Z",
                    "data": [
                        "张家口市",
                        "镇江市",
                        "舟山市",
                        "漳州市",
                        "淄博市",
                        "枣庄市",
                        "郑州市",
                        "周口市",
                        "驻马店市",
                        "株洲市",
                        "张家界市",
                        "珠海市",
                        "湛江市",
                        "肇庆市",
                        "中山市",
                        "儋州市",
                        "自贡市",
                        "泸州市",
                        "资阳市",
                        "遵义市",
                        "昭通市",
                        "张掖市",
                        "中卫市"
                    ]
                }
            ]
            return data
        },
        // 商品分类
        getCategoryData() {
            var data = [
                {
                    "title": "家用电器",
                    "id": 858,
                    "subTitle": [
                        "厨房电器",
                        "大家电"
                    ],
                    "cateTitle": [
                        "品牌日",
                        "家电城",
                        "智能生活馆",
                        "京东净化馆",
                        "京东帮服务店",
                        "值得买精选"
                    ],
                    "supplier": [
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072850306019115.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490039286075654490.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072313895957648.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072329183966195.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072384627679069.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072399542595828.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072417755830176.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072746651935979.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072756032175204.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072777790374054.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072787223453617.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072804442637685.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072813729175306.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072823106532144.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072835176110718.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072860522023692.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072870537181142.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072889090025069.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072898345358625.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072918339853569.jpg"
                    ],
                    "ADimg": "https://x.dscmall.cn/storage/data/afficheimg/1490847672639256000.jpg",
                    "children": [
                        {
                            "titleId": 1129,
                            "title": "厨房电器",
                            "category": [
                                {
                                    "id": "1131",
                                    "name": "电饭煲"
                                },
                                {
                                    "id": "1130",
                                    "name": "电压力锅"
                                },
                                {
                                    "id": "1132",
                                    "name": "豆浆机"
                                },
                                {
                                    "id": "1133",
                                    "name": "面包机"
                                },
                                {
                                    "id": "1134",
                                    "name": "咖啡机"
                                },
                                {
                                    "id": "1135",
                                    "name": "微波炉"
                                },
                                {
                                    "id": "1136",
                                    "name": "料理/榨汁机"
                                },
                                {
                                    "id": "1137",
                                    "name": "电烤箱"
                                },
                                {
                                    "id": "1138",
                                    "name": "电磁炉"
                                }
                            ]
                        },
                        {
                            "titleId": 1105,
                            "title": "大家电",
                            "category": [
                                {
                                    "id": "1106",
                                    "name": "平板电视"
                                },
                                {
                                    "id": "1107",
                                    "name": "空调"
                                },
                                {
                                    "id": "1108",
                                    "name": "冰箱"
                                },
                                {
                                    "id": "1109",
                                    "name": "洗衣机"
                                },
                                {
                                    "id": "1110",
                                    "name": "家庭影院"
                                },
                                {
                                    "id": "1111",
                                    "name": "DVD"
                                },
                                {
                                    "id": "1112",
                                    "name": "迷你音响"
                                },
                                {
                                    "id": "1113",
                                    "name": "热水器"
                                },
                                {
                                    "id": "1114",
                                    "name": "冷吧/冰柜"
                                }
                            ]
                        },
                        {
                            "titleId": 1145,
                            "title": "个护健康",
                            "category": [
                                {
                                    "id": "1152",
                                    "name": "按摩椅"
                                },
                                {
                                    "id": "1146",
                                    "name": "剃须刀"
                                },
                                {
                                    "id": "1147",
                                    "name": "脱毛器"
                                },
                                {
                                    "id": "1148",
                                    "name": "口腔护理"
                                },
                                {
                                    "id": "1151",
                                    "name": "理发器"
                                },
                                {
                                    "id": "1153",
                                    "name": "按摩器"
                                },
                                {
                                    "id": "1154",
                                    "name": "足浴盆"
                                }
                            ]
                        },
                        {
                            "titleId": 1160,
                            "title": "五金家装",
                            "category": [
                                {
                                    "id": "1161",
                                    "name": "电动工具"
                                },
                                {
                                    "id": "1164",
                                    "name": "仪表"
                                },
                                {
                                    "id": "1169",
                                    "name": "水槽"
                                }
                            ]
                        },
                        {
                            "titleId": 1115,
                            "title": "生活电器",
                            "category": [
                                {
                                    "id": "1116",
                                    "name": "电风扇"
                                },
                                {
                                    "id": "1117",
                                    "name": "冷风扇"
                                },
                                {
                                    "id": "1118",
                                    "name": "净化器"
                                },
                                {
                                    "id": "1119",
                                    "name": "加湿器"
                                },
                                {
                                    "id": "1120",
                                    "name": "扫地机器人"
                                },
                                {
                                    "id": "1121",
                                    "name": "吸尘器"
                                },
                                {
                                    "id": "1123",
                                    "name": "电话机"
                                },
                                {
                                    "id": "1124",
                                    "name": "饮水机"
                                },
                                {
                                    "id": "1125",
                                    "name": "取暖电器"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "男装、女装、内衣",
                    "id": 6,
                    "subTitle": [
                        "女装",
                        "男装"
                    ],
                    "cateTitle": [
                        "男装",
                        "女装",
                        "内衣",
                        "国际品牌"
                    ],
                    "supplier": [
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072850306019115.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490071974970349584.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072313895957648.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072373278367315.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072677495061584.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072694695600078.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072756032175204.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072765604121481.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072804442637685.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072823106532144.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072860522023692.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072879222701895.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072889090025069.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072898345358625.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072918339853569.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072931218635674.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072950580851309.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072993409028193.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073009638652059.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490074030328949587.jpg"
                    ],
                    "ADimg": "https://x.dscmall.cn/storage/data/afficheimg/1490296743207336995.jpg",
                    "children": [
                        {
                            "titleId": 347,
                            "title": "女装",
                            "category": [
                                {
                                    "id": "349",
                                    "name": "连衣裙"
                                },
                                {
                                    "id": "350",
                                    "name": "蕾丝/雪纺衫"
                                },
                                {
                                    "id": "352",
                                    "name": "T恤"
                                },
                                {
                                    "id": "354",
                                    "name": "半身裙"
                                },
                                {
                                    "id": "356",
                                    "name": "休闲裤"
                                },
                                {
                                    "id": "358",
                                    "name": "短裤"
                                },
                                {
                                    "id": "372",
                                    "name": "小西服"
                                },
                                {
                                    "id": "377",
                                    "name": "风衣"
                                }
                            ]
                        },
                        {
                            "titleId": 463,
                            "title": "男装",
                            "category": [
                                {
                                    "id": "473",
                                    "name": "T恤"
                                },
                                {
                                    "id": "466",
                                    "name": "裤子"
                                },
                                {
                                    "id": "494",
                                    "name": "休闲裤"
                                }
                            ]
                        },
                        {
                            "titleId": 630,
                            "title": "服饰配件",
                            "category": [
                                {
                                    "id": "641",
                                    "name": "配饰"
                                },
                                {
                                    "id": "665",
                                    "name": "棒球帽"
                                },
                                {
                                    "id": "668",
                                    "name": "遮阳帽"
                                }
                            ]
                        },
                        {
                            "titleId": 547,
                            "title": "内衣",
                            "category": [
                                {
                                    "id": "592",
                                    "name": "内衣配件"
                                },
                                {
                                    "id": "562",
                                    "name": "女式内裤"
                                },
                                {
                                    "id": "571",
                                    "name": "连裤袜/丝袜"
                                }
                            ]
                        },
                        {
                            "titleId": 1442,
                            "title": "运动户外",
                            "category": [
                                {
                                    "id": "1443",
                                    "name": "跑步运动"
                                },
                                {
                                    "id": "1453",
                                    "name": "舞蹈运动"
                                },
                                {
                                    "id": "1454",
                                    "name": "瑜伽运动"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "鞋靴、箱包、钟表、奢侈品",
                    "id": 8,
                    "subTitle": [
                        "奢侈品",
                        "功能箱包"
                    ],
                    "cateTitle": [
                        "男鞋",
                        "女鞋",
                        "箱包",
                        "钟表",
                        "奢侈品",
                        "女包"
                    ],
                    "supplier": [
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072850306019115.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072746651935979.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072756032175204.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072777790374054.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072787223453617.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072835176110718.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490074006660107941.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073109529817869.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073971637187496.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490074180745676140.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073919711003101.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073731822160672.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073717776504773.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073705755280994.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073529881448780.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490075080126940602.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073253749057076.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490074308773778697.jpg"
                    ],
                    "ADimg": "https://x.dscmall.cn/storage/data/afficheimg/1490296765062943272.jpg",
                    "children": [
                        {
                            "titleId": 362,
                            "title": "奢侈品",
                            "category": [
                                {
                                    "id": "439",
                                    "name": "箱包"
                                },
                                {
                                    "id": "441",
                                    "name": "服饰"
                                },
                                {
                                    "id": "442",
                                    "name": "腰带"
                                }
                            ]
                        },
                        {
                            "titleId": 360,
                            "title": "功能箱包",
                            "category": [
                                {
                                    "id": "427",
                                    "name": "拉杆箱/拉杆包"
                                },
                                {
                                    "id": "428",
                                    "name": "旅行包"
                                },
                                {
                                    "id": "436",
                                    "name": "旅行配件"
                                }
                            ]
                        },
                        {
                            "titleId": 355,
                            "title": "流行男鞋",
                            "category": [
                                {
                                    "id": "399",
                                    "name": "休闲鞋"
                                },
                                {
                                    "id": "405",
                                    "name": "增高鞋"
                                },
                                {
                                    "id": "412",
                                    "name": "定制鞋"
                                }
                            ]
                        },
                        {
                            "titleId": 353,
                            "title": "时尚女鞋",
                            "category": [
                                {
                                    "id": "371",
                                    "name": "单鞋"
                                },
                                {
                                    "id": "373",
                                    "name": "高跟鞋"
                                },
                                {
                                    "id": "380",
                                    "name": "休闲鞋"
                                }
                            ]
                        },
                        {
                            "titleId": 357,
                            "title": "潮流女包",
                            "category": [
                                {
                                    "id": "414",
                                    "name": "手提包"
                                }
                            ]
                        },
                        {
                            "titleId": 359,
                            "title": "精品男包",
                            "category": [
                                {
                                    "id": "425",
                                    "name": "钱包/卡包"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "手机、数码、通信",
                    "id": 3,
                    "subTitle": [
                        "摄影摄像",
                        "手机通讯"
                    ],
                    "cateTitle": [
                        "手机频道",
                        "网上营业厅",
                        "配件城",
                        "影像Club",
                        "手机社区",
                        "以旧换新"
                    ],
                    "supplier": [
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073661335207841.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073591535005714.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073577683159021.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073561018734078.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073529881448780.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073240845049320.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490171981556005380.jpg"
                    ],
                    "ADimg": "https://x.dscmall.cn/storage/data/afficheimg/1490296477657287023.jpg",
                    "children": [
                        {
                            "titleId": 64,
                            "title": "摄影摄像",
                            "category": [
                                {
                                    "id": "66",
                                    "name": "数码相机"
                                },
                                {
                                    "id": "68",
                                    "name": "单电/微单相机"
                                },
                                {
                                    "id": "69",
                                    "name": "单反相机"
                                },
                                {
                                    "id": "71",
                                    "name": "运动相机"
                                },
                                {
                                    "id": "72",
                                    "name": "摄像机"
                                },
                                {
                                    "id": "75",
                                    "name": "摄影器材"
                                }
                            ]
                        },
                        {
                            "titleId": 33,
                            "title": "手机通讯",
                            "category": [
                                {
                                    "id": "34",
                                    "name": "手机"
                                },
                                {
                                    "id": "35",
                                    "name": "对讲机"
                                }
                            ]
                        },
                        {
                            "titleId": 47,
                            "title": "手机配件",
                            "category": [
                                {
                                    "id": "51",
                                    "name": "蓝牙耳机"
                                },
                                {
                                    "id": "56",
                                    "name": "保护套"
                                },
                                {
                                    "id": "57",
                                    "name": "车载"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "电脑、办公",
                    "id": 4,
                    "subTitle": [
                        "电脑整机",
                        "电脑配件"
                    ],
                    "cateTitle": [
                        "本周热卖",
                        "游戏部落",
                        "智能社区",
                        "GAME+",
                        "装机大师",
                        "办公生活馆"
                    ],
                    "supplier": [
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073009638652059.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490075108722576375.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490074990110164877.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073616154966189.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490075080126940602.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490228262050567438.jpg"
                    ],
                    "ADimg": "https://x.dscmall.cn/storage/data/afficheimg/1490296350661886591.jpg",
                    "children": [
                        {
                            "titleId": 132,
                            "title": "电脑整机",
                            "category": [
                                {
                                    "id": "168",
                                    "name": "笔记本"
                                },
                                {
                                    "id": "171",
                                    "name": "超级本"
                                },
                                {
                                    "id": "174",
                                    "name": "游戏本"
                                },
                                {
                                    "id": "178",
                                    "name": "平板电脑"
                                },
                                {
                                    "id": "181",
                                    "name": "平板电脑配件"
                                },
                                {
                                    "id": "186",
                                    "name": "台式机"
                                }
                            ]
                        },
                        {
                            "titleId": 141,
                            "title": "电脑配件",
                            "category": [
                                {
                                    "id": "216",
                                    "name": "硬盘"
                                },
                                {
                                    "id": "222",
                                    "name": "机箱"
                                },
                                {
                                    "id": "225",
                                    "name": "显示器"
                                },
                                {
                                    "id": "241",
                                    "name": "组装电脑"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "家居、家具、家装、厨具",
                    "id": 5,
                    "subTitle": [
                        "家具",
                        "厨具"
                    ],
                    "cateTitle": [
                        "家装城",
                        "居家日用",
                        "精品家具",
                        "家装建材",
                        "厨房达人",
                        "猫猫狗狗"
                    ],
                    "supplier": [
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072787223453617.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072835176110718.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490075108722576375.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073591535005714.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073529881448780.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490074901892372216.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073359611343586.jpg"
                    ],
                    "ADimg": "https://x.dscmall.cn/storage/data/afficheimg/1490847695352345291.jpg",
                    "children": [
                        {
                            "titleId": 205,
                            "title": "家具",
                            "category": [
                                {
                                    "id": "206",
                                    "name": "卧室家具"
                                },
                                {
                                    "id": "207",
                                    "name": "客厅家具"
                                },
                                {
                                    "id": "210",
                                    "name": "书房家具"
                                }
                            ]
                        },
                        {
                            "titleId": 143,
                            "title": "厨具",
                            "category": [
                                {
                                    "id": "146",
                                    "name": "烹饪锅具"
                                },
                                {
                                    "id": "149",
                                    "name": "刀剪菜板"
                                },
                                {
                                    "id": "152",
                                    "name": "厨房配件"
                                },
                                {
                                    "id": "154",
                                    "name": "餐具"
                                }
                            ]
                        },
                        {
                            "titleId": 188,
                            "title": "家纺",
                            "category": [
                                {
                                    "id": "190",
                                    "name": "床品套件"
                                },
                                {
                                    "id": "191",
                                    "name": "被子"
                                },
                                {
                                    "id": "194",
                                    "name": "床单被罩"
                                }
                            ]
                        },
                        {
                            "titleId": 255,
                            "title": "生活日用",
                            "category": [
                                {
                                    "id": "261",
                                    "name": "浴室用品"
                                },
                                {
                                    "id": "263",
                                    "name": "缝纫/针织用品"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "个人化妆、清洁用品",
                    "id": 860,
                    "subTitle": [
                        "面部护肤",
                        "洗发护发"
                    ],
                    "cateTitle": [
                        "清洁用品",
                        "美妆商城",
                        "官方旗舰店",
                        "美妆特卖",
                        "妆比社",
                        "全球购美妆"
                    ],
                    "supplier": [
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072677495061584.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072685002270742.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490072931218635674.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073930435480283.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073692774466710.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490228075580091113.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490073240845049320.jpg",
                        "https://x.dscmall.cn/storage/data/brandlogo/1490171981556005380.jpg"
                    ],
                    "ADimg": "https://x.dscmall.cn/storage/data/afficheimg/1490847656340816332.jpg",
                    "children": [
                        {
                            "titleId": 876,
                            "title": "面部护肤",
                            "category": [
                                {
                                    "id": "877",
                                    "name": "清洁"
                                },
                                {
                                    "id": "1177",
                                    "name": "洗面奶"
                                },
                                {
                                    "id": "1182",
                                    "name": "卸妆水"
                                },
                                {
                                    "id": "1184",
                                    "name": "爽肤水"
                                }
                            ]
                        },
                        {
                            "titleId": 880,
                            "title": "洗发护发",
                            "category": [
                                {
                                    "id": "881",
                                    "name": "洗发"
                                },
                                {
                                    "id": "883",
                                    "name": "染发"
                                },
                                {
                                    "id": "884",
                                    "name": "造型"
                                }
                            ]
                        },
                        {
                            "titleId": 896,
                            "title": "香水彩妆",
                            "category": [
                                {
                                    "id": "898",
                                    "name": "底妆"
                                },
                                {
                                    "id": "899",
                                    "name": "腮红"
                                },
                                {
                                    "id": "900",
                                    "name": "眼部"
                                },
                                {
                                    "id": "1351",
                                    "name": "彩妆套装"
                                },
                                {
                                    "id": "1355",
                                    "name": "双眼皮贴"
                                },
                                {
                                    "id": "1359",
                                    "name": "气垫BB"
                                }
                            ]
                        }
                    ]
                }
            ]
            return data
        },
        // 商品
        getCommunityData(name, id) {
            var index = [
                {
                    "id": 1140,
                    "showImg": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg",
                    "children": [
                        {
                            "bigPic": "javascript:void(0);",
                            "smallPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/107620/38/15906/368883/5eaf7085E3cc8d8ef/b2dac719f339e972.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/101465/7/16438/339642/5e7b2649Eef8d3752/03a5235c2b20a0c1.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/101465/7/16438/339642/5e7b2649Eef8d3752/03a5235c2b20a0c1.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/105645/30/16375/420135/5e7b264eE4f85cd4c/3950aae9a916dd4e.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/105645/30/16375/420135/5e7b264eE4f85cd4c/3950aae9a916dd4e.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/86822/25/16536/361829/5e7b2651E0b7fc23e/d85d72fe7f127719.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/86822/25/16536/361829/5e7b2651E0b7fc23e/d85d72fe7f127719.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/87258/35/16258/549654/5e7b2656Ec6f43a4c/fa22cf3c68bb0127.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/87258/35/16258/549654/5e7b2656Ec6f43a4c/fa22cf3c68bb0127.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/88757/31/16434/514719/5e7b265dE2c5a59ce/4c6d95f261efa0f2.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/88757/31/16434/514719/5e7b265dE2c5a59ce/4c6d95f261efa0f2.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/89530/22/16487/390650/5e7b2660Ee8f6b374/97396c15c6ee03de.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/89530/22/16487/390650/5e7b2660Ee8f6b374/97396c15c6ee03de.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/91504/25/16453/658826/5e7b2664Eb0c18e84/a6a3683f8b365d33.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/91504/25/16453/658826/5e7b2664Eb0c18e84/a6a3683f8b365d33.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/92312/20/16473/417982/5e7b2668E1f0d7c79/b2bbe46770793837.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/92312/20/16473/417982/5e7b2668E1f0d7c79/b2bbe46770793837.jpg"
                        }
                    ],
                    "discountPrice": 219,
                    "originalPrice": 399,
                    "name": "摩飞（Morphyrichards）榨汁机 便携式充电迷你无线果汁机料理机随行杯MR9800 蓝色",
                    "introduce": 499,
                    "serialNumber": "100012005360"
                },
                {
                    "id": 617,
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489097621751.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489097621004.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489097621996.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489097666518.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489097666943.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489097667470.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489097667231.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489097667511.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489097667603.jpg"
                        }
                    ],
                    "discountPrice": 419,
                    "originalPrice": 600,
                    "name": "合生元Razer雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘",
                    "introduce": 0,
                    "serialNumber": "ECS000617"
                },
                {
                    "id": 633,
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489102299856.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489102299224.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489102299193.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102305501.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102305334.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102305225.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102305350.jpg"
                        }
                    ],
                    "discountPrice": 233,
                    "originalPrice": 279.59,
                    "name": "喜瑞新款学院风韩版时尚太空棉宽松长袖印花圆领卫衣女",
                    "introduce": 990,
                    "serialNumber": "ECS000633"
                },
                {
                    "id": 634,
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489102753231.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489102753800.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489102753387.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102766837.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102766368.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102767694.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102767107.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102767891.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102767718.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102767616.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102767285.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102767857.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102767076.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102767984.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102767169.jpg"
                        }
                    ],
                    "discountPrice": 300,
                    "originalPrice": 360,
                    "name": "华帝新款韩版chic学生宽松短款外套上衣字母长袖连帽套头卫衣女潮",
                    "introduce": 1002,
                    "serialNumber": "ECS000634"
                },
                {
                    "id": 635,
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489102950633.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489102950059.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489102950134.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102960963.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102960258.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102960156.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102960697.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102960231.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102960787.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102960956.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102960964.jpg"
                        }
                    ],
                    "discountPrice": 450,
                    "originalPrice": 540,
                    "name": "鸿星尔克韩都衣舍2017韩版女装新款黑白拼接插肩棒球服春季短外套HH5597妠 朴信惠同款 黑白拼接 插肩袖 棒球服",
                    "introduce": 478,
                    "serialNumber": "ECS000635"
                },
                {
                    "id": 673,
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489108311901.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489108311077.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489108311073.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489108319684.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489108319760.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489108319534.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489108319757.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489108319964.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489108319536.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489108319231.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489108319353.jpg"
                        }
                    ],
                    "discountPrice": 3500,
                    "originalPrice": 4200,
                    "name": "工银瑞信Samsung/三星 Galaxy C9 Pro SM-C9000 6+64G全金属超薄手机 12期免息 送蓝牙音箱等多种套餐好礼",
                    "introduce": 997,
                    "serialNumber": "ECS000673"
                },
                {
                    "id": 677,
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489108908792.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489108908913.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489108908488.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489108913432.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489108913312.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489108913475.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489108913815.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489108913063.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489108913725.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489108913762.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489108913191.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489108914582.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489108914748.jpg"
                        }
                    ],
                    "discountPrice": 888,
                    "originalPrice": 1065.6,
                    "name": "迪士尼伊米妮2017春新款简约时尚自然摔牛皮单肩手提大小版波士顿包女包 简约时尚 自然摔牛皮 单肩手提 波士顿包",
                    "introduce": 996,
                    "serialNumber": "ECS000677"
                },
                {
                    "id": 685,
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489109633806.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489109633779.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489109633562.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489109638679.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489109638818.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489109638534.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489109638742.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489109638947.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489109638568.jpg"
                        }
                    ],
                    "discountPrice": 0,
                    "originalPrice": 0,
                    "name": "汤臣倍健春季马丁靴男真皮男靴黄靴工装军靴韩版短靴沙漠靴高帮男鞋大黄靴 头层牛皮",
                    "introduce": 0,
                    "serialNumber": "ECS000685"
                },
                {
                    "id": 707,
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490155369648.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490155378010.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490155378758.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490155378570.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490155378849.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490155378604.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490155378009.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490155369286.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490155369071.jpg"
                        }
                    ],
                    "discountPrice": 0,
                    "originalPrice": 0,
                    "name": "匡威Apple/苹果 Apple Watch Series 2 智能手表42mm",
                    "introduce": 0,
                    "serialNumber": "ECS000707"
                },
                {
                    "id": 719,
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490160001609.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490160005753.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490160005236.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490160001417.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490160001985.jpg"
                        }
                    ],
                    "discountPrice": 0,
                    "originalPrice": 0,
                    "name": "磨铁图书DIY台式电脑整机I7四核六核独显固态组装游戏电脑主机24寸显示器 送百元礼品 内存免费升级 送显示器",
                    "introduce": 0,
                    "serialNumber": "ECS000719"
                },
                {
                    "id": 778,
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173534127.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173534127.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173534127.jpg"
                        }
                    ],
                    "discountPrice": 219,
                    "originalPrice": 262.8,
                    "name": "姬芮NewEra纽亦华 新款MLB棒球帽男女字母NY洋基LA道奇调节平沿嘻哈帽 官方正品",
                    "introduce": 996,
                    "serialNumber": "ECS000778"
                },
                {
                    "id": 787,
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174303715.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490174303380.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490174303928.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490174307606.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490174307249.jpg"
                        }
                    ],
                    "discountPrice": 159,
                    "originalPrice": 190.79,
                    "name": "YOHO有货潮牌LAL/数字贴布连帽套头卫衣男女通用 吴亦凡亲着同款 春夏焕新季，3.21日00:00开始抢购",
                    "introduce": 1063,
                    "serialNumber": "ECS000787"
                },
                {
                    "id": 789,
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174414186.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490174414093.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490174414555.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490174418377.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490174418305.jpg"
                        }
                    ],
                    "discountPrice": 79,
                    "originalPrice": 94.8,
                    "name": "康比特森马针织衫 冬季男圆领套头青年毛衣小清新线衫毛衫纯色韩版学生",
                    "introduce": 995,
                    "serialNumber": "ECS000789"
                },
                {
                    "id": 848,
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490209690294.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490209690830.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490209690659.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490209692088.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490209692646.jpg"
                        }
                    ],
                    "discountPrice": 388,
                    "originalPrice": 465.59,
                    "name": "飞利浦TOSOT/大松 GDF-2001C格力电饭煲迷你智能全自动家用 电饭锅1-2人 格力出品 数码显示 智能预约 全国包邮",
                    "introduce": 999,
                    "serialNumber": "ECS000848"
                },
                {
                    "id": 871,
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490218800612.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490218800601.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490218800319.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490218804362.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490218804988.jpg"
                        }
                    ],
                    "discountPrice": 23.8,
                    "originalPrice": 28.56,
                    "name": "乔山洽福 转椅轮子万向轮 老板椅办公椅子滑轮电脑椅配件滚轮脚轮轱辘 静音灵活不伤地板质保三年下单备注安装方式",
                    "introduce": 991,
                    "serialNumber": "ECS000871"
                },
                {
                    "id": 913,
                    "showImg": "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536532312220.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201809/goods_img/_P_1536532330389.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201809/thumb_img/_thumb_P_1536532330615.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201809/goods_img/_P_1536532332469.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201809/thumb_img/_thumb_P_1536532332905.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201809/goods_img/0_P_1536532312719.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_P_1536532312339.jpg"
                        }
                    ],
                    "discountPrice": 2399,
                    "originalPrice": 2878.79,
                    "name": "猫人Xiaomi/小米 小米电视4A 55英寸 4k超高清智能网络电视机 50 60",
                    "introduce": 1072,
                    "serialNumber": "ECS000913"
                },
                {
                    "id": 925,
                    "showImg": "https://x.dscmall.cn/storage/images/201909/thumb_img/925_thumb_G_1569533172825.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201809/goods_img/_P_1536535969602.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201809/thumb_img/_thumb_P_1536535969712.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201809/goods_img/_P_1536535970771.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201809/thumb_img/_thumb_P_1536535970739.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201809/goods_img/0_P_1536535936007.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_P_1536535936193.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201909/goods_img/925_P_1569533172979.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201909/thumb_img/925_thumb_P_1569533172632.jpg"
                        }
                    ],
                    "discountPrice": 1999,
                    "originalPrice": 2398.79,
                    "name": "欧亚马山水 F7 5.1家庭影院音响套装电视客厅家用3d环绕组合音箱 电视k歌音响套装 家用 组合 重低音蓝牙",
                    "introduce": 975,
                    "serialNumber": "ECS000925"
                },
                {
                    "id": 939,
                    "showImg": "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536540539657.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201809/goods_img/_P_1536540563620.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201809/thumb_img/_thumb_P_1536540563955.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201809/goods_img/_P_1536540566919.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201809/thumb_img/_thumb_P_1536540566393.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201809/goods_img/0_P_1536540539089.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_P_1536540539042.jpg"
                        }
                    ],
                    "discountPrice": 800,
                    "originalPrice": 960,
                    "name": "小米空气净化器2S家用办公智能氧吧除甲醛雾霾粉尘 新品",
                    "introduce": 998,
                    "serialNumber": "ECS000939"
                },
                {
                    "id": 977,
                    "showImg": "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_G_1536606976503.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201809/goods_img/977_P_1536607533629.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201809/thumb_img/977_thumb_P_1536607533667.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201809/goods_img/977_P_1536607534492.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201809/thumb_img/977_thumb_P_1536607534450.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201809/goods_img/0_P_1536606976378.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201809/thumb_img/0_thumb_P_1536606976545.jpg"
                        }
                    ],
                    "discountPrice": 0,
                    "originalPrice": 0,
                    "name": "小米8SE全面屏拍照游戏智能手机学生机商务机8周年 官方旗舰店正品现货速发",
                    "introduce": 0,
                    "serialNumber": "ECS000977"
                },
                {
                    "id": 1135,
                    "showImg": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/124559/20/5186/127155/5eeb104cE51c8ee13/3f15e98a0384fabf.jpg",
                    "children": [
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/124559/20/5186/127155/5eeb104cE51c8ee13/3f15e98a0384fabf.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/124559/20/5186/127155/5eeb104cE51c8ee13/3f15e98a0384fabf.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/86480/15/4139/154146/5de4b423E63144ec8/9d78f2d252a6c0ce.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/86480/15/4139/154146/5de4b423E63144ec8/9d78f2d252a6c0ce.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/103735/11/3976/132063/5de4b423E5cb8a7d4/15b6186058e07725.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/103735/11/3976/132063/5de4b423E5cb8a7d4/15b6186058e07725.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/86526/27/4026/220769/5de4b424Ecfad6a5e/27f66609ce55742d.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/86526/27/4026/220769/5de4b424Ecfad6a5e/27f66609ce55742d.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/98757/27/3928/164830/5de4b425E010aab09/d208224bb852f7a8.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/98757/27/3928/164830/5de4b425E010aab09/d208224bb852f7a8.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/68426/30/17002/253197/5de4b426E6f91a92d/5bbfe28bd11a6ecb.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/68426/30/17002/253197/5de4b426E6f91a92d/5bbfe28bd11a6ecb.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/88537/28/4089/156070/5de4b426E4e8347a7/c3c415313992625e.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/88537/28/4089/156070/5de4b426E4e8347a7/c3c415313992625e.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/88500/22/4068/122095/5de4b427E3ccfa7ff/43cc5f665455d795.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/88500/22/4068/122095/5de4b427E3ccfa7ff/43cc5f665455d795.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/103843/4/3988/106073/5de4b427E36a339e9/7b757594255991af.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/103843/4/3988/106073/5de4b427E36a339e9/7b757594255991af.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/97168/22/3999/106524/5de4b428Ea204115c/59f678005bd13762.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/97168/22/3999/106524/5de4b428Ea204115c/59f678005bd13762.jpg"
                        }
                    ],
                    "discountPrice": 129,
                    "originalPrice": 299,
                    "name": "小熊（Bear）咖啡机 美式家用 0.7L全自动滴漏式小型泡茶煮咖啡壶 KFJ-A07V1",
                    "introduce": 499,
                    "serialNumber": "2538628"
                },
                {
                    "id": 1158,
                    "showImg": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/111213/29/15769/148331/5f4385a7E173796e3/6c597a8be0cb7045.jpg",
                    "children": [
                        {
                            "bigPic": "javascript:void(0);",
                            "smallPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/111213/29/15769/148331/5f4385a7E173796e3/6c597a8be0cb7045.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/111213/29/15769/148331/5f4385a7E173796e3/6c597a8be0cb7045.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/111213/29/15769/148331/5f4385a7E173796e3/6c597a8be0cb7045.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/128183/6/8804/182282/5f2d1af6Eba338b6c/815ab46dfe9de2cd.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/128183/6/8804/182282/5f2d1af6Eba338b6c/815ab46dfe9de2cd.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/128979/19/7560/104085/5f15611fE2352d947/d8208d7963656d4c.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/128979/19/7560/104085/5f15611fE2352d947/d8208d7963656d4c.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/142693/40/2965/167214/5f101dddEd29eaf6a/4b25dd5d8d13abd6.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/142693/40/2965/167214/5f101dddEd29eaf6a/4b25dd5d8d13abd6.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/119445/28/8296/645492/5ede13d4Ef0703ef7/46b69c883c50f028.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/119445/28/8296/645492/5ede13d4Ef0703ef7/46b69c883c50f028.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/140071/36/3046/133146/5f103743Ee57cf8f9/cd43ab187a636182.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/140071/36/3046/133146/5f103743Ee57cf8f9/cd43ab187a636182.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/117962/16/12813/131979/5f11764dE1bafc27c/67ca197fc1408096.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/117962/16/12813/131979/5f11764dE1bafc27c/67ca197fc1408096.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/124241/3/7330/148213/5f11764eE93be1c47/1ef4fa442aebdb1f.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/124241/3/7330/148213/5f11764eE93be1c47/1ef4fa442aebdb1f.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/127865/31/7378/89955/5f11143dEfd2bf224/e90be80d22071aa7.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/127865/31/7378/89955/5f11143dEfd2bf224/e90be80d22071aa7.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/129745/25/4680/59611/5f11143dEdf608430/6030bd4314357e55.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/129745/25/4680/59611/5f11143dEdf608430/6030bd4314357e55.jpg"
                        }
                    ],
                    "discountPrice": 399,
                    "originalPrice": 599,
                    "name": "东菱 Donlim 多功能早餐机 三明治机 华夫饼机 多士炉面包机 电火锅轻食机 可做甜甜圈蛋挞 D",
                    "introduce": 499,
                    "serialNumber": "100013055538"
                },
                {
                    "id": 1173,
                    "showImg": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/75416/3/11548/695450/5d901d3fEdaaa21fa/88771c48f6f46005.jpg",
                    "children": [
                        {
                            "bigPic": "javascript:void(0);",
                            "smallPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/75416/3/11548/695450/5d901d3fEdaaa21fa/88771c48f6f46005.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/75416/3/11548/695450/5d901d3fEdaaa21fa/88771c48f6f46005.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/75416/3/11548/695450/5d901d3fEdaaa21fa/88771c48f6f46005.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/56354/19/10910/557375/5d80b1b6E65ade782/895280088fb196fe.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/56354/19/10910/557375/5d80b1b6E65ade782/895280088fb196fe.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/62279/23/10497/213628/5d80b1b7Ee22bb716/fef167a8de5e1b4c.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/62279/23/10497/213628/5d80b1b7Ee22bb716/fef167a8de5e1b4c.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/67806/19/10571/364523/5d80b1b8E58d806fd/2b4b1174c81eaebc.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/67806/19/10571/364523/5d80b1b8E58d806fd/2b4b1174c81eaebc.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/65647/3/10536/176274/5d80b1b8E0ea7a692/b8a39713142e9f56.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/65647/3/10536/176274/5d80b1b8E0ea7a692/b8a39713142e9f56.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/79368/3/10558/388627/5d80b1b9E33c88749/24c4e5dde579b413.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/79368/3/10558/388627/5d80b1b9E33c88749/24c4e5dde579b413.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/50576/7/11025/170241/5d80b1baEa136637c/5e6f6a41bf8d92e1.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/50576/7/11025/170241/5d80b1baEa136637c/5e6f6a41bf8d92e1.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/52091/8/10999/64328/5d80b1baE1e666f39/ef1fa4082b2ca505.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/52091/8/10999/64328/5d80b1baE1e666f39/ef1fa4082b2ca505.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/83360/36/10554/135891/5d80b1baEcbd71aa5/3c375b6d88723a4f.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/83360/36/10554/135891/5d80b1baEcbd71aa5/3c375b6d88723a4f.jpg"
                        }
                    ],
                    "discountPrice": 4299,
                    "originalPrice": 10000,
                    "name": "华为 HUAWEI Mate 30 麒麟990旗舰芯片4000万超感光徕卡影像屏内指纹8G+128G",
                    "introduce": 498,
                    "serialNumber": "100004788063"
                },
                {
                    "id": 866,
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490211843119.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490211843690.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490211843028.jpg"
                        }
                    ],
                    "discountPrice": 128,
                    "originalPrice": 153.6,
                    "name": "匡威马克华菲短袖T恤 夏装新款舒适圆领条纹拼接男简约修身短袖上衣",
                    "introduce": 1010,
                    "serialNumber": "ECS000866"
                },
                {
                    "id": 784,
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174019725.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490174019949.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490174019633.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490174022605.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490174022801.jpg"
                        }
                    ],
                    "discountPrice": 98,
                    "originalPrice": 117.6,
                    "name": "金史密斯HLA/海澜之家撞色长袖T恤春季热卖圆领修身拼接T恤男 简约圆领 微弹修身 撞色拼接 触感柔软",
                    "introduce": 999,
                    "serialNumber": "ECS000784"
                },
                {
                    "id": 863,
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490211575591.jpg",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490211575796.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490211575413.jpg"
                        }
                    ],
                    "discountPrice": 80,
                    "originalPrice": 96,
                    "name": "杰克琼斯马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤   98",
                    "introduce": 932,
                    "serialNumber": "ECS000863"
                }
            ];
            var page1 = [
                {
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489105083028.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489105083910.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489105091868.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489105091684.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489105091472.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489105091463.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489105091095.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489105091338.jpg"
                        }
                    ],
                    "id": 645,
                    "discountPrice": 0.01,
                    "originalPrice": 0.01,
                    "name": "麦斯威尔杰威尔发胶定型喷雾男士干胶头发持久定型造型啫喱水发蜡蓬松清香 快速定型，蓬松清香，不起白屑，",
                    "introduce": 994,
                    "serialNumber": "ECS000645"
                },
                {
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/202101/goods_img/0_P_1611858712812.png",
                            "smallPic": "https://x.dscmall.cn/storage/images/202101/thumb_img/0_thumb_P_1611858712231.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/202106/goods_img/1242_P_1622745809878.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/202106/thumb_img/1242_thumb_P_1622745809363.jpg"
                        }
                    ],
                    "id": 1242,
                    "discountPrice": 0.01,
                    "originalPrice": 111,
                    "name": "测试",
                    "introduce": 8,
                    "serialNumber": "BT001242"
                },
                {
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490224521970.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490224521833.jpg"
                        }
                    ],
                    "id": 893,
                    "discountPrice": 100,
                    "originalPrice": 340,
                    "name": "Maybelline/美宝莲好气色水润唇部套装 滋润保湿持久显色唇露唇膏",
                    "introduce": 41,
                    "serialNumber": "ECS000912"
                },
                {
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490224493316.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490224493856.jpg"
                        }
                    ],
                    "id": 892,
                    "discountPrice": 100,
                    "originalPrice": 340,
                    "name": "小米宝莲 透净瞬洁净妆乳 120ml 卸妆乳 卸妆液卸妆无残留专柜正品 安全温和 彻底清洁 水润清爽",
                    "introduce": 12,
                    "serialNumber": "ECS000892"
                },
                {
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490224466488.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490224466138.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490224466871.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490224466254.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490224462811.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490224462894.jpg"
                        }
                    ],
                    "id": 891,
                    "discountPrice": 100,
                    "originalPrice": 226.79,
                    "name": "宝姿美宝莲 好气色潮色双搭轻垫霜提亮肌肤白皙气垫CC霜凸显好气色 提亮肌肤",
                    "introduce": 12,
                    "serialNumber": "ECS000891"
                },
                {
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490224408944.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490224408747.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490224406180.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490224406930.jpg"
                        }
                    ],
                    "id": 889,
                    "discountPrice": 100,
                    "originalPrice": 58.8,
                    "name": "宝姿美宝莲 奇妙净颜盈润洁面膏100ml 保湿 控油 滋润 祛除多余油脂 不干燥 不紧绷",
                    "introduce": 12,
                    "serialNumber": "ECS000889"
                },
                {
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490224351882.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490224351056.jpg"
                        }
                    ],
                    "id": 887,
                    "discountPrice": 0,
                    "originalPrice": 0,
                    "name": "宝姿美宝莲 色秀指甲油 糖果色 专业彩妆美甲 专柜正品 绚丽色彩 多色可选",
                    "introduce": 0,
                    "serialNumber": "ECS000887"
                },
                {
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490224320593.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490224320884.jpg"
                        }
                    ],
                    "id": 886,
                    "discountPrice": 100,
                    "originalPrice": 118.8,
                    "name": "宝姿Maybelline/美宝莲净澈多效卸妆水清爽型 舒缓 深层清洁 舒缓 补水 深层清洁 卸妆",
                    "introduce": 12,
                    "serialNumber": "ECS000886"
                },
                {
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490224295755.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490224295155.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490224295692.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490224295307.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490224291415.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490224291402.jpg"
                        }
                    ],
                    "id": 885,
                    "discountPrice": 100,
                    "originalPrice": 28.79,
                    "name": "宝姿美宝莲宝蓓护唇膏 宝贝护唇膏 润唇膏 唇彩口红保湿 滋润",
                    "introduce": 12,
                    "serialNumber": "ECS000885"
                },
                {
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490224265550.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490224265222.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490224263776.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490224263168.jpg"
                        }
                    ],
                    "id": 884,
                    "discountPrice": 100,
                    "originalPrice": 34.8,
                    "name": "宝姿美宝莲 宝蓓爱炫彩护唇膏 润唇膏 波普风 保湿滋润 显色丰润 一扫唇色暗沉 卖萌必备",
                    "introduce": 12,
                    "serialNumber": "ECS000884"
                },
                {
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489105021117.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489105021570.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489105028882.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489105028525.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489105028318.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489105028508.jpg"
                        }
                    ],
                    "id": 644,
                    "discountPrice": 60,
                    "originalPrice": 72,
                    "name": "佳沪数码-华为欧莱雅男士水能保湿化妆护肤品套装深层补水滋润洗面奶爽肤水乳液",
                    "introduce": 1001,
                    "serialNumber": "ECS000644"
                },
                {
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489104977818.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489104977241.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489104982295.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104982668.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489104982653.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104982920.jpg"
                        }
                    ],
                    "id": 643,
                    "discountPrice": 108,
                    "originalPrice": 129.6,
                    "name": "皮克朋一叶子去角质去死皮膏啫喱面部温和祛黑头全身温和补水凝胶磨砂膏 新鲜护肤 植物护肤 去除角质 光滑柔嫩",
                    "introduce": 999,
                    "serialNumber": "ECS000643"
                },
                {
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489104621544.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489104621225.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489104627049.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104627793.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489104628289.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104628947.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489104628565.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104628914.jpg"
                        }
                    ],
                    "id": 640,
                    "discountPrice": 200,
                    "originalPrice": 240,
                    "name": "NINE WEST花美时三合一自动旋转双头眉笔眉粉染眉膏画眉持久防水防汗不脱色 防水防汗 持久不晕染 正品包邮",
                    "introduce": 1000,
                    "serialNumber": "ECS000640"
                },
                {
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489104534406.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489104534435.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489104543573.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104543433.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489104543089.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104543626.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489104544047.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104544834.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489104544618.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104544803.jpg"
                        }
                    ],
                    "id": 639,
                    "discountPrice": 300,
                    "originalPrice": 360,
                    "name": "飞利浦美宝莲绝色持久唇膏 粉红警报 魅惑炫亮润泽 唇彩口红",
                    "introduce": 991,
                    "serialNumber": "ECS000639"
                },
                {
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489104168199.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489104168006.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489104176526.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104176059.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489104176498.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104176145.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489104176017.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104176308.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489104177629.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104177879.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489104177564.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104177419.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489104177795.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104177163.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489104177860.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489104177352.jpg"
                        }
                    ],
                    "id": 638,
                    "discountPrice": 520,
                    "originalPrice": 624,
                    "name": "justyle美宝莲绝色持久唇膏 粉红警报 魅惑炫亮润泽 唇彩口红",
                    "introduce": 1008,
                    "serialNumber": "ECS000638"
                },
                {
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490224438288.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490224438450.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490224435891.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490224435860.jpg"
                        }
                    ],
                    "id": 890,
                    "discountPrice": 100,
                    "originalPrice": 58.8,
                    "name": "宝姿美宝莲 顺滑恒久眉笔流畅线条 利落型眉 可长久持妆 新品上市 流畅线条 利落型眉 长效持妆",
                    "introduce": 12,
                    "serialNumber": "ECS000890"
                }
            ]
            var page2 = [
                {
                    "module": "1_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490169123158.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490169123927.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490169123560.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490169123565.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490169111342.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490169111600.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490169118805.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490169118199.jpg"
                        }
                    ],
                    "id": 770,
                    "discountPrice": 15.9,
                    "originalPrice": 19.08,
                    "name": "小米红米3s手机壳保护套红米3高配版指纹男女款潮版磨砂硬壳防摔 收藏截图 送大礼包",
                    "introduce": 999,
                    "serialNumber": "ECS000770",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169118213.jpg"
                },
                {
                    "module": "1_1",
                    "children": [
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/123512/13/9287/160399/5f2fd23eE1fa59971/32abc6e0ae1d8f4b.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/123512/13/9287/160399/5f2fd23eE1fa59971/32abc6e0ae1d8f4b.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/119446/15/13122/140331/5f2fd23fEfde157c9/8988e469f0fe1b8a.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/119446/15/13122/140331/5f2fd23fEfde157c9/8988e469f0fe1b8a.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/131569/22/4801/161687/5f11b6a0E0a926d2f/ce0a8bf1952fdb07.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/131569/22/4801/161687/5f11b6a0E0a926d2f/ce0a8bf1952fdb07.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/116080/39/10523/580552/5eeb9f31Effc32c27/d398bd4aa12abd38.png",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/116080/39/10523/580552/5eeb9f31Effc32c27/d398bd4aa12abd38.png"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/134037/1/4636/482026/5f11b6c1E7a669514/0fd9a38155ce876d.png",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/134037/1/4636/482026/5f11b6c1E7a669514/0fd9a38155ce876d.png"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/144572/23/2846/177554/5f11b698Edfe26b0d/cf004c51da55b6b8.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/144572/23/2846/177554/5f11b698Edfe26b0d/cf004c51da55b6b8.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/140422/26/3194/226998/5f11b69bE9cf587e7/12647a9dc58f4684.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/140422/26/3194/226998/5f11b69bE9cf587e7/12647a9dc58f4684.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/113887/21/12634/229425/5f11b6b5Eb11a087c/9335f69f61dee03c.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/113887/21/12634/229425/5f11b6b5Eb11a087c/9335f69f61dee03c.jpg"
                        },
                        {
                            "bigPic": "https://img14.360buyimg.com/n1/s800x800_jfs/t1/147342/29/396/85754/5ee10cf1E32bb03f9/10f4709e11e9829a.jpg",
                            "smallPic": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/147342/29/396/85754/5ee10cf1E32bb03f9/10f4709e11e9829a.jpg"
                        }
                    ],
                    "id": 1159,
                    "discountPrice": 78,
                    "originalPrice": 269,
                    "name": "得听格子衬衫女长袖2020秋季新款小清新韩版宽松百搭学生春秋装纯棉衬衫大码外套上衣女 天蓝色 M（1",
                    "introduce": 500,
                    "serialNumber": "70439320053",
                    "showImg": "https://img14.360buyimg.com/n1/s300x300_jfs/t1/123512/13/9287/160399/5f2fd23eE1fa59971/32abc6e0ae1d8f4b.jpg"
                },
                {
                    "module": "1_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490169190880.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490169190760.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490169190258.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490169190653.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490169186593.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490169186098.jpg"
                        }
                    ],
                    "id": 772,
                    "discountPrice": 118,
                    "originalPrice": 141.6,
                    "name": "韩都衣舍2017春装新款女装春款拼接喇叭长袖连衣裙中长款时尚韩版 领券立减/单件包邮/七天无理由退换",
                    "introduce": 999,
                    "serialNumber": "ECS000772",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169186175.jpg"
                },
                {
                    "module": "1_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490169039129.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490169039971.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490169039458.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490169039705.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490169030861.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490169030177.jpg"
                        }
                    ],
                    "id": 768,
                    "discountPrice": 88,
                    "originalPrice": 105.6,
                    "name": "韩都衣舍2017韩版女装夏装新款时尚修身显瘦圆领条纹T恤OGY7711娋 显瘦版型 舒适面料 条纹元素",
                    "introduce": 1000,
                    "serialNumber": "ECS000768",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169030833.jpg"
                },
                {
                    "module": "1_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490169039129.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490169039971.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490169039458.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490169039705.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490169030861.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490169030177.jpg"
                        }
                    ],
                    "id": 768,
                    "discountPrice": 88,
                    "originalPrice": 105.6,
                    "name": "韩都衣舍2017韩版女装夏装新款时尚修身显瘦圆领条纹T恤OGY7711娋 显瘦版型 舒适面料 条纹元素",
                    "introduce": 1000,
                    "serialNumber": "ECS000768",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169216444.jpg"
                },
                {
                    "module": "1_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490169255984.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490169255374.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490169255798.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490169255340.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490169250153.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490169250295.jpg"
                        }
                    ],
                    "id": 774,
                    "discountPrice": 159,
                    "originalPrice": 190.79,
                    "name": "韩都衣舍秋冬喇叭长袖针织衫毛衣女套头宽松纯色百搭学生韩版打底 领券下单立减/单件包邮/先拍先发货！",
                    "introduce": 999,
                    "serialNumber": "ECS000774",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169250846.jpg"
                },
                {
                    "module": "1_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490169157226.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490169157142.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490169158091.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490169158322.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490169158590.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490169158351.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490169151956.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490169151557.jpg"
                        }
                    ],
                    "id": 771,
                    "discountPrice": 148,
                    "originalPrice": 177.6,
                    "name": "韩都衣舍春季韩国ulzzang连帽卫衣女套头宽松百搭学生韩版潮bf风 领券下单立减/单件包邮/先拍先发货！",
                    "introduce": 999,
                    "serialNumber": "ECS000771",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169151126.jpg"
                },
                {
                    "module": "1_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490174894955.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490174894049.jpg"
                        }
                    ],
                    "id": 800,
                    "discountPrice": 166,
                    "originalPrice": 199.2,
                    "name": "2017韩版女装夏装新款A字宽松松紧腰印花连衣裙DT7039乾 舒适松紧腰 A字版型 时尚印花",
                    "introduce": 997,
                    "serialNumber": "ECS000800",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174894779.jpg"
                },
                {
                    "module": "1_2",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490174858621.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490174858959.jpg"
                        }
                    ],
                    "id": 799,
                    "discountPrice": 0,
                    "originalPrice": 0,
                    "name": "美的韩美格2017春秋新款修身大码蕾丝网纱打底衫女长袖薄款圆领女T恤 全店商品 二件减5元 三件减10",
                    "introduce": 0,
                    "serialNumber": "ECS000799",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169281436.jpg"
                },
                {
                    "module": "1_3",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489102753800.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489102753387.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102766837.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102766368.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102767694.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102767107.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102767891.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102767718.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102767616.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102767285.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102767857.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102767076.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102767984.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102767169.jpg"
                        }
                    ],
                    "id": 634,
                    "discountPrice": 0,
                    "originalPrice": 0,
                    "name": "华帝新款韩版chic学生宽松短款外套上衣字母长袖连帽套头卫衣女潮",
                    "introduce": 0,
                    "serialNumber": "ECS000634",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490169074773.jpg"
                },
                {
                    "module": "1_3",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490174741166.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490174741400.jpg"
                        }
                    ],
                    "id": 796,
                    "discountPrice": 65,
                    "originalPrice": 78,
                    "name": "乐力初棉纯色圆领长袖T恤打底衫秋衣女上衣体恤女士修身打底衣春秋 挺拔有型 棉氨材质 柔软舒适 耐洗耐磨",
                    "introduce": 1004,
                    "serialNumber": "ECS000796",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174858999.jpg"
                },
                {
                    "module": "1_4",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489102299224.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489102299193.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102305501.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102305334.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489102305225.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489102305350.jpg"
                        }
                    ],
                    "id": 633,
                    "discountPrice": 233,
                    "originalPrice": 279.59,
                    "name": "喜瑞新款学院风韩版时尚太空棉宽松长袖印花圆领卫衣女",
                    "introduce": 990,
                    "serialNumber": "ECS000633",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489102753231.jpg"
                },
                {
                    "module": "1_4",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490174791824.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490174791247.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490174794513.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490174794253.jpg"
                        }
                    ],
                    "id": 797,
                    "discountPrice": 49,
                    "originalPrice": 58.8,
                    "name": "LG17年春夏新款百搭半身裙蛋糕裙 a字裙 裤裙伞裙大码裙子超短裙女 松紧腰围 带裤边打底衬 涤针织面料",
                    "introduce": 1157,
                    "serialNumber": "ECS000797",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174741051.jpg"
                },
                {
                    "module": "1_5",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490174925447.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490174925008.jpg"
                        }
                    ],
                    "id": 801,
                    "discountPrice": 158,
                    "originalPrice": 189.6,
                    "name": "逸阳女裤春装新款韩版休闲裤女九分裤黑色弹力微喇叭裤子显瘦0032 浓郁复古风 修饰腿型 生而优雅",
                    "introduce": 1000,
                    "serialNumber": "ECS000801",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489102299856.jpg"
                },
                {
                    "module": "2_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490211575796.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490211575413.jpg"
                        }
                    ],
                    "id": 863,
                    "discountPrice": 80,
                    "originalPrice": 96,
                    "name": "杰克琼斯马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤   98",
                    "introduce": 932,
                    "serialNumber": "ECS000863",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174791219.jpg"
                },
                {
                    "module": "2_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489099437408.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489099437377.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489099444797.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489099444560.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489099444778.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489099444658.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489099444088.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489099444668.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489099444655.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489099444901.jpg"
                        }
                    ],
                    "id": 625,
                    "discountPrice": 120,
                    "originalPrice": 0,
                    "name": "哥弟秋季新款男士套头卫衣印花外套韩版简约百搭潮流男生上衣服",
                    "introduce": 97,
                    "serialNumber": "ECS000625",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174925807.jpg"
                },
                {
                    "module": "2_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490174019949.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490174019633.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490174022605.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490174022801.jpg"
                        }
                    ],
                    "id": 784,
                    "discountPrice": 98,
                    "originalPrice": 117.6,
                    "name": "金史密斯HLA/海澜之家撞色长袖T恤春季热卖圆领修身拼接T恤男 简约圆领 微弹修身 撞色拼接 触感柔软",
                    "introduce": 999,
                    "serialNumber": "ECS000784",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490211575591.jpg"
                },
                {
                    "module": "2_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490174019949.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490174019633.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490174022605.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490174022801.jpg"
                        }
                    ],
                    "id": 784,
                    "discountPrice": 98,
                    "originalPrice": 117.6,
                    "name": "金史密斯HLA/海澜之家撞色长袖T恤春季热卖圆领修身拼接T恤男 简约圆领 微弹修身 撞色拼接 触感柔软",
                    "introduce": 999,
                    "serialNumber": "ECS000784",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489099437211.jpg"
                },
                {
                    "module": "2_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490211843690.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490211843028.jpg"
                        }
                    ],
                    "id": 866,
                    "discountPrice": 128,
                    "originalPrice": 153.6,
                    "name": "匡威马克华菲短袖T恤 夏装新款舒适圆领条纹拼接男简约修身短袖上衣",
                    "introduce": 1010,
                    "serialNumber": "ECS000866",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174019725.jpg"
                },
                {
                    "module": "2_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490174414093.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490174414555.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490174418377.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490174418305.jpg"
                        }
                    ],
                    "id": 789,
                    "discountPrice": 79,
                    "originalPrice": 94.8,
                    "name": "康比特森马针织衫 冬季男圆领套头青年毛衣小清新线衫毛衫纯色韩版学生",
                    "introduce": 995,
                    "serialNumber": "ECS000789",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490211843119.jpg"
                },
                {
                    "module": "1_5",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490174303380.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490174303928.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490174307606.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490174307249.jpg"
                        }
                    ],
                    "id": 787,
                    "discountPrice": 159,
                    "originalPrice": 190.79,
                    "name": "YOHO有货潮牌LAL/数字贴布连帽套头卫衣男女通用 吴亦凡亲着同款 春夏焕新季，3.21日00:00开始抢购",
                    "introduce": 1063,
                    "serialNumber": "ECS000787",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174414186.jpg"
                },
                {
                    "module": "2_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490174208272.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490174208453.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490174212677.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490174212863.jpg"
                        }
                    ],
                    "id": 785,
                    "discountPrice": 1992.9,
                    "originalPrice": 2391.48,
                    "name": "金利来森马夹克 2016冬装新款男士飞行夹克贴布绣立领休闲外套韩版潮流",
                    "introduce": 1017,
                    "serialNumber": "ECS000785",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174303715.jpg"
                },
                {
                    "module": "2_2",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490174241560.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490174241110.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490174245373.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490174245021.jpg"
                        }
                    ],
                    "id": 786,
                    "discountPrice": 0,
                    "originalPrice": 0,
                    "name": "康恩贝裤子男士哈伦裤春季新款2017束脚裤修身韩版潮流小脚裤男裤休闲裤 弹力",
                    "introduce": 0,
                    "serialNumber": "ECS000786",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174208112.jpg"
                },
                {
                    "module": "3_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490173894462.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490173894937.jpg"
                        }
                    ],
                    "id": 783,
                    "discountPrice": 38,
                    "originalPrice": 45.6,
                    "name": "金奥力红叶伞遮阳伞防紫外线黑胶防晒晴雨两用太阳伞女糖果色折叠雨伞大 黑胶防晒 晴雨两用 糖果色 都市风情",
                    "introduce": 986,
                    "serialNumber": "ECS000783",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490174241651.jpg"
                },
                {
                    "module": "3_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490155378010.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490155378758.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490155378570.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490155378849.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490155378604.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490155378009.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490155369286.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490155369071.jpg"
                        }
                    ],
                    "id": 707,
                    "discountPrice": 3186,
                    "originalPrice": 4288,
                    "name": "匡威Apple/苹果 Apple Watch Series 2 智能手表42mm",
                    "introduce": 100,
                    "serialNumber": "ECS000707",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173894447.jpg"
                },
                {
                    "module": "3_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201809/goods_img/779_P_1536793964003.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201809/thumb_img/779_thumb_P_1536793964263.jpg"
                        }
                    ],
                    "id": 779,
                    "discountPrice": 399,
                    "originalPrice": 478.79,
                    "name": "杰克琼斯74超薄非球面镜片高度近视眼镜片近视镜片防蓝光配眼镜镜片加工 套餐价低至359元 6款镜架任您选",
                    "introduce": 999,
                    "serialNumber": "ECS000779",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490155369648.jpg"
                },
                {
                    "module": "3_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490173663778.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490173663175.jpg"
                        }
                    ],
                    "id": 780,
                    "discountPrice": 15,
                    "originalPrice": 18,
                    "name": "佳沪数码-华为男女韩版纯棉可爱冬季个性防尘情侣口罩保暖透气黑色时尚潮款春 15元一共2个口罩 防尘个性时尚",
                    "introduce": 1000,
                    "serialNumber": "ECS000780",
                    "showImg": "https://x.dscmall.cn/storage/images/201809/thumb_img/779_thumb_G_1536793964961.jpg"
                },
                {
                    "module": "3_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1489108087010.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1489108087011.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489108093052.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489108093165.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489108094053.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489108094608.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489108094611.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489108094303.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1489108094834.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1489108094809.jpg"
                        }
                    ],
                    "id": 671,
                    "discountPrice": 1888,
                    "originalPrice": 2265.6,
                    "name": "美的【新品发售】 Beats Beats Solo3 Wireless 头戴式无线蓝牙耳机 分期免息 全国联保 免费保修一年",
                    "introduce": 1000,
                    "serialNumber": "ECS000671",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173663577.jpg"
                },
                {
                    "module": "3_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490173534415.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490173534682.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490173541554.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490173541122.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490173541851.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490173541823.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490173541442.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490173541696.jpg"
                        }
                    ],
                    "id": 777,
                    "discountPrice": 219,
                    "originalPrice": 262.8,
                    "name": "姬芮NewEra纽亦华 新款MLB棒球帽男女字母NY洋基LA道奇调节平沿嘻哈帽 官方正品",
                    "introduce": 999,
                    "serialNumber": "ECS000777",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1489108087695.jpg"
                },
                {
                    "module": "3_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490173699715.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490173699210.jpg"
                        }
                    ],
                    "id": 781,
                    "discountPrice": 169,
                    "originalPrice": 202.79,
                    "name": "健安喜宝石蝶真丝围巾女士春秋季高档丝巾重磅桑蚕丝大方巾披肩丝绸礼品 16姆米重磅真丝丝滑缎面90方巾礼盒包装",
                    "introduce": 1000,
                    "serialNumber": "ECS000781",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173534127.jpg"
                },
                {
                    "module": "3_1",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490173860530.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_P_1490173860185.jpg"
                        },
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490173863814.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/_thumb_P_1490173863123.jpg"
                        }
                    ],
                    "id": 782,
                    "discountPrice": 0,
                    "originalPrice": 0,
                    "name": "justyle6林志玲花样姐姐同款海伦凯勒太阳镜女 偏光蛤蟆镜潮墨镜H8535 花样姐姐同款 林志玲设计 炫彩镂空",
                    "introduce": 0,
                    "serialNumber": "ECS000782",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173699371.jpg"
                },
                {
                    "module": "3_2",
                    "children": [
                        {
                            "bigPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173534127.jpg",
                            "smallPic": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173534127.jpg"
                        }
                    ],
                    "id": 778,
                    "discountPrice": 219,
                    "originalPrice": 262.8,
                    "name": "姬芮NewEra纽亦华 新款MLB棒球帽男女字母NY洋基LA道奇调节平沿嘻哈帽 官方正品",
                    "introduce": 996,
                    "serialNumber": "ECS000778",
                    "showImg": "https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490173860746.jpg"
                }
            ]
            var result;
            if (!name) return new Error('未传入参数');
            if (name == 'index') {
                if (id) {
                    index.find(function (v) {
                        if (v.id == id) result = v;
                    });
                    if (result) {
                        return result
                    } else {
                        return new Error('没有找到数据')
                    }
                } else {
                    return index;
                }
            } else if (name == 'page1') {
                if (id) {
                    page1.find(function (v) {
                        if (v.id == id) result = v;
                    });
                    return result
                } else {
                    return page1;
                }
            } else if (name == 'page2') {
                if (id) {
                    page2.find(function (v) {
                        if (v.id == id) result = v;
                    });
                    return result
                } else {
                    return page2;
                }
            }
            else {
                return new Error('参数无效');
            }
        }
    }
    // 属性名别动，千万别动，谁动谁是狗
    window.beautifulCong = data;
    return beautifulCong;
})(this);