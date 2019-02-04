import { Reducer } from 'redux';
import { TODOAction, ADD_TODO, UPDATE_TODO, DELETE_TODO } from './actions'
import { Todo } from './types'
const init: Todo[] = []

const reducer: Reducer<Todo[], TODOAction> = (state: Todo[] = init, action: TODOAction): Todo[] => {

    switch (action.type) {
        case ADD_TODO:
            return [...state, { title: action.todo.title }]
        case UPDATE_TODO:
            return [...state, { title: action.todo.title }] //TODO must fix this one 
        case DELETE_TODO: {
            console.log("Done by epics")
            return state
        }
        default:
            return state
    }
}

export default reducer