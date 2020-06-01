import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import userReducer from './reducers/user'

const middleware = applyMiddleware(thunk)

const rootReducer = combineReducers({
    user: userReducer
});

// let composeEnhacers = compose;

// if (__DEV__) {
//     composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// }

const configureStore = () => createStore(rootReducer, compose(middleware) );

export default configureStore;