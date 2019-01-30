import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components/macro'
import { fromEvent, Observable } from 'rxjs';
import { map, bufferCount } from 'rxjs/operators'

const Container = styled.div`
    background-color: white;
`

// const counter = new Subject()
interface State {
    total: number
}
class RxjPlay extends React.Component<{}, State>{
    source: Observable<Event> | null = null
    content: Date[] = []
    myRef = React.createRef<HTMLButtonElement>()
    constructor(props: any) {
        super(props)
        this.state = { total: 0 }
    }
    componentDidMount() {
        if (this.myRef.current) {
            this.source = fromEvent(this.myRef.current, 'click')
            const example = this.source.pipe(
                bufferCount(2),
                map(event => "double clicked")
            )
            example.subscribe(val => this.addItem(val))
        }


    }

    addItem = (val: string) => {
        const total = this.state.total + 1
        this.setState({ total })
    }
    render() {
        return (
            <Container >
                <button ref={this.myRef} id="danger">Double Click to see changes</button>
                <div>
                    Total Number you have double clicked: {this.state.total}
                </div>
            </Container>
        )
    }
}

ReactDOM.render(
    <RxjPlay />,
    document.getElementById('root')
);