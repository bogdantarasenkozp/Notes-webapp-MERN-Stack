import React, {Component} from 'react';
import UserList from './components/UserList'

class UserListContainer extends Component{
	
	getInitialState () {
		return {
			users: [
		        {id:1, name:'Ryan', active:true},
		        {id:2, name:'Michael', active:true},
		        {id:3, name:'Dan', active:true}
		      ]
		}
	}

	toggleActive (userId) {
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