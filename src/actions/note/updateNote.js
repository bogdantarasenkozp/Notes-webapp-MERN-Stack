import { updateNoteRequest } from '../../api/index'

export const updateNoteMakeRequest = () => {
	return {
		type:'UPDATE_NOTE_REQUEST'
	}
}

export const updateNoteSuccess = (data) => {
	return {
		type:'UPDATE_NOTE_SUCCESS',
		payload:data
	}
}

export const updateNoteError = () => {
	return {
		type:'UPDATE_NOTE_ERROR'
	}
}

export const updateNote = (noteId,noteData,note) => {
	return (dispatch) => {
		dispatch(updateNoteMakeRequest())
		updateNoteRequest(noteId,noteData)
		.then(
				(status) => {
					if (status)
						dispatch(updateNoteSuccess(note))
					else
						dispatch(updateNoteError())
				}
		)
	}
}
