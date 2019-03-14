@@include('partials/jquery-3.3.1.min.js');
@@include('partials/slick.js');
@@include('partials/main.js');

function view(idDiv){
//                var divs = document.getElementsByTagName('div');
    var divs = document.getElementsByClassName('payment');
    for(var i = 0; i < divs.length; i++){
        if(divs[i].id == idDiv){
            divs[i].style.display = 'block';
            continue;
        }
        divs[i].style.display = 'none';
    }
    var div = document.getElementsByClassName('payment-method');
    for(var i = 0; i < div.length; i++){
        if(div[i].id == idDiv){
            div[i].style.display = 'flex';
            continue;
        }
        div[i].style.display = 'none';
    }
}


$(document).ready(function () {
    $("#btn").click(
        function () {
            sendAjaxForm('result_form', 'ajax_form', 'https://test-telega.piastrix24.com/api/get_data');
            return false;
        }
    );
});

function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url: url, //url страницы (action_ajax_form.php)
        type: "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#" + ajax_form).serialize(),  // Сеарилизуем объект
        success: function (response) { //Данные отправлены успешно
            result = $.parseJSON(response);


            console.log (result);


            var form = $('<form/>', {
                method : 'POST',
                action : 'https://pay.piastrix.com/ru/pay',
                character_set : 'UTF-8',
            }).appendTo('#result_form');
            form.append('<input type="text" name="amount" value="'+result.amount+'">');
            form.append('<input type="text" name="currency" value="'+result.currency+'">');
            form.append('<input type="text" name="shop_id" value = "'+result.shop_id+'"/>');
            form.append('<input type="text" name="sign" value="'+result.sign+'">');
            form.append('<input type="text" name="payway" value="'+result.payway+'">');
            form.append('<input type="text" name="shop_order_id" value="'+result.shop_order_id+'">');
            form.append('<input type="text" name="description" value="'+result.description+'">');
            form.append('<input type="submit" value="Отправить запрос"/>');


        },
        error: function (response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
        }
    });
}


var demo = document.getElementsByClassName('demonstration')[0];
demo.onclick = function () {
    var a = document.getElementsByClassName('modal')[0];
    a.setAttribute("style", "visibility:visible");

    var b = document.getElementById('bg_layer');
    b.setAttribute("style", "visibility:visible");
};

var close = document.getElementsByClassName('close')[0];
close.onclick = function () {
    var a = document.getElementsByClassName('modal')[0];
    a.setAttribute("style", "visibility:hidden");

    var b = document.getElementById('bg_layer');
    b.setAttribute("style", "visibility:hidden");
};


// $('#bg_layer').hide();
// $('#btn').click(function(){
//     $('#bg_layer').show();
// });
// $('.close').click(function(){
//     $('#bg_layer').hide();
// });