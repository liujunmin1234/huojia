// 二级导航
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
// 女装
$('.lookNav-li').mousemove(function() {
    // 控制li
    $(this).addClass('lookList').siblings().removeClass('lookList');
    // console.log($(this).index());
    // 控制下面内容展示部分
    $('.fristShop').eq($(this).index()).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
});
// 男装
$('.lookNav-li1').mousemove(function() {
    // 控制li
    $(this).addClass('lookList1').siblings().removeClass('lookList1');
    // console.log($(this).index());
    // 控制下面内容展示部分
    $('.fristShop1').eq($(this).index()).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
});
// 服饰配件
$('.lookNav-li2').mousemove(function() {
    // 控制li
    $(this).addClass('lookList2').siblings().removeClass('lookList2');
    // console.log($(this).index());
    // 控制下面内容展示部分
    $('.fristShop2').eq($(this).index()).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
});
// 内衣
$('.lookNav-li3').mousemove(function() {
    // 控制li
    $(this).addClass('lookList3').siblings().removeClass('lookList3');
    // console.log($(this).index());
    // 控制下面内容展示部分
    $('.fristShop3').eq($(this).index()).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
});
// 户外运功
$('.lookNav-li4').mousemove(function() {
    // 控制li
    $(this).addClass('lookList4').siblings().removeClass('lookList4');
    // console.log($(this).index());
    // 控制下面内容展示部分
    $('.fristShop4').eq($(this).index()).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
});
// 随手购***************************************************************
function moveAnimation2(ele, target) {
    clearInterval(ele.interId);
    ele.interId = setInterval(function() {
        if (ele.offsetLeft == target) {
            clearInterval(ele.interId);
        } else {
            var slowStep = (target - ele.offsetLeft) / 10;
            slowStep = slowStep > 0 ? Math.ceil(slowStep) : Math.floor(slowStep);
            ele.style.left = ele.offsetLeft + slowStep + 'px';
        }
    }, 10);
};
var ssgnrlist = document.querySelector('.ssgnrlist')
$('.ssgtitr span').mouseenter(function() {
    $(this).addClass('ssgtactive')
    $(this).siblings().removeClass('ssgtactive')
    var temp = $(this).index()
    console.log(temp)
    var target = temp * (-1200)
    moveAnimation2(ssgnrlist, target)
})
$('.ssgxq').hover(function() {
    $(this).css('background-color', 'red')
    $(this).children('a').css('color', 'white')
}, function() {
    $(this).css('background-color', 'white')
    $(this).children('a').css('color', 'red')
})
$('.ssgnr, .ssprev, .ssnext').hover(function() {
    $('.ssprev').show()
    $('.ssnext').show()
}, function() {
    $('.ssprev').hide()
    $('.ssnext').hide()
})
var count = 0;
$('.ssprev').click(function() {
    if (count == 0) {
        count = $('.ssgtitr span').length;
    }
    count--;
    $('.ssgtitr span').eq(count).addClass('ssgtactive')
    $('.ssgtitr span').eq(count).siblings().removeClass('ssgtactive')
    var target = count * -1200

    moveAnimation2(ssgnrlist, target)
})
$('.ssnext').click(function() {
    count++;
    if (count == $('.ssgtitr span').length) {
        count = 0;
    }
    var target = count * -1200
    $('.ssgtitr span').eq(count).addClass('ssgtactive')
    $('.ssgtitr span').eq(count).siblings().removeClass('ssgtactive')
    moveAnimation2(ssgnrlist, target)
})
/* 跳楼效果 **************************************************************/
if($(document).scrollTop()<632){
    $('.liu-tiao').hide();
}else{
    $('.liu-tiao').show();
}
$(document).scroll(function(){
    if($(this).scrollTop()<632){
        $('.liu-tiao').hide(500);
    }else if($(this).scrollTop()>632&&$(this).scrollTop()<1034){
        $('.liu-tiao').show(500);
        $('.tiao').eq(0).css('background','#FC5F8D');
        $('.tiao').eq(0).siblings().css('background','#A3A0A1')
    }else if($(this).scrollTop()>1034&&$(this).scrollTop()<1764){
        $('.tiao').eq(1).css('background','#FC5F8D');
        $('.tiao').eq(1).siblings().css('background','#A3A0A1')
    }else if($(this).scrollTop()>1764&&$(this).scrollTop()<2494){
        $('.tiao').eq(2).css('background','#FC5F8D');
        $('.tiao').eq(2).siblings().css('background','#A3A0A1')
    }else if($(this).scrollTop()>2494&&$(this).scrollTop()<3224){
        $('.tiao').eq(3).css('background','#FC5F8D');
        $('.tiao').eq(3).siblings().css('background','#A3A0A1')
    }else if($(this).scrollTop()>3224&&$(this).scrollTop()<3954){
        $('.tiao').eq(4).css('background','#FC5F8D');
        $('.tiao').eq(4).siblings().css('background','#A3A0A1')
    }else if($(this).scrollTop()>3954&&$(this).scrollTop()<4184){
        $('.tiao').eq(5).css('background','#FC5F8D');
        $('.tiao').eq(5).siblings().css('background','#A3A0A1')
    }else if($(this).scrollTop()>4184&&$(this).scrollTop()<5000){
        $('.tiao').eq(6).css('background','#FC5F8D');
        $('.tiao').eq(6).siblings().css('background','#A3A0A1')
    }
})
$('.tiao').eq(7).on('click',function(){
    var i= $(document).scrollTop();
   if($(document).scrollTop()!=0){
    var inset=setInterval(function(){   
        $(document).scrollTop(i -=20);
        if($(document).scrollTop()==0){
            clearInterval(inset);
    }  
    },5)
   } 
})
$('.tiao').eq(6).on('click',function(){
    $(document).scrollTop(5000);
    $('.tiao').eq(6).css('background','#FC5F8D');
    $('.tiao').eq(6).siblings().css('background','#A3A0A1')
})
$('.tiao').eq(5).on('click',function(){
    $(document).scrollTop(4254);
    $('.tiao').eq(5).css('background','#FC5F8D');
    $('.tiao').eq(5).siblings().css('background','#A3A0A1')
})
$('.tiao').eq(4).on('click',function(){
    $(document).scrollTop(3454);
    $('.tiao').eq(4).css('background','#FC5F8D');
    $('.tiao').eq(4).siblings().css('background','#A3A0A1')
})
$('.tiao').eq(3).on('click',function(){
    $(document).scrollTop(2694);
    $('.tiao').eq(3).css('background','#FC5F8D');
    $('.tiao').eq(3).siblings().css('background','#A3A0A1')
})
$('.tiao').eq(2).on('click',function(){
    $(document).scrollTop(1816);
    $('.tiao').eq(2).css('background','#FC5F8D');
    $('.tiao').eq(2).siblings().css('background','#A3A0A1')
})
$('.tiao').eq(1).on('click',function(){
    $(document).scrollTop(1034);
    $('.tiao').eq(1).css('background','#FC5F8D');
    $('.tiao').eq(1).siblings().css('background','#A3A0A1')
})
$('.tiao').eq(0).on('click',function(){
    $(document).scrollTop(630);
    $('.tiao').eq(0).css('background','#FC5F8D');
    $('.tiao').eq(0).siblings().css('background','#A3A0A1')
})
// <!-- Initialize Swiper -->
  var swiper = new Swiper('.swiper-container', {
    // loop: true, 
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });
/* 侧边栏 *********************************************/
$('.screen-side-con li>a').hover(function(){
    $(this).addClass('current');
    $(this).find('.cart_num').addClass('color_change');
    $(this).find('.mp_tooltip').css({
        'visibility':'visible'
    }).stop().animate({
        left : -92
        },300);
},function(){
    $(this).removeClass('current');
    $(this).find('.cart_num').removeClass('color_change');
    $(this).find('.mp_tooltip').css({
        'visibility':'hidden'
    }).stop().animate({
        left : -121
        },100)
    })
$('.cart_list').click(function(){
    $('.screen-side-lay').toggleClass('show');
    if(!$(this).find('.cart_num').attr('style')){
        $(this).find('.cart_num').css({
            'background': '#fff',
            'color': '#f42424'
        }) 
    }else{
        $(this).find('.cart_num').attr('style','');
    }
    if($(this).attr('style')){
        $(this).attr('style','');
    }else{
        $(this).css('background','#f42424');
    }
})
$('.setting_hover').hover(function(){
    $('.setting-con').css('display','block');
},function(){
    $('.setting-con').css('display','none');
})
$('.setting-con').hover(function(){
    $(this).css('display','block');
},function(){
    $(this).css('display','none');
})
$('.login_btnbox').find('a').hover(function(){
    $(this).css('border','1px solid #f00'); 
},function(){
    $(this).css('border','1px solid transparent'); 
})
$(document).ready(function() {
    $(window).scroll(function(){
        if ($(window).scrollTop() > 0) {
            $('.return_top_hover').css('display','block');
          } else {
            $('.return_top_hover').css('display','none');
          }    
        })
    $(".return_top_sport").click(function() {
        $('body,html').animate({
          scrollTop: 0
        },
        500);
        $('.return_top_hover').css('display','none');
        return false;
      });
    if(Number($('.cart_list').find('.cart_num').text())!=0){
        $('.ecs-tbar-tipbox2').css('display','none');
    }else{
        $('.ecs-tbar-tipbox2').css('display','block');
    } 
})
$('.side-car-title').find('.close').click(function(){
    $('.screen-side-lay').toggleClass('show');
    if(!$('.cart_list').find('.cart_num').attr('style')){
        $('.cart_list').find('.cart_num').css({
            'background': '#fff',
            'color': '#f42424'
        }) 
    }else{
        $('.cart_list').find('.cart_num').attr('style','');
    }
    if($('.cart_list').attr('style')){
        $('.cart_list').attr('style','');
    }else{
        $('.cart_list').css('background','#f42424');
    }
})
$('.email_hover').click(function(){
    $('.email_box').toggleClass('email_box_show');
})

$(document).on("mousewheel DOMMouseScroll", function (e) {
    // jq 获取dom 事件对象要通过originalEvent 
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
        // chrome & ie
        (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
    if (delta > 0) {
        // 向上滚
        $('.email_box').removeClass('email_box_show');
    }
});

// 商品内容渲染部分
var shopShow = $('.rightShop')
var pageData = this.beautifulCong.getCommunityData('page2');
shopShow.find('.fristShop').each(function(index){
    // console.log('1_'+(index+1))
    var arr = [];
    for(var i=0;i<pageData.length;i++){
        if(pageData[i].module==='1_'+(index+1)){
            arr.push(pageData[i]);
            // console.log(pageData[i].module)
        }
    }
    $(this).find('li').each(function(num){
        var path = arr[num].showImg
        $(this).find('img').attr('src',path)
        $(this).find('.shopInt').text(arr[num].name)
        $(this).find('.shopPrice').text('￥'+arr[num].discountPrice)
        $(this).find('a').attr('href','zhou.html?module=page2&id='+arr[num].id)

    })
})
var shopShow = $('.rightShop1')
var pageData = this.beautifulCong.getCommunityData('page2');
shopShow.find('.fristShop-li1').each(function(index){
    if(index<2){
        // console.log('2_'+(index+1))
        var arr = [];
        for(var i=0;i<pageData.length;i++){
            if(pageData[i].module==='2_'+(index+1)){
                arr.push(pageData[i]);
                // console.log(pageData[i].module)
            }
        }
        $(this).find('li').each(function(num){
            var path = arr[num].showImg
            $(this).find('img').attr('src',path)
            $(this).find('.shopInt').text(arr[num].name)
            $(this).find('.shopPrice').text('￥'+arr[num].discountPrice)
            $(this).find('a').attr('href','zhou.html?module=page2&id='+arr[num].id)

        })
    
    }
})
var shopShow = $('.rightShop2')
var pageData = this.beautifulCong.getCommunityData('page2');
shopShow.find('.fristShop-li2').each(function(index){
    // console.log('3_'+(index+1))
    var arr = [];
    for(var i=0;i<pageData.length;i++){
        if(pageData[i].module==='3_'+(index+1)){
            arr.push(pageData[i]);
            // console.log(pageData[i].module)
        }
    }
    $(this).find('li').each(function(num){
        var path = arr[num].showImg
        $(this).find('img').attr('src',path)
        $(this).find('.shopInt').text(arr[num].name)
        $(this).find('.shopPrice').text('￥'+arr[num].discountPrice)
        $(this).find('a').attr('href','zhou.html?module=page2&id='+arr[num].id)

    })
})

    // 位置定位部分
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

