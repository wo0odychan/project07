$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._move').each(function () {
            if (sct + $(window).innerHeight() - 300 > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        })
    });

    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        parallax: true,
        speed: 1500,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',

    });
    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });
    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });

    $(function () {
        $('.main_content .itm').on('click', function () {
            $(this).addClass('on').siblings().removeClass('on');
        })
    });

    const bn = new Swiper(".pro_slide", {
        direction: "vertical",
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2000,
        },
    })

})