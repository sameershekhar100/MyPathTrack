import React from "react";
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from "../Components/Spacer";

const SignupScreen = ({ navigation }) => {
    return (
        <>
            <Spacer>
                <Text h3>SignupScreen</Text>
            </Spacer>
            <Input label="Email" />
            <Spacer />
            <Input label="Password" />
            <Spacer>
                <Button title="Go to Signin" onPress={() => {
                    navigation.navigate('Signin')
                }} />
            </Spacer>
            <Button title="Go to mainflow" onPress={() => {
                navigation.navigate('mainflow')
            }} />
        </>

    )
}
const styles = StyleSheet.create({})

export default SignupScreen