import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../componets/PrimaryButton";

function StartGameScreen({onPickedNumber}){
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputNumber(){
    setEnteredNumber('');
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber); // convert to number
    if (isNaN(enteredNumber) || chosenNumber <= 0 || chosenNumber > 99) {
        // Show alert..
Alert.alert('Invalid Number!',
'Number has to be a number between 1 and 99.',
[{text: 'Okay', style  : 'destructive', onPress: resetInputNumber }]
)
      return;
    }
    onPickedNumber(chosenNumber);
  }
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputFiled}>
        <TextInput
          style={styles.inputNummber}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputNumber}>Rest</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Conform</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    padding: 16,
    backgroundColor: "#3b021f",
    elevation: 17,
  },
  inputNummber: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
export default StartGameScreen;
