import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import { Context as AuthContext } from "../Context/AuthContext";
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";
const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext)

    // console.log(state.errorMessage)
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitBtnText="Sign Up"
                onSubmit={signup} />
            <NavLink
                text="Already have an account?? Sign In here!!"
                routeName="Signin" />

        </View>

    )
}
SignupScreen.navigationOptions = {
    headerShown: false
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }


})

export default SignupScreen