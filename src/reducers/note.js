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
			return {...state,...{ notes:action.notes }};
		case 'ADD_NOTE':
			return {notes:[...state.notes,...[action.text]]};
		case 'REMOVE_NOTE':
			return {notes:_.intersection(state.notes,action.notes)};
		case 'UPDATE_NOTE':
			return {...state,...{ notes:action.notes }};
		// case 'SEARCH_NOTE':
		// 	let res = null;
		// 	if(action.payload.value !== '')
		// 		res = action.payload.notes.filter(user => {return user.name.toLowerCase().includes(action.payload.value)});
		// 	else
		// 		res = initialNoteState.notes;
		// 	return {...state,...{ notes:res }};
		// 	break;
	}
	return state;
}

export default noteReducer;