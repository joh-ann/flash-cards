const evaluateGuess = (guess, cardObj) => {
  if (guess === cardObj.correctAnswer) {
    return 'correct'
  } else {
    return 'incorrect'
  }
}

module.exports = {
  evaluateGuess
}