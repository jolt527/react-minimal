import React from 'react';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        };
    }

    handleInputChange(event) {
        this.setState({inputText: event.target.value});
    }

    handleInputKeyPress(event) {
        if (event.key === 'Enter') {
            this.handleAddButtonClick();
        }
    }

    handleAddButtonClick() {
        let text = this.state.inputText.trim();
        this.setState({inputText: text});
        if (text) {
            this.props.addTodo(text);
            this.setState({inputText: ''});
        }
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.inputText}
                    onChange={event => this.handleInputChange(event)}
                    onKeyPress={event => this.handleInputKeyPress(event)}
                />
                <button onClick={() => this.handleAddButtonClick()}>Add</button>
                <button onClick={() => this.props.clearTodos()}>Clear List</button>
            </div>
        );
    }
}

export default TodoForm;
