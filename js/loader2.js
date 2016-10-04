

$(document).ready(function() {
  setTimeout(function() {
        $(".fl").show();
    },1000);
});



$(function () {
    $("#btn-servicios").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#taller").offset().top
        }, 2000);
    }); 
})
$(function () {
    $("#btn-contacto").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#contacto").offset().top
        }, 2000);
    });
})