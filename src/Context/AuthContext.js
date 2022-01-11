import AsyncStorage from '@react-native-async-storage/async-storage'
import createDataContext from "./createDataContext";
import trackerApi from "../api/Tracker"
import { navigate } from "../navigationRef";
const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signup':
            return { errorMessage: '', ...state, token: action.payload }
        default:
            return state
    }
}

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password })
            console.log(response.data)
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'signup', payload: response.data.token })
            navigate('TrackList')
        }
        catch (err) {
            console.log(err.message)
            dispatch({
                type: 'add_error',
                payload: 'Someting went wrong with Sign Up'
            })
        }
    }
}
const signin = (dispach) => {
    return ({ email, password }) => {

    }
}
export const { Provider, Context } =
    createDataContext(authReducer, { signup, signin },
        { token: null, errorMessage: '' }
    )
