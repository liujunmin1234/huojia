// 位置定位部分
var oA = $('.English').find('a');
var length = $('.English').find('a').length;
oA.each(function (index) {
    // var index = $(this).index();
    $(this).hover(function () {
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
$(".area").mouseup(function () {
    $(".city-content").off('mousemove');
});

// 二级导航
$('.two-ulList li').mouseenter(function () {
    $(this).addClass('two-ulListH').siblings().removeClass('two-ulListH');
    $('.two-olList>li').eq($(this).index()).show().siblings().hide();
    $('.two-olList').show();
});
$('.two-erji').mouseleave(function () {
    $('.two-olList>li').eq($(this).index()).hide();
    $('.two-olList').hide();
    $('.two-ulList li').removeClass('two-ulListH');
});





// 导航栏制作 (tab栏封装)
function navTab(ele, eleChild) {
    $(ele).mouseover(function () {
        $(this).children(eleChild).addClass('xs');
        $(this).css('border-color', 'red')
    });
    $(ele).mouseout(function () {
        $(this).children(eleChild).removeClass('xs')
        $(this).css('border-color', 'black')
    });
};
navTab('.computer', '.sele-1');
navTab('.fit', '.sele-2');
// 放大镜悬到li上效果
// $('.small-glass').next('ul').children('li').hover(function () {
//     console.log(this);
//     $(this).addClass('border-red')
// })
// 放大镜效果
$('.big-glass').hover(function () {
    $('.glass-hide').toggle();
    $('.big-pic').toggle();
});
$('.big-glass').mousemove(function (e) {
    var x = e.pageX - $('.big-glass').offset().left - 75;
    var y = e.pageY - $('.big-glass').offset().top - 75;
    var temp = $('.big-glass').width() - $('.glass-hide').width() / 2 - 75;
    x = x < 0 ? 0 : x;
    y = y < 0 ? 0 : y;
    x = x > temp ? temp : x;
    y = y > temp ? temp : y;
    $('.glass-hide').css({
        top: y,
        left: x
    });
    var ss = $('.big-pic img').width() / $('.big-glass img').width();
    $('.big-pic img').css({
        top: -y * ss,
        left: -x * ss
    })
});
$('.foot-right li').click(function () {
    // 控制li
    $(this).addClass('active').siblings().removeClass('active');
    // 控制内容部分
    $('.foot-item').eq($(this).index()).addClass('xs').siblings().removeClass('xs');
});
// 渲染数据
// 截取?后面的name名
var module = location.search.slice(1).split('&')[0].split('=')[1];
// 截取?后面的id名
var id = location.search.slice(1).split('&')[1].split('=')[1];
console.log(beautifulCong.getCommunityData(module, id));
// 创建一个变量保存数据中的name名和id名(商品信息)
var goodsData = beautifulCong.getCommunityData(module, id);
// 将数据中的秒杀价添加到文本中
$('.miaosha').text('￥' + goodsData.discountPrice);
// 将数据中的市场价添加到文本中
$('.shichang').text('￥' + goodsData.originalPrice);
// 将数据中商品标题添加到文本中
$('.middle h3').text(goodsData.name)
// 将数据中的库存添加到文本中
$('.province').find('tr:nth-child(5)').children('td:last').text('库存：' + goodsData.introduce);
// 将数据中的商品编号渲染到本单详情中的商品编号text中
$('.goods_number').text(goodsData.serialNumber);
// 将数据中的商品名称渲染到本单详情中的商品名称text中
$('.goods_name').text(goodsData.name);
// 遍历数据中每一个小图片，用添加节点的方法动态渲染到页面中
goodsData.children.forEach(function (value, index) {
    $('.small-glass ul').append(`<li>
    <a href="javascript:;"><img src="${value.smallPic}"></a>
    </li>`);
});
// 放大镜模块鼠标悬上切换图片效果
$('.big-glass img').attr('src', goodsData.children[0].bigPic);
$('.big-pic img ').attr('src', goodsData.children[0].bigPic);;
$('.small-glass li').mouseover(function () {
    $('.big-glass').find('img').attr('src', goodsData.children[$(this).index()].bigPic);
    $('.big-pic').find('img').attr('src', goodsData.children[$(this).index()].bigPic);
});
// 放大镜小图点击左右按钮切换
$('.glass-btn-2').prop('disabled', true);
$('.glass-btn-2').click(function () {
    var sum = 0;
    $('.small-scroll ul').find('li').each(function (index, value) {
        sum += parseInt($(value).outerWidth(true));
    })
    var a = $('.small-scroll ul').css('left');
    a = a.split('p')[0];
    a -= 68;
    if (a > -sum) {
        $(this).parents('.small-glass').find('.small-scroll ul').stop().animate({ left: a }, 300);
    }
});
$('.glass-btn1').click(function () {
    var num = 0;
    $('.small-scroll ul').find('li').each(function (index, value) {
        num = $(value).outerWidth(true);
    })
    var b = $('.small-scroll ul').css('left');
    b = b.slice(0, -2);
    b -= -num;
    b = b > 0 ? 0 : b;
    $(this).parents('.small-glass').find('.small-scroll ul').stop().animate({ left: b }, 300)
});





