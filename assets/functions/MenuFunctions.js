import base from "../api/base.js";
import caos from "../api/caos.js";
import kinetico from "../api/kinetico.js";
import picante from "../api/picante.js";
import drinking from "../api/drinking.js";

export function checkExpansion(index, expansions, setExpansions) {
  let updatedList = expansions.map((expansion, i) =>
    i == index ? { ...expansion, isChecked: !expansion.isChecked } : expansion
  );
  setExpansions(updatedList);
}

export function addPlayer(players, textInputValue, setTextInputValue) {
  if (players.find((player) => player.name == textInputValue))
    alert("Ya hay otro jugador con el mismo nombre");
  else if (textInputValue) {
    players.push({
      name: textInputValue,
      hand: [],
      cardsInFront: [],
      points: 0,
      turn: false,
      winner: false,
      loser: false,
    });
    setTextInputValue("");
  }
}

function assambleDeck(expansions) {
  let deck = [];
  if (expansions[0].title == "Base" && expansions[0].isChecked)
    deck = deck.concat(base);
  if (expansions[1].title == "Kinetico" && expansions[1].isChecked)
    deck = deck.concat(kinetico);
  if (expansions[2].title == "Picante" && expansions[2].isChecked)
    deck = deck.concat(picante);
  if (expansions[3].title == "Drinking" && expansions[3].isChecked)
    deck = deck.concat(drinking);
  return deck;
}

export const setTurn = (players) => {
  const random = Math.floor(Math.random() * players.length);
  players[random].turn = true;
};

export const initGame = (setGame, expansions) => {
  const exps = expansions.filter((expansion) => expansion.isChecked);
  const chaosCard = caos[Math.floor(Math.random() * caos.length)];
  setGame({
    deck: assambleDeck(expansions),
    chaosCard: chaosCard,
    expansionsInGame: exps,
    playedCards: [],
    rounds: 1,
    bombsInGame: 0,
  });
};
