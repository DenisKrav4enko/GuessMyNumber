import {
  TextInput,
  View,
  StyleSheet
} from "react-native";
import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
      />
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#72063c',
        borderRadius: 8,
        // Android shadow
        elevation: 4,
        // iOS shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        width: 100,
        fontSize: 32,
        backgroundColor: '#ddb52f',
        color: '#000000',
        borderRadius: 8,
        paddingTop: 16,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1
    }
})