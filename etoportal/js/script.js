$(function () {
    $('.rates__slider').slick({
        dots: true,
        arrows: false,
        dotsClass: 'rates-dots'
    });
});

$('.menu__btn').on('click', function (event) {
    event.preventDefault();
    $('.menu__box').toggleClass('active');
    $('.menu__btn').toggleClass('active');
});

$('.code__btn').on('click', function (event) {
    event.preventDefault();
    $('.code__inner').fadeOut(300);
    setTimeout(function(){
        $('.popup').fadeIn();
    },300);
    
});

$('.close').on('click', function (event) {
    event.preventDefault();
    $('.popup').fadeOut(300);
    setTimeout(function(){
        $('.code__inner').fadeIn();
    },300);
});

$('.faq__link').on('click', function (event) {
    event.preventDefault();
   $('.faq__settings').slideToggle();

   $('.faq__link').toggleClass('active');
   if($('.faq__link').hasClass('active')){
    $('.faq__link').text('Скрыть');
   } else{
    $('.faq__link').text('Показать');
   }
});

