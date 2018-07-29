export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_TODO = 'CLEAR_TODO';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    };
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

export function clearTodo() {
    return {
        type: CLEAR_TODO
    }
}
