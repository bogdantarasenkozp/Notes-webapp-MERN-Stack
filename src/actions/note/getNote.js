import { getNotesRequest } from '../../api/index'

export const getNotesMakeRequest = () => {
	return {
		type:'GET_NOTES_REQUEST'
	}
}

export const getNotesSuccess = (data) => {
	return {
		type:'GET_NOTES_SUCCESS',
		payload:data
	}
}

export const getNotesError = () => {
	return {
		type:'GET_NOTES_ERROR'
	}
}

export const loadContent = (userId) => {
	return (dispatch) => {
		dispatch(getNotesMakeRequest())
		getNotesRequest(userId)
		.then(
			(responseData) => {
				dispatch(getNotesSuccess(responseData))
			}
		)
	}
}
