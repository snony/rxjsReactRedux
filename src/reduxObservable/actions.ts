import { ofType, Epic } from 'redux-observable';
import { delay, mapTo, tap } from 'rxjs/operators'
import { Todo } from './types'

export type TODOAction = ADDTodo | Update_TODO | Delete_todo

interface ADDTodo {
    type: typeof ADD_TODO
    todo: Todo
}
export const ADD_TODO = 'ADD_TODO'
export const add_todo = (todo: Todo): ADDTodo => ({
    type: ADD_TODO,
    todo
})

interface Update_TODO {
    type: typeof UPDATE_TODO
    todo: Todo
}
export const UPDATE_TODO = 'UPDATE_TODO'
export const update_todo = (todo: Todo): Update_TODO => ({
    type: UPDATE_TODO,
    todo
})

export const DELETE_TODO = 'DELETE_TODO'
interface Delete_todo {
    type: typeof DELETE_TODO
}
export const delete_todo = (): Delete_todo => ({
    type: DELETE_TODO
})

export const fooEpics: Epic<TODOAction> = action$ => action$.pipe(
    tap(val => console.log("just before filter", val)),
    ofType(ADD_TODO),
    delay(1000), //delay one second before removing it
    tap(val => console.log("just after delay", val)),
    mapTo(delete_todo())
)