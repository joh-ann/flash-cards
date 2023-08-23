const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { evaluateGuess } = require('../src/guess');

describe('guess', function() {
  let card
    beforeEach(() => {
      card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    });

  it('should evaluate if a guess is correct and return correct', function() {
    let guessResult = evaluateGuess('object', card);

    expect(guessResult).to.equal('correct');
  });

  it('should evaluate if a guess is incorrect and return incorrect', function() {
    let guessResult = evaluateGuess('array' || 'function', card);
    
    expect(guessResult).to.equal('incorrect');
  });
});