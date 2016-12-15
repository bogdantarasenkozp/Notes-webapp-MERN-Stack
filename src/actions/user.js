function addUser(data){
	return {
		type:'ADD_USER',
		user:data
	}
}

function removeUser(data){
	return {
		type:'REMOVE_USER',
		users:data
	}
}

function updateUser(data){
	return {
		type:'UPDATE_USER',
		users:data
	}
}

export {addUser,removeUser,updateUser};