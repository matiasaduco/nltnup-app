export function assambleHand(deck) {
  let x = Math.floor(Math.random() * deck.length);
  let y = Math.floor(Math.random() * deck.length);
  while (x == y) y = Math.floor(Math.random() * deck.length);
  let hand = [deck[x], deck[y]];
  return hand;
}

export const drawCards = (quantity, game, setGame) => {
  let hand = [];
  for (let i = 0; i < quantity; i++) {
    const random = Math.floor(Math.random() * game.deck.length);
    hand = hand.concat(game.deck[random]);
    // setGame({ ...game, deck: deck.splice(random, 1) });
  }
  return hand;
};
