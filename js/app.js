$(document).ready(function() {
  /* handle the clicks on the home and away game pics */
  $(".homeTeam").on("click", function() {
    pickHomeTeam($(this).closest(".game"));
  });
  $(".awayTeam").on("click", function() {
    pickAwayTeam($(this).closest(".game"));
  });
  $(".upArrow").on("click", function() {
    moveRowUp($(this).closest(".game"));
  });
  $(".downArrow").on("click", function() {
    moveRowDown($(this).closest(".game"));
  });
});

function pickHomeTeam(game) {
  var home = game.find(".homeTeam");
  var away = game.find(".awayTeam");
  away.removeClass('selected');
  away.addClass('unselected');
  home.removeClass('unselected');
  home.addClass('selected');
}

function pickAwayTeam(game) {
  var home = game.find(".homeTeam");
  var away = game.find(".awayTeam");
  home.removeClass('selected');
  home.addClass('unselected');
  away.removeClass('unselected');
  away.addClass('selected');
}

function moveRowUp(game) {
  // get the row above this one
  var upperSibling = game.prev();

  // update the points for both rows
  var pts = game.find(".points");
  pts.text(Number(pts.text()) + 1);
  pts = upperSibling.find(".points");
  pts.text(Number(pts.text()) - 1);

  // switch the rows
  upperSibling.before(game);

  // update arrows
  var arrow = upperSibling.find(".firstUpArrow");
  if (arrow.length) {
    arrow.removeClass("firstUpArrow");
    game.find(".upArrow").addClass("firstUpArrow");
  }
  arrow = game.find(".lastDownArrow");
  if (arrow.length) {
    arrow.removeClass("lastDownArrow");
    upperSibling.find(".downArrow").addClass("lastDownArrow");
  }
}

function moveRowDown(game) {
  // get the row below this one
  var lowerSibling = game.next();

  // update the points for both rows
  var pts = game.find(".points");
  pts.text(Number(pts.text()) - 1);
  pts = lowerSibling.find(".points");
  pts.text(Number(pts.text()) + 1);

  // switch the rows
  lowerSibling.after(game);

  // update arrows
  var arrow = lowerSibling.find(".lastDownArrow");
  if (arrow.length) {
    arrow.removeClass("lastDownArrow");
    game.find(".downArrow").addClass("lastDownArrow");
  }
  arrow = game.find(".firstUpArrow");
  if (arrow.length) {
    arrow.removeClass("firstUpArrow");
    lowerSibling.find(".upArrow").addClass("firstUpArrow");
  }
}
