// This is where your project starts.

console.log('Your project is running...'); 

// Your game should meet these other requirements:
// start(): the function that starts everything
// Creates cards
// Puts cards in a deck
// Creates a new round using the deck
// Invokes printMessage(deck) to display the message in the CLI
// Invokes printQuestion(round) to kick off our helper functions that allow interaction via the CLI

const { prototypeData } = require('./src/data.js');
const { createCard} = require('./src/card.js');
const { createDeck } = require('./src/deck.js');
const { createRound } = require('./src/round.js');
const { printMessage, printQuestion } = require('./src/game.js');

function start() {
  const cards = prototypeData.map((e) => {
    return createCard(e.id, e.question, e.answers, e.correctAnswer);
  });
  const deck = createDeck(cards);
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
}

start();
