var i = 0;
var pos = 0;
var size = 0;
var menuStatus = 0;

jQuery(document).ready(function () {
  $(window).resize(function () {
    size = $(window).width();
    if (menuStatus === 0) {
      $(".menu-list").css("opacity", "0");
      $(".menu-list").css("visibility", "hidden");
    } else {
      if (size > 1100) {
        $(".menu").css("background-color", "var(--transparent)");
        $(".menu").css("border-bottom", "3px solid var(--border)");
        $(".menu").css("border-right", "none");
        $(".menu-item-txt").css("color", "var(--txt-color)");
        menuStatus = 1;
      } else {
        if (pos < 500) {
          $(".menu").css("background-color", "var(--txt-color2)");
          $(".menu").css("border-bottom", "none");
          $(".menu").css("border-right", "3px solid var(--border)");
          $(".menu-item-txt").css("color", "var(--txt-color)");
          menuStatus = 1;
        } else {
          $(".menu").css("background-color", "var(--transparent)");
          $(".menu").css("border-bottom", "none");
          $(".menu").css("border-right", "3px solid var(--border)");
          $(".menu-item-txt").css("color", "var(--txt-color2)");
          menuStatus = 1;
        }
      }
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

  $(".menu-box-scroll").click(function () {
    if (i % 2 === 0) {
      //   $(".menu-list").css("transform", "translateX(100vh)");
      $(".menu-list").css("opacity", "0");
      $(".menu-list").css("visibility", "hidden");
      $(".menu").css("border-bottom", "none");
      $(".menu").css("border-right", "none");
      $(".menu").css("background-color", "transparent");
      $(".menu-box-scroll").css("animation", "rotate1 0.3s linear");
      $(".menu-list").css("transition", "0.5s");
      menuStatus = 0;

      i++;
    } else {
      if ((pos < 500 && size > 1100) || (pos > 500 && size > 1100)) {
        $(".menu").css("background-color", "var(--transparent)");
        $(".menu").css("border-bottom", "3px solid var(--border)");
        $(".menu").css("border-right", "none");
        $(".menu-item-txt").css("color", "var(--txt-color)");

        $(".menu-list").css("opacity", "1");
        $(".menu-list").css("visibility", "visible");
        $(".menu-box-scroll").css("transform", "rotate(0deg)");
        $(".menu-box-scroll").css("animation", "rotate2 0.3s linear");
        $(".menu-list").css("transition", "0.5s");
        i++;
        menuStatus = 1;
      } else if (pos < 500 && size <= 1100) {
        $(".menu").css("background-color", "var(--txt-color2)");
        $(".menu").css("border-bottom", "none");
        $(".menu").css("border-right", "3px solid var(--border)");
        $(".menu-item-txt").css("color", "var(--txt-color)");

        $(".menu-list").css("opacity", "1");
        $(".menu-list").css("visibility", "visible");
        $(".menu-box-scroll").css("transform", "rotate(0deg)");
        $(".menu-box-scroll").css("animation", "rotate2 0.3s linear");
        $(".menu-list").css("transition", "0.5s");
        i++;
        menuStatus = 1;
      } else {
        $(".menu").css("background-color", "var(--transparent)");
        $(".menu").css("border-bottom", "none");
        $(".menu").css("border-right", "3px solid var(--border)");
        $(".menu-item-txt").css("color", "var(--txt-color2)");

        $(".menu-list").css("opacity", "1");
        $(".menu-list").css("visibility", "visible");
        $(".menu").css("background-color", "var(--transparent)");
        $(".menu-box-scroll").css("transform", "rotate(0deg)");
        $(".menu-box-scroll").css("animation", "rotate2 0.3s linear");
        $(".menu-list").css("transition", "0.5s");
        i++;
        menuStatus = 1;
      }
    }
  });
});
