import Menu from "./assets/views/Menu";
import Play from "./assets/views/Play";
import Played from "./assets/views/Played";
import Win from "./assets/views/Win";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GameProvider } from "./assets/providers/GameProvider";
import { PlayerProvider } from "./assets/providers/PlayersProvider";
import { StatusBar } from "react-native";
import { ExpansionsProvider } from "./assets/providers/ExpansionsProvider";
import GameInfoButton from "./assets/components/GameInfoButton";
import GameInfo from "./assets/views/GameInfo";
import BackToMenu from "./assets/components/BackToMenu";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" hidden={true} translucent={true} />
      <GameProvider>
        <ExpansionsProvider>
          <PlayerProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Play"
                component={Play}
                options={{
                  headerTitle: "No Lo Testeamos Ni Un Poco",
                  headerLeft: () => <BackToMenu />,
                  headerRight: () => <GameInfoButton />,
                }}
              />
              <Stack.Screen
                name="Played"
                component={Played}
                options={{ headerTitle: "No Lo Testeamos Ni Un Poco" }}
              />
              <Stack.Screen
                name="Win"
                component={Win}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="GameInfo" component={GameInfo} />
            </Stack.Navigator>
          </PlayerProvider>
        </ExpansionsProvider>
      </GameProvider>
    </NavigationContainer>
  );
}
