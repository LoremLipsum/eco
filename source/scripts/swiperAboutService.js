(function($) {
	'use strict';
	$(function() {

    var item = $('.js-about-servise-slider');
    var slider = undefined;

    if (item) {
      function initSlider() {
        var screenWidth = $(window).outerWidth();
        if ( (screenWidth < (920)) && (slider == undefined)) {
          slider = new Swiper('.js-about-servise-slider', {
            loop: true,
            grabCursor: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            pagination: {
              el: '.js-about-service-bullet',
              clickable: true,
              bulletClass: 'bullet-white',
            },
          });
        } else if ((screenWidth > 919) && (slider != undefined)) {
          slider.destroy();
          slider = undefined;
          item.find('.swiper-wrapper').removeAttr('style');
          item.find('.swiper-slide').removeAttr('style');
        }
      }

      initSlider();

      $(window ).resize(function() {
        initSlider();
      });
    }

	});
})(jQuery);
