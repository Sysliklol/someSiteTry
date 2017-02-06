/**
 * Created by Валера on 01.02.2017.
 */
var n =1;
$(window).on("load", function() {
    setTimeout( function() {$('.loading').hide()},2000);
});



$(function(){
    var upper = $(window).height()*0.15;

    $('.mouse-icon').click(function(){
        console.log(upper);
        $("html, body").delay(0).animate({
            scrollTop: $(window).height()-upper

        }, 1000);

    })



    $('#gallery').click(function(){
        $('.loading').show();
        $('.loading').hide();
        window.location.href='Gallery.html';

    })
    $('#catalog').click(function(){
        $('.loading').show();

        window.location.href='Catalog.html';

    })
    $('#contacts').click(function(){
        $('.loading').show();

        window.location.href='Contacts.html';

    })
    $('#effects').click(function(){
        $('.loading').show();
        window.location.href='Effects.html';


    })

    $('#main').click(function(){
        $('.loading').show();
        window.location.href='index.html';


    })
    $('#poslugi').click(function(){
        $('.loading').show();
        window.location.href='Poslugi.html';


    })

    function hide_all(){
        $('body').scrollTop(0);
        animate();
        $('.cb-slideshow').css('height','100vh');
        $('.header-catalog').hide();
        $('.catalog-podmenu').hide();
        $('.screen-poslugi').hide();
        $('.loading').show();
        $('.mouse-icon').hide();
        $('.text-on-main-wrap').hide();
        $('.katalog').hide();
        $('.main-screen').css('height','100vh');
        $('.our-poslugi').hide();
        $('.screen-2').hide();
        $('.screen-3').hide();
        $('.screen-4').hide();
        $('.contact-us').hide();
        $('.screen-poslugi').hide();
        $('.effects-main').hide();
        $('.effects-samples').hide();


    }
    function animate(){
        $('.loading').show();
        function fade(){
            $('.loading').hide();
        }
        setTimeout(fade,5000);
        fade();

    }

});


