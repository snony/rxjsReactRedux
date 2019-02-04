import { Dispatch } from 'redux'
import Todo from './Todo'
import { connect } from 'react-redux';
import { GlobalState } from '../types'
import { Todo as TodoType } from './types'
import { add_todo, TODOAction } from './actions';

const mapStateToProps = (state: GlobalState) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch: Dispatch<TODOAction>) => ({
    add_todo: (todo: TodoType) => dispatch(add_todo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)