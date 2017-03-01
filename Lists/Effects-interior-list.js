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
   /* $('#sample-1').click(function(){
        showPizzaList("sample-1");
    })
    $('#sample-2').click(function(){

        showPizzaList("sample-2");
    })
    $('#sample-3').click(function(){

        showPizzaList("sample-3");

    })
    $('#sample-4').click(function(){

        showPizzaList("sample-4");

    })
    $('#sample-5').click(function(){

        showPizzaList("sample-5");

    })
    $('#sample-6').click(function(){

        showPizzaList("sample-6");

    })
    $('#sample-7').click(function(){

        showPizzaList("sample-7");

    })
    $('#sample-8').click(function(){

        showPizzaList("sample-8");

    })
    $('#sample-9').click(function(){

        showPizzaList("sample-9");

    })*/
});
var photo_info = [
    {
        id:1,
        icon:'silk-int/1.jpeg',
        type:"sample-1"
    },
    {
        id:2,
        icon:'silk-int/2.jpeg',
        type:"sample-1"
    },
    {
        id:3,
        icon:'silk-int/3.jpeg',
        type:"sample-1"
    },
    {
        id:4,
        icon:'silk-int/4.jpg',
        type:"sample-1"
    },
    {
        id:5,
        icon:'silk-int/5.jpeg',
        type:"sample-1"

    },
    {
        id:6,
        icon:'silk-int/6.jpeg',
        type:"sample-1"

    },
    {
        id:7,
        icon:'silk-int/7.jpeg',
        type:"sample-1"
    },


]


function showPhotoList(list_name) {
    var k =3;
    var list = $("#myCarousel").find('.carousel-inner');
    list.html("");
    console.log(list_name)
    photo_info.forEach(function(item){


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