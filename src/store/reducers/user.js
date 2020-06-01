import * as CONSTANTS from '../constants'

const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.RESTORE_TOKEN:
            return {
                ...state,
                userToken: action.token,
                isLoading: false
            }
        case CONSTANTS.SIGN_IN:
            return {
                ...state,
                isSignout: false,
                userToken: action.token,
                isLoading: false
            }
        case CONSTANTS.SIGN_OUT:
            return {
                ...state,
                isSignout: true,
                userToken: null,
                isLoading: false
            }
        default:
            return state;
    }
};

export default userReducer;