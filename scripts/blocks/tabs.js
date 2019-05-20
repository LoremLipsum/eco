'use strict';

(function() {

  var tabsNewsDiary = document.querySelector('.js-tabs-nd');
  var tabsChoice = document.querySelector('.js-tabs-choice');

  var switchTabs = function (btns, contents, classContents) {
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function (e) {
        e.preventDefault();
        var tab = e.currentTarget;
        var atr = tab.getAttribute('data-tab');

        for (var j = 0; j < contents.length; j++) {
          contents[j].classList.remove('active');
        };

        for (var j = 0; j < btns.length; j++) {
          btns[j].classList.remove('active');
        };

        tab.classList.add('active');
        document.querySelector('.' + classContents + '.' + atr).classList.add('active');
      });
    }
  };

  // табы на мобильной версии
  var switchMobile = function() {
    if(parseInt(window.innerWidth, 10) < 920) {
      if(tabsNewsDiary) {
        var btnsNewsDiary = tabsNewsDiary.querySelectorAll('.js-button-tabs-nd');
        var contentsNewsDiary = tabsNewsDiary.querySelectorAll('.js-content-tabs-nd');

        switchTabs(btnsNewsDiary, contentsNewsDiary, 'js-content-tabs-nd');
      }

      if(tabsChoice) {
        var btnsChoice = tabsChoice.querySelectorAll('.js-button-tabs-choice');
        var contentsChoice = tabsChoice.querySelectorAll('.js-content-tabs-choice');

        switchTabs(btnsChoice, contentsChoice, 'js-content-tabs-choice');
      }
    }
  };

  switchMobile();

  window.addEventListener('resize', function() {
    switchMobile();
  });


})();
