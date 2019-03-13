@@include('partials/jquery-3.3.1.min.js');
@@include('partials/slick.js');
@@include('partials/main.js');

$('#declaration').click(function () {
    $(this).toggleClass('active');
    $('.wrapper-menu').slideToggle('slow').css('display', 'flex');
    $('.left-menu').css('display', 'none');
});

$('.arrow').click(function () {
    $(this).toggleClass('active');
    $('.left-menu').slideToggle('slow').css('display', 'flex');
    $('.wrapper-menu').css('display', 'none');
});