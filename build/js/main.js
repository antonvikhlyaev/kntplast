// Открытие меню
var navToggle = document.querySelector('.main-nav__toggle');
var navMain = document.querySelector('.main-nav');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
})

// Прилипающее меню
window.onscroll = function () { myFunction() };

var header = document.querySelector('.page-header');

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("page-header--sticky");
  } else {
    header.classList.remove("page-header--sticky");
  }
}

// Прогресс-бар
$(function () {
  $(window).on("scroll resize", function () {
    var o = $(window).scrollTop() / ($(document).height() - $(window).height());
    $(".progress-bar").css({
      "width": (100 * o | 0) + "%"
    });
    $('progress')[0].value = o;
  })
});

// Карта на главной
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [53.369282, 55.879149],
    zoom: 5,
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

// Всплывающее меню
var ceilingButton = document.querySelector('.sorting__button--ceiling');
var ceilingDropdown = document.querySelector('.sorting__dropdown--ceiling');

var furnitureButton = document.querySelector('.sorting__button--furniture');
var furnitureDropdown = document.querySelector('.sorting__dropdown--furniture');

ceilingButton.addEventListener('click', function (e) {
  e.preventDefault();

  if (!furnitureDropdown.classList.contains('dropdown--closed')) {
    furnitureDropdown.classList.remove('dropdown--opened');
    furnitureDropdown.classList.add('dropdown--closed');
  }

  if (ceilingDropdown.classList.contains('dropdown--closed')) {
    ceilingDropdown.classList.remove('dropdown--closed');
    ceilingDropdown.classList.add('dropdown--opened');
  } else {
    ceilingDropdown.classList.add('dropdown--closed');
    ceilingDropdown.classList.remove('dropdown--opened');
  }
})

furnitureButton.addEventListener('click', function (e) {
  e.preventDefault();

  if (!ceilingDropdown.classList.contains('dropdown--closed')) {
    ceilingDropdown.classList.remove('dropdown--opened');
    ceilingDropdown.classList.add('dropdown--closed');
  }

  if (furnitureDropdown.classList.contains('dropdown--closed')) {
    furnitureDropdown.classList.remove('dropdown--closed');
    furnitureDropdown.classList.add('dropdown--opened');
  } else {
    furnitureDropdown.classList.add('dropdown--closed');
    furnitureDropdown.classList.remove('dropdown--opened');
  }
})
