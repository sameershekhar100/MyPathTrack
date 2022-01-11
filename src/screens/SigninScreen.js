import React, { useContext } from "react";
import { StyleSheet, Text, View } from 'react-native'
import AuthForm from "../Components/AuthForm";
import NavLink from "../Components/NavLink";
import { Context as AuthContext } from "../Context/AuthContext"
const SigninScreen = () => {
    const { state, signin } = useContext(AuthContext)
    return (<View style={styles.container}>
        <AuthForm
            headerText="Sign In to your Account"
            errorMessage={state.errorMessage}
            onSubmit={signin}
            submitBtnText="Sign In"
        />
        <NavLink
            text="Don't have an account? Sign up!"
            routeName="Signup" />
    </View>
    )
}
SigninScreen.navigationOptions = {
    headerShown: false
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
})

export default SigninScreen