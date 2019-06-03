(function($) {
	'use strict';
	$(function() {
    var btnsFooter = $('.js-footer-nav-dropdown-button');
    var btnsMainNav = $('.js-main-nav-dropdown-button');
    var btnsPageNav = $('.js-page-nav-dropdown-button');
    var btn;

    var initDropdown = function() {
      if ($(window).outerWidth() < 1024) {
        btnsFooter.on('click', function(e){
          e.preventDefault();
          btn = $(this);
          btnsFooter.not(btn).parents('.js-footer-nav-dropdown').removeClass('active');
          btn.parents('.js-footer-nav-dropdown').toggleClass('active');
        });
      }

      if ($(window).outerWidth() < 1600) {
        $('.js-main-nav-dropdown-button').on('click', function(e){
          e.preventDefault();
          btn = $(this);
          btnsMainNav.not(btn).parents('.js-main-nav-dropdown').removeClass('active');
          btn.parents('.js-main-nav-dropdown').toggleClass('active');
        });
      }

      if ($(window).outerWidth() < 1250) {
        $('.js-page-nav-dropdown-button').on('click', function(e){
          e.preventDefault();
          btn = $(this);
          btnsPageNav.not(btn).parents('.js-page-nav-dropdown').removeClass('active');
          btn.parents('.js-page-nav-dropdown').toggleClass('active');
        });
      }
    }

    initDropdown();

    $(window).resize(function() {
      initDropdown();
    });

	});
})(jQuery);
