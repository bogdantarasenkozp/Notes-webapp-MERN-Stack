import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Row, Col } from 'reactstrap';
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
  	if(this.state.changeInputShow === true){
  		this.setState({changeInputShow:false});
  	}else{
  		this.setState({changeInputShow:true});
  	}
  }

  changeInputClick (event) {
  	event.preventDefault();

    let input = ReactDOM.findDOMNode(this.refs.changeName);
    let regex = /^[a-zA-Zא-תа-я ]+$/i;
    let name = input.value;
    const {user,updateItem } = this.props;
    const userdata = {
      id:user.id,
      name:name
    }

    if(input.value === ''){
      input.placeholder = 'Empty!Please write the name'
    }else if(input.value.match(regex) == null){
      input.value = '';
      input.placeholder = 'Validation err!Write only letters'
    }else{
      updateItem(userdata)
      this.toggleChangeInput()
      input.value = '';
      input.placeholder = 'Enter your name'
    }
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
        <Col xs="2"><Button outline color="danger" onClick={deleteItem.bind(null,user.id)}>delete</Button></Col>
        <Col xs="2"><Button outline color="warning" onClick={this.toggleChangeInput}>{changeInputStatus}</Button></Col>
        <Col xs="4">{changeInput}</Col>
      </Row>
    )

  }
}

export default UserComponent;