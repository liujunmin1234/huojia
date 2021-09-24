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

$('.wu-tab div').click(function() {
    $(this).css({
        border: '1px solid red',
        backgroundColor: 'red',
        color: 'white'
    }).siblings().css({
        border: '1px solid #D2D2D2',
        backgroundColor: '#F8F8F8',
        color: 'black'
    })
});
$('.wu-tab div:nth-child(3)').click(function() {
    $('.wu-box').css('display', 'none');
    $('.wu-box2').css('display', 'flex')
});
$('.wu-tab div:nth-child(2)').click(function() {
    $('.wu-box').css('display', 'flex');
    $('.wu-box2').css('display', 'none')
});
$('.wu-tab div:nth-child(1)').click(function() {
    $('.wu-tab div:nth-child(2)').click()
})
$('.wu-tab div:nth-child(4)').click(function() {
    $('.wu-tab div:nth-child(3)').click()
});



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