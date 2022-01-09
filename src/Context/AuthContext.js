import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const SignInp = (dispach) => {
    return ({ email, password }) => {

    }
}
const SignUp = (dispach) => {
    return ({ email, password }) => {

    }
}
export const { Provider, Context } =
    createDataContext(authReducer, {}, { isSignedIn: false }
    )
