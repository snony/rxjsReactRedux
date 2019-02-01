import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components/macro'
import { Calendar } from './calendar'
import Followers from './Followers'
const Container = styled.div`
    background-color: #ececec;
`


class App extends React.Component {


    render() {
        return (
            <Container >
                {/* <Calendar /> */}
                <Followers />
            </Container>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);