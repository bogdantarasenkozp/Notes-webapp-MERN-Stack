import React,{ Component } from 'react'
import { Button, Input, Col, Container, Row, Form, FormGroup, Label, FormText } from 'reactstrap';
import SignInContainer from '../../containers/SignInContainer';
import SignUpContainer from '../../containers/SignUpContainer';

class AuthComponent extends Component{
	render(){
		return (
			<div>
				<Container>
					<Row className="small-top-offset">
						<Col xs="6">
							<SignInContainer />
						</Col>
						<Col xs="6">
							<SignUpContainer />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default AuthComponent;
