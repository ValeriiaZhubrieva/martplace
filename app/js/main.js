$(function(){

    $('.rate-star').rateYo({
        rating: 4.5,
        starWidth: "13px",
        readOnly: true
    });
    $('.product-slider__inner').slick({
        nextArrow:'<button class="slick-arrow slick-next"><img src="images/chevron-right.png" alt=""></button>',
		prevArrow:'<button class="slick-arrow slick-prev"><img src="images/chevron-left.png" alt=""></button>',
    });

    $('.follower__inner').slick({
        nextArrow:'<button class="slick-arrow slick-next"><img src="images/chevron-right.png" alt=""></button>',
        prevArrow:'<button class="slick-arrow slick-prev"><img src="images/chevron-left.png" alt=""></button>',
        slidesToShow:3,
        infinite:false,
    });

    $('select').styler();

    $('.btn-list').on('click', function () {
        $('.product__item').addClass('list')
        $('.btn-list').addClass('active')
        $('.btn-grid').removeClass('active')
    });
    $('.btn-grid').on('click', function () {
        $('.product__item').removeClass('list')
        $('.btn-grid').addClass('active')
        $('.btn-list').removeClass('active')
    });




    var mixer = mixitup('.products__inner-box');
});