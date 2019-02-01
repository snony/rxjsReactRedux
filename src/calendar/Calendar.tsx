import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
    display: grid;
    height: 90%;
    background-color: white;
    grid-template-columns: 100px auto auto auto auto auto auto auto;
    padding: 0px;
`

const TimeWrapper = styled.div`
    display: grid;
    grid-template-rows: auto;
    background-color: red;
    padding: 0px;
`
const Foo = styled.div`
    background-color: grey;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`

class Calendar extends React.Component {

    render() {
        const numbs = Array.from(Array(24).keys())
        return (
            <Container>
                <TimeWrapper>
                    {numbs.map(numb =>
                        <Foo key={numb}>Show Me</Foo>
                    )}
                </TimeWrapper>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
                <div>Content</div>
            </Container>
        )
    }
}

export default Calendar