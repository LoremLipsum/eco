(function($) {
	'use strict';
	$(function() {
    var header = $('.js-header-scroll');
    var lastScrollTop = 0;

    $(window).scroll(function(e){
      var st = $(this).scrollTop();
      if (st > lastScrollTop) {
        header.removeClass('active');
      } else  {
        header.addClass('active');
      }
      lastScrollTop = st;
    });
	});
})(jQuery);
