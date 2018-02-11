$(function (){
    "use strict";

    $('.menu-trigger').click(function(e) {
        e.preventDefault();
        $('.list-nav').slideToggle(500);
    });
    $('.menu-close').click(function (e){
        e.preventDefault();
        $('.list-nav').slideToggle(500);
    });
    $(window).resize(function() {
        if ( $(window).width() < 734 ) {
            $('.list-nav').removeAttr('style');
            $('.list-nav a').attr('href="#home"').hide();
        }
    });
});