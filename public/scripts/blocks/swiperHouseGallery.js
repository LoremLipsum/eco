'use strict';

(function() {

  var initSlider = function() {
    var houseGalleryNavSlider = new Swiper('.js-house-gallery-nav', {
      loop: true,
      loopedSlides: 3,
      grabCursor: true,
      slidesPerView: 3,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 10,
      navigation: {
        nextEl: '.js-house-gallery-prev',
        prevEl: '.js-house-gallery-next',
        clickable: true,
        disabledClass: 'disabled',
      },
      breakpoints: {
        620: {
          spaceBetween: 5,
        }
      }
    });

    var houseGalleryMainSlider = new Swiper('.js-house-gallery-main', {
      loop: true,
      loopedSlides: 3,
      grabCursor: true,
      slidesPerView: 1,
      thumbs: {
        swiper: houseGalleryNavSlider,
      },
      navigation: {
        prevEl: '.js-house-gallery-prev',
        nextEl: '.js-house-gallery-next',
        clickable: true,
        disabledClass: 'disabled',
      },
    });

  }

  initSlider();

})();
