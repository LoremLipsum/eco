(function($) {
	'use strict';
	$(function() {

    var newsSlider = undefined;

    function initNewsSlider() {
      var screenWidth = $(window).outerWidth();
      if ( (screenWidth < (920)) && (newsSlider == undefined)) {
        newsSlider = new Swiper('.js-news-slider', {
          loop: true,
          grabCursor: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        });
      } else if ((screenWidth > 919) && (newsSlider != undefined)) {
        newsSlider.destroy();
        newsSlider = undefined;
        var news = document.querySelector('.js-news-slider');
        news.find('.swiper-wrapper').removeAttr('style');
        news.find('.swiper-slide').removeAttr('style');
      }
    }

    initNewsSlider();

    $(window ).resize(function() {
      initNewsSlider();
    });

	});
})(jQuery);
