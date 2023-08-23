const createDeck = (cardObjArr) => {
  let deck = {
    cards: cardObjArr
  }
  return deck.cards;
}    

const countCards = (deckObjArr) => {
  return deckObjArr.length;
}

module.exports = {
  createDeck,
  countCards
}