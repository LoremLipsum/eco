'use strict';

(function() {
  var size = 90;
  var ellipsis = document.querySelectorAll('.js-ellipsis');

  if(ellipsis) {
    for (var i = 0; i < ellipsis.length; i += 1) {
      ellipsis[i].textContent = ellipsis[i].textContent.slice(0, size) + ' ...';
    }
  }

})();
