import { createStore } from 'redux'
import { getStorageItem } from '../service/storage.service'

const user = JSON.parse(getStorageItem('user'))

const reducer = (state, action) => {
    console.log(state, action)
    if (action.type === '@@INIT') {
        return user || null
    }
    if (action.type === 'USER_LOGIN') {
        return action.payload
    }
    if (action.type === 'USER_LOGOUT') {
        return null
    }

    return state
}
export const store = createStore(reducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())