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


// Всплывающее меню
var ceilingButton = document.querySelector('.sorting__button--ceiling');
var ceilingDropdown = document.querySelector('.sorting__dropdown--ceiling');

var furnitureButton = document.querySelector('.sorting__button--furniture');
var furnitureDropdown = document.querySelector('.sorting__dropdown--furniture');

ceilingButton.addEventListener('click', function(e) {
  e.preventDefault();
  if (ceilingDropdown.classList.contains('dropdown--closed')) {
    ceilingDropdown.classList.remove('dropdown--closed');
    ceilingDropdown.classList.add('dropdown--opened');
  } else {
    ceilingDropdown.classList.add('dropdown--closed');
    ceilingDropdown.classList.remove('dropdown--opened');
  }
})

furnitureButton.addEventListener('click', function(e) {
  e.preventDefault();
  if (furnitureDropdown.classList.contains('dropdown--closed')) {
    furnitureDropdown.classList.remove('dropdown--closed');
    furnitureDropdown.classList.add('dropdown--opened');
  } else {
    furnitureDropdown.classList.add('dropdown--closed');
    furnitureDropdown.classList.remove('dropdown--opened');
  }
})
