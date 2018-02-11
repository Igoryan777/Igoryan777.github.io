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
});