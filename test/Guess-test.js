const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { evaluateGuess } = require('../src/guess');

describe('guess', function() {
  it('should evaluate if a guess is correct and return correct', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 'object';
    let guessResult = evaluateGuess(guess, card);
    expect(guessResult).to.equal('correct');
  });

  it('should evaluate if a guess is incorrect and return incorrect', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 'array' || 'function';
    let guessResult = evaluateGuess(guess, card);
    expect(guessResult).to.equal('incorrect');
  });
});