import C from '../constants';
import { combineReducers } from 'redux';

export const addProjToList = (state=[], action) => {
    switch (action.type) {
        case C.ADD_PROJ :
            return [
                ...state,
                action.payload
            ]
        default : return state
    }
}

export default combineReducers({
    addProjToList
});