import { createStore, combineReducers } from 'redux';

import userReducer from './user';
import widgetReducer from './widget';

const reducers = combineReducers({
	userSate:userReducer,
	widgetState: widgetReducer
});

export default reducers;