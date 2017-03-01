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
        description:"Antico Ferro - это декоративное решение с низким влиянием на окружающую среду, которое передает эстетические эффекты под железо. При помощи техник нанесения воссоздаются цветовые эффекты и отделки, придающие стенам особую ценность. Текстуры Antico Ferro могут быть нанесены, как в спокойных интерьерах, так и в тех, где присутствуют сильные контрасты между специально состаренными материалами и элементами современнейшего дизайна. Цвета и отделки Antico Ferro могут быть интерпретированы креативно, в зависимости от потребностей проектировщиков. С помощью техник нанесения достигается любой декоративный эффект без малейшей потери противодействия мытью и стиранию, а также паропроницаемости.Antico Ferro от Oikos не горит, безопасен для человека и окружающей среды. Для уточнения технических характеристик необходимо обратиться к техническим описаниям материалов, которые используются при нанесении эффекта Antico Ferro."
    },
    {
        id:2,
        icon:'images_main_page/9344-copy.jpg',
        text:"ARDESIA",
        type:"deco_line",
        description:"Ardesia - это декоративное покрытие с низким воздействием на окружающую среду. Этот крепкий материал с каменистой структурой в настоящее время представляет большой интерес для интерьер-дизайнеров за счёт его способности наполнять внутреннее пространство качеством и одновременно актуальной элегантностью сегоднешних тенденций.Ardesia имеет фактуру, создающую необходимую защиту, которая в свою очередь повышает стойкость к истиранию, и улучшает моющие свойства материала. Базовый слой материала, обработанный специальным тампоном, создает типичную структуру камня «ардезия», в то время как нанесенная кистью отделка придает поверхности цвет из представленной гаммы оттенков материала, отличающихся особой эстетикой.Материал негорючий, безопасен для человека и окружающей среды.Для уточнения технических характеристик необходимо обратиться к тех.описаниям материалов, которые используются при нанесении эффекта Ardesia."
    },
    {
        id:3,
        icon:'images_main_page/9.jpg',
        text:"AUREUM",
        type:"deco_line",
        description:"Aureum производства OIKOS - утончённая алхимия, золото на стенах, декоративная отделка с золотистым эффектом, на основе крупного известняка и окрашенных порошков, имеет низкое воздействие на среду. Оттенки Aureum рождаются из недр цветов Земли и теплых красок природы; сочетание в синтезе между историческими находками и знанием современных технологий позволило воплотить в жизнь такой продукт, который идеально подходит как для современной, так и традиционной обстановки.Aureum позволяет воспроизвести дорогие и элегантные отделки в различных тональностях, создавая при переменах игры света и точек зрения, чарующие блики на украшенных текстурах; кроме того, насыщенность отблесков золота наполняет стену, придавая несомненную элегантность обстановке с осязательным ощущением шёлка."
    },
    {
        id:4,
        icon:'images_main_page/9.jpg',
        text:"BIAMAX",
        type:"deco_line",
        description:"Biamax by Oikos – декоративная краска для интерьера с наполнителями отборной гранулометрии, на основе акриловых смол в водной дисперсии, паропроницаемая, очень устойчивая к истиранию и с низким воздействием на окружаюшую среду. Материал имеется в версии 03 (гранулометрия макс. 0,3 мм) и 07 (гранулометрия макс. 0,7 мм). Учитывая значительную покрываемость материала, BIAMAX можно использовать непосредственно в качестве цветной отделки для создания на стене нерегулярной фактурности декора «под старину», а также его можно использовать как подготовительный материал для создания исключительных декоративных отделок. Благодаря своей увеличенной гранулометрии, Biamax 07 можно использовать также в качестве отделочной штукатурки белого цвета или же окрашенной.Biamax владеет отличной покрываемостью и заполняющей способностью, негорючий, безопасен для человека и окружающей среды."

    },
    {
        id:5,
        icon:'images_main_page/9.jpg',
        text:"COCCIO ANTICO",
        type:"deco_line"

    },
    {
        id:6,
        icon:'images_main_page/9.jpg',
        text:"COCCIO CEMENTOT",
        type:"deco_line"

    },
    {
        id:7,
        icon:'images_main_page/9.jpg',
        text:"DUCA DI VENEZI",
        type:"deco_line"
    },
    {
        id:8,
        icon:'images_main_page/9.jpg',
        text:"ENCANTO",
        type:"deco_line"
    },
    {
        id:9,
        icon:'images_main_page/9.jpg',
        text:"GRANADA",
        type:"deco_line"
    },
    {
        id:10,
        icon:'images_main_page/9.jpg',
        text:"IMPERIUM",
        type:"deco_line"
    },
    {
        id:11,
        icon:'images_main_page/9.jpg',
        text:"KREOS DRAPÉ",
        type:"deco_line"
    },
    {
        id:12,
        icon:'images_main_page/9.jpg',
        text:"KREOS FIL POSÉ",
        type:"deco_line"
    },{
        id:13,
        icon:'images_main_page/9.jpg',
        text:"MARMORA ROMANA",
        type:"deco_line"
    },
    {
        id:14,
        icon:'images_main_page/9.jpg',
        text:"MARMORINO NATURALE",
        type:"deco_line"
    },
    {
        id:15,
        icon:'images_main_page/9.jpg',
        text:"MULTIDECOR",
        type:"deco_line"
    },
    {
        id:16,
        icon:'images_main_page/9.jpg',
        text:"NEVADA",
        type:"deco_line"
    },
    {
        id:17,
        icon:'images_main_page/9.jpg',
        text:"OTTOCENTO ANTICO VELLUTO",
        type:"deco_line"
    },
    {
        id:18,
        icon:'images_main_page/9.jpg',
        text:"PALLAS",
        type:"deco_line"
    },
    {
        id:19,
        icon:'images_main_page/9.jpg',
        text:"RAFFAELLO DECOR STUCCO",
        type:"deco_line"
    },
    {
        id:20,
        icon:'images_main_page/9.jpg',
        text:"RAFFAELLO MADREPERLATO",
        type:"deco_line"
    },
    {
        id:21,
        icon:'images_main_page/9.jpg',
        text:"TRAVERTINO ROMANO",
        type:"deco_line"
    },{
        id:22,
        icon:'images_main_page/9.jpg',
        text:"TRAVERTINO ROMANO FINITURA",
        type:"deco_line"
    },{
        id:23,
        icon:'images_main_page/9.jpg',
        text:"Ferrara",
        type:"deco_line"
    },
    {
        id:24,
        icon:'images_main_page/9.jpg',
        text:"Vetro",
        type:"deco_line"
    },{
        id:25,
        icon:'images_main_page/9.jpg',
        text:"Struttura",
        type:"deco_line"
    },
    {
        id:26,
        icon:'images_main_page/9.jpg',
        text:"Strato",
        type:"deco_line"
    },
    {
        id:27,
        icon:'images_main_page/9.jpg',
        text:"Pietra",
        type:"deco_line"
    },
    {
        id:28,
        icon:'images_main_page/9.jpg',
        text:"Pietra Lucida",
        type:"deco_line"
    },{
        id:29,
        icon:'images_main_page/9.jpg',
        text:"Terracotta",
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
        var podmenu= $('.catalog-podmenu');

        var needed = this.id;

        item_info.forEach(function(item){


            if(item.id==needed) {
                descr.html(item.description);
                podmenu.css('background-image','url('+item.icon+')');
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