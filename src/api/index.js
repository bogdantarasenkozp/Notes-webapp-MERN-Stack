import axios from 'axios';

const accessToken = localStorage.getItem('accessToken');
if (accessToken)
	axios.defaults.headers.common['Authorization'] = 'Bearer '+accessToken;

const setToken = (accessToken,refreshToken) => {
  if (accessToken){
    axios.defaults.headers.common['Authorization'] = 'Bearer '+accessToken;
    localStorage.setItem('accessToken',accessToken);
    localStorage.setItem('refreshToken',refreshToken);
  }
}

const setUserId = (userId) => {
  localStorage.setItem('userId',userId);
}

export const getNotesRequest = (userId) => {
  return axios.get('http://localhost:8000/api/notes/user/'+userId)
  .then(
		(response) => {
    	return response.data;
  	}
	)
}

export const removeNoteRequest = (noteId) => {
  return axios.delete('http://localhost:8000/api/notes/delete/'+noteId)
  .then(
		(response) => {
    	return true;
  	}
	)
}

export const addNoteRequest = (noteData) => {
  return axios.post('http://localhost:8000/api/notes/add',noteData)
  .then(
		(response) => {
    	return response.data;
  	}
	)
}

export const updateNoteRequest = (noteId,noteData) => {
  return axios.put('http://localhost:8000/api/notes/update/'+noteId,noteData)
  .then(
		(response) => {
			return response.data
  	}
	)
}

export const signupRequest = (userData) => {
  return axios.post('http://localhost:8000/api/auth/signup',userData)
  .then(
		(response) => {
    	console.log('sign up success')
  	}
	)
}

export const signinRequest = (userData) => {
  return axios.post('http://localhost:8000/api/auth/signin',userData)
  .then(
		(response) => {
	    const accessToken = response.data.accessToken;
	    const refreshToken = response.data.refreshToken;
	    setToken(accessToken,refreshToken);
	    console.log('sign up success')
	    return true;
  	}
	)
}

export const getUserRequest = () => {
  return axios.get('http://localhost:8000/api/me')
  .then(
		(response) => {
	    let userId = response.data._id;
	    setUserId(userId);
	    return response.data;
  	}
	)
}
