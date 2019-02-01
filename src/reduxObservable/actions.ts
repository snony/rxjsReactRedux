import { Todo } from './types'

export type TODOAction = ADDTodo | Update_TODO

interface ADDTodo {
    type: typeof ADD_TODO
    todo: Todo
}
export const ADD_TODO = 'ADD_TODO'
export const add_todo = (todo: Todo) => ({
    type: ADD_TODO,
    todo
})

interface Update_TODO {
    type: typeof UPDATE_TODO
    todo: Todo
}
export const UPDATE_TODO = 'UPDATE_TODO'
export const update_todo = (todo: Todo) => ({
    type: UPDATE_TODO,
    todo
})