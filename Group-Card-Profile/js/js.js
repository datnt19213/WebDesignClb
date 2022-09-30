let n = 0;
let m = 0;
let k = 0;
jQuery(document).ready(function () {
  $(".next").click(function () {
    k = 1;
    n++;
    if (n === 1) {
      $(".card-item").css("transform", "translateX(-160vh)");
      $(".card-item").css("transition", "ease-in-out 0.3s");
      $(".dot1").css("opacity", "0.3");
      $(".dot2").css("opacity", "1");
      $(".dot3").css("opacity", "0.3");
    } else if (n === 2) {
      $(".card-item").css("transform", "translateX(-320vh)");
      $(".card-item").css("transition", "ease-in-out 0.3s");
      $(".dot1").css("opacity", "0.3");
      $(".dot2").css("opacity", "0.3");
      $(".dot3").css("opacity", "1");
    } else {
      $(".card-item").css("transform", "translateX(0vh)");
      $(".card-item").css("transition", "ease-in-out 0.3s");
      $(".dot1").css("opacity", "1");
      $(".dot2").css("opacity", "0.3");
      $(".dot3").css("opacity", "0.3");
      n = 0;
    }
  });
  $(".prev").click(function () {
    m++;
    if (m === 1) {
      $(".card-item").css("transform", "translateX(-320vh)");
      $(".card-item").css("transition", "ease-in-out 0.3s");
      $(".dot1").css("opacity", "0.3");
      $(".dot2").css("opacity", "0.3");
      $(".dot3").css("opacity", "1");
    } else if (m === 2) {
      $(".card-item").css("transform", "translateX(-160vh)");
      $(".card-item").css("transition", "ease-in-out 0.3s");
      $(".dot1").css("opacity", "0.3");
      $(".dot2").css("opacity", "1");
      $(".dot3").css("opacity", "0.3");
    } else {
      $(".card-item").css("transform", "translateX(0vh)");
      $(".card-item").css("transition", "ease-in-out 0.3s");
      $(".dot1").css("opacity", "1");
      $(".dot2").css("opacity", "0.3");
      $(".dot3").css("opacity", "0.3");
      m = 0;
    }
  });
  $(".dot1").click(function () {
    $(".card-item").css("transform", "translateX(0vh)");
    $(".card-item").css("transition", "ease-in-out 0.3s");
    $(".dot1").css("opacity", "1");
    $(".dot2").css("opacity", "0.3");
    $(".dot3").css("opacity", "0.3");
    m = 2;
    n = 0;
  });
  $(".dot2").click(function () {
    $(".card-item").css("transform", "translateX(-160vh)");
    $(".card-item").css("transition", "ease-in-out 0.3s");
    $(".dot1").css("opacity", "0.3");
    $(".dot2").css("opacity", "1");
    $(".dot3").css("opacity", "0.3");
    m = 1;
    n = 1;
  });
  $(".dot3").click(function () {
    $(".card-item").css("transform", "translateX(-320vh)");
    $(".card-item").css("transition", "ease-in-out 0.3s");
    $(".dot1").css("opacity", "0.3");
    $(".dot2").css("opacity", "0.3");
    $(".dot3").css("opacity", "1");
    m = 0;
    n = 2;
  });

  //   $(".mess").click(function () {
  //     k = 0;
  //     if (k === 0) {
  //       await(slide2(), 1300);
  //       await(slide3(), 2600);
  //       await(slide1(), 3900);
  //     } else {
  //       k = 1;
  //     }
  //   });
});

// function slide2() {
//   $(".card-item").css("transform", "translateX(-160vh)");
//   $(".card-item").css("transition", "ease-in-out 0.3s");
// }
// function slide3() {
//   $(".card-item").css("transform", "translateX(-320vh)");
//   $(".card-item").css("transition", "ease-in-out 0.3s");
// }
// function slide1() {
//   $(".card-item").css("transform", "translateX(-00vh)");
//   $(".card-item").css("transition", "ease-in-out 0.3s");
// }
