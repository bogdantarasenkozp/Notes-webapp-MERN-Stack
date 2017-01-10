import { signupRequest } from '../api/index';

const signup = (data) => {
  return (dispatch)=>{
    dispatch(signupMakeRequest());
    signupRequest(data)
    .then(
      (responseData) => {
        console.log(responseData)
        dispatch(signupSuccess())
      }
    )
  }
}

const signupMakeRequest = () => {
  return {
    type:'SIGN_UP_REQUEST'
  }
}

const signupSuccess = () => {
  return {
    type:'SIGN_UP_SUCCESS'
  }
}

const signupError = () => {
  return {
    type:'SIGN_UP_ERROR'
  }
}

export { signup }
