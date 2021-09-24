var zyLunboList = document.querySelector('.zyLunboList')

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
    }, 50);
};
var targets = 0;
var m = 1;
zyautoplay()

function zyautoplay() {
    zyLunboList.interId = setInterval(function() {
        m++;
        if (m == 6) {
            zyLunboList.style.left = 0;
            m = 1;
        }
        targets = m * -1200;

        $('.zytipList span').removeClass('zyactive')
        $('.zytipList span').eq(m - 1).addClass('zyactive')
        moveAnimation2(zyLunboList, targets)

    }, 3000)
}

$('.zytipList span').click(function() {
        $('.zytipList span').removeClass('zyactive')
        $(this).addClass('zyactive')
        console.log($(this).index())
        m = $(this).index() + 1
        targets = m * -1200;
        moveAnimation2(zyLunboList, targets)
    })
    // $('.zyLunboList').mouseover(function() {
    //     clearInterval(zyLunboList.interId)
    // })
$(zyLunboList).mouseout(function() {})
$('.ZyleftAside li').hover(function() {
    var temp = $(this).index()
    $('.zytophide').eq(temp).show()
}, function() {
    var temp = $(this).index()
    $('.zytophide').hide()
})
$('.zytophide').hover(function() {
    $(this).show()
}, function() {
    $(this).hide()
})
$('.zyrmtjsp li').hover(function() {
    var temp = $(this).index()
    $('.zyrmckxq').eq(temp).css('opacity', 1)
}, function() {
    var temp = $(this).index()
    $('.zyrmckxq').eq(temp).css('opacity', 0)
})

var ssgnrlist = document.querySelector('.ssgnrlist')
$('.ssgtitr span').mouseenter(function() {
    $(this).addClass('ssgtactive')
    $(this).siblings().removeClass('ssgtactive')
    var temp = $(this).index()
    console.log(temp)
    var target = temp * (-1200)
    moveAnimation3(ssgnrlist, target)
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

function moveAnimation3(ele, target) {
    clearInterval(ele.interId);
    ele.interId = setInterval(function() {
        if (ele.offsetLeft == target) {
            clearInterval(ele.interId);
        } else {
            var slowStep = (target - ele.offsetLeft) / 10;
            slowStep = slowStep > 0 ? Math.ceil(slowStep) : Math.floor(slowStep);
            ele.style.left = ele.offsetLeft + slowStep + 'px';
        }
    }, 50);
};
$('.ssprev').click(function() {
    if (count == 0) {
        count = $('.ssgtitr span').length;
    }
    count--;
    $('.ssgtitr span').eq(count).addClass('ssgtactive')
    $('.ssgtitr span').eq(count).siblings().removeClass('ssgtactive')
    var target = count * -1200

    moveAnimation3(ssgnrlist, target)
})
$('.ssnext').click(function() {
    count++;
    if (count == $('.ssgtitr span').length) {
        count = 0;
    }
    var target = count * -1200
    $('.ssgtitr span').eq(count).addClass('ssgtactive')
    $('.ssgtitr span').eq(count).siblings().removeClass('ssgtactive')
    moveAnimation3(ssgnrlist, target)
})



$('.cfdqtit span').not('.cfdqtit1').mouseenter(function() {

    var temp = $(this).index()
    $(this).addClass('cftive')
    $(this).siblings().removeClass('cftive')
    $('.cfdqnrright').eq(temp).show()
    $('.cfdqnrright').eq(temp).siblings('.cfdqnrright').hide()
})
$('.djdtit span').not('.djdtit1').mouseenter(function() {

        var temp = $(this).index()
        $(this).addClass('djtive')
        $(this).siblings().removeClass('djtive')
        $('.djdnrright').eq(temp).show()
        $('.djdnrright').eq(temp).siblings('.djdnrright').hide()
    })
    // 个护健康
$('.ghjktit span').not('.ghjktit1').mouseenter(function() {

    var temp = $(this).index()
    $(this).addClass('ghtive')
    $(this).siblings().removeClass('ghtive')
    $('.ghjknrright').eq(temp).show()
    $('.ghjknrright').eq(temp).siblings('.ghjknrright').hide()
})
$('.wjjztit span').not('.wjjztit1').mouseenter(function() {

    var temp = $(this).index()
    $(this).addClass('wjtive ')
    $(this).siblings().removeClass('wjtive')
    $('.wjjznrright').eq(temp).show()
    $('.wjjznrright').eq(temp).siblings('.wjjznrright').hide()
})
$('.shdqtit span').not('.shdqtit1').mouseenter(function() {

    var temp = $(this).index()
    $(this).addClass('shtive')
    $(this).siblings().removeClass('shtive')
    $('.shdqnrright').eq(temp).show()
    $('.shdqnrright').eq(temp).siblings('.shdqnrright').hide()
})
console.log()
console.log(window.beautifulCong.getCommunityData('index'))
for (i = 0; i < window.beautifulCong.getCommunityData('index').length; i++) {
    $('.cfxww li p a').eq(i).text(window.beautifulCong.getCommunityData('index')[i].name);
}
for (i = 0; i < window.beautifulCong.getCommunityData('index').length; i++) {
    $('.cfxww li p a').eq(i + 25).text(window.beautifulCong.getCommunityData('index')[i].name);
}
for (i = 0; i < window.beautifulCong.getCommunityData('index').length; i++) {
    $('.cfxww li div a').eq(i).text('¥' + window.beautifulCong.getCommunityData('index')[i].introduce);
}
for (i = 0; i < window.beautifulCong.getCommunityData('index').length; i++) {
    $('.cfxww li div a').eq(i + 25).text('¥' + window.beautifulCong.getCommunityData('index')[i].introduce);
}
for (i = 0; i < window.beautifulCong.getCommunityData('index').length; i++) {
    $('.cfxww li a img').eq(i).attr("src", window.beautifulCong.getCommunityData('index')[i].showImg);
}
for (i = 0; i < window.beautifulCong.getCommunityData('index').length; i++) {
    $('.cfxww li a img').eq(i + 25).attr("src", window.beautifulCong.getCommunityData('index')[i].showImg);
}
for (i = 0; i < window.beautifulCong.getCommunityData('index').length; i++) {
    $('.cfxww li p a').eq(i).attr('href', 'zhou.html?module=index&id=' + window.beautifulCong.getCommunityData('index')[i].id)
}
for (i = 0; i < window.beautifulCong.getCommunityData('index').length; i++) {
    $('.cfxww li p a').eq(i + 25).attr('href', 'zhou.html?module=index&id=' + window.beautifulCong.getCommunityData('index')[i].id)
}
for (i = 0; i < window.beautifulCong.getCommunityData('index').length; i++) {
    $('.cfxww li a ').eq(i).attr('href', 'zhou.html?module=index&id=' + window.beautifulCong.getCommunityData('index')[i].id)
}
for (i = 0; i < window.beautifulCong.getCommunityData('index').length; i++) {
    $('.cfxww li a').eq(i + 25).attr('href', 'zhou.html?module=index&id=' + window.beautifulCong.getCommunityData('index')[i].id)
}