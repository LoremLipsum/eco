'use strict';

(function() {

  var tabsNewsDiary = document.querySelector('.js-tabs-nd');
  var tabsHousePlan = document.querySelector('.js-tabs-house-plan');

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

      if(tabsHousePlan) {
        var btnsHousePlan = tabsHousePlan.querySelectorAll('.js-tabs-button-hause-plan');
        var contentsHousePlan = tabsHousePlan.querySelectorAll('.js-tabs-content-hause-plan');

        switchTabs(btnsHousePlan, contentsHousePlan, 'js-tabs-content-hause-plan');
      }
    }
  };

  switchMobile();

  window.addEventListener('resize', function() {
    switchMobile();
  });


})();
