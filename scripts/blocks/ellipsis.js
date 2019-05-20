'use strict';

(function() {
  var ellipsis = document.querySelectorAll('.js-ellipsis');
  var screen = $(window).outerWidth();

  if (screen < 420) {
    var size = 100;
  } else if (screen > 419 && screen < 620) {
    var size = 140;
  } else if (screen > 619 && screen < 720) {
    var size = 100;
  } else if (screen > 719 && screen < 920) {
    var size = 130;
  } else if (screen > 919 && screen < 1020) {
    var size = 90;
  } else {
    var size = 140;
  }

  var initEllipsis = function () {
    for (var i = 0; i < ellipsis.length; i += 1) {
      ellipsis[i].textContent = ellipsis[i].textContent.slice(0, size) + ' ...';
    }
  }

  initEllipsis();

  window.on('resize', function() {
    initEllipsis();
  })


})();
