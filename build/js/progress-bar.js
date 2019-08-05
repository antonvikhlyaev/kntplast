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
