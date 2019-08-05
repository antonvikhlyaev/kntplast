// Карта на главной
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [63.463929641313776,72.25099924999998],
    zoom: 0,
    controls: []
  }),
    // Значения цветов иконок.
    placemarkColors = [
      '#DB425A'
    ],
    clusterer = new ymaps.Clusterer({
      // Макет метки кластера pieChart.
      clusterIconLayout: 'default#pieChart',
      // Радиус диаграммы в пикселях.
      clusterIconPieChartRadius: 20,
      // Радиус центральной части макета.
      clusterIconPieChartCoreRadius: 13,
      // Ширина линий-разделителей секторов и внешней обводки диаграммы.
      clusterIconPieChartStrokeWidth: 2,
      // Определяет наличие поля balloon.
      hasBalloon: false
    }),

    /* КООРДИНАТЫ ТОЧЕК НУЖНО СТАВИТЬ ЗДЕСЬ
      Сервис для удобного нахождения точек
      https://yandex.ru/map-constructor/location-tool/
      Копируем значение из пункта "Метка"
    */

    points = [
      [55.74380834436972, 37.59789931690481],
      [59.99945301081514, 30.2590321294048],
      [56.839025403674576, 60.60410189289564],
      [54.73607139703531, 55.958566374478515],
      [53.36386726449317, 55.914621061978536],
      [53.6280177054012, 55.93807386604745]
    ],
    geoObjects = [];

  for (var i = 0, len = points.length; i < len; i++) {
    geoObjects[i] = new ymaps.Placemark(points[i], {}, {
      iconColor: getRandomColor()
    });
  }

  clusterer.add(geoObjects);
  myMap.geoObjects.add(clusterer);

  myMap.setBounds(clusterer.getBounds(), {
    checkZoomRange: true
  });

  function getRandomColor() {
    return placemarkColors[Math.floor(Math.random() * placemarkColors.length)];
  }

  myMap.controls.add("zoomControl", {
    size: "small",
    position: {
      bottom: 50,
      left: 10
    }
  }),

  myMap.behaviors.disable("scrollZoom")
});
