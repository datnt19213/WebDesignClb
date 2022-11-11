var i = 0;
var pos = 0;

jQuery(document).ready(function () {
  $(".menu-box-scroll").click(function () {
    if (i % 2 === 0) {
      //   $(".menu-list").css("transform", "translateX(100vh)");
      $(".menu-list").css("opacity", "0");
      $(".menu-list").css("visibility", "hidden");
      $(".menu").css("border-bottom", "none");
      $(".menu").css("background-color", "transparent");
      $(".menu-box-scroll").css("animation", "rotate1 0.3s linear");
      $(".menu-list").css("transition", "0.5s");
      i++;
    } else {
      //   $(".menu-list").css("transform", "translateX(0vh)");
      $(".menu-list").css("opacity", "1");
      $(".menu-list").css("visibility", "visible");
      $(".menu").css("border-bottom", "3px solid var(--border)");
      $(".menu").css("background-color", "var(--transparent)");
      $(".menu-box-scroll").css("transform", "rotate(0deg)");
      $(".menu-box-scroll").css("animation", "rotate2 0.3s linear");
      $(".menu-list").css("transition", "0.5s");
      i++;
    }
  });
  $(window).scroll(function () {
    pos = $("html").scrollTop();
    if (pos < 500) {
      $(".scrollTop").css("display", "none");
    } else {
      $(".scrollTop").css("display", "block");
    }
  });

  $(".scrollTop").click(function () {
    $("html").scrollTop(0);
  });
//   $(window).resize(function () {
//     window.resizeTo(1024, 800);
//   });
});
