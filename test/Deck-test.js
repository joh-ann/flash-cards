const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');

describe('deck', function() {
  let card1, card2, card3, deck;
    beforeEach(() => {
      card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder'); 
      card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      
      deck = createDeck([card1, card2, card3]);
    });

  it('should create a deck of cards', function() {

  expect(deck).to.deep.equal([card1, card2, card3]);
  });

  it('should get the length of the deck', function() {
    countCards(deck);
    
    expect(deck.length).to.equal(3);
  });
});