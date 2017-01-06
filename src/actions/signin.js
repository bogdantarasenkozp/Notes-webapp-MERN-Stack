import axios from 'axios';
import { browserHistory } from 'react-router';

function setToken (accessToken,refreshToken){
  if (accessToken){
    axios.defaults.headers.common['Authorization'] = 'Bearer '+accessToken;
    localStorage.setItem('accessToken',accessToken);
    localStorage.setItem('refreshToken',refreshToken);
  }
}

function signin (data) {
  console.log(data)
  return (dispatch)=>{
    dispatch(signinRequest());
    axios.post('http://localhost:8000/api/auth/signin',data)
    .then(function(response){
      const accessToken = response.data.accessToken;
      const refreshToken = response.data.refreshToken;
      setToken(accessToken,refreshToken);
      dispatch(signinSuccess());
    })
    .then(function(err){
      console.log('sign up err')
      dispatch(signinError())
    })
  }
}

function signinSuccess () {
  return (dispatch) => {
    dispatch(getUser());
  }
}

function getUser () {
  return (dispatch) => {
    axios.get('http://localhost:8000/api/me')
    .then(function(response){
      dispatch(getUserSuccess(response.data));
      browserHistory.push('/notes');
    })
    .then(function(err){
      console.log('get user err')
    })
  }
}

function getUserSuccess (data) {
  return {
    type:'GET_USER_SUCCESS',
    user:data
  }
}

function signinRequest () {
  return {
    type:'SIGN_UP_REQUEST'
  }
}

function signinError () {
  return {
    type:'SIGN_UP_ERROR'
  }
}

export { signin }
