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
