import { browserHistory } from 'react-router';
import { getUserRequest } from '../api/index';

const getUserSuccess = (data) => {
  return {
    type:'GET_USER_SUCCESS',
    user:data
  }
}

export const getUser = () => {
  return (dispatch) => {
    getUserRequest()
    .then(
      (responseData) => {
        if(responseData){
          dispatch(getUserSuccess(responseData));
          browserHistory.push('/notes');
        }
      }
    )
  }
}
