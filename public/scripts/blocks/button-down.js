(function($) {
	'use strict';
	$(function() {

    var btn = $('.js-button-down');
    var content = $('.js-down');

    btn.click(function (){
      $('html, body').animate({
        scrollTop: content.offset().top
      }, 500);
    });

  });
})(jQuery);
