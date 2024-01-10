import { View, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from '../componets/PrimaryButton';

function StartGameScreen() {
    return <View style={styles.inputContainer}>
        <View style={styles.inputFiled}>
        <TextInput  style={styles.inputNummber} maxLength={2} keyboardType="number-pad" />
        </View>
        <PrimaryButton>Rest</PrimaryButton>
        <PrimaryButton>Conform</PrimaryButton>
    </View>
}
const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: 100,
        padding: 16,
        backgroundColor: '#4e0329',
        elevation: 17
    },
    inputNummber: {
        height: 50,
        width :50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight : 'bold',
        textAlign : 'center'
    
    },
    inputFiled :{
        textAlign : 'center'
    }
});
export default StartGameScreen

