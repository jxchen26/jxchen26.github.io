$(document).ready(function () {

/*For Scrolling*/    
    $('.js--go-to-status').click(function () {
        $('html, body').animate({scrollTop:$('.status_section').offset().top},1000);    
    });
    
    $('.go_to_projects').click(function () {
        $('html, body').animate({scrollTop:$('.project_section').offset().top},1000);    
    });
    
    $('.js--go-to-about').click(function () {
        $('html, body').animate({scrollTop:$('.about_section').offset().top},1000);    
    });
    
    
});