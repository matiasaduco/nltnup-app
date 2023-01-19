import { Text, View } from "react-native";
import { useContext } from "react";
import { playerContext, setPlayerContext } from "../providers/PlayersProvider";
import { expansionsContext } from "../providers/ExpansionsProvider";
import { Button } from "@rneui/themed";
import styles from "../styles/MenuStyle.js";

const Win = ({ navigation }) => {
  const [players, setPlayers] = [
    useContext(playerContext),
    useContext(setPlayerContext),
  ];
  const expansions = useContext(expansionsContext);
  const winner = players.filter((player) => player.winner == true)[0];
  return (
    <>
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          marginTop: "70%",
          fontSize: 22,
        }}
      >
        Ganador: {winner.name} ({winner.points} puntos)
      </Text>
      <View style={styles.buttonGroup}>
        <Button
          title="JUGAR DE NUEVO"
          onPress={() => navigation.navigate("Play")}
          buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
          containerStyle={styles.addButton}
        />
        <Button
          title="VOLVER AL MENÚ"
          onPress={() => {
            setPlayers([]);
            expansions.forEach((expansion) => (expansion.isChecked = false));
            navigation.navigate("Menu");
          }}
          buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
          containerStyle={[styles.addButton, { marginLeft: "1%" }]}
        />
      </View>
    </>
  );
};

export default Win;
