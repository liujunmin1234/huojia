# 人员分配



| 页面                             | 人员   |
| -------------------------------- | ------ |
| index                            | 薛本同 |
| 详情页                           | 周婷   |
| 登陆、注册、空页面               | 丛威   |
| 个人美妆、通用侧边栏             | 李小龙 |
| 服装、通用底部                   | 李君明 |
| 家用电器                         | 张一丹 |
| 鞋靴                             | 王蒙   |
| 聚划算、预售、店铺街、品牌、公告 | 吴梦圆 |
|                                  |        |



# 数据文档

**说明：方法挂载在window.beautifulCong对象上**

```javascript
//例：beautifulCong.getCityData()
```



## 城市信息

getCityData() 无参数

```javascript
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
}
```



## 商品分类  

getCategoryData() 无参数

```javascript
{
    "title": "家用电器", // 左侧标题
    "id": 858,	
    "subTitle": [ // 左侧副标题
        "厨房电器",
        "大家电"
    ],
    "cateTitle": [ // 分类标题
        "品牌日",
        "家电城",
        "智能生活馆",
        "京东净化馆",
        "京东帮服务店",
        "值得买精选"
    ],
    "supplier": [ // 赞助商logo
        href
    ],
    "ADimg":href, // 广告logo
    "children": [ // 具体商品分类
        {
            "titleId": 1129, // 商品类型id
            "title": "厨房电器", // 商品类型标题
            "category": [ // 具体商品
                {
                    "id": "1131",
                    "name": "电饭煲"
                },
            ]
        }
    ]
}
```



## 商品

getCommunityData(name[,id])

| 参数     | 参数值                                                    |
| -------- | --------------------------------------------------------- |
| name     | index：首页数据，page1：个人美妆数据，page2：服装城数据。 |
| id[可选] | 商品id，不传递返回所有数据                                |

```javascript
{
    "id": 1140, // 分类id
    "showImg": href, // 展示图片，若没有此属性，用children第一元素作为展示图片
    "children": [
        {
            "bigPic": href, // 商品详情大图片
            "smallPic": href // 商品详情小图片
        },
        {
            "bigPic": href,
            "smallPic": href
        },
    ],
    "discountPrice": 219, // 打折价
    "originalPrice": 399,	// 原价
    "name": "摩飞（Morphyrichards）榨汁机 便携式充电迷你无线果汁机料理机随行杯MR9800 蓝色", // 商品名称
    "introduce": 499, // 库存
    "serialNumber": "100012005360" // 商品编号
}
```



