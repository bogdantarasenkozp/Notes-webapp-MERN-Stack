import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Form, FormGroup, Label } from 'reactstrap';

class SignInComponent extends Component{

	loginClick (event) {
		event.preventDefault();
		let userData = {};
		const { loginUser } = this.props;
		userData.username = ReactDOM.findDOMNode(this.refs.username).value;
		userData.password = ReactDOM.findDOMNode(this.refs.password).value;
		loginUser(userData);
	}

	render() {
	    return (
	      <Form onSubmit={this.loginClick.bind(this)}>
	        <FormGroup>
	          <Label for="exampleEmail">Username</Label>{' '}
	          <Input type="text" placeholder="signin username" ref="username" />
	        </FormGroup>
	        {' '}
	        <FormGroup>
	          <Label for="examplePassword">Password</Label>{' '}
	          <Input type="password" placeholder="password" ref="password" />
	        </FormGroup>
	        {' '}
	        <Button>Sign in</Button>
	      </Form>
	    );
	}
}

export default SignInComponent;
