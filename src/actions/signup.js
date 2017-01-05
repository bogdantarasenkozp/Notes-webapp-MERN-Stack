import axios from 'axios';

function signup (data) {
  return (dispatch)=>{
    dispatch(signupRequest());
    axios.post('http://localhost:8000/api/auth/signup',data)
    .then(function(response){
      console.log('sign up success')
      console.log(response.data)
      dispatch(signupSuccess())
    })
    .then(function(err){
      console.log('sign up err')
      dispatch(signupError())
    })
  }
}

function signupRequest () {
  return {
    type:'SIGN_UP_REQUEST'
  }
}

function signupSuccess () {
  return {
    type:'SIGN_UP_SUCCESS'
  }
}

function signupError () {
  return {
    type:'SIGN_UP_ERROR'
  }
}

export { signup }
