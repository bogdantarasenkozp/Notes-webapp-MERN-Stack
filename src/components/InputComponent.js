import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class InputComponent extends Component{

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
			<div>
				<Col xs="8" className="clear-padding">
					<Input type="text" placeholder='Enter your name' ref='username' />
				</Col>
				<Col xs="2">
					<Button outline color="success" onClick={this.addUser.bind(this)}>add user</Button>{' '}
				</Col>
			</div>
		);
	}
}

export default InputComponent;