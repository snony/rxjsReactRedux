import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components/macro'
import { Todo, rootEpics } from './reduxObservable'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducers'
import { createEpicMiddleware } from 'redux-observable'


const epicMiddleware = createEpicMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
)

epicMiddleware.run(rootEpics)

const Container = styled.div`
    background-color: #ececec;
`


class App extends React.Component {


    render() {
        return (
            <Provider store={store}>
                <Container >
                    <Todo />
                </Container>
            </Provider>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);