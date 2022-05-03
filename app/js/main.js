$(function() {
    $('.menu-btn').on('click', function(){
        $('.menu').addClass('menu-active');
    });
    $('.menu__close').on('click', function(){
        $('.menu').removeClass('menu-active');
    });

    $('.top-slider__wrapper').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true
    });

    $(".star").rateYo({
        starWidth: "15px",
        normalFill: "#ffffff",
        ratedFill: "#BDC3C7",
        halfStar: true,
        readOnly: true,
        spacing: "2px",
    });

    $('.latest__slider').slick({
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        nextArrow: '<button type="button" class="slick-next"><svg width="14" height="25" viewBox="0 0 14 25" fill="none"><mask id="path-1-inside-1_97_1951" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.566668 0L14 11.9231L0.566668 24.0385"/></mask><path d="M14 11.9231L15.9914 9.67938L18.4992 11.9052L16.0092 14.1509L14 11.9231ZM2.55811 -2.24369L15.9914 9.67938L12.0086 14.1668L-1.42478 2.24369L2.55811 -2.24369ZM16.0092 14.1509L2.57589 26.2662L-1.44255 21.8107L11.9908 9.69529L16.0092 14.1509Z" fill="#000000" mask="url(#path-1-inside-1_97_1951)"/></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="14" height="25" viewBox="0 0 14 25" fill="none"><g opacity="1"><mask id="path-1-inside-1_97_1952" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4333 25L0 13.0769L13.4333 0.961538"/></mask><path d="M0 13.0769L-1.99144 15.3206L-4.49918 13.0948L-2.00922 10.8491L0 13.0769ZM11.4419 27.2437L-1.99144 15.3206L1.99144 10.8332L15.4248 22.7563L11.4419 27.2437ZM-2.00922 10.8491L11.4241 -1.26625L15.4426 3.18933L2.00922 15.3047L-2.00922 10.8491Z" fill="black" mask="url(#path-1-inside-1_97_1952)"/></g></svg></button>',
    });

    $('.contacts__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
    });

    $('.studio__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
    });

    $('.custom-slider__wrapper').slick({
        arrows: false,
        dots: true,
        autoplay: true,
    });

    $(".order-form__phone, .cart-form__phone").mask("+38 (099) 999 99 99");

    $('.favorite__btn').on('click', function(){
        $('.favorite__item').remove();
    });
    
    $('.cart__btn').on('click', function(){
        $('.cart-item').remove();
    });

    $('.cart-item__input').styler();

    $('.kill').on('click', function(){
        $(this).closest('.cart-item').addClass('killed');
    });

    $('.confirm-btn').on('click', function(){
        $('.cart-form').addClass('cart-form__active');
        $('.cart-overlay').addClass('cart-overlay__active');
    });

    $('.cart-form__close, .cart-overlay').on('click', function(){
        $('.cart-form').removeClass('cart-form__active');
        $('.cart-overlay').removeClass('cart-overlay__active');
    });

    $('.cart-form__form').on('submit', function(){
        $('.cart-form').removeClass('cart-form__active');
        $('.cart-confirm').addClass('cart-confirm__active');
    });

    $('.cart-confirm__close, .cart-overlay, .cart-confirm__btn').on('click', function(){
        $('.cart-confirm').removeClass('cart-confirm__active');
        $('.cart-overlay').removeClass('cart-overlay__active');
    });

    $('.filters__show-btn').on('click', function(){
        $('.filters__inner').slideToggle();
    });

    $('.filters-title').on('click', function() {
        $(this).toggleClass('filters-title-active');
        $(this).next('.filter-form').slideToggle(300);
    });

    $('.filters__sort-select').styler();

    $('.product-slider__big').slick({
        slidesToShow: 1,
        draggable: false,
        fade: true,
        infinite: false,
        asNavFor: '.product-slider__thumbs',
        prevArrow: '<button type="button" class="slick-prev"><svg width="25" height="14" viewBox="0 0 25 14" fill="none"><g opacity="1"><mask id="path-1-inside-1_129_2396" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.4333L11.9231 0L24.0385 13.4333"/></mask><path d="M11.9231 0L9.67938 -1.99144L11.9052 -4.49918L14.1509 -2.00922L11.9231 0ZM-2.24369 11.4419L9.67938 -1.99144L14.1668 1.99144L2.24369 15.4248L-2.24369 11.4419ZM14.1509 -2.00922L26.2663 11.4241L21.8107 15.4426L9.69529 2.00922L14.1509 -2.00922Z" fill="black" mask="url(#path-1-inside-1_129_2396)"/></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg width="25" height="14" viewBox="0 0 25 14" fill="none"><g opacity="1"><mask id="path-1-inside-1_129_2396" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.4333L11.9231 0L24.0385 13.4333"/></mask><path d="M11.9231 0L9.67938 -1.99144L11.9052 -4.49918L14.1509 -2.00922L11.9231 0ZM-2.24369 11.4419L9.67938 -1.99144L14.1668 1.99144L2.24369 15.4248L-2.24369 11.4419ZM14.1509 -2.00922L26.2663 11.4241L21.8107 15.4426L9.69529 2.00922L14.1509 -2.00922Z" fill="black" mask="url(#path-1-inside-1_129_2396)"/></g></svg></button>',
    });

    $('.product-slider__thumbs').slick({
        asNavFor: '.product-slider__big',
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        infinite: false,
        draggable: false,
        vertical: true,
        arrows: false
    });

    $('.product__select').styler();

    $('.recent-products__slider').slick({
        dots: true,
        autoplay: true,
        arrows: false
    });

    $('.product-tabs__top-link').on('click', function(e){
        e.preventDefault();
        $('.product-tabs__top-link').removeClass('product-tabs__top-link--active');
        $(this).addClass('product-tabs__top-link--active');

        $('.product-tab').removeClass('product-tab-active');
        $($(this).attr('href')).addClass('product-tab-active');
    });
       
    $('.product-tabs__slider').slick({
        infinite: false,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"><svg width="14" height="25" viewBox="0 0 14 25" fill="none"><mask id="path-1-inside-1_97_1951" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.566668 0L14 11.9231L0.566668 24.0385"/></mask><path d="M14 11.9231L15.9914 9.67938L18.4992 11.9052L16.0092 14.1509L14 11.9231ZM2.55811 -2.24369L15.9914 9.67938L12.0086 14.1668L-1.42478 2.24369L2.55811 -2.24369ZM16.0092 14.1509L2.57589 26.2662L-1.44255 21.8107L11.9908 9.69529L16.0092 14.1509Z" fill="#000000" mask="url(#path-1-inside-1_97_1951)"/></svg></button>',
        prevArrow: '<button type="button" class="slick-prev"><svg width="14" height="25" viewBox="0 0 14 25" fill="none"><g opacity="1"><mask id="path-1-inside-1_97_1952" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4333 25L0 13.0769L13.4333 0.961538"/></mask><path d="M0 13.0769L-1.99144 15.3206L-4.49918 13.0948L-2.00922 10.8491L0 13.0769ZM11.4419 27.2437L-1.99144 15.3206L1.99144 10.8332L15.4248 22.7563L11.4419 27.2437ZM-2.00922 10.8491L11.4241 -1.26625L15.4426 3.18933L2.00922 15.3047L-2.00922 10.8491Z" fill="black" mask="url(#path-1-inside-1_97_1952)"/></g></svg></button>',
    });

    $('.reviews-star').rateYo({
        starWidth: "40px",
        normalFill: "#ffffff",
        ratedFill: "#BDC3C7",
        halfStar: true,
        spacing: "2px",
    });
});