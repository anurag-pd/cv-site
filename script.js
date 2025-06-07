$(function () {
  $(window).scroll(function () {
    var sT = $(window).scrollTop();
    if (sT > 700) {
      $("#topScroll").fadeIn(250);
    } else {
      $("#topScroll").fadeOut(250);
    }
  });

  $("#topScroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
