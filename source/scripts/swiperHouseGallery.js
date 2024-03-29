'use strict';

(function() {

  var item = document.querySelector('.js-house-gallery-nav');

  if (item) {
    var navSlider = new Swiper('.js-house-gallery-nav', {
      loop: true,
      loopedSlides: 3,
      grabCursor: true,
      slidesPerView: 3,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 10,
      navigation: {
        nextEl: '.js-house-gallery-next',
        prevEl: '.js-house-gallery-prev',
        clickable: true,
        disabledClass: 'disabled',
      },
      breakpoints: {
        620: {
          spaceBetween: 5,
        }
      }
    });

    var mainSlider = new Swiper('.js-house-gallery-main', {
      loop: true,
      loopedSlides: 3,
      grabCursor: true,
      slidesPerView: 1,
      thumbs: {
        swiper: navSlider,
      },
      navigation: {
        prevEl: '.js-house-gallery-prev',
        nextEl: '.js-house-gallery-next',
        clickable: true,
        disabledClass: 'disabled',
      },
    });
  }

})();
