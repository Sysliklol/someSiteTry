var n =1;
$(window).on("load", function() {
    setTimeout( function() {$('.loading').hide()},2000);
});
var image_url = "./images_main_page/texture-dark-grey.png"
function hideBlock() {
    var block = $('.menu-big');
    var menu = $('.menu-small');
    if($('body').scrollTop() >= 200) {
        block.css('position','fixed');
        block.css('top','0');
        block.css('background','url('+image_url+')');
        block.css('height',$(window).height()*0.15);
        block.css('opacity','0.96');
        $('.header-catalog').css('top','50%')
        $('.main-screen').css('padding-top','16%')
        $('.our-poslugi').css('margin-top','5%');

    }
else {
        $('.main-screen').css('padding-top','0')
        block.css('position','relative');
        block.css('top','5.8%');
        block.css('height','23%');
        block.css('background','');
        $('.header-catalog').css('top','25%')
        $('.our-poslugi').css('margin-top','0');
    }

}

$(window).scroll(hideBlock);
$(function(){
    var upper = $(window).height()*0.15;

    $('.mouse-icon').click(function(){
        console.log(upper);
        $("html, body").delay(0).animate({
            scrollTop: $(window).height()-upper

        }, 1000);

    })


    $('.button-sample').click(function(){
        $('.effects-samples').toggleClass('moveLeft');
        $('.podmenu-header').text('ОбРАЗЦЫ > ' + $(this).siblings('.text-sample-text').text())
        $('.partners-109-hrn').show();
    })
    $('.podmenu-header').click(function(){
        $('.effects-samples').toggleClass('moveLeft');
        $('.partners-109-hrn').hide();
    })
    $('.catalog-button').click(function(){
        hide_all();
        $('.catalog-podmenu').show();
        $('.header-catalog').show();
        $('.main-screen').css('height','60vh');
        $('.header-catalog').text('Каталог продукции > ' + $(this).siblings('.text-sample-text').text())
        $('.cb-slideshow').css('height','60vh');
    })
    $('#gallery').click(function(){
        $('.loading').show();
        $('.loading').hide();
        window.location.href='gallery.html';

    })
    $('#catalog').click(function(){
        $('.loading').show();

        window.location.href='catalog.html';

    })
    $('#contacts').click(function(){
        $('.loading').show();

        window.location.href='contacts.html';

    })
    $('#effects').click(function(){
        $('.loading').show();
        window.location.href='effects.html';


    })

    $('#main').click(function(){
        $('.loading').show();
        window.location.href='index.html';


    })
    $('#poslugi').click(function(){
        $('.loading').show();
        window.location.href='poslugi.html';


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
 $('.one-sample').mouseover(function(){
     $(this).find('.text-sample').show();
 })
    $('.one-sample').mouseleave(function(){
        $(this).find('.text-sample').hide();
    })
});


