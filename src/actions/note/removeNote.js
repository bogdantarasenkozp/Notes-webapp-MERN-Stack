import { removeNoteRequest } from '../../api/index'

export const removeNoteSuccess = (data) => {
	return {
		type:'REMOVE_NOTE_SUCCESS',
		payload:data
	}
}

export const removeNoteError = () => {
	return {
		type:'REMOVE_NOTE_ERROR'
	}
}

export const removeNoteMakeRequest = () => {
	return {
		type:'REMOVE_NOTE_REQUEST'
	}
}

export const clearContent = () => {
	return {
		type:'REMOVE_ALL_NOTES'
	}
}

export const removeNote = (noteId,data) => {
	return (dispatch) => {
		dispatch(removeNoteMakeRequest())
		removeNoteRequest(noteId)
		.then(
			(status) => {
				if (status)
					dispatch(removeNoteSuccess(data))
				else
					dispatch(removeNoteError())
			}
		)
	}
}
