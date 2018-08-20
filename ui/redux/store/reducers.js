import C from '../constants';
import { combineReducers } from 'redux';

export const handleProjList = (state=[], action) => {
    debugger;
    switch (action.type) {
        case C.ADD_PROJ:
            return [
                ...state,
                action.payload
            ];

        case C.DEL_PROJ:
            return state.filter((item)=> item.id !== action.payload )

        default : return state
    }
}

export const handleStudList = (state=[], action) => {
    switch (action.type) {
        case C.ADD_STUD:
            return [
                ...state,
                action.payload
            ]
        default : return state
    }
}

export default combineReducers({
    handleProjList
});