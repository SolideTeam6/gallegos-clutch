jQuery(document).ready(function($) {  

// site preloader -- also uncomment the div in the header and the css style for #preloader
$(window).load(function(){
  setTimeout(function(){ $('#preloader').fadeOut() }, 2000);
});

});

$(function () {
    $("#btn-servicios").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#taller").offset().top
        }, 2000);
    });
});
$(function () {
    $("#btn-contacto").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#contacto").offset().top
        }, 2000);
    });
});

document.onkeypress = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
           //alert('No F-12');
            return false;
        }
    }