import axios from 'axios';

function signin (data) {
  console.log(data)
  return (dispatch)=>{
    dispatch(signinRequest());
    axios.post('http://localhost:8000/api/auth/signin',data)
    .then(function(response){
      localStorage.setItem('accessToken',response.data.accessToken);
      localStorage.setItem('refreshToken',response.data.refreshToken);
      dispatch(signinSuccess());
      window.location.href = '/notes';
    })
    .then(function(err){
      console.log('sign up err')
      dispatch(signinError())
    })
  }
}

function signinRequest () {
  return {
    type:'SIGN_UP_REQUEST'
  }
}

function signinSuccess () {
  return {
    type:'SIGN_UP_SUCCESS'
  }
}

function signinError () {
  return {
    type:'SIGN_UP_ERROR'
  }
}

export { signin }
