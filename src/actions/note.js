import axios from 'axios';

function loadContent () {
	return (dispatch) => {
		dispatch(getNotesRequest())
		axios.get('http://localhost:8000/api/notes/all')
		.then(function(response){
			dispatch(getNotesSuccess(response.data))
		})
		.then(function(err){
			dispatch(getNotesError())
		})
	}
}

function removeNoteSuccess (data) {
	return {
		type:'REMOVE_NOTE_SUCCESS',
		payload:data
	}
}

function removeNoteError () {
	return {
		type:'REMOVE_NOTE_ERROR'
	}
}

function removeNoteRequest () {
	return {
		type:'REMOVE_NOTE_REQUEST'
	}
}

function removeNote (id,data) {
	return (dispatch) => {
		dispatch(removeNoteRequest())
		axios.delete('http://localhost:8000/api/notes/delete/'+id)
		.then(function(response){
			dispatch(removeNoteSuccess(data))
			//dispatch(loadContent ())
			console.log('ok')
		})
		.then(function(err){
			dispatch(removeNoteError())
			console.log('not ok')
		})
	}
}

function addNoteSuccess (data) {
	return {
		type:'ADD_NOTE_SUCCESS',
		payload:data
	}
}

function addNoteError () {
	return {
		type:'ADD_NOTE_ERROR'
	}
}

function addNoteRequest () {
	return {
		type:'ADD_NOTE_REQUEST'
	}
}

function addNote (data) {
	return (dispatch) => {
		dispatch(addNoteRequest())
		axios.post('http://localhost:8000/api/notes/add',data)
		.then(function(response){
			dispatch(addNoteSuccess(response.data))
			console.log('ok')
		})
		.then(function(err){
			dispatch(addNoteError())
			console.log('not ok')
		})
	}
}

function updateNote (id,data,note) {
	return (dispatch) => {
		dispatch(updateNoteRequest())
		axios.put('http://localhost:8000/api/notes/update/'+id,data)
		.then(function(response){
			dispatch(updateNoteSuccess(note))
			console.log('ok')
		})
		.then(function(err){
			dispatch(updateNoteError())
			console.log('not ok')
		})
	}
}

function updateNoteRequest () {
	return {
		type:'UPDATE_NOTE_REQUEST'
	}
}

function updateNoteSuccess (data) {
	return {
		type:'UPDATE_NOTE_SUCCESS',
		payload:data
	}
}

function updateNoteError () {
	return {
		type:'UPDATE_NOTE_ERROR'
	}
}

function getNotesRequest () {
	return {
		type:'GET_NOTES_REQUEST'
	}
}

function getNotesSuccess (data) {
	return {
		type:'GET_NOTES_SUCCESS',
		payload:data
	}
}

function getNotesError () {
	return {
		type:'GET_NOTES_ERROR'
	}
}

export { addNote,removeNote,updateNote,loadContent };
