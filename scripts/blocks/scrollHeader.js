(function($) {
	'use strict';
	$(function() {
    var header = $('.js-header-scroll');
    var lastScrollTop = 0;
    var SCROLL_HEIGHT = 200;

    $(window).scroll(function(e){
      var st = $(this).scrollTop();
      if (st > lastScrollTop || st < SCROLL_HEIGHT) {
        header.removeClass('active');
      } else  {
        header.addClass('active');
      }
      lastScrollTop = st;
    });
	});
})(jQuery);
