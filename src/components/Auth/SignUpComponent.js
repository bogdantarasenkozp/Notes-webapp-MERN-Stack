import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Col, Container, Row, Form, FormGroup, Label, FormText } from 'reactstrap';

class SignUpComponent extends Component{
	render() {
	    return (
	      <Form>
	        <FormGroup>
	          <Label for="exampleEmail">Email</Label>{' '}
	          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
	        </FormGroup>
	        {' '}
	        <FormGroup>
	          <Label for="examplePassword">Password</Label>{' '}
	          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
	        </FormGroup>
	        {' '}
	        <Button>Sign up</Button>
	      </Form>
	    );
	}
}

export default SignUpComponent;