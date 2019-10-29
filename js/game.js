const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

function round() {
  $('.target').removeClass('target');
  $('.miss').removeClass('miss');

  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  $(divSelector).text(hits + 1);


  if (hits === 1) { firstHitTimestamp(); }
  if (hits === maxHits) { endGame();}
}

function endGame() {
  $('geme-fieled').hide();

  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 100000000000).toPrecision();
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  let target = $(event.target) 
  if (target.hasClass('target')) {
    hits = hits + 1;
    target.text('');
    round();
  } else { $(event.target).addClass('miss');}
  // TODO: как-то отмечать если мы промахнулись? См CSS класс .miss
}

function init() {
  // TODO: заказчик просил отдельную кнопку, запускающую игру а не просто по загрузке
  round();

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
}
$(document).ready(init);
