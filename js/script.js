$(document).ready(function(){
//прелоадер
    setTimeout(function(){
        $(".preloader").css('display', 'none');
    }, 1000);

// первый слайдер
    $('.js-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
//второй слайдер
    $('.services__js').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });



//третий слайдер+счет слайдов
    var count = $('#count');

    $('.feedback__js').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

        var i = (currentSlide ? currentSlide : 0) + 1;
        count.text(i + '/' + slick.slideCount);
    });
    $('.feedback__js').slick();
//workers
    $('.feedback-container__img').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

//маска для телефона
    if ($("input").is("#tel")) {
        $("#tel").mask("+7 (999) 999-9999")

    }
    $("#tel").click(function () {
        $(this).focus()
    });
//burger
    function mobileMenuWork() {
        var burger = $('.burger');
        var burger_active = $('.burger_active');
        var nav = $('.nav');
        var social = $('.social');
        var logo = $('.logo');
        var mainContent = $('.main-content');
        var navWrap = $('.nav-wrap');
        var arrows = $('.slick-arrow');

        burger.click(function () {
            burger.toggleClass('burger_active');
            nav.toggleClass('nav_active');
            navWrap.toggleClass('nav-wrap_active');
            social.css('display', 'flex');
            social.css('padding-right', '0' + 'px');
            logo.css('position', 'fixed');
            arrows.css('display', 'none');
            if(!nav.hasClass('nav_active')) {
                social.css('padding-right', '40' + 'px');
                logo.css('position', 'relative');
                navWrap.css('position', 'absolute');
                arrows.css('display', 'none');
                if ($(window).width() <= 768) {
                    social.css('display', 'none');
                } if ($(window).width() > 768) {
                    social.css('display', 'flex');
                }
            }
        });
        burger_active.click(function() {
            nav.removeClass('nav_active');

        });
    }
    mobileMenuWork();
});
