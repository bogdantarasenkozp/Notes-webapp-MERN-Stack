import React, {Component} from 'react';
import UserList from '../components/UserList';
import { connect } from 'react-redux';
import store from '../store/index';

class UserListContainer extends Component{
	
	render () {
		return <UserList users={this.props.users} />
	}
}

const mapStateToProps = function(store){
	return {
		users:store.userState.users
	}
}


export default connect(mapStateToProps)(UserListContainer);