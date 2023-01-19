import { useContext } from "react";
import { View, ScrollView, Pressable } from "react-native";
import { assambleHand } from "../functions/PlayFunctions";
import { gameContext } from "../providers/GameProvider";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/PlayStyle.js";
import Card from "../components/Card.js";
import Scoreboard from "../components/Scoreboard";

const Play = () => {
  const navigation = useNavigation();
  const deck = useContext(gameContext).deck;
  const hand = assambleHand(deck);

  return (
    <>
      <Scoreboard />
      <ScrollView>
        <View style={styles.container}>
          {hand.map((card, index) => (
            <Pressable
              key={index}
              onPress={() => navigation.navigate("Played", { card })}
            >
              <Card
                key={card.title}
                title={card.title}
                description={card.description}
                leyend={card.leyend}
                isStart={card.isStar}
                points={card.points}
                expansion={card.expansion}
              />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Play;
