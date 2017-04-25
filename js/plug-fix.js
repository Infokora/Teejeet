$(function () {
    var eqInfo = $('.block-info').offset().top;
    $(window).scroll(function () {
        if ($(window).width() >= 900) {
            if (($(this).scrollTop() + $('.menu').height()) >= eqInfo) {
                $('.block-info').css('width', $('.block-info').width()).addClass('fixed');
            } else if (
                        ($('.block-info').offset().top + $('.block-info').height()) > $('.ft-box').offset().top ||
                        ($(this).scrollTop() + $('.menu').height()) <= eqInfo
            ) {
                $('.block-info').removeClass('fixed');
            }
        }

    });
})