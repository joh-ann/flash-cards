const { calculatePercentCorrect } = require('../src/turn');


const createRound = (
  deck, 
  currentCardIndex = 0, 
  turns = 0, 
  incorrectGuesses = []
  ) => {

  let round = {
    deck: deck,
    currentCardIndex: currentCardIndex,
    turns: turns,
    incorrectGuesses: incorrectGuesses
  }
  // set current card
  round.currentCard = deck[currentCardIndex]; 

  return round;
}

const endRound = (roundObj) => {
  let correctPercentage = calculatePercentCorrect(roundObj);
  return `** Round over! ** You answered ${correctPercentage}% of the questions correctly!`
}

module.exports = {
  createRound,
  endRound
}