'use strict';

(function() {

  var btnOpen = document.querySelector('.js-button-nav');
  var btnClose = document.querySelector('.js-panel-close');
  var block = document.querySelector('.js-panel-main-nav');
  var overlay = document.querySelector('.js-header-overlay');
  var ESC = 27;

  var open = function() {
    block.classList.toggle('active');
    overlay.classList.toggle('active');
  };

  var close = function() {
    block.classList.remove('active');
    overlay.classList.remove('active');
  };

  var onBtnOpenClick = function(e) {
    e.preventDefault();
    open();
  };

  var onBtnCloseClick = function(e) {
    e.preventDefault();
    close();
  };

  var onEscKeyup = function(e) {
    if (e.keyCode === ESC) {
      e.preventDefault();
      close();
    }
  };

  btnOpen.addEventListener('click', onBtnOpenClick);
  btnClose.addEventListener('click', onBtnCloseClick);
  overlay.addEventListener('click', onBtnCloseClick);
  document.addEventListener('keyup', onEscKeyup);

})();
