import * as CONSTANTS from '../constants'

export const signIn = token => dispatch => {
    dispatch({
        type: CONSTANTS.SIGN_IN,
        token: token
    })
}

export const signOut = () => dispatch => {
    dispatch({
        type: CONSTANTS.SIGN_OUT
    })
}

export const signUp = token => dispatch => {
    dispatch({ type: CONSTANTS.SIGN_IN, token })
}