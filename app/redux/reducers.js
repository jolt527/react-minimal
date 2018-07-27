import {combineReducers} from 'redux';
import {CHANGE_NUMBER} from './actions';

const INITIAL_STATE = { number: 999 };

function numberChanger(state = INITIAL_STATE, action) {

    if (action.type === CHANGE_NUMBER) {
        return {
            ...state,
            number: action.number
        };
    }

    return {
        ...state
    };
}

const allReducers = combineReducers({
    numberChanger
});

export default allReducers;
