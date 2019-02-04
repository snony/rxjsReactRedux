import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components/macro'
import { Todo } from './reduxObservable'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './rootReducers'

const store = createStore(rootReducer)


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