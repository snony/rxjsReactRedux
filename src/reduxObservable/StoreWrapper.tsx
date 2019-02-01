import React from 'react'
import Todo from './Todo'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from './reducers'

const store = createStore(todoReducer)
export default class StoreWrapper extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <Todo />
            </Provider>
        )
    }
}