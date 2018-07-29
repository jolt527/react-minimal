import React from 'react';
import TodoFormContainer from '../containers/TodoFormContainer';
import TodoListContainer from '../containers/TodoListContainer'

const App = () => {
    return (
        <div>
            <TodoFormContainer />
            <TodoListContainer />
        </div>
    );
}

export default App;
