'use strict';

(function() {

  var item = document.querySelector('.js-about-intro-gallery');

  if (item) {
    var slider = new Swiper('.js-about-intro-gallery', {
      loop: true,
      loopedSlides: 3,
      grabCursor: true,
      slidesPerView: 1,
      navigation: {
        prevEl: '.js-about-intro-prev',
        nextEl: '.js-about-intro-next',
        clickable: true,
        disabledClass: 'disabled',
      }
    });
  }

})();
