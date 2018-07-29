import React from 'react';

const Todo = ({text, isDone, onClick}) => (
    <li
        style={{textDecoration: isDone ? 'line-through' : 'none'}}
        onClick={onClick}
    >
        {text}
    </li>
);

export default Todo;
