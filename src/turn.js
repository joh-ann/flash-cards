const { evaluateGuess } = require('../src/guess');

const takeTurn = (guess, roundObj) => {
  roundObj.turns += 1;
  let guessResult = evaluateGuess(guess, roundObj.currentCard);
  let feedback;

  if (guessResult === 'incorrect') {
    roundObj.incorrectGuesses.push(roundObj.currentCard.id);
    feedback = giveFeedback(guess, 'incorrect');
  } else {
    feedback = giveFeedback(guess, 'correct');
  }
  roundObj.currentCardIndex += 1; // move to next card
  roundObj.currentCard = roundObj.deck[roundObj.currentCardIndex] // update current card
  return feedback;
}

const giveFeedback = (guess, result) => {
  if (result === 'incorrect') {
    return `Your guess: ${guess} was wrong!`
  } else {
    return `Your guess: ${guess} was right!`
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