import React, {Component} from 'react';
import UserList from '../components/UserList'

import _ from 'lodash'

class UserListContainer extends Component{
	
	constructor(props, context) {
	  super(props, context);
	  	this.state = {
			users: [
		        {id:1, name:'Ryan', active:true},
		        {id:2, name:'Michael', active:true},
		        {id:3, name:'Dan', active:true}
		    ]
		}
	};


	toggleActive (userId) {
		console.log(this.state);
		var newState = Object.assign({}, this.state)
	    var user = _.find(newState.users, {id: userId});
	    user.active = !user.active
	    this.setState(newState)
	}

	render () {
		return <UserList users={this.state.users} toggleActive={this.toggleActive} />
	}
}

export default UserListContainer;