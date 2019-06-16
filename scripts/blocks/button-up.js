(function($) {
	'use strict';
	$(function() {
    var btn = $('.js-page-up');
    var lastScrollTop = 0;
    var SCROLL_HEIGHT = 200;

    $(window).scroll(function(e){
      var st = $(this).scrollTop();
      if (st > lastScrollTop || st < SCROLL_HEIGHT) {
        btn.removeClass('active');
      } else  {
        btn.addClass('active');
      }
      lastScrollTop = st;
    });

    btn.click(function (){
      $('html, body').animate({
        scrollTop: 0
      }, 500);
    });

	});
})(jQuery);
