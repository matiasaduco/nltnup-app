export function checkWinCondition(
  playerTurn,
  card,
  game,
  navigation,
  players,
  setPlayers
) {
  playerTurn.points = playerTurn.points + card.points;
  game.bombsInGame = card.isBomb ? game.bombsInGame + 1 : game.bombsInGame;
  if (game.bombsInGame == 4) {
    // navigation.navigate("GameOver");
    alert("Aún no hay GameOver, pero ya pusieron 4 bombas uwu.");
    navigation.push("Menu");
  } else if (playerTurn.points >= 15) {
    playerTurn.winner = true;
    navigation.navigate("Win");
  } else {
    nextTurn(players, setPlayers);
    game.playedCards = game.playedCards.concat(card);
    navigation.push("Play");
  }
}

export const getPlayerTurn = (players) => {
  return players.filter((player) => player.turn == true)[0];
};

export const nextTurn = (players, setPlayers) => {
  let index = players.indexOf(getPlayerTurn(players));
  getPlayerTurn(players).turn = false;

  index = index + 1 >= players.length ? 0 : index + 1;
  let updatedList = players.map((player, i) =>
    i == index ? { ...player, turn: true } : player
  );

  setPlayers(updatedList);
};

export function throwDice() {
  const faces = ["Boca", "Cuello", "Rodilla", "Pecho o Senos", "Cola", "?"];
  return faces[Math.floor(Math.random() * faces.length)];
}
