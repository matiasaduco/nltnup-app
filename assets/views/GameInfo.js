import { Button } from "@rneui/themed";
import { useContext, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { gameContext } from "../providers/GameProvider";
import { useNavigation } from "@react-navigation/native";
import { getRandomCard } from "../functions/GameInfoFunctions";
import { picantor1, picantor2 } from "../api/picantor";
import ChaosCard from "../components/ChaosCard";
import Card from "../components/Card.js";
import styles from "../styles/GameInfoStyle";

const GameInfo = () => {
  const navigation = useNavigation();
  const game = useContext(gameContext);

  return (
    <>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Rondas: {game.rounds} - Bombas: {game.bombsInGame}
      </Text>
      <Text style={{ fontSize: 18 }}>
        Expansiones:{" "}
        {game.expansionsInGame.map((expansion, index) =>
          index == game.expansionsInGame.length - 1
            ? expansion.title
            : expansion.title + " / "
        )}
      </Text>
      <View style={styles.buttonGroup}>
        <Button
          title="Picantor 1"
          onPress={() => getRandomCard(navigation, picantor1)}
          buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
          containerStyle={[styles.addButton, { marginRight: "1%" }]}
        />
        <Button
          title="Picantor 2"
          onPress={() => getRandomCard(navigation, picantor2)}
          buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
          containerStyle={[styles.addButton, { marginLeft: "1%" }]}
        />
        <Button
          title="Picantor 3"
          onPress={() => getRandomCard(navigation, picantor2)}
          buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
          containerStyle={[styles.addButton, { marginLeft: "1%" }]}
        />
      </View>
      <ScrollView>
        <ChaosCard card={game.chaosCard} />
        {game.playedCards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            leyend={card.leyend}
            isStart={card.isStar}
            points={card.points}
            expansion={card.expansion}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default GameInfo;
