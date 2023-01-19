import { useContext } from "react";
import { Text } from "react-native";
import { getPlayerTurn } from "../functions/PlayedFunctions";
import { playerContext } from "../providers/PlayersProvider";
import styles from "../styles/ScoreboardStyle";

const Scoreboard = () => {
  const playerTurn = getPlayerTurn(useContext(playerContext));
  return (
    <Text style={styles.header}>
      <Text>Turno: {playerTurn.name}</Text>
      <Text> - </Text>
      <Text>Puntos: {playerTurn.points}</Text>
    </Text>
  );
};

export default Scoreboard;
