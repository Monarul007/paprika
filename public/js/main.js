

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });
    
    /*--------------------------
    Testimonial Slider
    ----------------------------*/
    var testimonialSlider = $(".testimonial__slider");
    testimonialSlider.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-arrow-left'><span/>", "<span class='fa fa-arrow-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false,
        startPosition: 'URLHash',
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });

    /*--------------------------
    Categories Slider
    ----------------------------*/
    var CategoriesSlider = $(".categories__slider");
    CategoriesSlider.owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-arrow-left'><span/>", "<span class='fa fa-arrow-right'><span/>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsiveClass: true,
          responsive: {
            0: {
              items: 4,
              nav: false,
              margin: 10,
              loop: false
            },
            600: {
              items: 4,
              nav: false
            },
            1000: {
              items: 6,
              nav: true,
              loop: false,
              margin: 10
            }
          }
    });

    /*--------------------------
    Categories Slider
    ----------------------------*/
    var CategoriesSlider = $(".sss");
    CategoriesSlider.owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        autoplayHoverPause:false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsiveClass: true,
          responsive: {
            0: {
              items: 2,
            },
            600: {
              items: 4,
            },
            1000: {
              items: 5,
            }
          }
    });


    /*-----------------------------
        Listing Details Slider
    -------------------------------*/
    $(".listing__details__gallery__slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    /*-----------------------
		Price Range Radius
	------------------------ */
    var rangeSlider = $(".price-range-radius"),
        radius = $("#radius");
    rangeSlider.slider({
        range: 'min',
        min: 0,
        max: 2,
        value: 1,
        slide: function (event, ui) {
            radius.val(ui.value + 'km');
        }
    });
    radius.val(rangeSlider.slider("value") + 'km');

    /*-----------------------
		Price Range Slider
	------------------------ */
    var rangeSliderPrice = $(".price-range"),
        minamount = $("#minamount");
        rangeSliderPrice.slider({
        range: 'min',
        min: 0,
        max: 80,
        value: 20,
        slide: function (event, ui) {
            minamount.val('$' + ui.value);
        }
    });
    minamount.val('$' + rangeSliderPrice.slider("value"));

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*------------------
		Single Product
	--------------------*/
    $('.listing__details__gallery__slider img').on('click', function () {

        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.listing__details__gallery__item__large').attr('src');
        if (imgurl != bigImg) {
            $('.listing__details__gallery__item__large').attr({
                src: imgurl
            });
        }
    });

    /*-------------------
		Quantity change
	--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#a8a8a8",
        cursorwidth: "8px",
        background: "rgba(168, 168, 168, 0.3)",
        cursorborder: "",
        autohidemode: false,
        horizrailenabled: false
    });

    $(".filter.nice-scroll").niceScroll({
        cursorcolor: "#a8a8a8",
        cursorwidth: "8px",
        background: "rgba(168, 168, 168, 0.3)",
        cursorborder: "",
        autohidemode: true,
        horizrailenabled: false
    });

    /*------------------
		Barfiller
	--------------------*/
    $('#bar1').barfiller({
        barColor: "#f03250",
    });

    $('#bar2').barfiller({
        barColor: "#f03250",
    });

    $('#bar3').barfiller({
        barColor: "#f03250",
    });

    $('#bar4').barfiller({
        barColor: "#f03250",
    });

    $('#bar5').barfiller({
        barColor: "#f03250",
    });

    /*------------------
		Magnific
	--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
      });
    $(document).ready(function(){
        $('ul li a').click(function(){
          $('li a').removeClass("activem");
          $(this).addClass("activem");
    });
    });

    /* ========================================== 
scrollTop() >= 400
Should be equal the the height of the header
========================================== */
$(window).scroll(function(){
    if ($(window).scrollTop() >= 400) {
        $('.single-cat-menu').addClass('sticky');
    }
    else {
        $('.single-cat-menu').removeClass('sticky');
    }
});

})(jQuery);