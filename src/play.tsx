import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components/macro'
import { fromEvent, Observable, interval, Subscriber, Observer, Subscription } from 'rxjs';
import { map, bufferCount } from 'rxjs/operators'
import { string } from 'prop-types';
import { Calendar } from './calendar'
const Container = styled.div`
    background-color: white;
`

// const counter = new Subject()
interface State {
    total: number
}

const x = new Observable<number>((observer) => {
    let ticks: number = 0;
    const interval = setInterval(() => {
        observer.next(ticks)
        ticks++
        if (ticks === 11) {
            observer.complete()
        }

    }, 500)

    return () => {
        console.log('disposed')
        clearInterval(interval)
    }
})
let disp: Subscription;

class RxjPlay extends React.Component<{}, State>{
    source1$: Observable<Event> | null = null
    source2$: Observable<Event> | null = null
    content: Date[] = []
    myRef1 = React.createRef<HTMLButtonElement>()
    myRef2 = React.createRef<HTMLButtonElement>()
    subscription1: Subscription | null = null
    constructor(props: any) {
        super(props)
        this.state = { total: 0 }
    }
    componentDidMount() {
        if (this.myRef1.current) {
            this.source1$ = fromEvent(this.myRef1.current, 'click')
            const example = this.source1$.pipe(
                map(event => 1)
            )
            this.subscription1 = example.subscribe(val => this.increment(val))
        }

        if (this.myRef2.current) {
            this.source2$ = fromEvent(this.myRef2.current, 'click')
            const example = this.source2$.pipe(
                map(event => -1)
            )
            example.subscribe(val => this.decrement(val))
        }
    }

    increment = (val: number) => {
        const total = this.state.total + val
        this.setState({ total })
    }
    decrement = (val: number) => {
        const { total } = this.state
        if (total > 0) {
            this.setState({ total: total + val })
        }
    }

    onClick = () => {

        const subscriber: Observer<number> = {
            next: (x) => {
                console.log(x)
            },
            error: (err) => {
                console.log(err)
            },
            complete: () => {
                console.log('complete')
            }
        }
        const b = x.pipe(map(x => x))
        disp = b.subscribe(subscriber)
    }

    onClick1 = () => {
        disp.unsubscribe()
    }

    unsubscribe = () => {
        if (this.subscription1)
            this.subscription1.unsubscribe()
    }
    render() {
        const { total } = this.state
        return (
            <Container >
                <button ref={this.myRef1} >Increment</button>
                <button ref={this.myRef2} >Decrement</button>
                <div>
                    {total}
                </div>
                <div>
                    <button onClick={this.unsubscribe} >Unsubscribe</button>
                </div>
            </Container>
        )
    }
}

export default RxjPlay