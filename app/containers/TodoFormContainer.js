import {connect} from 'react-redux';
import {addTodo, clearTodo} from '../redux/actions';
import TodoForm from '../components/TodoForm';

const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => dispatch(addTodo(text)),
        clearTodos: () => dispatch(clearTodo())
    }
};

const TodoFormContainer = connect(
    null,
    mapDispatchToProps
)(TodoForm)

export default TodoFormContainer;
