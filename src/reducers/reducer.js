import { combineReducers } from 'redux';

import userReducer from './user';
import widgetReducer from './widget';

const reducers = combineReducers({
	userState:userReducer,
	widgetState: widgetReducer
});

export default reducers;