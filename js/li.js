//二级栏
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
$('.two-olList').hover(function(){
    $('.two-erji-hidden').toggleClass('two-erji-play')
},function(){
    $('.two-erji-hidden').toggleClass('two-erji-play')
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
//种类切换
$('.trigger').hover(function(){
    $(this).toggleClass('box-border-show');
    $(this).next().toggleClass('menu-drop-main-show');
    $(this).find('b').css('display','block');
},function(){
    $(this).toggleClass('box-border-show');
    $(this).next().toggleClass('menu-drop-main-show');
    $(this).find('b').css('display','none');
})
$('.menu-drop-main').hover(function(){
    $(this).toggleClass('menu-drop-main-show');
    $(this).prev().toggleClass('box-border-show');
    $(this).prev().find('b').css('display','block');    
},function(){
    $(this).toggleClass('menu-drop-main-show');
    $(this).prev().toggleClass('box-border-show');
    $(this).prev().find('b').css('display','none'); 
})
//品牌蒙版
$('.container').find('.logo-items').hover(function(){
    $(this).css({
        'border':'2px solid red',
        'border-right':'3px solid red'
    });
    $(this).find('span').css('top','0');
},function(){
    $(this).css('border','1px solid #ddd');
    $(this).find('span').css('top','58px');
})
//品牌选择下拉
    $('.select-extent').children().eq(0).click(function(){
        !$('.select').attr('style')?$('.select').css('height','133px'):$('.select').attr('style','');
        $('.select-extent').find('.iconfont').eq(0).toggleClass('font-bottom');
        $('.select-extent').find('.iconfont').eq(0).toggleClass('icon-up');
    })
//推广产品的隐藏与出现
$('.g-stop .icon-right').click(function(){
    console.log(0)
    !$('.goods-list').attr('style')?$('.goods-list').css('width','1392px'):$('.goods-list').attr('style','');
    $('.goods-spread').toggleClass('goods-spread-fix');
    // if($(this).attr('class','iconfont icon-right')){
    //     $(this).attr('class','iconfont icon-left');
    // }if else($(this).attr('class','iconfont icon-left')){
    //     $(this).attr('class','iconfont icon-right');
    // }
    $(this).toggleClass('icon-right');
    $(this).toggleClass('icon-left');
})

//渲染主栏商品
var goodsList = $('.goods-list');
var goodsSpread = $('.goods-spread');

goodsList.find('li').hover(function(){
    $(this).toggleClass('goods-list-show');
})
var pageArr = this.beautifulCong.getCommunityData('page1')
goodsList.find('.p-price').each(function(index){
    $(this).text('￥'+pageArr[index].discountPrice)
})
goodsList.find('.p-num em').each(function(index){
    $(this).text(pageArr[index].introduce)
})
goodsList.find('.p-name a').each(function(index){
    $(this).text(pageArr[index].name)
})
goodsList.find('.p-img a').each(function(index){
    $(this).attr('id',pageArr[index].id)
    $(this).attr('target','_black')
    $(this).attr('href','zhou.html?module=page1&id='+pageArr[index].id+'')
    $(this).parents('.p-img').siblings('.p-name').find('a').attr('href','zhou.html?module=page1&id='+pageArr[index].id+'')
    var path =  pageArr[index].children[0].bigPic;
    $(this).children().attr('src',path)
})
goodsList.find('.sider ul').each(function(index){
    for(var i=0;i<pageArr[index].children.length;i++){
        if(i<5){
            var path =  pageArr[index].children[i].smallPic;
            $(this).append('<li><img src="'+path+'"></img></li>')
        }
    }
})
//切换商品的展示图
goodsList.find('.sider').each(function(index){
    $(this).find('li').each(function(num){
        // $(this).parents('.sider').prev().find('a').attr('href','zhou.html?module=page1&id='+pageArr[index].id+'&index=index&num=num')
        $(this).mouseenter(function(){
            var path =  pageArr[index].children[num].bigPic;
            $(this).parents('.sider').prev().find('img').attr('src',path)
        })
    })
})


// 渲染推广商品
goodsSpread.find('.p-price').each(function(index){
    $(this).text('￥'+pageArr[index].discountPrice)
})
goodsSpread.find('.p-num em').each(function(index){
    $(this).text(pageArr[index].introduce)
})
goodsSpread.find('.p-name a').each(function(index){
    $(this).text(pageArr[index].name)
})
goodsSpread.find('.p-img a').each(function(index){
    $(this).attr('id',pageArr[index].id)
    $(this).attr('target','_black')
    $(this).attr('href','zhou.html?module=page1&id='+pageArr[index].id+'')
    $(this).parents('.p-img').siblings('.p-name').find('a').attr('href','zhou.html?module=page1&id='+pageArr[index].id+'')
    var path =  pageArr[index].children[0].bigPic;
    $(this).children().attr('src',path)
})

//排序切换
$('.filter-sort').find('a').click(function(){
    $(this).addClass('curr').siblings().removeClass('curr');
})
//按默认排序
$('.filter-sort a').eq(0).click(function(){
    //清空小图片
    goodsList.find('.sider ul').each(function(index){
        $(this).find('li').remove();
    })
    
    goodsList.find('li').hover(function(){
        $(this).toggleClass('goods-list-show');
    })
    goodsList.find('.p-price').each(function(index){
        $(this).text('￥'+pageArr[index].discountPrice)
    })
    goodsList.find('.p-num em').each(function(index){
        $(this).text(pageArr[index].introduce)
    })
    goodsList.find('.p-name a').each(function(index){
        $(this).text(pageArr[index].name)
    })
    goodsList.find('.p-img a').each(function(index){
        $(this).attr('id',pageArr[index].id)
        $(this).attr('target','_black')
        $(this).attr('href','zhou.html?module=page1&id='+pageArr[index].id+'')
        $(this).parents('.p-img').siblings('.p-name').find('a').attr('href','zhou.html?module=page1&id='+pageArr[index].id+'')
        var path =  pageArr[index].children[0].bigPic;
        $(this).children().attr('src',path)
    })
    goodsList.find('.sider ul').each(function(index){
        for(var i=0;i<pageArr[index].children.length;i++){
            if(i<5){
                var path =  pageArr[index].children[i].smallPic;
                $(this).append('<li><img src="'+path+'"></img></li>')
            }
        }
    })
    //切换商品的展示图
goodsList.find('.sider').each(function(index){
    $(this).find('li').each(function(num){
        // $(this).parents('.sider').prev().find('a').attr('href','zhou.html?module=page1&id='+pageArr[index].id+'&index=index&num=num')
        $(this).mouseenter(function(){
            var path =  pageArr[index].children[num].bigPic;
            $(this).parents('.sider').prev().find('img').attr('src',path)
        })
    })
})

})

//按销量排序
var arrGoods = [];
var arrPage = [];
//重新渲染主栏商品
$('.filter-sort a').eq(1).click(function(){
    //清空小图片
    goodsList.find('.sider ul').each(function(index){
        $(this).find('li').remove();
    })


    goodsList.find('.p-num em').each(function(index){
        arrGoods.push(Number($(this).text()));
    })
    arrGoods.sort(function(a,b){
        return b-a;
    })
    for(var i=0;i<arrGoods.length;i++){
        for(var j=0;j<pageArr.length;j++){
            if(arrGoods[i]==pageArr[j].introduce){
                arrPage.push(pageArr[j])
            }
        }
    }

    goodsList.find('.p-price').each(function(index){
        $(this).text('￥'+arrPage[index].discountPrice)
    })
    goodsList.find('.p-num em').each(function(index){
        $(this).text(arrPage[index].introduce)
    })
    goodsList.find('.p-name a').each(function(index){
        $(this).text(arrPage[index].name)
    })
    goodsList.find('.p-img a').each(function(index){
        $(this).attr('id',arrPage[index].id)
        $(this).attr('target','_black')
        $(this).attr('href','zhou.html?module=page1&id='+arrPage[index].id+'')
        $(this).parents('.p-img').siblings('.p-name').find('a').attr('href','zhou.html?module=page1&id='+arrPage[index].id+'')
        var path =  arrPage[index].children[0].bigPic;
        $(this).children().attr('src',path)
    })
    goodsList.find('.sider ul').each(function(index){
        for(var i=0;i<arrPage[index].children.length;i++){
            if(i<5){
                var path =  arrPage[index].children[i].smallPic;
                $(this).append('<li><img src="'+path+'"></img></li>')
            }
        }
    })

    //切换商品的展示图
    goodsList.find('.sider').each(function(index){
        $(this).find('li').each(function(num){
            
            console.log(arrPage[index].children[num].bigPic)
            // $(this).parents('.sider').prev().find('a').attr('href','zhou.html?module=page1&id='+pageArr[index].id+'&index=index&num=num')
            $(this).mouseenter(function(){
                console.log(0)
                var path =  arrPage[index].children[num].bigPic;
                $(this).parents('.sider').prev().find('img').attr('src',path)
            })
        })
    })
    arrPage = [];
    arrGoods = [];
})
//按价格排序
$('.filter-sort a').eq(4).click(function(){
    //清空小图片
    goodsList.find('.sider ul').each(function(index){
        $(this).find('li').remove();
    })

    goodsList.find('.p-price').each(function(index){
        arrGoods.push(Number($(this).text().split('￥')[1]));
    })
    arrGoods.sort(function(a,b){
        return b-a;
    })
    for(var i=0;i<arrGoods.length;i++){
        for(var j=0;j<pageArr.length;j++){
            if(arrGoods[i]==pageArr[j].discountPrice){
                arrPage.push(pageArr[j])
            }
        }
    }
console.log(arrGoods)
    goodsList.find('.p-price').each(function(index){
        $(this).text('￥'+arrPage[index].discountPrice)
    })
    goodsList.find('.p-num em').each(function(index){
        $(this).text(arrPage[index].introduce)
    })
    goodsList.find('.p-name a').each(function(index){
        $(this).text(arrPage[index].name)
    })
    goodsList.find('.p-img a').each(function(index){
        $(this).attr('id',arrPage[index].id)
        $(this).attr('target','_black')
        $(this).attr('href','zhou.html?module=page1&id='+arrPage[index].id+'')
        $(this).parents('.p-img').siblings('.p-name').find('a').attr('href','zhou.html?module=page1&id='+arrPage[index].id+'')
        var path =  arrPage[index].children[0].bigPic;
        $(this).children().attr('src',path)
    })
    goodsList.find('.sider ul').each(function(index){
        for(var i=0;i<arrPage[index].children.length;i++){
            if(i<5){
                var path = arrPage[index].children[i].smallPic;
                $(this).append('<li><img src="'+path+'"></img></li>')
            }
        }
    })
    
    goodsList.find('.sider').each(function(index){
        $(this).find('li').each(function(num){
            // $(this).parents('.sider').prev().find('a').attr('href','zhou.html?module=page1&id='+pageArr[index].id+'&index=index&num=num')
            $(this).mouseenter(function(){
                var path =  arrPage[index].children[num].bigPic;
                $(this).parents('.sider').prev().find('img').attr('src',path)
            })
        })
    })
    arrPage = [];
    arrGoods = [];
    //切换商品的展示图
})

