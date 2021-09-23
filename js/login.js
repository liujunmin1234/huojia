$(function () {
    var flag = true;
    $('.toggle_login').click(function () {
        if (flag) {
            flag = false;
            $('.login_form').hide();
            $('.qrcode_form').show();
        } else {
            flag = true;
            $('.login_form').show();
            $('.qrcode_form').hide();
        }
    })
    $('.identifying_code').click(function () {
        this.src = 'https://x.dscmall.cn/captcha_verify.php?captcha=is_login&' + ('&' + Math.random()).split('.')[1].slice(0, 10)
    })
    $('.qrcode_error a').click(function () {

        function randomStr(len) {
            var resultStr = ''
            var chars = [];
            for (let i = 48; i < 58; i++) {
                chars.push(String.fromCharCode(i));
            }
            for (let i = 97; i < 123; i++) {
                chars.push(String.fromCharCode(i));
            }
            for (let i = 65; i < 91; i++) {
                chars.push(String.fromCharCode(i));
            }
            for (let i = 0; i < len; i++) {
                resultStr += chars[Math.floor((Math.random() * (chars.length - 1) + 1))];
            }
            return resultStr;
        }
        $('.qrcode_img img').attr('src', 'https://x.dscmall.cn/appqrcode?t=' + randomStr(5))
        $(this).parent().hide();
    })
})