const initialUserState = {
	users: [
        {id:1, name:'Ryan', active:true},
        {id:2, name:'Michael', active:true},
        {id:3, name:'Dan', active:true}
    ]
}

const userReducer = function(state = initialUserState,action){
	switch(action.type){
		case 'USER_LIST_SUCCESS':
			return {...state,...{ users:action.users }}
	}
	return state;
}

export default userReducer;