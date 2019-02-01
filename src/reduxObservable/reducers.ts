import { TODOAction, ADD_TODO, UPDATE_TODO } from './actions'
const init = {}

const reducer = (state = init, action: TODOAction) => {

    switch (action.type) {
        case ADD_TODO: {
            return { ...state, title: action.todo }
        }
        case UPDATE_TODO:
            return { ...state, title: action.todo }
        default:
            return state
    }
}

export default reducer