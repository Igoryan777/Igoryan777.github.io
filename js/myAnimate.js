$(function (){
    "use strict";
    $('.flex-slider').flexslider({
        animation: 'slide',
        slideshow: true,
        controlNav: false,
        directionNav: false
    });

    $(window).scroll(()=>{
        if (window.pageYOffset >= 1) {
            $('header').addClass('header-active')
        } else {
            $('header').removeClass('header-active')
        }

    });

    let link = $(' .list-nav li a');
    link.on('click', function (event){
        event.preventDefault();
        let target = $(this).attr('href');
        $(window).resize(function (){
            let hHeader = $('header').outerHeight(true);
            let top = $(target).offset().top - hHeader;
            $('html,body').animate({scrollTop: top}, 800);
        });
    });


});


