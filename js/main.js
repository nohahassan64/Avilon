$(function(){


$('.questions .question-box .icon i').on('click' , function(){

    $(this).toggleClass('fas fa-minus fas fa-plus').parents().siblings().find('.icon').find('i').addClass('fas fa-plus');

    if($(this).hasClass('fas fa-plus')){
        $(this).css('color' , '#000');
        $('.question-box .question h5').css('color' , '#000');
        $('.question-box .question p').slideUp();





    }else{
        $(this).css('color' , '#1DC8CD');
        $('.question-box .question h5').css('color' , '#1DC8CD');
        $('.question-box .question p').slideDown();




    }

    $('.question-box .question p').parent().siblings().find('.question').find('p').css('display' , 'none');
   

} );


// Scroll

$(window).scroll(function (){

    $(this).scrollTop() >= 80 ?  $('.scroll i').show() :  $('.scroll i').hide();

    $(this).scrollTop() >= 80 ? $('.navbar').addClass('scrolled') : $('.navbar').removeClass('scrolled');

});

$('.scroll i').click(function () {

    $('html , body').animate({
        scrollTop: 0
    },600);


});
  // Smooth Scroll To Div

$('.navbar ul li a').click(function () {

    $('html , body').animate({

        scrollTop: $($(this).data('value')).offset().top -70
        
    },1000);


});

$(window).scroll(function(){

    let scrollSection = $(document).scrollTop();

    /*if((scrollSection >=0) && (scrollSection <300)){
        $('.header .imges-product .product-1').animate({
            top:'30px'
        },1000);
        $('.header .imges-product .product-2').animate({
            top:'90px'
        },1000);
        $('.header .imges-product .product-3').animate({
            top:'150px'
        },1000);
    }*/   
  
});

    $(window).on( 'load' , function(){

    $('body').css('overflow','auto');

    $(".load .center").fadeOut(3000 , function() {
        $(this).parent().fadeOut(3000 , function() {
            $(this).remove();
        });
    });
});


});