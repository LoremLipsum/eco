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
