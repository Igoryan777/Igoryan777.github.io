$(function () {
    $('.flex-slider').flexslider({
        animation: 'slide',
        slideshow: true,
        controlNav: false,
        directionNav: false
    });

    $(window).scroll(() => {
        if (window.pageYOffset >= 1) {
            $('header').addClass('header-active')
        } else {
            $('header').removeClass('header-active')
        }

    });

    let link = $(' .list-nav li a');
    let hHeader = $('header').outerHeight(true);
    $(window).resize(function () {
        hHeader = $('header').outerHeight(true);
    });
    link.on('click', function (event) {
        event.preventDefault();
        let target = $(this).attr('href');
        let top = $(target).offset().top - hHeader;
        $('html,body').animate({scrollTop: top}, 800);
    });
});

document.body.onload = function () {
    setTimeout(function () {
        let preloader = document.getElementById('page-preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1000);
};