/**
 * Created by Валера on 02.02.2017.
 */
$(window).on("load", function() {

    function dodo(){
        hide_all();
        $('.catalog-podmenu').show();
        $('.header-catalog').show();
        $('.main-screen').css('height','60vh');
        $('.header-catalog').text('Каталог продукции > ' + $(this).siblings('.text-sample-text').text())
        $('.catalog-lists').show();
        $('.cb-slideshow').css('height','60vh');

    }
    $('#tools').click(function(){
        dodo();
        showPizzaList("tools");
    })
    $('#deco_line').click(function(){

        dodo();
        showPizzaList("deco_line");
    })
    $('#front').click(function(){
        dodo();
        showPizzaList("front");

    })
    $('#grunt').click(function(){
        dodo();
        showPizzaList("grunt");

    })
    $('#fone_paint').click(function(){
        dodo();
        showPizzaList("fone_paint");

    })
    $('#decor').click(function(){
        dodo();
        showPizzaList("decor");

    })


});


$(function(){

})
var item_info = [
    {
        id:1,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line",
        description:"Some-random"
    },
    {
        id:2,
        icon:'images_main_page/9344-copy.jpg',
        text:"ALOALO",
        type:"deco_line",
        description:"Lorem-ipsum"
    },
    {
        id:3,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line",
        description:"Lorem-ipsum"
    },
    {
        id:4,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"

    },
    {
        id:5,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"

    },
    {
        id:6,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"

    },
    {
        id:7,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },
    {
        id:8,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },
    {
        id:9,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },
    {
        id:10,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },
    {
        id:11,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },
    {
        id:12,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },{
        id:13,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },
    {
        id:14,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },
    {
        id:15,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },
    {
        id:16,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },
    {
        id:17,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },
    {
        id:18,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },
    {
        id:19,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },
    {
        id:20,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },
    {
        id:21,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },{
        id:22,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },{
        id:23,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },
    {
        id:24,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },{
        id:25,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },
    {
        id:26,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },
    {
        id:27,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },
    {
        id:28,
        icon:'images_main_page/9.jpg',
        text:"ANTICO FERERO",
        type:"deco_line"
    },{
        id:29,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"deco_line"
    }
    ,{
        id:30,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"grunt"
    }
    ,{
        id:31,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"grunt"
    }
    ,{
        id:32,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"grunt"
    }
    ,{
        id:33,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"grunt"
    }
    ,{
        id:34,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"grunt"
    }
    ,{
        id:35,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"grunt"
    }
    ,{
        id:36,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"grunt"
    }
    ,{
        id:37,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"grunt"
    }
    ,{
        id:38,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"grunt"
    }
    ,{
        id:39,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"grunt"
    }
    ,{
        id:40,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"fone_paint"
    }
    ,{
        id:41,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"fone_paint"
    }
    ,{
        id:42,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"fone_paint"
    }
    ,{
        id:43,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"fone_paint"
    }
    ,{
        id:44,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"fone_paint"
    }
    ,{
        id:45,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"front"
    }
    ,{
        id:46,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"front"
    }
    ,{
        id:47,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"front"
    }
    ,{
        id:48,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"front"
    }
    ,{
        id:49,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"front"
    }
    ,{
        id:50,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"front"
    }
    ,{
        id:51,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"front"
    }
    ,{
        id:52,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"front"
    }
    ,{
        id:53,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"front"
    }
    ,{
        id:54,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"front"
    }
    ,{
        id:55,
        icon:'images_main_page/9.jpg',
        text:"NON ANTICO FERERO",
        type:"front"
    }


];


function showPizzaList(list_name) {
    var k =3;
    var list = $(".katalog-2").find('.wrapper')
    list.html("");

    item_info.forEach(function(item){

        if(item.type===list_name) {

            showOneItem(item);
        }
    });



    function showOneItem(item) {
        var list = $(".katalog-2").find('.wrapper')
        var b =  item.text;
        var html_code = ' <div class="catalog-sample"><img class="a-sample" src="'+item.icon+'"> <div class="text-sample"  ><div class="text-sample-text">'+b+'</div><div class="button-sample button-catalog button--aylen button-one-catalog-item" id="'+item.id+'">Подробнее</div></div></div>';
        var $node = $(html_code);
        k++;

        list.append($node);
    }
   $('.catalog-lists').css('height',k/3*33+'vh');
    $('.button-one-catalog-item').click(function(){
        var upper = $(window).height()*0.45;



            $("html, body").delay(0).animate({
                scrollTop: $(window).height()-upper

            }, 1000);


        var descr= $('.catalog-podmenu-description');
        descr.html('')

        var needed = this.id;

        item_info.forEach(function(item){


            if(item.id==needed) {
                descr.html(item.description);

            }
        });
    })


}


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