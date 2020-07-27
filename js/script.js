$(document).ready(function () {
    // dialog 
    $('.dialog-close').click(function () {
        $('.dialog-body').fadeOut('200', function () {
            $('.dialog').fadeOut('200');
        });
    });
    // dialog 
    $('.dialog-open').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('.dialog').fadeIn('200', function () {
            $(target).fadeIn('200');
        });
    });

        $('#nav-toggle').click(function (e) {
            e.preventDefault();
            //toggle verifica se a classe existe, se existe ela retira se nao adc.
            $(this).toggleClass('active');
            $('.header-collapse').toggleClass('active');
        })

    // scroll
    var nav = $('.header-nav'),
        navHeight = nav.outerHeight(),
        sections = $('.section');

    $(window).on('scroll', function () {
        var sTop = $(this).scrollTop();

        if (sTop > navHeight) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }

        // marcação do scroll
        if (sTop == 0) {
            nav.find('a').removeClass('active');
            nav.find('a[href="#home"]').addClass('active');
        } else {
            sections.each(function () {
                var top = $(this).offset().top - navHeight;
                if (sTop >= top) {
                    nav.find('a').removeClass('active');
                    nav.find('a[href="#' + $(this).attr('id') + '"]').toggleClass('active');
                }
            });
        }
    });

    // navegação
    nav.find('a').on('click', function (e) {
        e.preventDefault();
        $('.header-collapse').removeClass('active');
        $('#nav-toggle').removeClass('active');
        var target = $(this).attr('href');
        if (target == "#home") {
            $('html, body').animate({
                scrollTop: 0
            }, 700);
        } else {
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 700);
        }
    });
    //back-top
    $('.back-top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });

    //carrousel principal
    $('#carousel-principal').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 10,
        nav: true,
        navSpeed: 1000,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: true,
        dotsSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10
    });
    //carrousel testemunhos
    $('#carousel-testemunhos').owlCarousel({
        items: 2,
        loop: true,
        margin: 40,
        nav: false,
        navSpeed: 1000,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: true,
        dotsSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10,
        responsive: {
            0: {
                items: 1
            },
            960: {
                items: 2
            },
            1280: {
                nav: true
            }
        }
    });

    //carousel-portifolio
    $('.carousel-portifolio').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        margin: 10,
        nav: true,
        navSpeed: 1000,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: false,
        dotsSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        responsiveRefreshRate: 10
    });

    // jobs portifolio
    $('.portifolio-nav li a').click(function (e) {
        e.preventDefault();
        $('.portifolio-nav li a').removeClass('active');
        $(this).addClass('active');

        $('.portifolio').removeClass('visible');

        if (this.id == "all") {
            $('.portifolio').addClass('visible');
        } else {
            $('.portifolio.' + this.id).addClass('visible');
        }
    });
})