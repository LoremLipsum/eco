(function($) {
	'use strict';
	$(function() {
    var btns = $('.js-footer-dropdown-button');
    var btn;

    if ($(window).outerWidth() < 1024) {
      btns.on('click', function(e){
        e.preventDefault();
        btn = $(this);
        btns.not(btn).parents('.js-footer-dropdown').removeClass('active');
        btn.parents('.js-footer-dropdown').toggleClass('active');
      });
    }

	});
})(jQuery);
