'use strict';

(function() {
  var section = document.querySelector('#js-contacts-map');

  if(section) {
    if(parseInt(window.innerWidth, 10) < 920) {
      var center = [44.495731, 34.123411];
      var zoom = 15;
      var size = [64, 67];
      var offset = [-20, -50]
    } else if (parseInt(window.innerWidth, 10) > 919 && parseInt(window.innerWidth, 10) < 1250){
      var center = [44.495863, 34.124459];
      var zoom = 17;
      var size = [74, 78];
      var offset = [-25, -60];
    } else {
      var center = [44.495527, 34.125038];
      var zoom = 17;
      var size = [84, 88];
      var offset = [-30, -70];
    }

    ymaps.ready(function () {
      var map = new ymaps.Map('js-contacts-map', {
        center: center,
        zoom: zoom,
        scrollZoom: false,
        controls: []
      }, {
        searchControlProvider: 'yandex#search'
      }),
      Placemark = new ymaps.Placemark([44.497561, 34.123285], {
        balloonContent: 'г. Ялта, ул. Большевистская, 100'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/images/pin-contacts.png',
        iconImageSize: size,
        iconImageOffset: offset,
      });

      map.geoObjects.add(Placemark);
      map.behaviors.disable('scrollZoom');
      map.controls.add('zoomControl');
      var roadcontrolState = map.controls.get('zoomControl').state.get('size');
      map.controls.get('zoomControl').options.set('size', 'small');
    });
  }
})();
