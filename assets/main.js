var n =1;
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

    }
else {
        $('.main-screen').css('padding-top','0')
        block.css('position','relative');
        block.css('top','5.8%');
        block.css('height','23%');
        block.css('background','');
        $('.header-catalog').css('top','25%')

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
    $('.partners-photo-'+n).click(function(){
        $('.partners-text-'+n).hide();
        $(this).removeClass('partners-photo-'+n);
        n++;
        if(n>6) n=1;
        $('.partners-text-'+n).show();
        console.log(2);
        $(this).addClass('partners-photo-'+n);
    })
    $('.next-screen-3').click(function(){

        $('.partners-photo-'+n).removeClass('col-md-9')
        $('.partners-photo-'+n).removeClass('col-xs-6')
        $('.partners-photo-'+n).removeClass('col-sm-8')
        $('.partners-photo-'+n).addClass('col-md-4')
        $('.partners-photo-'+n).addClass('col-xs-3')
        $('.partners-photo-'+n).addClass('col-sm-3')
        $('.partners-photo-'+n).css('background-size','200% 100%')
        $('.partners-text-wrap-'+n).removeClass('col-md-3')
        $('.partners-text-wrap-'+n).removeClass('col-xs-6')
        $('.partners-text-wrap-'+n).removeClass('col-sm-4')
        $('.partners-text-wrap-'+n).addClass('col-sm-9')
        $('.partners-text-wrap-'+n).addClass('col-xs-9')
        $('.partners-text-wrap-'+n).addClass('col-md-8')
        $('.partners-text-wrap-'+n).html('<h1> Oikos </h1>' + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod');
    })

    $('#contacts').click(function(){
        hide_all();
        $('.screen-4').show();
        $('#contacts').addClass("active");
        $('.badge').hide();
        $('.contact-us').show();
        $('#small-contacts').addClass('active');
        $('#contacts').append("<div class='border-active-right'>");
    });
    $('#main').click(function(){
        hide_all();
        $('.mouse-icon').show();
        $('#main').addClass("active");
        $('.screen-2').show();
        $('.screen-3').show();
        $('.screen-4').show();
        $('.badge').show();
        $('.text-on-main-wrap').show();        $('#main').append("<div class='border-active'>");
    });
    $('#poslugi').click(function(){
        hide_all();
        $('.screen-poslugi').show();
        $('.our-poslugi').show();
        $('#poslugi').addClass("active");
        $('#poslugi').append("<div class='border-active-right'>");
    })
    $('#effects').click(function(){
        hide_all();
        $('.text-on-main-wrap').show();
        $('.effects-main').show();
        $('.effects-samples').show();
        $('#effects').addClass("active");
        $('#effects').append("<div class='border-active'>");
    })
    $('#catalog').click(function(){
        hide_all();
        $('.katalog').show();
        $('.main-screen').css('height','200vh');
        $('.cb-slideshow').css('height','100%');
        $('#catalog').addClass("active");
        $('#catalog').append("<div class='border-active'>");
    })
    $('.catalog-button').click(function(){
        hide_all();
        $('.catalog-podmenu').show();
        $('.header-catalog').show();
        $('.main-screen').css('height','60vh');
        $('.header-catalog').text('Каталог продукции > ' + $(this).siblings('.text-sample-text').text())
        $('.cb-slideshow').css('height','60vh');
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
     setTimeout(fade,1700);
     fade();

 }
 $('.one-sample').mouseover(function(){
     $(this).find('.text-sample').show();
 })
    $('.one-sample').mouseleave(function(){
        $(this).find('.text-sample').hide();
    })
});

