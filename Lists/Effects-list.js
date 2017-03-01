/**
 * Created by Валера on 02.02.2017.
 */
$(window).on("load", function() {


    $('#sample-1').click(function(){

        showPhotoList("sample-1");

        showPizzaList("sample-1");
        $("html, body").delay(0).animate({
            scrollTop: $(window).height()+500+'px'

        }, 1000);

    })
    $('#sample-2').click(function(){
        showPhotoList("sample-2");
        showPizzaList("sample-2");
        $("html, body").delay(0).animate({
            scrollTop: $(window).height()+500+'px'

        }, 1000);

    })
    $('#sample-3').click(function(){
        showPhotoList("sample-3");
        showPizzaList("sample-3");
        $("html, body").delay(0).animate({
            scrollTop: $(window).height()+500+'px'

        }, 1000);


    })
    $('#sample-4').click(function(){
        showPhotoList("sample-4");
        showPizzaList("sample-4");
        $("html, body").delay(0).animate({
            scrollTop: $(window).height()+500+'px'

        }, 1000);


    })
    $('#sample-5').click(function(){
        showPhotoList("sample-5");
        showPizzaList("sample-5");
        $("html, body").delay(0).animate({
            scrollTop: $(window).height()+500+'px'

        }, 1000);


    })
    $('#sample-6').click(function(){
        showPhotoList("sample-6");
        showPizzaList("sample-6");
        $("html, body").delay(0).animate({
            scrollTop: $(window).height()+500+'px'

        }, 1000);


    })
    $('#sample-7').click(function(){
        showPhotoList("sample-7");
        showPizzaList("sample-7");
        $("html, body").delay(0).animate({
            scrollTop: $(window).height()+500+'px'

        }, 1000);


    })
    $('#sample-8').click(function(){
        showPhotoList("sample-8");
        showPizzaList("sample-8");
        $("html, body").delay(0).animate({
            scrollTop: $(window).height()+500+'px'

        }, 1000);


    })
    $('#sample-9').click(function(){
        showPhotoList("sample-9");

        showPizzaList("sample-9");
        $("html, body").delay(0).animate({
            scrollTop: $(window).height()+500+'px'

        }, 1000);


    })
});var photo_info = [
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
    {
        id:8,
        icon:'gold-int/1.jpeg',
        type:"sample-2"
    },
    {
        id:9,
        icon:'gold-int/2.jpeg',
        type:"sample-2"
    },
    {
        id:10,
        icon:'gold-int/3.jpeg',
        type:"sample-2"
    },
    {
        id:11,
        icon:'gold-int/4.jpeg',
        type:"sample-2"
    },
    {
        id:12,
        icon:'gold-int/5.jpeg',
        type:"sample-2"
    },
    {
        id:13,
        icon:'metal-int/1.jpeg',
        type:"sample-3"
    },
    {
        id:14,
        icon:'metal-int/2.jpeg',
        type:"sample-3"
    },
    {
        id:15,
        icon:'metal-int/3.jpeg',
        type:"sample-3"
    },
    {
        id:17,
        icon:'metal-int/4.jpeg',
        type:"sample-3"
    },
    {
        id:18,
        icon:'metal-int/5.jpeg',
        type:"sample-3"
    },
    {
        id:19,
        icon:'metal-int/6.jpeg',
        type:"sample-3"
    },
    {
        id:20,
        icon:'metal-int/7.jpeg',
        type:"sample-3"
    },
    {
        id:21,
        icon:'metal-int/8.jpeg',
        type:"sample-3"
    },
    {
        id:22,
        icon:'metal-int/9.jpeg',
        type:"sample-3"
    },
    {
        id:23,
        icon:'beton-int/1.jpeg',
        type:"sample-5"
    },
    {
        id:24,
        icon:'beton-int/1.jpg',
        type:"sample-5"
    },
    {
        id:25,
        icon:'beton-int/1.png',
        type:"sample-5"
    },
    {
        id:26,
        icon:'beton-int/2.jpeg',
        type:"sample-5"
    },
    {
        id:27,
        icon:'beton-int/3.jpeg',
        type:"sample-5"
    },
    {
        id:28,
        icon:'beton-int/2.jpg',
        type:"sample-5"
    },
    {
        id:29,
        icon:'stone-int/1.jpeg',
        type:"sample-6"
    },
    {
        id:30,
        icon:'stone-int/2.jpeg',
        type:"sample-6"
    },
    {
        id:31,
        icon:'stone-int/3.jpeg',
        type:"sample-6"
    },
    {
        id:32,
        icon:'stone-int/4.jpeg',
        type:"sample-6"
    },
    {
        id:33,
        icon:'stone-int/5.jpeg',
        type:"sample-6"
    },
    {
        id:34,
        icon:'stone-int/6.jpg',
        type:"sample-6"
    },
    {
        id:35,
        icon:'stone-int/7.jpg',
        type:"sample-6"
    },
    {
        id:36,
        icon:'stone-int/8.jpeg',
        type:"sample-6"
    },
    {
        id:37,
        icon:'stone-int/9.jpeg',
        type:"sample-6"
    },
    {
        id:38,
        icon:'stone-int/10.jpeg',
        type:"sample-6"
    },
    {
        id:39,
        icon:'perlamutr-int/1.jpeg',
        type:"sample-7"
    },
    {
        id:40,
        icon:'perlamutr-int/2.jpeg',
        type:"sample-7"
    },
    {
        id:41,
        icon:'perlamutr-int/3.jpeg',
        type:"sample-7"
    },
    {
        id:42,
        icon:'perlamutr-int/4.jpg',
        type:"sample-7"
    },
    {
        id:43,
        icon:'perlamutr-int/5.jpeg',
        type:"sample-7"
    },
    {
        id:44,
        icon:'perlamutr-int/6.jpg',
        type:"sample-7"
    },
    {
        id:45,
        icon:'perlamutr-int/7.jpeg',
        type:"sample-7"
    },
    {
        id:46,
        icon:'lux-int/1.jpg',
        type:"sample-8"
    },
    {
        id:46,
        icon:'lux-int/2.jpeg',
        type:"sample-8"
    },
    {
        id:46,
        icon:'lux-int/3.jpeg',
        type:"sample-8"
    },
    {
        id:46,
        icon:'lux-int/4.jpeg',
        type:"sample-8"
    },
    {
        id:46,
        icon:'lux-int/5.jpeg',
        type:"sample-8"
    },
    {
        id:46,
        icon:'lux-int/6.jpeg',
        type:"sample-8"
    },
    {
        id:46,
        icon:'lux-int/7.jpeg',
        type:"sample-8"
    },
    {
        id:46,
        icon:'lux-int/8.jpg',
        type:"sample-8"
    },
    {
        id:46,
        icon:'lux-int/9.jpg',
        type:"sample-8"
    }



]


function showPhotoList(list_name) {
    var k =3;
    var list = $("#myCarousel").find('.carousel-inner');
    list.html("");
    console.log(12312)
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
var item_info = [
    {
        id:1,
        icon:'silk/1.jpeg',
        type:"sample-1",
    },
    {
        id:2,
        icon:'silk/3.jpeg',
        type:"sample-1",
    },
    {
        id:3,
        icon:'silk/4.jpeg',
        type:"sample-1",
    },
    {
        id:4,
        icon:'silk/5.jpeg',
        type:"sample-1",

    },
    {
        id:5,
        icon:'silk/8.jpeg',
        type:"sample-1"

    },
    {
        id:6,
        icon:'silk/11.1.jpeg',
        type:"sample-1"

    },
    {
        id:7,
        icon:'silk/11.jpeg',
        type:"sample-1"
    },
    {
        id:8,
        icon:'silk/12.jpeg',
        type:"sample-1"
    },
    {
        id:9,
        icon:'silk/13.jpeg',
        type:"sample-1"
    },
    {
        id:10,
        icon:'silk/14.jpeg',
        type:"sample-1"
    },
    {
        id:11,
        icon:'silk/15.jpeg',
        type:"sample-1"
    },
    {
        id:12,
        icon:'silk/16.jpeg',
        type:"sample-1"
    },
    {
        id:13,
        icon:'silk/17.jpeg',
        type:"sample-1"
    },
    {
        id:14,
        icon:'silk/18.jpeg',
        type:"sample-1"
    },
    {
        id:15,
        icon:'silk/19.jpeg',
        type:"sample-1"
    },
    {
        id:16,
        icon:'silk/20.jpeg',
        type:"sample-1"
    },
    {
        id:17,
        icon:'silk/22.jpeg',
        type:"sample-1"
    },
    {
        id:18,
        icon:'gold/2.jpeg',
        type:"sample-2"
    },
    {
        id:19,
        icon:'gold/3.jpeg',
        type:"sample-2"
    },
    {
        id:20,
        icon:'gold/5.jpeg',
        type:"sample-2"
    },
    {
        id:21,
        icon:'gold/6.jpeg',
        type:"sample-2"
    },
    {
        id:22,
        icon:'gold/7.1.jpeg',
        type:"sample-2"
    },
    {
        id:23,
        icon:'gold/7.jpeg',
        type:"sample-2"
    },
    {
        id:24,
        icon:'gold/8.jpeg',
        type:"sample-2"
    },
    {
        id:25,
        icon:'gold/9.1.jpeg',
        type:"sample-2"
    },
    {
        id:26,
        icon:'gold/10.1.jpeg',
        type:"sample-2"
    },
    {
        id:27,
        icon:'gold/11.jpeg',
        type:"sample-2"
    },
    {
        id:28,
        icon:'gold/13.1.jpeg',
        type:"sample-2"
    },
    {
        id:29,
        icon:'gold/15.1.jpeg',
        type:"sample-2"
    },
    {
        id:30,
        icon:'gold/18.jpeg',
        type:"sample-2"
    },
    {
        id:31,
        icon:'gold/24.jpeg',
        type:"sample-2"
    },
    {
        id:32,
        icon:'gold/25.jpeg',
        type:"sample-2"
    },
    {
        id:33,
        icon:'gold/26.jpeg',
        type:"sample-2"
    },
    {
        id:34,
        icon:'gold/27.jpeg',
        type:"sample-2"
    },
    {
        id:35,
        icon:'metal/1.jpg',
        type:"sample-3"
    },
    {
        id:34,
        icon:'metal/2.jpg',
        type:"sample-3"
    },
    {
        id:37,
        icon:'metal/3.jpg',
        type:"sample-3"
    },
    {
        id:38,
        icon:'metal/4.jpg',
        type:"sample-3"
    },
    {
        id:39,
        icon:'mramor/1.jpeg',
        type:"sample-4"
    },
    {
        id:40,
        icon:'mramor/1.jpg',
        type:"sample-4"
    },
    {
        id:41,
        icon:'mramor/2.jpg',
        type:"sample-4"
    },
    {
        id:42,
        icon:'mramor/3.jpeg',
        type:"sample-4"
    },
    {
        id:43,
        icon:'mramor/4.jpeg',
        type:"sample-4"
    },
    {
        id:44,
        icon:'mramor/5.jpeg',
        type:"sample-4"
    },
    {
        id:45,
        icon:'mramor/6.jpeg',
        type:"sample-4"
    },
    {
        id:46,
        icon:'mramor/7.jpeg',
        type:"sample-4"
    },
    {
        id:47,
        icon:'mramor/8.jpeg',
        type:"sample-4"
    },
    {
        id:48,
        icon:'mramor/9.jpeg',
        type:"sample-4"
    },
    {
        id:49,
        icon:'mramor/10.jpeg',
        type:"sample-4"
    },
    {
        id:50,
        icon:'mramor/11.jpeg',
        type:"sample-4"
    },
    {
        id:51,
        icon:'mramor/12.jpeg',
        type:"sample-4"
    },
    {
        id:52,
        icon:'mramor/13.jpeg',
        type:"sample-4"
    },
    {
        id:53,
        icon:'mramor/14.jpeg',
        type:"sample-4"
    },
    {
        id:54,
        icon:'mramor/15.jpeg',
        type:"sample-4"
    },
    {
        id:55,
        icon:'mramor/16.jpeg',
        type:"sample-4"
    },
    {
        id:56,
        icon:'beton/1.jpg',
        type:"sample-5"
    },
    {
        id:55,
        icon:'beton/2.jpeg',
        type:"sample-5"
    },
    {
        id:55,
        icon:'beton/3.jpeg',
        type:"sample-5"
    },
    {
        id:55,
        icon:'beton/4.jpeg',
        type:"sample-5"
    },
    {
        id:55,
        icon:'beton/5.jpeg',
        type:"sample-5"
    },
    {
        id:55,
        icon:'beton/6.jpeg',
        type:"sample-5"
    },
    {
        id:55,
        icon:'beton/7.jpeg',
        type:"sample-5"
    },
    {
        id:55,
        icon:'beton/8.jpeg',
        type:"sample-5"
    },
    {
        id:55,
        icon:'beton/9.jpeg',
        type:"sample-5"
    },
    {
        id:55,
        icon:'beton/10.jpeg',
        type:"sample-5"
    },
    {
        id:55,
        icon:'beton/11.jpeg',
        type:"sample-5"
    },
    {
        id:55,
        icon:'beton/12.jpeg',
        type:"sample-5"
    },
    {
        id:56,
        icon:'stone/1.jpg',
        type:"sample-6"
    },
    {
        id:57,
        icon:'stone/2.jpg',
        type:"sample-6"
    },
    {
        id:58,
        icon:'stone/3.jpg',
        type:"sample-6"
    },
    {
        id:59,
        icon:'stone/4.jpg',
        type:"sample-6"
    },
    {
        id:60,
        icon:'stone/5.jpg',
        type:"sample-6"
    },
    {
        id:61,
        icon:'stone/6.jpg',
        type:"sample-6"
    },
    {
        id:62,
        icon:'stone/7.jpeg',
        type:"sample-6"
    },
    {
        id:63,
        icon:'stone/8.jpeg',
        type:"sample-6"
    },
    {
        id:64,
        icon:'stone/9.jpeg',
        type:"sample-6"
    },
    {
        id:65,
        icon:'stone/10.jpeg',
        type:"sample-6"
    },
    {
        id:66,
        icon:'stone/11.jpeg',
        type:"sample-6"
    },
    {
        id:67,
        icon:'stone/12.jpeg',
        type:"sample-6"
    },
    {
        id:68,
        icon:'stone/13.jpeg',
        type:"sample-6"
    },
    {
        id:69,
        icon:'stone/14.jpeg',
        type:"sample-6"
    },
    {
        id:70,
        icon:'stone/15.jpeg',
        type:"sample-6"
    },
    {
        id:71,
        icon:'stone/16.jpeg',
        type:"sample-6"
    },
    {
        id:72,
        icon:'stone/17.jpeg',
        type:"sample-6"
    },
    {
        id:73,
        icon:'stone/18.jpeg',
        type:"sample-6"
    },
    {
        id:74,
        icon:'stone/19.jpeg',
        type:"sample-6"
    },
    {
        id:75,
        icon:'stone/20.jpeg',
        type:"sample-6"
    },
    {
        id:76,
        icon:'stone/21.jpeg',
        type:"sample-6"
    },
    {
        id:77,
        icon:'stone/22.jpeg',
        type:"sample-6"
    },
    {
        id:78,
        icon:'perlamutr/1.jpeg',
        type:"sample-7"
    },
    {
        id:79,
        icon:'perlamutr/2.jpeg',
        type:"sample-7"
    },
    {
        id:80,
        icon:'perlamutr/3.jpeg',
        type:"sample-7"
    },
    {
        id:81,
        icon:'perlamutr/4.jpeg',
        type:"sample-7"
    },
    {
        id:82,
        icon:'perlamutr/5.jpeg',
        type:"sample-7"
    },
    {
        id:83,
        icon:'perlamutr/6.jpeg',
        type:"sample-7"
    },
    {
        id:84,
        icon:'perlamutr/7.jpeg',
        type:"sample-7"
    },
    {
        id:85,
        icon:'perlamutr/8.jpeg',
        type:"sample-7"
    },
    {
        id:86,
        icon:'perlamutr/9.jpeg',
        type:"sample-7"
    },
    {
        id:87,
        icon:'perlamutr/10.jpeg',
        type:"sample-7"
    },
    {
        id:88,
        icon:'perlamutr/11.jpeg',
        type:"sample-7"
    },
    {
        id:89,
        icon:'perlamutr/12.jpeg',
        type:"sample-7"
    },
    {
        id:90,
        icon:'perlamutr/13.jpeg',
        type:"sample-7"
    },
    {
        id:91,
        icon:'perlamutr/14.jpeg',
        type:"sample-7"
    },
    {
        id:92,
        icon:'perlamutr/15.jpeg',
        type:"sample-7"
    },
    {
        id:93,
        icon:'perlamutr/16.jpg',
        type:"sample-7"
    },
    {
        id:94,
        icon:'perlamutr/17.jpeg',
        type:"sample-7"
    },
    {
        id:95,
        icon:'lux/1.jpg',
        type:"sample-8"
    },
    {
        id:96,
        icon:'lux/2.jpg',
        type:"sample-8"
    },
    {
        id:97,
        icon:'lux/3.jpg',
        type:"sample-8"
    },
    {
        id:98,
        icon:'lux/4.jpg',
        type:"sample-8"
    },
    {
        id:99,
        icon:'lux/5.jpg',
        type:"sample-8"
    },
    {
        id:100,
        icon:'lux/6.jpg',
        type:"sample-8"
    },
    {
        id:101,
        icon:'lux/7.jpg',
        type:"sample-8"
    },
    {
        id:102,
        icon:'lux/8.jpg',
        type:"sample-8"
    },
    {
        id:103,
        icon:'lux/9.jpg',
        type:"sample-8"
    },
    {
        id:104,
        icon:'lux/10.jpg',
        type:"sample-8"
    },
    {
        id:105,
        icon:'lux/11.jpg',
        type:"sample-8"
    },
    {
        id:106,
        icon:'lux/12.jpg',
        type:"sample-8"
    }

    ]


function showPizzaList(list_name) {
    var k =3;
    var list = $(".effects-samples").find('.podmenu-container').find('.container')
    list.html("");
    item_info.forEach(function(item){
        if(item.type===list_name) {
            showOneItem(item);
        }
    });



    function showOneItem(item) {
        var html_code = ' <div class="col-md-4 col-sm-4 col-xs-4  one-sample one-sample-podmenu"><img class="a-sample" src='+ item.icon+' </div>';
        var $node = $(html_code);
        k++;
        list.append($node);
    }
    $('.effects-samples').css('height',k/3*36+'vh');
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