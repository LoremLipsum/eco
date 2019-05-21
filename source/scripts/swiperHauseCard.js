'use strict';

(function() {

  var initSlider = function() {
    if ($(window).outerWidth() > 919) {
      var houseCardSlider = new Swiper('.js-house-card-w-slider', {
        grabCursor: true,
        slidesPerView: 1,
        navigation: {
          nextEl: '.js-house-card-w-slider-next',
          prevEl: '.js-house-card-w-slider-prev',
          clickable: true,
          disabledClass: 'disabled',
        },
      });
    }
  }

  initSlider();

  window.addEventListener('resize', function() {
    initSlider();
  });

})();
