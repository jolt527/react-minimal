import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, toggleTodo}) => {
    let todoListHeader = (<p>Todo List:</p>);

    if (todos.length <= 0) {
        return (
            <div>
                {todoListHeader}
                <p><i>Your todo list is currently empty!</i></p>
            </div>
        );
    }

    return (
        <div>
            {todoListHeader}
            <ul>
                {
                    todos.map((todo, index) => (
                        <Todo
                            key={index}
                            {...todo}
                            onClick={() => toggleTodo(index)}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default TodoList;
