import { signinRequest } from '../api/index';
import { getUser } from './user';

const signinSuccess = () => {
  return (dispatch) => {
    dispatch(getUser());
  }
}

const signinMakeRequest = () => {
  return {
     type:'SIGN_UP_REQUEST'
  }
}

const signinError = () => {
  return {
    type:'SIGN_UP_ERROR'
  }
}

export const signin = (userData) => {
  return (dispatch)=>{
    dispatch(signinMakeRequest());
    signinRequest(userData)
    .then(
      (status) => {
        console.log('sign in')
        console.log(status)
        if (status)
          dispatch(signinSuccess());
        else {
          dispatch(signinError());
        }
      }
    )
  }
}
