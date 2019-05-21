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

  $(window).resize(function() {
    initEllipsis();
  })


})();

'use strict';

(function() {
  var inputsTel = document.querySelectorAll('input[type="tel"]');
  var textareas = document.querySelectorAll('textarea');

  for (var i = 0; i < inputsTel.length; i += 1) {
    var maskTel = new IMask(
      inputsTel[i], {
        mask: '+{7}(000)000-00-00',
      }
    );
  }

  for (var i = 0; i < textareas.length; i += 1) {
    textareas[i].innerHTML = textareas[i].innerHTML.trim();
  }

})();

objectFitImages();
svg4everybody();
picturefill();
// new WOW().init();

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

(function($) {
	'use strict';
	$(function() {

    var section = $('.js-map');

    if(section) {
      if ($(window).outerWidth() > 919) {
        var pl = [
          {
            coords: [44.492170, 34.141103],
            balloonContent: '10-й микрорайон Ялта',
            number: '01',
            text: 'Детский сад',
          },
          {
            coords: [44.494856, 34.118491],
            balloonContent: 'ул. Кирова, 156, Ялта',
            number: '02',
            text: 'Зоопарк «Сказка»',
          },
          {
            coords: [44.493717, 34.126998],
            balloonContent: 'Большевистская ул., 10, Ялта, ТЦ Конфетти',
            number: '03',
            text: 'ТЦ «Конфети»',
          },
          {
            coords: [44.500962, 34.137809],
            balloonContent: 'Городской округ Ялта',
            number: '04',
            text: 'Заповедник',
          },
          {
            coords: [44.481480, 34.151854],
            balloonContent: 'ул. Коммунаров, 7А, Ялта',
            number: '05',
            text: 'Аквапарк «Атлантида»',
          },
          {
            coords: [44.476869, 34.155717],
            balloonContent: 'Виноградная ул., 95, п. г. т. Ливадия',
            number: '06',
            text: 'СПА-отель Ливадийский',
          },
          {
            coords: [44.485126, 34.122156],
            balloonContent: 'Бахчисарайское ш., 17А, п. г. т. Виноградное',
            number: '07',
            text: 'Дельфинарий «Акватория»',
          },
          {
            coords: [44.486263, 34.149817],
            balloonContent: 'улица Достоевского, Ялта',
            number: '08',
            text: 'Ресторан «Астория»',
          },
          {
            coords: [44.482567, 34.136282],
            balloonContent: 'Ялта',
            number: '09',
            text: 'Школа №123',
          },
          {
            coords: [44.493893, 34.151291],
            balloonContent: '10-й микрорайон, Ялта',
            number: '10',
            text: 'Больница детская',
          },
        ];

        ymaps.ready(function () {
          if ($(window).width() < 1640) {
            var zoom = 14;
        	} else {
            var zoom = 15;
          }

          var map = new ymaps.Map('map', {
              center: [44.491723, 34.152510],
              zoom: zoom,
              scrollZoom: false,
              controls: [],
            }, {
                searchControlProvider: 'yandex#search',
                yandexMapDisablePoiInteractivity: true,
            }), menu = $('<ol class="map-list"/>');

            map.behaviors.disable('scrollZoom');
            map.controls.add('zoomControl');
            var roadcontrolState = map.controls.get('zoomControl').state.get('size');
            map.controls.get('zoomControl').options.set('size', 'small');

            for (var i = 0; i < pl.length; i += 1) {
              var Placemark = new ymaps.Placemark(pl[i].coords, {
                  balloonContent: pl[i].balloonContent,
                  iconContent: '<button type="button" class="map__pin pin-' + (i + 1) + ' js-pin"><span class="map__pin-number">' + pl[i].number + '</span></button>'
              }, {
                  iconLayout: 'default#imageWithContent',
                  iconImageSize: [40, 50],
                  iconImageOffset: [-20, -50],
                  iconImageHref: '',
              });

              map.geoObjects.add(Placemark);
            }

            for (var i = 0; i < pl.length; i += 1) {
              var menuItem = $('<li class="map-list__item"><button data-pin="pin-' + (i + 1) + '" type="button" class="map-list__button js-button-pin">' + pl[i].text + '</button></li>');

              menuItem
                .appendTo(menu)
                .find('.js-button-pin')

                .on('mouseover', function() {
                  var btn = $(this);
                  var atr = btn.attr('data-pin');

                  var pins=section.find('.js-pin');
                  var btns=section.find('.js-button-pin');

                  pins.removeClass('active');

                  btns.parent().removeClass('active');

                  section.find('.' + atr).toggleClass('active');
                  $(this).parent().toggleClass('active');
                });
          }

          menu.appendTo($('.js-map-list'));
        })
      }
    }

	});
})(jQuery);

// (function() {
//   var btnsClose = document.querySelectorAll('.js-close-modal');
//   var modals = document.querySelectorAll('.js-modal');
//   var overlays = document.querySelectorAll('.js-overlay-modal');
//   var btnsCallback = document.querySelectorAll('.js-open-callback');
//   var callback = document.querySelector('.js-modal-callback');
//   var ESC = 27;
//
//   var closeModal = function() {
//     for (var i = 0; i < modals.length; i += 1) {
//       modals[i].classList.remove('active');
//     }
//   }
//
//   // Закрывает модальное окно по клику на крестик
//   for (var i = 0; i < btnsClose.length; i += 1) {
//     btnsClose[i].addEventListener('click', function(e) {
//       e.preventDefault();
//       e.currentTarget.parentNode.parentNode.classList.remove('active');
//     });
//   }
//
//   // Закрывает модальное окно по клику на оверлей
//   for (var i = 0; i < overlays.length; i += 1) {
//     overlays[i].addEventListener('click', function(e) {
//       e.preventDefault();
//       e.currentTarget.parentNode.classList.remove('active');
//     });
//   }
//
//   // включает модальное окно "Записаться на прием"
//   for (var i = 0; i < btnsCallback.length; i += 1) {
//     btnsCallback[i].addEventListener('click', function(e) {
//       e.preventDefault();
//       callback.classList.add('active');
//     });
//   }
//
//   var onEscKeyup = function(e) {
//     if (e.keyCode === ESC) {
//       e.preventDefault();
//       close();
//     }
//   };
//
//   document.addEventListener('keyup', onEscKeyup);
// })()

(function($) {
	'use strict';
	$(function() {

    $('.js-parallax').parallaxContent({
      shift: 20,
      duration: 1
    });

	});
})(jQuery);

'use strict';

(function() {

  var tabsDiarySlider = new Swiper('.js-tabs-diary-slider', {
    slidesPerView: 'auto',
    grabCursor: false,
    draggable: false,
    touchRatio: 0,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    spaceBetween: 15,
    navigation: {
      nextEl: '.js-tabs-diary-next',
      prevEl: '.js-tabs-diary-prev',
      disabledClass: 'disabled',
    },
    breakpoints: {
      919: {
        slidesPerView: 1,
        grabCursor: true,
        draggable: true,
      }
    }
  });

  var diarySlider = new Swiper('.js-diary-slider', {
    slidesPerView: 1,
    touchRatio: 0,
    thumbs: {
      swiper: tabsDiarySlider,
    },
    navigation: {
      nextEl: '.js-tabs-diary-next',
      prevEl: '.js-tabs-diary-prev',
      disabledClass: 'disabled',
      clickable: true,
    },
  });

  var diaryItemSlider = new Swiper('.js-diary-item-slider', {
    slidesPerView: 1,
    grabCursor: true,
    navigation: {
      nextEl: '.js-diary-item-next',
      prevEl: '.js-diary-item-prev',
      clickable: true,
      disabledClass: 'disabled',
    },
  });

})();

'use strict';

(function() {

  var myNum;
  var myNum1;
  var featuresImageSlider = new Swiper('.js-features-image-slider', {
    loop: true,
    loopedSlides: 9,
    grabCursor: false,
    slidesPerView: 1,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.js-features-next',
      prevEl: '.js-features-prev',
      clickable: true,
      disabledClass: 'disabled',
    },
    pagination: {
      el: '.js-features-fraction-current',
      type: 'fraction',
      clickable: true,
      formatFractionCurrent: function (number) {
        switch(number)
          {
            case 1:
              myNum='01';
              break;
            case 2:
              myNum='02';
              break;
            case 3:
              myNum='03';
              break;
            case 4:
              myNum='04';
              break;
            case 5:
              myNum='05';
              break;
            case 6:
              myNum='06';
              break;
            case 7:
              myNum='07';
              break;
            case 8:
              myNum='08';
              break;
            case 9:
              myNum='09';
              break;
            default: myNum= number
         }
        return myNum;
      },
      formatFractionTotal: function (number) {
        switch(number)
          {
            case 1:
              myNum1='01';
              break;
            case 2:
              myNum1='02';
              break;
            case 3:
              myNum1='03';
              break;
            case 4:
              myNum1='04';
              break;
            case 5:
              myNum1='05';
              break;
            case 6:
              myNum1='06';
              break;
            case 7:
              myNum1='07';
              break;
            case 8:
              myNum1='08';
              break;
            case 9:
              myNum1='09';
              break;
            default: myNum1 = number
          }
        return myNum1;
      },
    },
    breakpoints: {
      1249: {
        slidesPerView: 1,
      },
      919: {
        slidesPerView: 'auto',
        centeredSlides: true,
        pagination: {
          el: '.js-features-bullet-mob',
          clickable: true,
          bulletClass: 'bullet-dark',
        },
      },
    }
  });

  var featuresTextSlider = new Swiper('.js-features-text-slider', {
    loop: true,
    loopedSlides: 9,
    slidesPerView: 1,
    grabCursor: false,
    navigation: {
      nextEl: '.js-features-next',
      prevEl: '.js-features-prev',
      clickable: true,
      disabledClass: 'disabled',
    },
    thumbs: {
      swiper: featuresImageSlider,
    },
    pagination: {
      el: '.js-features-bullet-desk',
      clickable: true,
    },
    breakpoints: {
      919: {
        slidesPerView: 1,
        grabCursor: true,
        pagination: {
          el: '.js-features-bullet-mob',
          clickable: true,
          bulletClass: 'bullet-dark',
        },
      },
    }
  });

  var featuresTextSlider2 = undefined;
  var featuresImageSlider2 = undefined;

  function initSlider() {
    var screenWidth = parseInt(window.innerWidth, 10);
    // if ( (screenWidth > (919)) && (featuresTextSlider2 == undefined)) {
    //   featuresTextSlider2 = new Swiper('.js-features-text-slider', {
    //     loop: true,
    //     loopedSlides: 9,
    //     pagination: {
    //       el: '.js-features-progressbar',
    //       clickable: true,
    //       type: 'progressbar',
    //     },
    //     navigation: {
    //       nextEl: '.js-features-next',
    //       prevEl: '.js-features-prev',
    //       clickable: true,
    //       disabledClass: 'disabled',
    //     },
    //   });
    // } else if ((screenWidth < 920) && (featuresTextSlider2 != undefined)) {
    //   featuresTextSlider2.destroy();
    //   featuresTextSlider2 = undefined;
    // }
    if ( (screenWidth > (919)) && (featuresImageSlider2 == undefined)) {
      featuresImageSlider2 = new Swiper('.js-features-image-slider', {
        loop: true,
        loopedSlides: 9,
        grabCursor: false,
        navigation: {
          nextEl: '.js-features-next',
          prevEl: '.js-features-prev',
          clickable: true,
          disabledClass: 'disabled',
        },
        pagination: {
          el: '.js-features-fraction-total',
          type: 'fraction',
          clickable: true,
          formatFractionTotal: function (number) {
            switch(number)
              {
                case 1:
                  myNum1='01';
                  break;
                case 2:
                  myNum1='02';
                  break;
                case 3:
                  myNum1='03';
                  break;
                case 4:
                  myNum1='04';
                  break;
                case 5:
                  myNum1='05';
                  break;
                case 6:
                  myNum1='06';
                  break;
                case 7:
                  myNum1='07';
                  break;
                case 8:
                  myNum1='08';
                  break;
                case 9:
                  myNum1='09';
                  break;
                default: myNum1 = number
              }
            return myNum1;
          },
        },
      });
    } else if ((screenWidth < 920) && (featuresImageSlider2 != undefined)) {
      featuresImageSlider2.destroy();
      featuresImageSlider2 = undefined;
    }
  }

  initSlider();

  window.addEventListener('resize', function() {
    initSlider();
  });

})();

'use strict';

(function() {

  var initSlider = function() {
    if ($(window).outerWidth() > 919) {
      var houseCardSlider = new Swiper('.js-house-card-w-slider', {
        grabCursor: true,
        slidesPerView: 1,
        navigation: {
          nextEl: '.js-house-card-w-slider-next',
          prevEl: '.js-house-card-w-slider-prev',
          clickable: true,
          disabledClass: 'disabled',
        },
      });
    }
  }

  initSlider();

  window.addEventListener('resize', function() {
    initSlider();
  });

})();

'use strict';

(function() {
  var housePLanSlider = undefined;

  function initHousePLanSlider() {
    var screenWidth = $(window).outerWidth();
    if ((screenWidth < (920)) && (housePLanSlider == undefined)) {
      housePLanSlider = new Swiper('.js-house-plan-slider', {
        loop: true,
        grabCursor: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
          el: '.js-house-plan-bullet',
          clickable: true,
          bulletClass: 'bullet-gray',
        },
      });
    } else if ((screenWidth > 919) && (housePLanSlider != undefined)) {
      housePLanSlider.destroy();
      housePLanSlider = undefined;
      var housePLan = $('.js-house-plan-slider');
      housePLan.find('.swiper-wrapper').removeAttr('style');
      housePLan.find('.swiper-slide').removeAttr('style');
    }
  }

  initHousePLanSlider();

  $(window).resize(function() {
    initHousePLanSlider();
  });

})();

'use strict';

(function() {
  var houseTopSlider = undefined;

  function inithouseTopSlider() {
    var screenWidth = $(window).outerWidth();
    if ( (screenWidth < (920)) && (houseTopSlider == undefined)) {
      houseTopSlider = new Swiper('.js-house-top-slider', {
        loop: true,
        grabCursor: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
          el: '.js-house-top-bullet',
          clickable: true,
          bulletClass: 'bullet-gray',
        },
      });
    } else if ((screenWidth > 919) && (houseTopSlider != undefined)) {
      houseTopSlider.destroy();
      houseTopSlider = undefined;
      var houseTop = $('.js-house-top-slider');
      houseTop.find('.swiper-wrapper').removeAttr('style');
      houseTop.find('.swiper-slide').removeAttr('style');
    }
  }

  inithouseTopSlider();

  $(window).resize(function() {
    inithouseTopSlider();
  });


  if ($(window).outerWidth() > 919) {
    var houseTop = document.querySelector('.house-top');

    if (houseTop) {
      var houseTopCardSlider1 = new Swiper('.house-top .js-house-card-w-slider.js-slider-1', {
        loop: true,
        grabCursor: true,
        slidesPerView: 1,
        autoHeight: 'auto',
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.js-house-card-w-slider-next',
          prevEl: '.js-house-card-w-slider-prev',
          clickable: true,
          disabledClass: 'disabled',
        },
      });

      var houseTopCardSlider2 = new Swiper('.house-top .js-house-card-w-slider.js-slider-2', {
        loop: true,
        grabCursor: true,
        slidesPerView: 1,
        autoHeight: 'auto',
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.js-house-card-w-slider-next',
          prevEl: '.js-house-card-w-slider-prev',
          clickable: true,
          disabledClass: 'disabled',
        },
      });

      var houseTopCardSlider3 = new Swiper('.house-top .js-house-card-w-slider.js-slider-3', {
        loop: true,
        grabCursor: true,
        slidesPerView: 1,
        autoHeight: 'auto',
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.js-house-card-w-slider-next',
          prevEl: '.js-house-card-w-slider-prev',
          clickable: true,
          disabledClass: 'disabled',
        },
      });
    }
  }

})();

(function($) {
	'use strict';
	$(function() {

    var newsSlider = undefined;

    function initNewsSlider() {
      var screenWidth = $(window).outerWidth();
      if ( (screenWidth < (920)) && (newsSlider == undefined)) {
        newsSlider = new Swiper('.js-news-slider', {
          loop: true,
          grabCursor: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          pagination: {
            el: '.js-news-bullet',
            clickable: true,
            bulletClass: 'bullet-gray',
          },
        });
      } else if ((screenWidth > 919) && (newsSlider != undefined)) {
        newsSlider.destroy();
        newsSlider = undefined;
        var news = $('.js-news-slider');
        news.find('.swiper-wrapper').removeAttr('style');
        news.find('.swiper-slide').removeAttr('style');
      }
    }

    initNewsSlider();

    $(window ).resize(function() {
      initNewsSlider();
    });

	});
})(jQuery);

'use strict';

(function() {

  var tabsSmall= document.querySelectorAll('.js-tabs-small');

  var tabs = document.querySelectorAll('.js-tabs');

  var switchTabs = function (tabs, btns, contents, classContents) {
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
        tabs.querySelector('.' + classContents + '.' + atr).classList.add('active');
      });
    }
  };

  if(tabs) {
    for (var i = 0; i < tabs.length; i += 1) {
      var btnsTabs = tabs[i].querySelectorAll('.js-tabs-button');
      var contentsTabs = tabs[i].querySelectorAll('.js-tabs-content');
      switchTabs(tabs, btnsTabs, contentsTabs, 'js-tabs-content');
    }
  }

  // табы на мобильной версии
  var initTabsSmall = function() {
    if(parseInt(window.innerWidth, 10) < 920) {
      if(tabsSmall) {

        for (var i = 0; i < tabsSmall.length; i += 1) {
          var btnsTabsSmall = tabsSmall[i].querySelectorAll('.js-tabs-small-button');
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

'use strict';

(function() {
  var btns = document.querySelectorAll('.js-button-video');

  if(btns){
    var videoModal = document.querySelector('.js-modal-video');
    var video = videoModal.querySelector('.js-modal-video-iframe');
    var overlay = videoModal.querySelector('.js-modal-overlay');
    var btnClose = videoModal.querySelector('.js-modal-close');

    for (var i = 0; i < btns.length; i++) {
      if(parseInt(window.innerWidth, 10) > 1023) {
        var videoItem = btns[i].parentNode.parentNode;
        var atr = videoItem.getAttribute('data-video-id');
        videoItem.querySelector('.js-video-preview').style.backgroundImage = 'url(https://img.youtube.com/vi/' + atr + '/0.jpg)';
      }

      btns[i].addEventListener('click', function(e) {
        e.preventDefault();

        var btnVideo = e.currentTarget;
        var videoItem = btnVideo.parentNode.parentNode;
        var atr = videoItem.getAttribute('data-video-id');

        videoModal.classList.add('active');
        video.src = 'https://www.youtube.com/embed/' + atr+ '?enablejsapi=1&autoplay=1';
        video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      })
    }

    btnClose.addEventListener('click', function(e) {
      videoModal.classList.remove('active');
      video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });

    overlay.addEventListener('click', function(e) {
      videoModal.classList.remove('active');
      video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });
  }
})();
