$(function () {
    $('.identifying_code').click(function () {
        this.src = 'https://x.dscmall.cn/captcha_verify.php?captcha=is_login&' + ('&' + Math.random()).split('.')[1].slice(0, 10)
    })
    $('.item1 label').click(function () {
        $(this).toggleClass('checked');
    })
})