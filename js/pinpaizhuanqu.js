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
$(function() {
    $("#gallery-wrapper").pinterest_grid({
        no_columns: 4,
        padding_x: 5,
        padding_y: 10,
        margin_bottom: 100,
        single_column_breakpoint: 375
    });

});

// 头部

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




// 图片懒加载下拉蒙版
$('.i-main>div').hover(function() {
    // 爱心关注出现
    $(this).children('div').eq(1).css('display', 'none');
    $(this).children('div').eq(2).css('display', 'block');
    // 边框变色
    $(this).css('border', '6px solid #AAAAAA');
    // 蒙版出现
    $(this).find('.i-mask').css('height', '283px')
    $(this).find('.i-mask p').css('transform', 'translateY(0px)')
}, function() {
    // 爱心关注消失
    $(this).children('div').eq(1).css('display', 'block');
    $(this).children('div').eq(2).css('display', 'none');
    // 边框变色
    $(this).css('border', '6px solid #E4E4E4');
    // 蒙版消失
    $(this).find('.i-mask').css('height', '0');
    $(this).find('.i-mask p').css('transform', 'translateY(120px)')
});

// 点击品牌专区切换
$('.i-pinpai a').click(function() {
    $(this).css({
        color: 'red',
        fontWeight: '700'
    }).siblings().css({
        color: '#555555',
        fontWeight: '400'
    });
    var num = $(this).index('.i-pinpai a');
    $('.i-main').eq(num).css('display', 'flex').siblings('.i-main').css('display', 'none')


});