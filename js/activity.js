$(document).ready(function () {
  $("td").click(function () {
    var cellValue = $(this).text();
    var color = $(this).css("background-color");
    if (color == "rgb(160, 201, 44)") {
      $(this).addClass("b");
    }
    if (cellValue !== "Not Available") {
      $(this).addClass("a");
      $(this).toggleClass("tdhighlight");
      if ($(this).hasClass("tdhighlight")) {
        console.log();
        $("#displaySelected").css("visibility", "visible");
        $("#displaySelected").css("margin-top", "2em");
        $("#result").append("<p>" + cellValue + "</p>");
      } else {
        $("#result p:contains(" + cellValue + ")").remove();
        if ($("#result").has("p").length == false) {
          $("#displaySelected").css("visibility", "hidden");
          $("#displaySelected").css("margin-top", "0");
        }
      }
    }
  });
});
