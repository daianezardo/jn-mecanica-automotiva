import { combineReducers, createStore } from 'redux'
import { userReducer } from './User/User.reducer'

const rootReducer = combineReducers({
    userData: userReducer
})

export const store = createStore(
    rootReducer, 
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
    )