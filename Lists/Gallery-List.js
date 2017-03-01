/**
 * Created by Валера on 02.02.2017.
 */
$(window).on("load", function() {

    /*function dodo(){
     hide_all();
     $('.catalog-podmenu').show();
     $('.header-catalog').show();
     $('.main-screen').css('height','60vh');
     $('.header-catalog').text('Каталог продукции > ' + $(this).siblings('.text-sample-text').text())
     $('.catalog-lists').show();
     $('.cb-slideshow').css('height','60vh');

     }*/
    $('#obj1').click(function(){

        showPizzaList("object1");

    })
    $('#obj2').click(function(){

        showPizzaList("object2");

    })

    $('#obj3').click(function(){

        showPizzaList("object3");

    })
    $('#obj4').click(function(){

        showPizzaList("object4");

    })
    $('#obj5').click(function(){

        showPizzaList("object5");

    })
    $('#obj6').click(function(){

        showPizzaList("object6");

    })
    $('#obj7').click(function(){

        showPizzaList("object7");

    })
    $('#obj8').click(function(){

        showPizzaList("object8");

    })
    $('#obj9').click(function(){

        showPizzaList("object9");

    })
});
//comment
var gitisthebest;
var item_info = [
    {
        id:1,
        icon:'object1/12.jpg',
        type:"object1"
    },
    {
        id:2,
        icon:'object1/17.jpg',
        type:"object1"
    },
    {
        id:3,
        icon:'object1/18.jpg',
        type:"object1"
    },
    {
        id:4,
        icon:'object1/19.jpg',
        type:"object1"

    },
    {
        id:5,
        icon:'object2/1.jpg',
        type:"object2"

    },
    {
        id:6,
        icon:'object2/2.jpg',
        type:"object2"

    },
    {
        id:7,
        icon:'object2/3.jpg',
        type:"object2"
    },
    {
        id:8,
        icon:'object2/4.jpg',
        type:"object2"
    },
    {
        id:9,
        icon:'object2/5.jpg',
        type:"object2"
    },
    {
        id:10,
        icon:'object2/6.jpg',
        type:"object2"
    },
    {
        id:11,
        icon:'object2/7.jpg',
        type:"object2"
    },
    {
        id:12,
        icon:'object2/8.jpg',
        type:"object2"
    },{
        id:13,
        icon:'object3/4.jpg',
        type:"object3"
    },
    {
        id:14,
        icon:'object3/image1.jpg',
        type:"object3"
    },
    {
        id:15,
        icon:'object3/image2.jpg',
        type:"object3"
    },
    {
        id:16,
        icon:'object3/image3.jpg',
        type:"object3"
    },
    {
        id:17,
        icon:'object3/image5.jpg',
        type:"object3"
    },
    {
        id:18,
        icon:'object3/image6.jpg',
        type:"object3"
    },
    {
        id:19,
        icon:'object3/image7.jpg',
        type:"object3"
    },
    {
        id:20,
        icon:'object3/image8.jpg',
        type:"object3"
    },
    {
        id:21,
        icon:'object5/1.jpg',
        type:"object5"
    },{
        id:22,
        icon:'object5/2.jpg',
        type:"object5"
    },{
        id:23,
        icon:'object5/3.jpg',
        type:"object5"
    },
    {
        id:24,
        icon:'object5/4.jpg',
        type:"object5"
    },{
        id:25,
        icon:'object5/5.jpg',
        type:"object5"
    },
    {
        id:26,
        icon:'object5/6.jpg',
        type:"object5"
    },
    {
        id:27,
        icon:'object4/1.jpg',
        type:"object4"
    },
    {
        id:28,
        icon:'object4/2.jpg',
        type:"object4"
    },{
        id:29,
        icon:'object4/3.jpg',
        type:"object4"
    }
    ,{
        id:30,
        icon:'object4/4.jpg',
        type:"object4"
    }
    ,{
        id:31,
        icon:'object4/5.jpg',
        type:"object4"
    }
    ,{
        id:32,
        icon:'object4/6.jpg',
        type:"object4"
    }
    ,{
        id:33,
        icon:'object4/7.jpg',
        type:"object4"
    }
    ,{
        id:34,
        icon:'object4/8.jpg',
        type:"object4"
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

]


function showPizzaList(list_name) {
    var k =3;
    var list = $("#myCarousel").find('.carousel-inner');
    list.html("");
    console.log(list_name)
    item_info.forEach(function(item){


        if(item.type===list_name) {

            showOneItem(item);
        }
    });



    function showOneItem(item) {
        var html_code;

       console.log(12312);
        if(k==3) {
            html_code = '<div class="item active"> <img src='+item.icon+'></div>';
            console.log("dada");
        }
        else html_code = ' <div class="item"><img src='+item.icon+'></div>';
        var node = $(html_code);
        k++;

        list.append(node);
    }
    /*$('.catalog-lists').css('height',k/3*33+'vh');
     $('.button-one-catalog-item').click(function(){
     var upper = $(window).height()*0.45;



     $("html, body").delay(0).animate({
     scrollTop: $(window).height()-upper

     }, 1000);


     var descr= $('.catalog-podmenu-description');
     descr.html('')
     var podmenu= $('.catalog-podmenu');

     var needed = this.id;

     item_info.forEach(function(item){


     if(item.id==needed) {
     descr.html(item.description);
     podmenu.css('background-image','url('+item.icon+')');
     }
     });
     })*/


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