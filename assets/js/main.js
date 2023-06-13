$(document).ready(function(){
    $('.accordion > li > div').click(function(){

    if($(this).next().is(':hidden')){
        $('.accordion li ul').slideUp();
    }

    $(this).next().slideToggle();
    });
    
    // $('.accordion li ul:eq(0)').show();
 });