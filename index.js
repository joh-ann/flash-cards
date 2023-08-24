console.log('Your project is running...'); 

const { prototypeData } = require('./src/data');
const { createCard} = require('./src/card');
const { createDeck } = require('./src/deck');
const { createRound } = require('./src/round');
const { printMessage, printQuestion } = require('./src/game');

const start = () => {
  const cards = prototypeData.map((card) => {
    return createCard(card.id, card.question, card.answers, card.correctAnswer);
  });

  const deck = createDeck(cards);
  const round = createRound(deck);
  
  printMessage(deck);
  printQuestion(round);
}

start();
