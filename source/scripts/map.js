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
