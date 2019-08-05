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
