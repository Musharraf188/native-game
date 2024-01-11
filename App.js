import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />
  if(userNumber){
    screen = <GameScreen />
  }
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
        source={require("./assets/IMG/background.png")}
      >
      {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
