import React,{ Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

class HomeComponent extends Component{
	render () {
		return (
			<div>
		      <Jumbotron className="clean-background">
		      	<Container>
		      		<Row>
			        	<Col xs="12">
			        		<h1 className="display-3">Hi, this is my notes app!</h1>
			        	</Col>
			        	<Col xs="12">
			        		<p className="lead">I use here such libraries:Koa 2,MongoDB,React,Redux,React Router,ReactStrap(Bootstrap 4),Create React App (CLI)</p>
			        	</Col>
			        </Row>
			        <Row>
			        	<Col xs="3">
			        		<img src="./reactlogo.png" width="70" height="70" alt="reactlogo" />
			        	</Col>
			        	<Col xs="3">
			        		<img src="./reduxlogo.png" width="70" height="70" alt="reduxlogo" />
			        	</Col>
			        	<Col xs="3">
			        		<img src="./routerlogo.png" width="120" height="70" alt="reactrouterlogo" />
			        	</Col>
			          	<Col xs="3">
			        		<img src="./reactstraplogo.png" width="70" height="70" alt="reactstraplogo" />
			        	</Col>
			        </Row>
		        </Container>
		      </Jumbotron>
		    </div>
		);
	}
}

export default HomeComponent;
