function addNote(data){
	return {
		type:'ADD_NOTE',
		user:data
	}
}

function removeNote(data){
	return {
		type:'REMOVE_NOTE',
		users:data
	}
}

function updateNote(data){
	return {
		type:'UPDATE_NOTE',
		users:data
	}
}

function searchNote(data){
	return {
		type:'SEARCH_NOTE',
		payload:data
	}
}

export {addNote,removeNote,updateNote,searchNote};