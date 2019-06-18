(function($) {
	'use strict';
	$(function() {

    var item = $('.js-standarts-slider');
    var slider = undefined;

    if (item) {
      function initSlider() {
        var screenWidth = $(window).outerWidth();
        if ( (screenWidth < (920)) && (slider == undefined)) {
          slider = new Swiper('.js-standarts-slider', {
            loop: true,
            grabCursor: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            pagination: {
              el: '.js-standarts-bullet',
              clickable: true,
              bulletClass: 'bullet-gray',
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
