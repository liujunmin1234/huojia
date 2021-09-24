$('.sanjiao').hide();
$('.item1').each(function(){
    $(this).hover(function(){
        $(this).next().show();
    },function(){
        $(this).next().hide();
    })
})
$('.liu-nav').fadeOut();
$('.item1').each(function(){
    $(this).hover(function(){
        $(this).next().next().fadeIn();
    },function(){
        $(this).next().next().fadeOut();
    })
})
$('.bd').eq(1).fadeOut();
$('.liu-nav').eq(1).css('left','-110px');
$('.liu-nav').eq(2).css('left','-220px');
$('.liu-nav').eq(3).css('left','-330px');
$('.liu-nav').eq(4).css('left','-440px');
$('.liu-nav').eq(5).css('left','-550px');
$('.hd1').eq(0).hover(function(){
    $('.bd').eq(0).fadeIn();
    $('.bd').eq(1).fadeOut();
})
$('.hd1').eq(1).hover(function(){
    $('.bd').eq(1).fadeIn();
    $('.bd').eq(0).fadeOut();
})
$('.leftjian').on('click',function(){
    $('.textimg').animate({
        left:'0'
    },2000)
});
$('.rightjian').on('click',function(){
    $('.textimg').animate({
        left:'-1500'
    },2000)
});
// console.log($('.bd1-name'));
// console.log()

// $('.bd1-name').each(function(){
//     $(this).text()
// })
for(var i=0;i<window.beautifulCong.getCommunityData('index').length;i++){
    console.log(window.beautifulCong.getCommunityData('index'));
    $('.bd1-name').eq(i).text( window.beautifulCong.getCommunityData('index')[i].name)
}
for(var i=0;i<4;i++){
    $('.bd1-name').eq(i+25).text( window.beautifulCong.getCommunityData('index')[i].name)
}
for(var i=0;i<window.beautifulCong.getCommunityData('index').length;i++){
    $('.bd1-price').eq(i).text('￥'+window.beautifulCong.getCommunityData('index')[i].originalPrice)
}
for(var i=0;i<4;i++){
    $('.bd1-price').eq(i+25).text('￥'+ window.beautifulCong.getCommunityData('index')[i].originalPrice)
}
for(var i=0;i<window.beautifulCong.getCommunityData('index').length;i++){
    $('.bd1-images').eq(i).attr('src',window.beautifulCong.getCommunityData('index')[i].showImg);
}
for(var i=0;i<4;i++){
    $('.bd1-images').eq(i+25).attr('src',window.beautifulCong.getCommunityData('index')[i].showImg);
}
for(var i=0;i<window.beautifulCong.getCommunityData('index').length;i++){
    $('.bd1-images').parent().eq(i).attr('href',' ./zhou.html?module=index&id='+window.beautifulCong.getCommunityData('index')[i].id);
}
for(var i=0;i<4;i++){
    $('.bd1-images').parent().eq(i+25).attr('href',' ./zhou.html?module=index&id='+window.beautifulCong.getCommunityData('index')[i].id);
}
for(var i=0;i<window.beautifulCong.getCommunityData('index').length;i++){
    $('.bd1-name').parent().eq(i).attr('href',' ./zhou.html?module=index&id='+window.beautifulCong.getCommunityData('index')[i].id);
}
for(var i=0;i<4;i++){
    $('.bd1-name').parent().eq(i+25).attr('href',' ./zhou.html?module=index&id='+window.beautifulCong.getCommunityData('index')[i].id);
}
var oA = $('.English').find('a');
var length = $('.English').find('a').length;
oA.each(function(index) {
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