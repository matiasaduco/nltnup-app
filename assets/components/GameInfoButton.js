import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "@rneui/themed";

const GameInfoButton = () => {
  const navigation = useNavigation();
  return (
    <Button
      onPress={() => navigation.navigate("GameInfo")}
      buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
      icon={<Icon name="info" size={20} color="white" />}
    />
  );
};

export default GameInfoButton;
