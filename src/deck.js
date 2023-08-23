const createDeck = (cardObjArr) => {
  let deck = {
    deck: cardObjArr
  }
  return deck.deck;
}    

const countCards = (deckObjArr) => {
  return deckObjArr.length;
}

module.exports = {
  createDeck,
  countCards
}