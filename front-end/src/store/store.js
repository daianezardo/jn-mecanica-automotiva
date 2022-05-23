import { createStore } from 'redux'

const reducer = (state, action) => {
    if (action.type === '@@INIT') {
        return null
    }
    if (action.type === 'USER_LOGIN') {
        return action.payload
    }
}
export const store = createStore(reducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())