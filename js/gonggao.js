$('.wu-hhh').click(function() {
    // 控制li
    $(this).addClass('comm').siblings().removeClass('comm');
    console.log($(this).index());
    $('.wu-clear').hide();
    $('.cr-active').show();
    $('.clear-left').hide();
    // 控制下面内容展示部分
    $('.clear-right').eq($(this).index() - 2).addClass('cr-active').siblings().removeClass('cr-active');
});
$('.wu-li').click(function() {
    // 控制li
    $(this).addClass('wu-act').siblings().removeClass('wu-act');
    console.log($(this).index());
    $('.clear-right').hide();
    $('.wu-clear').hide();
    $('.clear-left').hide();
    $('.wu-lll').show();
    // 控制下面内容展示部分
    $('.wu-clear').eq($(this).index()).addClass('wu-lll').siblings().removeClass('wu-lll');
});
$('.wu-bbb').click(function() {
        $('.clear-left').show();
        $('.cr-active').hide();
    })
    // 点击系统分类
$('.item-cs').click(function() {
        $('.item-hs').slideToggle();
        if (flag == 1) {
            $(this).find('i').css('transform', 'rotate(180deg)')
            flag = 2;
        } else if (flag == 2) {
            $(this).find('i').css('transform', 'rotate(0deg)')
            flag = 1;
        }
    })
    // 点击网店帮助分类
var flag = 1;
$('.item-hh').click(function() {
    $('.item-hsh').slideToggle();
    if (flag == 1) {
        $('.wu-item').css('height', '85');
        $(this).find('i').css('transform', 'rotate(180deg)')
        flag = 2;
    } else if (flag == 2) {
        $('.wu-item').css('height', '295');
        $(this).find('i').css('transform', 'rotate(0deg)')
        flag = 1;
    }
})

$('.two-ulList li').mouseenter(function() {
    $(this).addClass('two-ulListH').siblings().removeClass('two-ulListH');
    $('.two-olList>li').eq($(this).index()).show().siblings().hide();
    $('.two-olList').show();
});
$('.two-erji').mouseleave(function() {
    $('.two-olList>li').eq($(this).index()).hide();
    $('.two-olList').hide();
    $('.two-ulList li').removeClass('two-ulListH');
});
$('.two-erji').hide();
$('.nav-group').mouseenter(function() {
    $('.two-erji').show();
})
$('.nav-group').mouseleave(function() {
    $('.two-erji').hide();
})
$('.two-erji').mouseenter(function() {
    $(this).show();
})
$('.two-erji').mouseleave(function() {
    $(this).hide();
})



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