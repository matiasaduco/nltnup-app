import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "@rneui/themed";

const BackToMenu = () => {
  const navigation = useNavigation();
  return (
    <Button
      onPress={() => navigation.push("Menu")}
      buttonStyle={{ backgroundColor: "rgba(39, 39, 39, 1)" }}
      icon={<Icon name="chevron-left" size={20} color="white" />}
    />
  );
};

export default BackToMenu;
