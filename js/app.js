$(document).ready(function () {
  /* handle the clicks on the home and away game pics */
  $(".homeTeam").on("click", function() {
    pickHomeTeam($(this).closest(".game"));
  });
  $(".awayTeam").on("click", function() {
    pickAwayTeam($(this).closest(".game"));
  });
  $(".upArrow").on("click", function() {
    alert("UpArrow click");
    moveRowUp($(this).closest("game"));
  });
  $(".downArrow").on("click", function() {
    alert("DownArrow click");
    moveRowDown($(this).closest("game"));
  });
});

function pickHomeTeam(game) {
  var home = game.find(".homeTeam");
  var away = game.find(".awayTeam");
    away.removeClass('selected');
    away.addClass('unselected');
    home.removeClass('unselected');
    home.addClass('selected');
};
function pickAwayTeam(game) {
  var home = game.find(".homeTeam");
  var away = game.find(".awayTeam");
    home.removeClass('selected');
    home.addClass('unselected');
    away.removeClass('unselected');
    away.addClass('selected');
};

function moveRowUp(game) {
  var upperSibling = game.prev();
  upperSibling.before("<p>test</p>");
};
function moveRowDown(game) {
  var lowerSibling = game.next();
  game.remove();
  lowerSibling.after(game);
}
