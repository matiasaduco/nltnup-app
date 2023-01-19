export function getRandomCard(navigation, deck) {
  let x = Math.floor(Math.random() * deck.length);
  let card = deck[x];
  navigation.navigate("Played", { card });
}
