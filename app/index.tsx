import react from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginBtn from '../components/LoginBtn';
import RegisterBtn from '../components/RegisterBtn';


export default function App() {
    return (
        <View style={styles.container}>
            <Text>Quest</Text>
            <Text>Login</Text>
            <Text>Register</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});