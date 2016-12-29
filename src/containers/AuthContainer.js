import React,{Component} from 'react'

import SignInComponent from '../components/Auth/SignInComponent';
import SignUpComponent from '../components/Auth/SignUpComponent';

import { Button, Input, Col, Container, Row, Form, FormGroup, Label, FormText } from 'reactstrap';

class AuthContainer extends Component{
	render(){
		return (
			<div>
				<Container>
					<Row className="small-top-offset">
						<Col xs="6">
							<SignInComponent />
						</Col>
						<Col xs="6">
							<SignUpComponent />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default AuthContainer;