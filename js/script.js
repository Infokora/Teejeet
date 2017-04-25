$(function () {
    var $popup = $('.bg-popup');
    $('.dagger').on('click', function () {
        $popup.fadeOut(300);
    });
    $('#order-btn').on('click', function (e) {
        e.preventDefault();
        $popup.fadeIn(300);
    });

    var $menu = $('li a');
    $menu.on('click', function () {
        $(this).parents('ul, menu').find('a').removeClass('active');
        $(this).addClass('active');
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('nav').addClass('menu-fix');
        } else {
            $('nav').removeClass('menu-fix');
        }
    });

    $('.head-search .search-open').on('click', function () {
        $('.head-search').toggleClass('active');
    });

    var $paginators = $('.paginators .paginator-list span'),
        $slides = $('.headSlider li');

    function goSlide() {
        let $next = $('.headSlider .active').next(),
            $pagAct = $('.paginator-list .active');
        $slides.removeClass('active');
        $paginators.removeClass('active');
        if ($next.length) {
            $next.addClass('active');
            $pagAct.next().addClass('active');
        } else {
            $slides.eq(0).addClass('active');
            $('.paginator-list span').eq(0).addClass('active');
        }

    }

    var autoSlideGo = setInterval(goSlide, 5000);
    $('.all-wrap').hover(function () {
        clearInterval(autoSlideGo);
    }, function () {
        autoSlideGo = setInterval(goSlide, 5000);
    });



    $paginators.on('click', function () {
        let id = $(this).index();

        $paginators.removeClass('active');
        $(this).addClass('active');
        $('.headSlider li').removeClass('active');
        $('.headSlider li').eq(id).addClass('active');
    });

    $('.drop-menu').hide();
    $('.equipment-menu .fr-btn').hover(function () {
        $(this).children('.drop-menu').stop(false, true).slideDown(300);
    }, function () {
        $(this).children('.drop-menu').stop(false, true).slideUp(300);
    });


    if ($(window).width() <= 520) {
        $('.menu').addClass('menu-mini');
    } else {
        $('.menu').removeClass('menu-mini');
    }

    $('.burger').on('click', function () {
        $('.menu-mini').slideToggle(400);
        $('.box-navigation').toggleClass('close-burger');
    });

    $('.menu-mini li a').on('click', function () {
        $('.menu-mini').slideUp(400);
    })




})