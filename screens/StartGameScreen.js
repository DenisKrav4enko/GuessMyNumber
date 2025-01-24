import { useState } from 'react'
import {
    TextInput,
    View,
    StyleSheet, Alert
} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen() {
    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)

        if (isNaN(chosenNumber)
            || chosenNumber <= 0
            || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99',
                [{ text: 'Ok', style: 'destructive', onPress: resetInputHandler }]
            )
            return
        }
        console.log('Valid Number!');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>
                        Reset
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>
                        Confirm
                    </PrimaryButton>
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