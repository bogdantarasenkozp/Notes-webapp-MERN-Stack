var _ = require('lodash');

const initialNoteState = {
	notes: [
        {id:1, text:'Ryan' },
        {id:2, text:'Michael' },
        {id:3, text:'Dan' }
    ]
}

const noteReducer = function(state = initialNoteState,action){
	switch(action.type){
		case 'NOTE_LIST_SUCCESS':
			return {...state,...{ notes:action.payload }};
		case 'ADD_NOTE':
			return {notes:[...state.notes,...[action.payload]]};
		case 'REMOVE_NOTE':
			return {notes:_.intersection(state.notes,action.payload)};
		case 'UPDATE_NOTE':
			return {...state,...{ notes:action.payload }};
	}
	return state;
}

export default noteReducer;