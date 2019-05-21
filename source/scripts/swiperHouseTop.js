'use strict';

(function() {
  var houseTopSlider = undefined;

  function inithouseTopSlider() {
    var screenWidth = $(window).outerWidth();
    if ( (screenWidth < (920)) && (houseTopSlider == undefined)) {
      houseTopSlider = new Swiper('.js-house-top-slider', {
        loop: true,
        grabCursor: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
          el: '.js-house-top-bullet',
          clickable: true,
          bulletClass: 'bullet-gray',
        },
      });
    } else if ((screenWidth > 919) && (houseTopSlider != undefined)) {
      houseTopSlider.destroy();
      houseTopSlider = undefined;
      var houseTop = $('.js-house-top-slider');
      houseTop.find('.swiper-wrapper').removeAttr('style');
      houseTop.find('.swiper-slide').removeAttr('style');
    }
  }

  inithouseTopSlider();

  $(window).resize(function() {
    inithouseTopSlider();
  });


  if ($(window).outerWidth() > 919) {
    var houseTop = document.querySelector('.house-top');

    if (houseTop) {
      var houseTopCardSlider1 = new Swiper('.house-top .js-house-card-w-slider.js-slider-1', {
        loop: true,
        grabCursor: true,
        slidesPerView: 1,
        autoHeight: 'auto',
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.js-house-card-w-slider-next',
          prevEl: '.js-house-card-w-slider-prev',
          clickable: true,
          disabledClass: 'disabled',
        },
      });

      var houseTopCardSlider2 = new Swiper('.house-top .js-house-card-w-slider.js-slider-2', {
        loop: true,
        grabCursor: true,
        slidesPerView: 1,
        autoHeight: 'auto',
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.js-house-card-w-slider-next',
          prevEl: '.js-house-card-w-slider-prev',
          clickable: true,
          disabledClass: 'disabled',
        },
      });

      var houseTopCardSlider3 = new Swiper('.house-top .js-house-card-w-slider.js-slider-3', {
        loop: true,
        grabCursor: true,
        slidesPerView: 1,
        autoHeight: 'auto',
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.js-house-card-w-slider-next',
          prevEl: '.js-house-card-w-slider-prev',
          clickable: true,
          disabledClass: 'disabled',
        },
      });
    }
  }

})();
