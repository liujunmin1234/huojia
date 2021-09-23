if($(document).scrollTop()<300){
    $('.liu-tiao').hide();
}else{
    $('.liu-tiao').show();
}
$(document).scroll(function(){
    if($(this).scrollTop()<300){
        $('.liu-tiao').hide(500);
    }else if($(this).scrollTop()>300&&$(this).scrollTop()<700){
        $('.liu-tiao').show(500);
        $('.tiao').eq(0).css('background','red');
        $('.tiao').eq(0).siblings().css('background','#A3A0A1')
    }else if($(this).scrollTop()>700&&$(this).scrollTop()<1200){
        $('.tiao').eq(1).css('background','red');
        $('.tiao').eq(1).siblings().css('background','#A3A0A1')
    }else if($(this).scrollTop()>1200&&$(this).scrollTop()<1900){
        $('.tiao').eq(2).css('background','red');
        $('.tiao').eq(2).siblings().css('background','#A3A0A1')
    }else if($(this).scrollTop()>1900&&$(this).scrollTop()<2500){
        $('.tiao').eq(3).css('background','red');
        $('.tiao').eq(3).siblings().css('background','#A3A0A1')
    }
})
$('.tiao').eq(4).on('click',function(){
    var i= $(document).scrollTop();
   if($(document).scrollTop()!=0){
    var inset=setInterval(function(){   
        $(document).scrollTop(i -=10);
        if($(document).scrollTop()==0){
            clearInterval(inset);
    }  
    },10)
   } 
})
$('.tiao').eq(3).on('click',function(){
    $(document).scrollTop(1900);
    $('.tiao').eq(3).css('background','red');
    $('.tiao').eq(3).siblings().css('background','#A3A0A1')
})
$('.tiao').eq(2).on('click',function(){
    $(document).scrollTop(1200);
    $('.tiao').eq(2).css('background','red');
    $('.tiao').eq(2).siblings().css('background','#A3A0A1')
})
$('.tiao').eq(1).on('click',function(){
    $(document).scrollTop(700);
    $('.tiao').eq(1).css('background','red');
    $('.tiao').eq(1).siblings().css('background','#A3A0A1')
})
$('.tiao').eq(0).on('click',function(){
    $(document).scrollTop(300);
    $('.tiao').eq(0).css('background','red');
    $('.tiao').eq(0).siblings().css('background','#A3A0A1')
})

 