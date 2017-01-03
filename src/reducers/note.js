var _ = require('lodash');

const initialNoteState = {
	notes: []
}

const noteReducer = function(state = initialNoteState,action){
	switch(action.type){
		case 'GET_NOTES_SUCCESS':
			return {notes:[...state.notes,...action.payload]};
		case 'NOTE_LIST_SUCCESS':
			return {...state,...{ notes:action.payload }};
		case 'ADD_NOTE_SUCCESS':
			return {notes:[...state.notes,...[action.payload]]};
		case 'REMOVE_NOTE_SUCCESS':
			return {notes:_.intersection(state.notes,action.payload)};
		case 'UPDATE_NOTE_SUCCESS':
			return {...state,...{ notes:action.payload }};
	}
	return state;
}

export default noteReducer;
