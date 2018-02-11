$(function (){
    let btn = $('.list-tabs li button');
    let tabs = $('.element-item');

    btn.on('click', function (){
        let data = $(this).attr('data-filter');
        btn.removeClass('activ-tab');
        $(this).addClass('activ-tab');
        tabs.addClass('tab-disp-n');
        tabs.attr('data-category=' + "'" + data + "'").removeClass('tab-disp-n');
    })
});