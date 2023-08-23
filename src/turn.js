const { evaluateGuess } = require('../src/guess');

const takeTurn = (guess, roundObj) => {
  roundObj.turns += 1;

  let guessResult = evaluateGuess(guess, roundObj.currentCard);
  let feedback;

  if (guessResult === 'incorrect') {
    roundObj.incorrectGuesses.push(roundObj.currentCard.id);
    feedback = giveFeedback('incorrect');
  } else {
    feedback = giveFeedback('correct');
  }
  
  // move to next card
  roundObj.currentCardIndex += 1;
  // update current card
  roundObj.currentCard = roundObj.deck[roundObj.currentCardIndex]

  return feedback;
}

const giveFeedback = (result) => {
  if (result === 'incorrect') {
    return `incorrect!`
  } else {
    return `correct!`
  }
}

const calculatePercentCorrect = (roundObj) => {
  let totalGuesses = roundObj.turns;
  let correctGuesses = (roundObj.turns - roundObj.incorrectGuesses.length);
  let correctPercentage = (correctGuesses / totalGuesses) * 100;
  return Math.floor(correctPercentage);
}

module.exports = { 
  takeTurn, 
  giveFeedback, 
  calculatePercentCorrect
}