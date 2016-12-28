import { combineReducers } from 'redux';

import noteReducer from './note';

const reducers = combineReducers({
	noteState:noteReducer,
});

export default reducers;