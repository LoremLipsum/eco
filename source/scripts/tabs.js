'use strict';

(function() {

  var tabsSmall= document.querySelectorAll('.js-tabs-small');

  var tabs = document.querySelectorAll('.js-tabs');
  var tabsProjects = document.querySelector('.js-tabs-projects');

  var switchTabs = function (item, btns, contents, classContents) {
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
        item.querySelector('.' + classContents + '.' + atr).classList.add('active');
      });
    }
  };

  var initTabs = function () {
    if(tabs) {
      for (var i = 0; i < tabs.length; i += 1) {
        var btnsTabs = tabs[i].querySelectorAll('.js-tabs-button');
        var contentsTabs = tabs[i].querySelectorAll('.js-tabs-content');
        switchTabs(tabs[i], btnsTabs, contentsTabs, 'js-tabs-content');
      }
    }
  }

  initTabs();

  var initTabsProjects = function () {
    if(tabsProjects) {
      var btnsTabsProjects = tabsProjects.querySelectorAll('.js-tabs-projects-button');
      var contentsTabsProjects = tabsProjects.querySelectorAll('.js-tabs-projects-content');
      switchTabs(tabsProjects, btnsTabsProjects, contentsTabsProjects, 'js-tabs-projects-content');
    }
  }

  initTabsProjects();

  // табы на мобильной версии
  var initTabsSmall = function() {
    if(parseInt(window.innerWidth, 10) < 920) {
      if(tabsSmall) {

        for (var i = 0; i < tabsSmall.length; i += 1) {
          var btnsTabsSmall = tabsSmall[i].querySelectorAll('.js-tabs-button');
          var contentTabsSmall = tabsSmall[i].querySelectorAll('.js-tabs-small-content');
          switchTabs(tabsSmall[i], btnsTabsSmall, contentTabsSmall, 'js-tabs-small-content');
        }
      }
    }
  };

  initTabsSmall();

  window.addEventListener('resize', function() {
    initTabsSmall();
  });


})();
