import { combineReducers } from 'redux'
import { todoReducer } from './reduxObservable'
export default combineReducers({
    todos: todoReducer
})

