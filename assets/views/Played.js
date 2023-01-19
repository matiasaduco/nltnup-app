import { Button } from "@rneui/themed";
import { useContext, useState } from "react";
import { Pressable, Text, View } from "react-native";
import {
  playerContext,
  setPlayerContext,
} from "../providers/PlayersProvider.js";
import {
  checkWinCondition,
  getPlayerTurn,
  throwDice,
} from "../functions/PlayedFunctions";
import styles from "../styles/PlayedStyle";
import Card from "../components/Card.js";
import Scoreboard from "../components/Scoreboard";
import { useNavigation } from "@react-navigation/native";
import { gameContext } from "../providers/GameProvider.js";

const Played = ({ route }) => {
  const navigation = useNavigation();
  const card = route.params.card;
  const game = useContext(gameContext);
  const [players, setPlayers] = [
    useContext(playerContext),
    useContext(setPlayerContext),
  ];
  const playerTurn = getPlayerTurn(players);
  const [diceFace, setDiceFace] = useState("Dado");

  return (
    <>
      <Scoreboard />
      <Pressable onPress={() => setDiceFace(throwDice())}>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          {diceFace}
        </Text>
      </Pressable>
      <View style={styles.container}>
        <Card
          key={card.title}
          title={card.title}
          description={card.description}
          leyend={card.leyend}
          isStart={card.isStar}
          points={card.points}
          expansion={card.expansion}
        />
      </View>
      <Button
        title="SIGUIENTE"
        buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
        containerStyle={styles.nextButton}
        onPress={() =>
          checkWinCondition(
            playerTurn,
            card,
            game,
            navigation,
            players,
            setPlayers
          )
        }
      />
    </>
  );
};

export default Played;
