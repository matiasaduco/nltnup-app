import { Text, View } from "react-native";
import styles from "../styles/ChaosCardStyle";

const ChaosCard = ({ card }) => {
  return (
    <>
      <Text style={{ fontSize: 20, textAlign: "center", marginTop: "2%" }}>
        Carta del caos:
      </Text>
      <View style={styles.container}>
        <Text style={styles.title}>{card.title}</Text>
        <Text style={styles.description}>{card.description}</Text>
        <Text style={styles.leyend}>{card.leyend}</Text>
      </View>
    </>
  );
};

export default ChaosCard;
