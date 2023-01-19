import { useContext } from "react";
import { View, Text } from "react-native";
import { expansionsContext } from "../providers/ExpansionsProvider";
import styles from "../styles/CardStyle";

const Card = (card) => {
  const expansions = useContext(expansionsContext);
  const expansion = expansions.filter(
    (expansion) => expansion.title.toLowerCase() == card.expansion
  )[0];
  const color = expansion.colorCode;

  let titleStyle = styles.title;
  if (card.title.length > 13) titleStyle = styles.title2;
  if (card.title.length > 16) titleStyle = styles.title3;

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={titleStyle}>{card.title}</Text>
      <Text style={styles.description}>{card.description}</Text>
      <Text style={styles.leyend}>{card.leyend}</Text>
    </View>
  );
};

export default Card;
