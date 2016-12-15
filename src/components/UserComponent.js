import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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
	      	<input type='text' ref='changeName'/>
	      	<button onClick={this.changeInputClick.bind(this)} >change</button>
      	</div>
      )
      changeInputStatus = '(hide)'
    }else{
      changeInput = ''
      changeInputStatus = '(update)'
    }

  	return (
        <li key={user.id}>
          <a href="#">{user.name}</a>
          <a href="#" onClick={this.props.deleteItem.bind(null,user.id)}>(delete)</a>
          <a href="#" onClick={this.toggleChangeInput}>
            {changeInputStatus}
          </a>
          {changeInput}
        </li>
    )

  }
}

export default UserComponent;