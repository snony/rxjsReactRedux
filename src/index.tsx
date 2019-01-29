import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components/macro'
import { fromEvent, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators'

const Container = styled.div`
    background-color: white;
`

const counter = new Subject()
class RxjPlay extends React.Component {
    source: Observable<Event> = fromEvent(document, 'click')
    content: Date[] = []
    constructor(props: any) {
        super(props)
        // th
        // this.source = 
        console.log(counter)
    }
    componentDidMount() {
        const example = this.source.pipe(map(event => `Event time : ${event.timeStamp}`))

        const subscribe = example.subscribe(val => this.addItem(val))

    }

    addItem = (val: string) => {
        console.log(val)
    }
    render() {
        return (
            <Container >
                <button >Click On me</button>
            </Container>
        )
    }
}

ReactDOM.render(
    <RxjPlay />,
    document.getElementById('root')
);