import { createStore } from 'redux'
import { userReducer } from './User/User.reducer'


export const store = createStore(
    userReducer, 
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
    )