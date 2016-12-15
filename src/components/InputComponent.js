import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Input extends Component{

	addUser (event) {
		event.preventDefault();
		let user = {};

		const { addItem } = this.props;
		user.name = ReactDOM.findDOMNode(this.refs.username).value;

		addItem(user);
		ReactDOM.findDOMNode(this.refs.username).value = '';
	}

	render(){
		return (
			<form onSubmit={this.addUser.bind(this)}>
				<div>
					<input type="text" placeholder='Enter your name' ref='username' />
				</div>
				<button type="submit">Add user</button>
			</form>
		);
	}
}

export default Input;