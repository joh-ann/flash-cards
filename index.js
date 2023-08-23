console.log('Your project is running...'); 

const { prototypeData } = require('./src/data.js');
const { createCard} = require('./src/card.js');
const { createDeck } = require('./src/deck.js');
const { createRound } = require('./src/round.js');
const { printMessage, printQuestion } = require('./src/game.js');

function start() {
  const cards = prototypeData.map((card) => {
    return createCard(card.id, card.question, card.answers, card.correctAnswer);
  });
  const deck = createDeck(cards);
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
}

start();
