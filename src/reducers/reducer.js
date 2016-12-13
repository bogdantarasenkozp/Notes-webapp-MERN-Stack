import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userReducer from './user';
import widgetReducer from './widget';

const reducers = combineReducers({
	userState:userReducer,
	widgetState: widgetReducer,
	form:formReducer
});

export default reducers;