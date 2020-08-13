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

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 330,
        from: 30,
        to: 300,
        prefix: "$"
    });

    $('select, input[type=checkbox]').styler();

    $('.btn-list').on('click', function () {
        $('.product__items-list, .product-page__items').addClass('list')
        $('.btn-list').addClass('active')
        $('.btn-grid').removeClass('active')
    });
    $('.btn-grid').on('click', function () {
        $('.product__items-list, .product-page__items').removeClass('list')
        $('.btn-grid').addClass('active')
        $('.btn-list').removeClass('active')
    });

    $('.posts__tabs .tab, .product-one__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.posts__tabs, .product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.posts__tabs .tabs, .product-one__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.box__check2').on('click', function () {
        $('.box__check1').removeClass('active')
        $('.box__check2').addClass('active')
    });
    $('.box__check1').on('click', function () {
        $('.box__check2').removeClass('active')
        $('.box__check1').addClass('active')
    });


    var mixer = mixitup('.products__inner-box');
});