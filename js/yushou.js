// 获取元素
// ul元素
var viewpage = document.getElementsByClassName('viewpage')[0];
// 所有小圆点
var circles = document.getElementsByClassName('circle');
// 左右按钮
var prev = document.getElementsByClassName('prev')[0];
var next = document.getElementsByClassName('next')[0];
// 放置图片和左右按钮的区域
var calList = document.getElementsByClassName('cal-list')[0];
// 排他函数
function backcircle(ele) {
    for (var j = 0; j < ele.length; j++) {
        ele[j].className = "circle";
    };
}

// 1.鼠标放置到图片区域时,显示左右按钮,自动轮播停止
// 2.鼠标离开图片区域时,左右按钮消失,自动轮播开始
// 3.给右边按钮绑定事件,ul移动,小圆点跟随图片变化
// 4.给左边按钮绑定事件,ul移动,小圆点跟随图片变化
// 5.自动轮播调用右边按钮事件就可以了
// 6.焦点轮播

// 1.鼠标放置到图片区域时,显示左右按钮,自动轮播停止
calList.onmouseover = function() {
    prev.style.display = "block";
    next.style.display = "block";
    // 轮播停止
    clearInterval(viewpage.autoId);
};
// 2.鼠标离开图片区域时,左右按钮消失,自动轮播开始
calList.onmouseout = function() {
    prev.style.display = "none";
    next.style.display = "none";
    // 轮播开始
    autoplay();
};
// 3.给右边按钮绑定事件,ul移动,小圆点跟随图片变化
// li的数量和小圆点的数量是不相同的,所以需要2个计数器,分别指代li和小圆点当前的状态

// 设置小圆点的计数器
var flag = 0;
// li目标走的位置
var count = 0;
// 给右边按钮绑定事件
next.onclick = function() {
    // 变成第二元素为当前的状态
    flag++;
    count++;
    // 判断flag的值
    // 回滚到flag初始0
    if (flag == circles.length) {
        flag = 0;
    };
    // 判断count的值回归
    if (count == viewpage.children.length) {
        // 拉回到left=0
        viewpage.style.left = 0;
        console.log('拉回');
        // 设置count为1,这样就可以看到第二张图片了
        count = 1;
    };

    // ①设置小圆点的样式
    // 先排他
    backcircle(circles);
    circles[flag].className = "circle active";
    // ②移动当前的ul使图片进行移动
    var target = count * (-1899);
    // 走动画
    moveAnimation2(viewpage, target);
};
// 4.给左边按钮绑定事件,ul移动,小圆点跟随图片变化
prev.onclick = function() {
    // 是否是第一张图片
    if (count == 0) {
        count = viewpage.children.length - 1;
        viewpage.style.left = count * (-1899) + 'px';
    };
    count--;
    flag--;
    if (flag < 0) {
        flag = circles.length - 1;
    };
    // ①设置小圆点的样式
    // 先排他
    backcircle(circles);
    circles[flag].className = "circle active";
    // ②移动当前的ul使图片进行移动
    var target = count * (-1899);
    // 走动画
    moveAnimation2(viewpage, target);
};
// 5. 自动轮播调用右边按钮事件就可以了
function autoplay() {
    viewpage.autoId = setInterval(function() {
        // 调用右边按钮的点击事件
        next.onclick();
    }, 3000);
};
autoplay();
// 6.焦点轮播
// 循环给小圆点绑定事件
for (var i = 0; i < circles.length; i++) {
    // 保存i值
    circles[i].index = i;
    // 绑定事件
    circles[i].onclick = function() {
        // 设置同步
        flag = this.index;
        count = this.index;
        console.log(flag);
        console.log(count);
        // 1.样式
        // 先排他
        backcircle(circles);
        this.className = "circle active";
        // 2.ul进行移动
        var target = this.index * (-1899);
        // 走动画
        moveAnimation2(viewpage, target);
    };
};

function moveAnimation1(ele, target) {
    // 使用DOM元素,用定时的id值来添加DOM元素属性
    clearInterval(ele.interId);
    // 获取定时器的id
    ele.interId = setInterval(function() {
        if (ele.offsetLeft == target) {
            clearInterval(ele.interId);
            // 向右走
        } else if (ele.offsetLeft < target) {
            // 给最后一步步长做判断
            var dis = (ele.offsetLeft + 13) > target ? target : (ele.offsetLeft + 13);
            ele.style.left = dis + 'px';
            // 向左走
        } else if (ele.offsetLeft > target) {
            // 给最后一步步长做判断
            var dis = (ele.offsetLeft - 13) < target ? target : (ele.offsetLeft - 13);
            ele.style.left = dis + 'px';
        };
    }, 50);
};


function moveAnimation2(ele, target) {
    // 使用DOM元素,用定时的id值来添加DOM元素属性
    clearInterval(ele.interId);
    // 获取定时器的id
    ele.interId = setInterval(function() {
        if (ele.offsetLeft == target) {
            clearInterval(ele.interId);
        } else {
            // 向右走向左走
            var slowStep = (target - ele.offsetLeft) / 10;
            // 向右走
            // 500  0  500/10  50
            // 500  50  450/10  45
            // 500  95   40.5 
            // 500 496    0.4---1
            // 向左走
            // -0.5 ---- -1
            // 整数值
            slowStep = slowStep > 0 ? Math.ceil(slowStep) : Math.floor(slowStep);
            // 496 0.4
            ele.style.left = ele.offsetLeft + slowStep + 'px';
        }
    }, 20);
};






// 招牌推荐
//获取id，tagName
function getIdName(id, tagName) {

    if (tagName != 0) {
        return document.getElementById(id).getElementsByTagName(tagName);
    } else {
        return document.getElementById(id);
    }
}

function hdp(json) {
    var tiemr = null;
    var pd = 0;
    var index = 0;
    var that;
    var option = {
        li: "li", //默认值：默认用li包裹
        boxid: "", //最外面div  id
        imgid: "", //图片外面id
        optid: "", //opt外面id	
        an: "", //左右按钮id，用于移上显示和隐藏
        prev: "", //左边箭头id
        next: "", //右边箭头id
        ms: 800 //多少毫秒切换一张,默认800毫秒
    }
    for (var i in option) {
        if (json[i] != undefined) {
            option[i] = json[i];
        }
    }

    var div = getIdName(option.boxid, 0);
    var imgs = getIdName(option.imgid, option.li);
    var lis = getIdName(option.optid, option.li);
    var an = getIdName(option.an, 0);
    var prev = getIdName(option.prev, 0);
    var next = getIdName(option.next, 0);
    var ms = option.ms;

    function lbt(that) {
        if (that >= 0) {
            index = that;
        } else {
            if (pd == 0) {
                index++;
            } else {
                index--;
                pd = 0;
            }
        }
        if (index >= lis.length) index = 0;
        if (index < 0) index = lis.length - 1;
        for (var j = 0; j < lis.length; j++) {
            lis[j].className = "";
            imgs[j].className = "";
        }
        lis[index].className = "on";
        imgs[index].className = "current";
    }
    imgs[index].className = "current";
    lis[index].className = "on";
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function() {
            that = this.index;
            lbt(that);
        }
    }
    timer = setInterval(lbt, ms);


    div.onmouseover = function() {
        clearInterval(timer);
        an.style.display = "block";
    }
    div.onmouseout = function() {
        timer = setInterval(lbt, ms);
        an.style.display = "none";
    }
    prev.onclick = function() {
        pd = 1;
        lbt();
    }
    next.onclick = function() {
        pd = 0;
        lbt();
    }
}


// 位置定位部分
var oA = $('.English').find('a');
var length = $('.English').find('a').length;
oA.each(function(index) {
    // var index = $(this).index();
    $(this).hover(function() {
        // 卷进去的高度
        var ulheight = index * parseInt(70);
        console.log(this);
        if (index < length - 2) {
            $('.citylist').stop().animate({
                'top': -ulheight
            }, 200, 'linear')
        }
    })
});
$(".area").mouseup(function() {
    $(".city-content").off('mousemove');
});