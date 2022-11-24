const hands = ['ROCK', 'PAPER', 'SCISSORS'];

function computerPlay() {
  let randomHand = hands[Math.floor(Math.random() * hands.length)];

  return randomHand;
}
