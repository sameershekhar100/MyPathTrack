import React, { useState } from "react";
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from "../Components/Spacer";

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>SignupScreen</Text>
            </Spacer>
            <Input label="Email"
                value={email}
                onChangeText={(newEmail) => setEmail(newEmail)}
                autoCapitalize="none"
                autoCorrect={false} />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(newPassword) => setPassword(newPassword)} />
            <Spacer>
                <Button title="Go to Signin" onPress={() => {
                    navigation.navigate('Signin')
                }} />
            </Spacer>
            <Button title="Go to mainflow" onPress={() => {
                navigation.navigate('mainflow')
            }} />
        </View>

    )
}
SignupScreen.navigationOptions = () => {
    return () => {
        header: null
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
})

export default SignupScreen