$(".icon").click(function () {
  $(".mobileMenu").toggleClass("none");
  $(".icon").toggleClass("none");
});

$(".nav-link").click(function () {
  $(".mobileMenu").toggleClass("none");
  $(".icon").toggleClass("none");
});

var clickCount = 0;
$("#catchTheFlash").on("click", function () {
  clickCount++;
  if (clickCount % 2 === 1) {
    alert(
      "You clicked Catch the Flash \n\nLet's play catch the flash game. The flash will now run on the screen from left to right in full speed. Click on him to catch him."
    );
    $("#runBarryRun").toggleClass("hide");
    $("#catchTheFlash").html('Quit catch the flash');
  } else {
    alert("Quit the game? \nYou can always click the button to play again.");
    $("#runBarryRun").toggleClass("hide");
    $("#catchTheFlash").html("Play catch the flash");
  }
});

$(document).ready(function () {
  $(".section:not(:first)").hide();
  $("a").on("click", function () {
    $(".section").hide();
    $("a").removeClass("active");
    var id = $(this).attr("id");
    $("#section" + id.charAt(0).toUpperCase() + id.slice(1)).show();
    $(this).addClass("active");
  });
});
