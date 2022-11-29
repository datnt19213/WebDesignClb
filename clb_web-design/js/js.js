var i = 0;
var pos = 0;
var size = 0;

jQuery(document).ready(function () {
  size = $(document).width();
  $(window).resize(function () {
    size = $(window).width();
    if (size > 1100) {
      $(".menu").css("background-color", "var(--transparent)");
      $(".menu").css("border-bottom", "3px solid var(--border)");
      $(".menu").css("border-right", "none");
      $(".menu-item-txt").css("color", "var(--txt-color)");
    } else {
      if (pos < 500) {
        $(".menu").css("background-color", "var(--txt-color2)");
        $(".menu").css("border-bottom", "none");
        $(".menu").css("border-right", "3px solid var(--border)");
        $(".menu-item-txt").css("color", "var(--txt-color)");
      } else {
        $(".menu").css("background-color", "var(--transparent)");
        $(".menu").css("border-bottom", "none");
        $(".menu").css("border-right", "3px solid var(--border)");
        $(".menu-item-txt").css("color", "var(--txt-color2)");
      }
    }
  });

  $(window).scroll(function () {
    pos = $("html").scrollTop();

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
    }

    $(".menu-list").css("opacity", "0");
    $(".menu-list").css("visibility", "hidden");
    $(".menu").css("border-bottom", "none");
    $(".menu").css("border-right", "none");
    $(".menu").css("background-color", "transparent");
    $(".menu-box-scroll").css("animation", "rotate1 0.3s linear");
    $(".menu-list").css("transition", "0.5s");

    i++;

    // if (pos < 500) {
    //   $(".scrollTop").css("display", "none");
    //   $(".menu").css("background-color", "var(--txt-color2)");
    //   $(".menu").css("border-bottom", "none");
    //   $(".menu").css("border-right", "3px solid var(--border)");
    //   $(".menu-item-txt").css("color", "var(--txt-color)");
    // } else {
    //   $(".scrollTop").css("display", "block");
    //   $(".menu").css("background-color", "var(--transparent)");
    //   $(".menu").css("border-bottom", "none");
    //   $(".menu").css("border-right", "3px solid var(--border)");
    //   $(".menu-item-txt").css("color", "var(--txt-color2)");
    // }
  });

  $(".scrollTop").click(function () {
    $("html").animate({scrollTop: 0}, 500);
  });
  $(".getstart-btn").click(function () {
    $("html").animate({scrollTop: 800}, 500);
  });

  $(".menu-box-scroll").click(function () {
    if (i % 2 === 0) {
      $(".menu-list").css("opacity", "0");
      $(".menu-list").css("visibility", "hidden");
      $(".menu").css("border-bottom", "none");
      $(".menu").css("border-right", "none");
      $(".menu").css("background-color", "transparent");
      $(".menu-box-scroll").css("animation", "rotate1 0.3s linear");
      $(".menu-list").css("transition", "0.5s");

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
      }
    }
  });
});
