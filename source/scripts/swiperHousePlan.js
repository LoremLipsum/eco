'use strict';

(function() {
  var housePLanSlider = undefined;

  function initHousePLanSlider() {
    var screenWidth = $(window).outerWidth();
    if ((screenWidth < (920)) && (housePLanSlider == undefined)) {
      housePLanSlider = new Swiper('.js-house-plan-slider', {
        loop: true,
        grabCursor: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
          el: '.js-house-plan-bullet',
          clickable: true,
          bulletClass: 'bullet-gray',
        },
      });
    } else if ((screenWidth > 919) && (housePLanSlider != undefined)) {
      housePLanSlider.destroy();
      housePLanSlider = undefined;
      var housePLan = $('.js-house-plan-slider');
      housePLan.find('.swiper-wrapper').removeAttr('style');
      housePLan.find('.swiper-slide').removeAttr('style');
    }
  }

  initHousePLanSlider();

  $(window).resize(function() {
    initHousePLanSlider();
  });

})();
