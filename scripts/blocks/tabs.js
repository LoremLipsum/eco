'use strict';

(function() {

  var tabsSmall= document.querySelector('.js-tabs-small');
  var tabs = document.querySelector('.js-tabs');

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
          btns[j].parentNode.classList.remove('active');
        };

        tab.parentNode.classList.add('active');
        document.querySelector('.' + classContents + '.' + atr).classList.add('active');
      });
    }
  };

  if(tabs) {
    var btnsTabs = tabs.querySelectorAll('.js-tabs-button');
    var contentsTabs = tabs.querySelectorAll('.js-tabs-content');

    switchTabs(btnsTabs, contentsTabs, 'js-tabs-content');
  }

  // табы на мобильной версии
  var switchMobile = function() {
    if(parseInt(window.innerWidth, 10) < 920) {
      if(tabsSmall) {
        var btnsTabsSmall = tabsSmall.querySelectorAll('.js-tabs-small-button');
        var contentTabsSmall = tabsSmall.querySelectorAll('.js-tabs-small-content');

        switchTabs(btnsTabsSmall, contentTabsSmall, 'js-tabs-small-content');
      }
    }
  };

  switchMobile();

  window.addEventListener('resize', function() {
    switchMobile();
  });


})();
