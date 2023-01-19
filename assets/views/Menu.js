import { View, Text, TextInput, ScrollView } from "react-native";
import { Button, CheckBox } from "@rneui/themed";
import { useContext, useState } from "react";
import {
  addPlayer,
  checkExpansion,
  initGame,
  setTurn,
} from "../functions/MenuFunctions";
import {
  expansionsContext,
  setExpansionsContext,
} from "../providers/ExpansionsProvider";
import { playerContext, setPlayerContext } from "../providers/PlayersProvider";
import styles from "../styles/MenuStyle";
import { setGameContext } from "../providers/GameProvider";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  const [textInputValue, setTextInputValue] = useState("");
  const setGame = useContext(setGameContext);
  const [players, setPlayers] = [
    useContext(playerContext),
    useContext(setPlayerContext),
  ];
  const [expansions, setExpansions] = [
    useContext(expansionsContext),
    useContext(setExpansionsContext),
  ];

  function config() {
    const checkedExpansions = expansions.filter((exp) => exp.isChecked);
    if (!checkedExpansions.length) alert("Seleccione al menos 1 expansión.");
    else if (!players.length) alert("No hay suficientes jugadores.");
    else {
      setTurn(players);
      initGame(setGame, expansions);
      navigation.push("Play");
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>No Lo Testeamos Ni Un Poco</Text>
        <View style={styles.expansions}>
          {expansions.map((expansion, index) => (
            <CheckBox
              key={expansion.title}
              checked={expansion.isChecked}
              onPress={() => checkExpansion(index, expansions, setExpansions)}
              title={expansion.title}
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              checkedColor={expansion.color}
              textStyle={{ fontSize: 18 }}
            />
          ))}
          <Text style={{ marginTop: "7%" }}>
            <Text>Jugadores: </Text>
            {players.map((player, index) => (
              <Text key={index}>
                {player.name}
                {index == players.length - 1 ? " " : ", "}
              </Text>
            ))}
          </Text>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            placeholder="Nombre del jugador..."
            placeholderTextColor="#505050"
            autoCapitalize="words"
            value={textInputValue}
            onChangeText={(value) => setTextInputValue(value)}
          />
          <View style={styles.buttonGroup}>
            <Button
              title="AGREGAR"
              disabled={textInputValue == ""}
              onPress={() =>
                addPlayer(players, textInputValue, setTextInputValue)
              }
              buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
              containerStyle={[styles.addButton, { marginRight: "1%" }]}
            />
            <Button
              title="QUITAR"
              disabled={players.length == 0}
              onPress={() => setPlayers(players.slice(0, -1))}
              buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
              containerStyle={[styles.addButton, { marginLeft: "1%" }]}
            />
          </View>
        </View>
        <Button
          title="JUGAR"
          onPress={() => config()}
          buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
          containerStyle={styles.playButton}
        />
      </View>
    </ScrollView>
  );
};

export default Menu;
