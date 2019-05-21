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
      var houseCard = $('.js-house-top-slider');
      houseCard.find('.swiper-wrapper').removeAttr('style');
      houseCard.find('.swiper-slide').removeAttr('style');
    }
  }

  inithouseTopSlider();

  $(window).resize(function() {
    inithouseTopSlider();
  });


  if ($(window).outerWidth() > 919) {
    houseCardSlider1 = new Swiper('.js-house-card-slider-1', {
      loop: true,
      grabCursor: true,
      slidesPerView: 1,
      autoHeight: 'auto',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.js-house-card-next',
        prevEl: '.js-house-card-prev',
        clickable: true,
        disabledClass: 'disabled',
      },
    });

    houseCardSlider1 = new Swiper('.js-house-card-slider-2', {
      loop: true,
      grabCursor: true,
      slidesPerView: 1,
      autoHeight: 'auto',
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.js-house-card-next',
        prevEl: '.js-house-card-prev',
        clickable: true,
        disabledClass: 'disabled',
      },
    });

    houseCardSlider1 = new Swiper('.js-house-card-slider-3', {
      loop: true,
      grabCursor: true,
      slidesPerView: 1,
      autoHeight: 'auto',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.js-house-card-next',
        prevEl: '.js-house-card-prev',
        clickable: true,
        disabledClass: 'disabled',
      },
    });
  }

})();
