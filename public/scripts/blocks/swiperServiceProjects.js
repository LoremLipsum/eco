'use strict';

(function() {

  var item = document.querySelector('.js-service-projects-slider');

  if (item) {
    var navSlider = new Swiper('.js-service-projects-slider', {
      grabCursor: true,
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.js-service-projects-next',
        prevEl: '.js-service-projects-prev',
        clickable: true,
        disabledClass: 'disabled',
      },
      breakpoints: {
        919: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        619: {
          spaceBetween: 20,
          slidesPerView: 1,
          centeredSlides: false,
        }
      }
    });
  }

})();
