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

  var btn = document.querySelector('.js-button-nav');
  var block = document.querySelector('.js-panel-main-nav');
  var overlay = document.querySelector('.js-header-overlay');
  var ESC = 27;

  var toggle = function() {
    block.classList.toggle('active');
    btn.classList.toggle('active');
    overlay.classList.toggle('active');
  };

  var close = function() {
    block.classList.remove('active');
    btn.classList.remove('active');
    overlay.classList.remove('active');
  };

  var onBtnClick = function(e) {
    e.preventDefault();
    toggle();
  };

  var onCloseClick = function(e) {
    e.preventDefault();
    close();
  };

  var onEscKeyup = function(e) {
    if (e.keyCode === ESC) {
      e.preventDefault();
      close();
    }
  };

  btn.addEventListener('click', onBtnClick);
  overlay.addEventListener('click', onCloseClick);
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
                .on('click', function() {
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
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
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
    loopedSlides: 5,
    grabCursor: false,
    slidesPerView: 1,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    activeIndex: 1,
    pagination: {
      el: '.js-features-fraction',
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
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      },
    }
  });

  var featuresTextSlider = new Swiper('.js-features-text-slider', {
    loop: true,
    loopedSlides: 5,
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
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      },
    }
  });

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
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
        });
      } else if ((screenWidth > 919) && (newsSlider != undefined)) {
        newsSlider.destroy();
        newsSlider = undefined;
        var news = document.querySelector('.js-news-slider');
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
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.js-house-top-bullet',
          clickable: true,
          bulletClass: 'bullet-gray',
        },
      });
    } else if ((screenWidth > 919) && (houseTopSlider != undefined)) {
      houseTopSlider.destroy();
      houseTopSlider = undefined;
      var houseCard = $('.js-house-top-slider');
      houseCard.find('.swiper-wrapper').removeAttr('style');
      houseCard.find('.swiper-slide').removeAttr('style');
    }
  }

  inithouseTopSlider();

  $(window).resize(function() {
    inithouseTopSlider();
  });


  if ($(window).outerWidth() > 919) {
    houseCardSlider = new Swiper('.js-house-card-slider', {
      loop: true,
      grabCursor: true,
      slidesPerView: 1,
      autoHeight: 'auto',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.js-house-card-next',
        prevEl: '.js-house-card-prev',
        clickable: true,
        disabledClass: 'disabled',
      },
    });
  }

})();

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
