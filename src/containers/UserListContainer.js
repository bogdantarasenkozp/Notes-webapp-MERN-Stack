import React, {Component} from 'react';
import { connect } from 'react-redux';

import UserList from '../components/UserList';
import Input from '../components/InputComponent';

import { addUser,removeUser } from '../actions/user';
// import  from '../actions/user';

import store from '../store/index';

var _ = require('lodash');

class UserListContainer extends Component{
	
	handleSubmit (user) {
		let users = store.getState();
		
		if(users.userState.users.length > 0){
			var lastIndex = _.last(users.userState.users).id;
		}else{
			var lastIndex = 1;
		}
		
		let currentIndex = ++lastIndex;

		user.id = currentIndex;

		store.dispatch(addUser(user));
	}

	deleteItem (id) {
		let users = store.getState().userState.users;
		let res = _.remove(users, function(user) {
		  return user.id === id;
		});
		
		store.dispatch(removeUser(users));
	}

	updateItem(user) {
		console.log(user.id)
		//task:find and change element of arr
		// let users = store.getState().userState.users;
		// let res = _.chain(users).find({id:user.id});
		// console.log(res)
	}

	render () {
		return (
			<div>
				<Input onSubmit={this.handleSubmit} />
				<UserList users={this.props.users} deleteItem={this.deleteItem} updateItem={this.updateItem}/>
			</div>
		)
	}
}

const mapStateToProps = function(store){
	return {
		users:store.userState.users
	}
}

export default connect(mapStateToProps)(UserListContainer);