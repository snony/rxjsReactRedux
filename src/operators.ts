import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators'
//What is an operator?
/**
 * Method you can use on observables (and Subjects) that allow you to change the original observable in some ways
 */

const source = fromEvent(document, 'click')
const example = source.pipe(map(event => `Event time : ${event.timeStamp}`))

const subscribe = example.subscribe(val => addItem(val))

function addItem(val: any) {
    var node = document.createElement("li")
    var textnode = document.createTextNode(val)
    node.appendChild(textnode)
    // document.getElementById("output").appendChild(node)
}
