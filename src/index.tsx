import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components/macro'
import { fromEvent, Observable, interval, Subscriber, Observer, Subscription } from 'rxjs';
import { map, bufferCount } from 'rxjs/operators'
import { string } from 'prop-types';

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
    source$: Observable<Event> | null = null
    content: Date[] = []
    myRef = React.createRef<HTMLButtonElement>()
    constructor(props: any) {
        super(props)
        this.state = { total: 0 }
    }
    componentDidMount() {
        // if (this.myRef.current) {
        //     this.source$ = fromEvent(this.myRef.current, 'click')
        //     const foo = interval(200).pipe
        //     const example = this.source$.pipe(
        //         bufferCount(5),
        //         map(event => "double clicked")
        //     )
        //     example.subscribe(val => this.addItem(val))
        // }

    }

    addItem = (val: string) => {
        const total = this.state.total + 1
        this.setState({ total })
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
        const b = x.pipe(map(x => x + x))
        disp = b.subscribe(subscriber)
    }

    onClick1 = () => {
        disp.unsubscribe()
    }

    render() {
        return (
            <Container >
                <button onClick={this.onClick} >Subscribe</button>
                <button onClick={this.onClick1} >Unsubscribe</button>

                {/* <button ref={this.myRef} >Double Click to see changes</button>
                <div>
                    Total Number you have double clicked: {this.state.total}
                </div> */}
            </Container>
        )
    }
}

ReactDOM.render(
    <RxjPlay />,
    document.getElementById('root')
);