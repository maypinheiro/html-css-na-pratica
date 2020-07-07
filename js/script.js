$(document).ready(function () {
    $('#nav-toggle').click(function (e) {
        e.preventDefault();
        //toggle verifica se a classe existe, se existe ela retira se nao adc.
        $(this).toggleClass('active');
        $('.header-collapse').toggleClass('active');
    })

    //carrousel principal
    $('.owl-carousel').owlCarousel({
        items:1,
        lazyLoad:true,
        loop:true,
        margin:10
    });
})