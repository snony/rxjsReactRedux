import { Observable } from 'rxjs';
// import { fromEvent } from 'rxjs'
import { AsyncSubject } from 'rxjs'
//A representation of any set of values over any amount of time. The observable is the actual object representation of the set of values over time.
//create is a function that creates a new Observable. that will execute the specified function when an Observer subscribes to it.
//create converts an onSubscription function to an actual Observable. Whenever someone subscribes to that Observable, the function will be called with an Observer instance as a first and only parameter. onSubscription should then invoke the Observers next, error
// and complete methods. 
//Lesson 1
// var observable = Observable.create((observer: any) => {
//     observer.next('Hey guys!')
//     observer.next('How are you?')
//     setInterval(() => {
//         observer.next('I am good')
//     }, 2000)
//     // observer.complete()
//     observer.next('This will not send')
// }).share()

// var observer = observable.subscribe(
//     (x: any) => addItem(x),
//     (error: any) => addItem(error),
//     () => addItem('complete')
// )

// setTimeout(() => {
//     var observer2 = observable.subscribe(
//         (x: any) => addItem("Subscribe 2: " + x)
//     )
// }, 1000)

// var observable = fromEvent(document, 'mousemove')
//Lesson 2
//new Subject() === Object is essentially an observable and an observer at the same time?
//new BehaviorSubject is like a subject object but a bit different? In what sense.
var subject = new AsyncSubject()
subject.subscribe(
    data => addItem('Observer 1: ' + data),
    err => addItem(err),
    () => addItem('Observer 1 completed')
)

var i = 1;
var int = setInterval(() => subject.next(i++), 100);

setTimeout(() => {
    var observer2 = subject.subscribe(
        data => addItem('Observer 2: ' + data)
    )
    subject.complete()
}, 500)

var observer2 = subject.subscribe(
    data => addItem('Observer 2:' + data)
)


subject.next('The second thing has been sent')
subject.next('I received the data')


observer2.unsubscribe();
subject.next('We unsubscribed observer2');



function addItem(val: any) {
    var node = document.createElement("li")
    var textnode = document.createTextNode(val)
    node.appendChild(textnode)
    // document.getElementById("output").appendChild(node)
}

/// an observable can be hot or cold
/// we have a producer, subscription is created