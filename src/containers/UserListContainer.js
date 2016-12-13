import React, {Component} from 'react';
import { connect } from 'react-redux';

import UserList from '../components/UserList';
import Input from '../components/InputComponent';

import addUser from '../actions/user';
import store from '../store/index';

var _ = require('lodash');

class UserListContainer extends Component{
	
	handleSubmit (user) {
		console.log(store);
		let users = store.getState();
		let lastIndex = _.last(users.userState.users).id;
		let currentIndex = ++lastIndex;

		user.id = currentIndex;

		store.dispatch(addUser(user));

		console.log(store.getState());
	}

	render () {
		return (
			<div>
				<Input onSubmit={this.handleSubmit} />
				<UserList users={this.props.users} />
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