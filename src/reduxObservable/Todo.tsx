import React from 'react'
import styled from 'styled-components/macro'
import { Todo as TodoType } from './types'
import { Container, InputWrapper, InputContainer, Input, AddBtnWrapper, Btn } from './styled'

const Ul = styled.ul`
    list-style-type: none;
    padding: 0px;
`

const TodoItem = styled.li`
    background-color: white;
    width: 90%;
    margin-bottom: 5px;
`
interface Props {
    todos: TodoType[]
    add_todo: (todo: TodoType) => void
}

interface State {
    todoTitle: string
}

class Todo extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = { todoTitle: '' }
    }

    handleInput = ({ target: { value } }: { target: { value: string } }) => {
        this.setState({ todoTitle: value })
    }

    onAddTodo = () => {
        const { todoTitle } = this.state
        const todo: TodoType = { title: todoTitle }
        this.props.add_todo(todo)
        this.setState({ todoTitle: '' })
    }
    render() {
        const { todoTitle } = this.state
        const { todos } = this.props
        return (
            <Container>
                <InputWrapper>
                    <InputContainer><Input onChange={this.handleInput} value={todoTitle} /></InputContainer>
                    <AddBtnWrapper><Btn onClick={this.onAddTodo}>Add</Btn></AddBtnWrapper>
                </InputWrapper>
                <Ul>
                    {todos.map(todo => <TodoItem key={todo.title}>{todo.title}</TodoItem>)}
                </Ul>
            </Container>
        )
    }
}

export default Todo