import { View, Text, StyleSheet } from 'react-native'

import Colors from '../../constants/colors'

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        borderWidth: 4,
        borderColor: Colors.accent500,
        backgroundColor: Colors.primary700,
        marginTop: 36,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        color: Colors.accent500,
        fontSize: 100,
    },
})