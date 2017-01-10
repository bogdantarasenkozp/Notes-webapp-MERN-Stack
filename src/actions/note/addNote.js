import { addNoteRequest } from '../../api/index'

export const addNoteSuccess = (data) => {
	return {
		type:'ADD_NOTE_SUCCESS',
		payload:data
	}
}

export const addNoteError = () => {
	return {
		type:'ADD_NOTE_ERROR'
	}
}

export const addNoteMakeRequest = () => {
	return {
		type:'ADD_NOTE_REQUEST'
	}
}

export const addNote = (noteData) => {
	return (dispatch) => {
		dispatch(addNoteMakeRequest())
		addNoteRequest(noteData)
		.then(
			(responseData) => {
				if (responseData)
					dispatch(addNoteSuccess(responseData))
				else
					dispatch(addNoteError())
			}
		)
	}
}
