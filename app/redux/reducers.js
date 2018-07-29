import {combineReducers} from 'redux';
import {ADD_TODO, TOGGLE_TODO, CLEAR_TODO} from './actions';

const INITIAL_STATE = { todos: [] };

function todoReducer(state = INITIAL_STATE, action) {
    if (action.type === ADD_TODO) {
        return {
            todos: [
                ...state.todos,
                {
                    text: action.text,
                    isDone: false
                }
            ]
        };
    } else if (action.type === TOGGLE_TODO) {
        let modifiedTodos = [];
        state.todos.map((todo, index) => {
            if (index === action.index) {
                let toggledTodo = {
                    ...todo,
                    isDone: !todo.isDone
                };
                modifiedTodos.push(toggledTodo);
            } else {
                modifiedTodos.push(todo);
            }
        });

        return {
            todos: modifiedTodos
        };
    } else if (action.type === CLEAR_TODO) {
        return {
            todos: []
        };
    }

    return state;
}

const allReducers = combineReducers({
    todoReducer
});

export default allReducers;
