var n =1;
$(window).on("load", function() {
    setTimeout( $('.loading').hide(),2000);
});

function hideBlock() {
    var block = $('.menu-big');
    var menu = $('.menu-small');
    if($('body').scrollTop() >= 200) {
       // block.css('visibility','hidden');
        block.css('position','fixed');
        block.css('top','0');
        block.css('background','#696969');
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
            scrollTop: $('.screen-2').offset().top-upper
        }, 1000);

    })


    $('.button-sample').click(function(){
        $('.effects-samples').toggleClass('moveLeft');
        $('.podmenu-header').text('ОбРАЗЦЫ > ' + $(this).siblings('.text-sample-text').text())
        $('.partners-109-hrn').show();
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
     $('#main').removeClass("active");
     $('#contacts').removeClass("active");
     $('#effects').removeClass("active");
     $('#poslugi').removeClass("active");
     $('#catalog').removeClass("active");
     $('#gallery').removeClass("active");
     $('.menu-big').find('.border-active').remove();
     $('.menu-big').find('.border-active-right').remove();

 }
 function animate(){
       $('.loading').show();
     function fade(){
         $('.loading').hide();
     }
     setTimeout(fade,2000);
     fade();

 }
 $('.one-sample').mouseover(function(){
     $(this).find('.text-sample').show();
 })
    $('.one-sample').mouseleave(function(){
        $(this).find('.text-sample').hide();
    })
});


