

/**
 * Point Animation
 */
$(".point").on("click", function (e) {
  var getTotalPoints = $(".point").length,
    getIndex = $(this).index(),
    getCompleteIndex = $(".point--active").index();

  TweenMax.to($(".bar__fill"), 0.6, {
    width: ((getIndex - 1) / (getTotalPoints - 1)) * 100 + "%"
  });

  if ((getIndex) => getCompleteIndex) {
    $(".point--active")
      .addClass("point--complete")
      .removeClass("point--active");

    $(this).addClass("point--active");
    $(this).prevAll().addClass("point--complete");
    $(this).nextAll().removeClass("point--complete");
  }
});

/*
  Demo Purposes
*/
var progressAnimation = function () {
  var getTotalPoints = $(".point").length,
    getIndex = Math.floor(Math.random() * 4) + 1,
    getCompleteIndex = $(".point--active").index();

  TweenMax.to($(".bar__fill"), 0.6, {
    width: ((getIndex - 1) / (getTotalPoints - 1)) * 100 + "%"
  });

  if ((getIndex) => getCompleteIndex) {
    $(".point--active")
      .addClass("point--complete")
      .removeClass("point--active");

    $(".point:nth-child(" + (getIndex + 1) + ")").addClass("point--active");
    $(".point:nth-child(" + (getIndex + 1) + ")")
      .prevAll()
      .addClass("point--complete");
    $(".point:nth-child(" + (getIndex + 1) + ")")
      .nextAll()
      .removeClass("point--complete");
  }
};


