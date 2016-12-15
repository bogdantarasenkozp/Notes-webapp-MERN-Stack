var _ = require('lodash');

const initialUserState = {
	users: [
        {id:1, name:'Ryan' },
        {id:2, name:'Michael' },
        {id:3, name:'Dan' }
    ]
}

const userReducer = function(state = initialUserState,action){
	switch(action.type){
		case 'USER_LIST_SUCCESS':
			return {...state,...{ users:action.users }};
		case 'ADD_USER':
			return {users:[...state.users,...[action.user]]};
		case 'REMOVE_USER':
			return {users:_.intersection(state.users,action.users)};
		case 'UPDATE_USER':
			//return {users:action.users};
			return {...state,...{ users:action.users }};
			console.log(state)
			break;

	}
	return state;
}

export default userReducer;