import React, { useState, useContext } from "react";
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { Context as AuthContext } from "../Context/AuthContext";
import Spacer from "../Components/Spacer";

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const { state, signup } = useContext(AuthContext)
    const [password, setPassword] = useState('')
    // console.log(state.errorMessage)
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>SignupScreen</Text>
            </Spacer>
            <Input label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={setPassword} />

            {state.errorMessage ? (
                <Text style={styles.errorMessage}>{state.errorMessage}</Text>
            ) : null}
            <Spacer>
                <Button title="Sign Up" onPress={() => {

                    signup({ email, password })
                }
                } />
            </Spacer>

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
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15,
    }
})

export default SignupScreen