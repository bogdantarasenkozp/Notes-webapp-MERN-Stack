import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import UserList from '../components/UserList';
import InputComponent from '../components/InputComponent';
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
		user.id = ++lastIndex;
		store.dispatch(addUser(user));
	}

	deleteItem (id) {
		let users = store.getState().userState.users;
		_.remove(users, function(user) {
		  return user.id === id;
		});
		store.dispatch(removeUser(users));
	}

	updateItem(user) {
		let users = store.getState().userState.users;
		let userIndex = _.findIndex(users,{id:user.id});
		users[userIndex].name = user.name;
		store.dispatch(updateUser(users))
	}

	searchItem (value) {
		 let users = store.getState().userState.users;
		 let data = {};
		 data.users = users;
		 data.value = value;
		 store.dispatch(searchUser(data));
	}

	render () {
		return (
			<Container>
				<Row className="small-top-offset">
					<Col xs="6">
						<InputComponent addItem={this.addItem} />
					</Col>
					<Col xs="6">
						<SearchComponent searchItem={this.searchItem}/>
					</Col>
				</Row>
				
				<Row>
					<Col xs="12">
						<UserList users={this.props.users} deleteItem={this.deleteItem} updateItem={this.updateItem}/>
					</Col>
				</Row>
			</Container>
		)
	}
}

const mapStateToProps = function(store){
	return {
		users:store.userState.users
	}
}

export default connect(mapStateToProps)(UserListContainer);