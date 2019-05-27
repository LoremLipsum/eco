(function($) {
	'use strict';
	$(function() {
    var btns = $('.js-show-button');

    if (btns) {
      var items = '.js-show-item';

      var show = function (className) {
        btns.on('click', function(e){
          e.preventDefault();
          $(this).parents(className).toggleClass('active');
          var text = $(this).text() === 'Скрыть' ? 'Смотреть больше' : 'Скрыть';
          $(this).text(text);
        });
      }

      var screenWidth = $(window).outerWidth();
      var aboutDescr = $('.js-about-descr');


      if (aboutDescr) {
        var showAboutDescr = function() {
          if (screenWidth < 920 && !aboutDescr.hasClass('js-show-3-items')) {
            aboutDescr.addClass('js-show-3-items');
            show('.js-about-descr');
          } else {
            aboutDescr.removeClass('js-show-3-items');
          }
        }

        showAboutDescr();

        $(window).resize(function() {
          showAboutDescr();
        });
      }

      var service = $('.js-service-descr');
      if (service) {
        var showService = function() {
          if (screenWidth < 920 && !service.hasClass('js-show-2-items')) {
            service.addClass('js-show-2-items');
            show('.js-service-descr');
          } else {
            service.removeClass('js-show-2-items');
          }
        }

        showService();

        $(window).resize(function() {
          showService();
        });
      }

      var process = $('.js-process');

      if (process) {
        var showProcess = function() {
          if (screenWidth < 920 && !process.hasClass('js-show-2-items')) {
            process.addClass('js-show-2-items');
            show('.js-process');
          } else {
            process.removeClass('js-show-2-items');
          }
        }

        showProcess();

        $(window).resize(function() {
          showProcess();
        });
      }
    }

	});
})(jQuery);
