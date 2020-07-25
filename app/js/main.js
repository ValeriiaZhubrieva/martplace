$(function(){

    $('.rate-star').rateYo({
        rating: 4.5,
        starWidth: "13px",
        ratedFill: "#ffc000",
        readOnly: true
    });
    $('.product-slider__inner').slick({
        nextArrow:'<button class="slick-arrow slick-next"><img src="images/chevron-right.png" alt=""></button>',
		prevArrow:'<button class="slick-arrow slick-prev"><img src="images/chevron-left.png" alt=""></button>',
    });








    var mixer = mixitup('.products__inner-box');
});