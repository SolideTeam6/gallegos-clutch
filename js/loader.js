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
            scrollTop: $("#taller").offset().top -70
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
$(function () {
    $("#scroller").click(function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $("#cinturon").offset().top - 70}, 2000);
    });
});
$(function () {
    $("#btn-car").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#taller").offset().top - 70
        }, 2000);
    });
});
$(function () {
    $("#btn-car2").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#taller").offset().top -70
        }, 2000);
    });
});
$(function () {
    $("#btn-car3").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#taller").offset().top -70
        }, 2000);
    });
});
$(function () {
    $("#ver-mapa").click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $("#map").offset().top -70
        }, 2000);
    });
});

$(function($) { 
        $('#contactanos').waypoint(function() {
            $(this).toggleClass( 'bounceInLeft animated' );
            $("#contactanos").css("visibility", "visible");
        },
        {
            offset: '70%',
            triggerOnce: true

        });
        $('#map').waypoint(function() {
            $(this).toggleClass( 'fadeInLeft animated' );
            $("#map").css("visibility", "visible");
        },
        {
            offset: '70%',
            triggerOnce: true

        });

        $('#small-cont').waypoint(function() {
            $(this).toggleClass( 'fadeInRight animated' );
            $("#small-cont").css("visibility", "visible");
        },
        {
            offset: '70%',
            triggerOnce: true

        });
        $('.circulo-rs').waypoint(function() {
            $(this).toggleClass( 'rubberBand animated' );
        },
        {
            offset: '70%',
            triggerOnce: true

        });
        $('#fade-ser').waypoint(function() {
            $(this).toggleClass( 'fadeIn animated' );
            $("#fade-ser").css("visibility", "visible");
        },
        {
            offset: '70%',
            triggerOnce: true

        });
        $('#piezas').waypoint(function() {
            $(this).toggleClass( 'fadeInRight animated' );
            $("#piezas").css("visibility", "visible");
        },
        {
            offset: '70%',
            triggerOnce: true

        });
        $('#horario').waypoint(function() {
            $(this).toggleClass( 'fadeInLeft animated' );
            $("#horario").css("visibility", "visible");
        },
        {
            offset: '70%',
            triggerOnce: true

        });
        $('#taller2').waypoint(function() {
            $(this).toggleClass( 'fadeInLeft animated' );
            $("#taller2").css("visibility", "visible");
        },
        {
            offset: '70%',
            triggerOnce: true

        });
        $('#imagenes').waypoint(function() {
            $(this).toggleClass( 'fadeIn animated' );
            $("#imagenes").css("visibility", "visible");
        },
        {
            offset: '70%',
            triggerOnce: true

        });
        $('#acerca-de').waypoint(function() {
            $(this).toggleClass( 'fadeIn animated' );
            $("#acerca-de").css("visibility", "visible");
        },
        {
            offset: '70%',
            triggerOnce: true

        });
        $('#mision').waypoint(function() {
            $(this).toggleClass( 'fadeInLeft animated' );
            $("#mision").css("visibility", "visible");
        },
        {
            offset: '70%',
            triggerOnce: true

        });
        $('#vision').waypoint(function() {
            $(this).toggleClass( 'fadeInRight animated' );
            $("#vision").css("visibility", "visible");
        },
        {
            offset: '70%',
            triggerOnce: true

        });
        $('#vision').waypoint(function() {
            $('#valores').toggleClass( 'fadeIn animated' );
            $("#valores").css("visibility", "visible");
        },
        {
            offset: '70%',
            triggerOnce: true

        });
        $('.img-fade-gal').waypoint(function() {
            $(this).toggleClass( 'flipInY animated' );
            $(".img-fade-gal").css("visibility", "visible");
        },
        {
            offset: '70%',
            triggerOnce: true

        });
        $('#log-foo').waypoint(function() {
            $('#bottom-love').toggleClass( 'fadeInUp animated' );
            $("#bottom-love").css("visibility", "visible");
        },
        {
            offset: '70%',
            triggerOnce: true

        });
        $('#log-foo').waypoint(function() {
            $('#bottom-solide').toggleClass( 'fadeInUp animated' );
            $("#bottom-solide").css("visibility", "visible");
        },
        {
            offset: '70%',
            triggerOnce: true

        });
        
       
        
        
    });
document.onkeypress = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
           //alert('No F-12');
            return false;
        }
    }

$(function($) {  
    $('.circulo-rs').waypoint(function() {
            $('#bottom-love').toggleClass( 'fadeInUp animated' );
            $("#bottom-love").css("visibility", "visible");
        },
        {
            offset: '70%',
            triggerOnce: true

        });
        $('.circulo-rs').waypoint(function() {
            $('#bottom-solide').toggleClass( 'fadeInUp animated' );
            $("#bottom-solide").css("visibility", "visible");
        },
        {
            offset: '70%',
            triggerOnce: true

        });
});  