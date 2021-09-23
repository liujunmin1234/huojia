// 头部广告
$('#gb').click(function() {
    $(this).parents('.top-banner').hide();
});

// 滚动指定距离显示的搜索框
$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
        $('.hSearch').stop().slideDown();
    } else {
        $('.hSearch').stop().slideUp();
    }
});
$('.hSearch-1').mouseenter(function() {
    $('.hs-ejdh').show();
});
$('.hSearch-0').mouseleave(function() {
    $('.hs-ejdh').hide();
});
// 二级导航------------轮播图---------------用户头像
// 二级导航显示与隐藏
$('.two-ulList li').mouseenter(function() {
    $(this).addClass('two-ulListH').siblings().removeClass('two-ulListH');
    $(this).parent().next().children('li').eq($(this).index()).show().siblings().hide();
    $(this).parent().next().show();
});
$('.two .w1200').mouseleave(function() {
    $('.two-olList>li').eq($(this).index()).hide();
    $('.two-olList').hide();
    $('.two-ulList li').removeClass('two-ulListH');
});
$('.hSearch-ejdh').mouseleave(function() {
    $('.two-olList>li').eq($(this).index()).hide();
    $('.two-ulList li').removeClass('two-ulListH');
});
//  头像栏
//      请登录按钮
$('.two-div-1 button').first().hover(function() {
    $(this).toggleClass('two-div-btn1');
});
$('.two-div-2 li').mouseenter(function() {
    $(this).addClass('two-div-active').siblings().removeClass('two-div-active');
});
// 第三行小型轮播
$('.threeLbt-left').off().click(function() {
    $('.threeLbt ul').stop().animate({
        marginLeft: '-240px'
    }, 1000, function() {
        $('.threeLbt ul').children().first().appendTo('.threeLbt ul');
        $('.threeLbt ul').css('margin-left', 0);
    });
});
$('.threeLbt-right').off().click(function() {
    $('.threeLbt ul').children().last().prependTo('.threeLbt ul');
    $('.threeLbt ul').css('margin-left', '-240px');
    $('.threeLbt ul').stop().animate({
        marginLeft: '0'
    }, 1000);
});
// -----------侧边跳楼效果

var super_Tl = $('.super').offset().top - 55;
$(window).scroll(function() {
    if ($(window).scrollTop() >= super_Tl) {
        $('.aside').fadeIn();
    } else {
        $('.aside').fadeOut();
    }
});
$('.TL').each(function(index, value) {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= $(value).offset().top - 55) {
            $('.aside li').eq(index).addClass('aside-active').siblings().removeClass('aside-active');
        }
    });
});
$('.aside li:not(".fhdb")').click(function() {
    $(this).addClass('aside-active').siblings().removeClass('aside-active');
    var rel = $('.TL').eq($(this).index()).offset().top - 50;
    $(window).scrollTop(rel);
});
$('.fhdb').click(function() {
    $('html').animate({
        scrollTop: 0
    }, 500)
});


// -------------------------渲染数据---------------------
//  尾部商品数据
var sp = beautifulCong.getCommunityData('index');

sp.forEach(function(value, index) {
    var s1 = $('.eight li')[index];
    // 特色推荐
    $('.five-two .five-O>div>div').find('p span').eq(index).text(value.name.substr(0, 6));
    $('.five-two .five-O>div>div').find('p').eq(index).html($('.five-two .five-O>div>div').find('p').eq(index).html() + value.name);
    $('.five-two .five-O>div>div').find('img').eq(index).attr('src', value.showImg);
    $('.five-two .five-O>div>div').find('a').eq(index).attr('href', 'page/zhou.html?name=index&id=' + value.id);

    if (s1) {
        $(s1).attr('id', value.id).prop('serialNumber', value.serialNumber);
        $(s1).find('p').text(value.name).end().find('img').attr('src', value.showImg).end().find('span').text(value.discountPrice).end().find('s').text(value.originalPrice);
        $(s1).children('a').attr('href', 'page/zhou.html?name=index&id=' + value.id);
    } else {
        var s2 = $('.eight li').eq(0).clone().appendTo('.eight');
        $(s2).attr('id', value.id).prop('serialNumber', value.serialNumber);
        $(s2).find('p').text(value.name).end().find('img').attr('src', value.showImg).end().find('span').text(value.discountPrice).end().find('s').text(value.originalPrice);
        $(s2).children('a').attr('href', 'page/zhou.html?name=index&id=' + value.id);
    }
});
// 二级导航数据
// console.log(beautifulCong.getCategoryData());

var rel = beautifulCong.getCategoryData();
// 列表项
$('.two .two-ulList li').each(function(i1, v1) {
    // 标题
    $('<a href="">' + rel[i1].title + '</a>').attr('id', rel[i1].id).appendTo($(v1).find('p'));
    // 下方小字
    $('<a href="">' + rel[i1].subTitle[0] + '</a>  <a href="">' + rel[i1].subTitle[0] + '</a>').appendTo($(v1).find('span'));
});
$('.hs-ejdh .two-ulList li').each(function(i1, v1) {
    // 标题
    $('<a href="">' + rel[i1].title + '</a>').attr('id', rel[i1].id).appendTo($(v1).find('p'));
    // 下方小字
    $('<a href="">' + rel[i1].subTitle[0] + '</a>  <a href="">' + rel[i1].subTitle[0] + '</a>').appendTo($(v1).find('span'));
});
// 内容项 左侧列表
$('.two .two-olList>li').each(function(i1, v1) {
    // 循环渲染 内容区 上部分 的标签
    $(rel[i1].cateTitle).each(function(i2, v2) {
        $('<a href=""><span>' + v2 + '</span></a>').appendTo($(v1).find('.two-olList-leftUp'));
    }); // 循环添加 内容区 下部分 的 内容区
    $(rel[i1].children).each(function(i3, v3) {
        var downC = $(v1).find('.two-olList-leftDown')[i3];
        if (downC) {
            $(downC).children('a').text(v3.title).attr('id', v3.titleId);
        } else {
            var result = $(v1).find('.two-olList-leftDown').eq(0).clone().appendTo($(v1).find('.two-olList-left'));
            $(result).children('a').text(v3.title).attr('id', v3.titleId);
        }

        $(v1).find('.two-olList-leftDown').eq(i3).find('p').empty();
        $(v3.category).each(function(i4, v4) {
            $('<a href="" id="' + v4.id + '">' + v4.name + '</a>').appendTo($(v1).find('.two-olList-leftDown:eq(' + i3 + ' ) p'));
        });

    });
    // 内容项 右侧列表
    $(rel[i1].supplier).each(function(i4, v4) {
        // console.log(v4);
        $('<li><a href=""><img src="' + v4 + '" /></a></li>').appendTo($(v1).find('.two-olList-right'));
    });
});
$('.hs-ejdh .two-olList>li').each(function(i1, v1) {
    // 循环渲染 内容区 上部分 的标签
    $(rel[i1].cateTitle).each(function(i2, v2) {
        $('<a href=""><span>' + v2 + '</span></a>').appendTo($(v1).find('.two-olList-leftUp'));
    });

    $(rel[i1].children).each(function(i3, v3) {
        var downC = $(v1).find('.two-olList-leftDown')[i3];
        // 循环添加 内容区 下部分 的 内容区
        if (downC) {
            $(downC).children('a').text(v3.title).attr('id', v3.titleId);
        } else {
            var result = $(v1).find('.two-olList-leftDown').eq(0).clone().appendTo($(v1).find('.two-olList-left'));
            $(result).children('a').text(v3.title).attr('id', v3.titleId);
        }

        $(v1).find('.two-olList-leftDown').eq(i3).find('p').empty();
        $(v3.category).each(function(i4, v4) {

            $('<a href="" id="' + v4.id + '">' + v4.name + '</a>').appendTo($(v1).find('.two-olList-leftDown:eq(' + i3 + ' ) p'));

        });

    });
    // 内容项 右侧列表
    $(rel[i1].supplier).each(function(i4, v4) {
        // console.log(v4);
        $('<li><a href=""><img src="' + v4 + '" /></a></li>').appendTo($(v1).find('.two-olList-right'));
    });
});

// 渲染跳转页面
var arr = ["page/domestic.html", "page/liu.html", "page/juhuasuan.html", "page/yushou.html", "page/dianpujie.html", "page/pinpaizhuanqu.html", "page/gonggao.html", "page/li.html"];
$('.two .two-olList>li').each(function(i1, v1) {
    $(v1).find('a').attr('href', arr[i1])
});