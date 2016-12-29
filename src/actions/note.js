function addNote(data){
	return {
		type:'ADD_NOTE',
		payload:data
	}
}

function removeNote(data){
	return {
		type:'REMOVE_NOTE',
		payload:data
	}
}

function updateNote(data){
	return {
		type:'UPDATE_NOTE',
		payload:data
	}
}

export { addNote,removeNote,updateNote };