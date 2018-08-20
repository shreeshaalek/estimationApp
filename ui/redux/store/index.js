import C from '../constants';
import appReducers from './reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export default (initialState={projList: []}) => {
	return applyMiddleware(thunk)(createStore)(appReducers, initialState);
}

