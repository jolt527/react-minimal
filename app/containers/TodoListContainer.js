import {connect} from 'react-redux';
import {toggleTodo} from '../redux/actions';
import TodoList from '../components/TodoList';

const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: index => dispatch(toggleTodo(index))
    }
};

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default TodoListContainer;
