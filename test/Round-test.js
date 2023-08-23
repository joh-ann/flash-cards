const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound, endRound } = require('../src/round');
const { takeTurn } = require('../src/turn');

describe('round', function() {
  let card1, card2, card3, deck, round;
    beforeEach(() => {
      card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder'); 
      card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      deck = createDeck([card1, card2, card3]);
      round = createRound(deck, 0, 0, []);
    });

  it('should create a round and its properties', function() {

    expect(round.deck).to.deep.equal([card1, card2, card3]);
    expect(round.currentCardIndex).to.equal(0);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should print round over to the console', function() {
    takeTurn('capybara', round);
    takeTurn('spleen', round);
    takeTurn('Fitzgerald', round);

    const endRoundMsg = endRound(round);
    expect(endRoundMsg).to.equal(`** Round over! ** You answered 33% of the questions correctly!`)
  });
});