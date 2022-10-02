jQuery(document).ready(function () {
  $(".nav-control").click(function () {
    $(".menu-list").css("display", "block");
    $(".close-control").css("display", "block");
  });
  $(".close-control").click(function () {
    $(".menu-list").css("display", "none");
    $(".close-control").css("display", "none");
  });
});
