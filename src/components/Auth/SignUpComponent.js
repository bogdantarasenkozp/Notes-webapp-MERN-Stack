import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Form, FormGroup, Label } from 'reactstrap';

class SignUpComponent extends Component{

	SignUpClick (event) {
		event.preventDefault();

		let userData = {}
		const { signUpUser } = this.props;
		userData.username = ReactDOM.findDOMNode(this.refs.username).value;
		userData.password = ReactDOM.findDOMNode(this.refs.password).value;
		signUpUser(userData)

	}

	render() {
	    return (
	      <Form onSubmit={this.SignUpClick.bind(this)}>
	        <FormGroup>
	          <Label for="exampleEmail">Username</Label>{' '}
	          <Input type="text" placeholder="signup username" ref="username" />
	        </FormGroup>
	        {' '}
	        <FormGroup>
	          <Label for="examplePassword">Password</Label>{' '}
	          <Input type="password" placeholder="password" ref="password" />
	        </FormGroup>
	        {' '}
	        <Button>Sign up</Button>
	      </Form>
	    );
	}
}

export default SignUpComponent;
