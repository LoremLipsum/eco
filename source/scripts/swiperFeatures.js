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
