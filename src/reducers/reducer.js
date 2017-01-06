import { combineReducers } from 'redux';

import noteReducer from './note';
import userReducer from './user';

const reducers = combineReducers({
	noteState:noteReducer,
	userState:userReducer
});

export default reducers;
