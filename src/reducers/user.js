const initialUserState = {
  user:{}
};

const userReducer = function (state = initialUserState,action) {
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return {user:action.user}
  }
  return state;
}

export default userReducer;
