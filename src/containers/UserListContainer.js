import React, {Component} from 'react';
import { connect } from 'react-redux';

import UserList from '../components/UserList';
import Input from '../components/InputComponent';
import SearchComponent from '../components/SearchComponent'

import { addUser,removeUser,updateUser,searchUser } from '../actions/user';

import store from '../store/index';

var _ = require('lodash');

class UserListContainer extends Component{
	
	addItem (user) {
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
		let users = store.getState().userState.users;
		let itemIndex = _.findIndex(users,{id:user.id});
		users[itemIndex].name = user.name;
		
		store.dispatch(updateUser(users))
	}

	searchItem (value) {
		 let users = store.getState().userState.users;

		 // let results = users.filter(user => {
		 // 	return user.name.toLowerCase().includes(value);
		 // });
		 // console.log(results)
		 let data = {};
		 data.users = users;
		 data.value = value;

		 store.dispatch(searchUser(data));
	}

	render () {
		return (
			<div>
				<SearchComponent searchItem={this.searchItem}/>
				<Input addItem={this.addItem} />
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