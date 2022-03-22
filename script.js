let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");
let score0El = document.getElementById("score--0");
let score1El = document.getElementById("score--1");
let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
let current1El = document.getElementById("current--0");
let current2El = document.getElementById("current--1");
let btnNewGame = document.querySelector(".btn--new");


score0El.textContent = 0;
score1El.textContent = 0;
let playing = true;
diceEl.classList.add("hidden");

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

let switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle("player--active");
    player2.classList.toggle("player--active");
}

btnRoll.addEventListener("click", () => {
  if (playing){
  let rollDice = Math.trunc(Math.random() * 6) + 1;
  console.log(rollDice);
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${rollDice}.png`;

  if (rollDice !== 1) {
    currentScore += rollDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer()
  }}

});

btnHold.addEventListener("click", function(){
if (playing){
scores[activePlayer] += currentScore;
document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
if(scores[activePlayer]>= 20){
  playing = false;
  diceEl.classList.add("hidden");
  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  if (activePlayer === 0 ){
  alert(`game over player 1 won`)
}
else{
  alert(`game over player 2 won`)
}
}
switchPlayer()
}
})


btnNewGame.addEventListener( 'click', function(){
  location.reload();
})