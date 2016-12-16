import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Col } from 'reactstrap';

class InputComponent extends Component{

	addUser (event) {
		event.preventDefault();
		let user = {};
		const { addItem } = this.props;
		let input = ReactDOM.findDOMNode(this.refs.username);
		let regex = /^[a-zA-Zא-תа-я ]+$/i;

		if(input.value === ''){
			input.placeholder = 'Empty!Please enter the name'
		}else if(input.value.match(regex) == null){
			input.value = '';
			input.placeholder = 'Validation!There are no numbers in the name'
		}else{
			user.name = input.value;
			input.value = '';
			input.placeholder = 'Enter your name'
			addItem(user);
		}
		
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