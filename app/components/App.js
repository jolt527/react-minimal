import React from 'react';
import {connect} from 'react-redux';
import {changeNumber} from '../redux/actions'

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Number = {this.props.myNumber}</p>
                <p><button onClick={() => this.props.requestNumberChange(1)}>Change number to 1!</button></p>
                <p><button onClick={() => this.props.requestNumberChange(2)}>Change number to 2!</button></p>
                <p><button onClick={() => this.props.requestNumberChange(3)}>Change number to 3!</button></p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        myNumber: state.numberChanger.number
    };
}

const mapDispatchToProps = dispatch => {
    return {
        requestNumberChange: newNumber => {
            dispatch(changeNumber(newNumber));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
