/**
 * Created by Валера on 02.02.2017.
 */
var Lists = require('../Lists');

function showPizzaList(list_name) {

    Lists.Catalog-list.item_info.forEach(function(){
        if(this.deco_line) showOneItem(this);
    });
    var list = $("katalog-2").find("wrapper");
    list.html("");

    function showOneItem(item) {
        var html_code = ' <div class="catalog-sample"><img class="a-sample" src="images_samples/block-1.jpg"> <div class="text-sample" ><div class="text-sample-text">item.text</div><div class="button-sample button-catalog button--aylen">Подробнее</div></div></div>';

        var $node = $(html_code);



        list.append($node);
    }

    list.forEach(showOneItem);

}
/*$('.button-catalog').click(function(){
    hide_all();
    $('.catalog-podmenu').show();
    $('.header-catalog').show();
    $('.main-screen').css('height','60vh');
    $('.header-catalog').text('Каталог продукции > ' + $(this).siblings('.text-sample-text').text())
    $('.catalog-lists').show();
    $('.cb-slideshow').css('height','60vh');

})*/
exports.showPizzaList = showPizzaList;
