import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup, Input, Table, Container, Row, Col } from 'reactstrap';
class UserComponent extends Component{

  constructor(props,context){
    super(props,context);

    this.state = {
      changeInputShow:false
    };

    this.toggleChangeInput=this.toggleChangeInput.bind(this);
    this.changeInputClick=this.changeInputClick.bind(this);
  }

  toggleChangeInput () {
  	if(this.state.changeInputShow == true){
  		this.setState({changeInputShow:false});
  	}else{
  		this.setState({changeInputShow:true});
  	}
  }

  changeInputClick (event) {
  	event.preventDefault();
  	let name = ReactDOM.findDOMNode(this.refs.changeName).value;
  	let userId = this.props.user.id;
  	let user = {
  		id:userId,
  		name:name
  	}
  	this.props.updateItem(user)
  	this.toggleChangeInput()

  }

  render () {

  	const { deleteItem,user } = this.props;
    let changeInput = null;
    let changeInputStatus = null;

    if(this.state.changeInputShow){
      changeInput = (
        <div>
        	<Col xs="10">
  	      	<Input type='text' ref='changeName'/>
          </Col>
          <Col xs="2">
  	      	<Button outline color="primary" onClick={this.changeInputClick.bind(this)}>change</Button>
        	</Col>
        </div>
      )
      changeInputStatus = 'hide'
    }else{
      changeInput = ''
      changeInputStatus = 'update'
    }

  	return (
      <Row className="small-top-offset">
        <Col xs="3">{user.name}</Col>
        <Col xs="2"><Button outline color="danger" onClick={this.props.deleteItem.bind(null,user.id)}>delete</Button></Col>
        <Col xs="2"><Button outline color="warning" onClick={this.toggleChangeInput}>{changeInputStatus}</Button></Col>
        <Col xs="4">{changeInput}</Col>
      </Row>
    )

  }
}

export default UserComponent;