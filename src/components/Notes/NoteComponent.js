import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Row, Col } from 'reactstrap';

class NoteComponent extends Component{

  constructor(props,context){
    super(props,context);

    this.state = {
      changeInputShow:false
    };

    this.toggleChangeInput = this.toggleChangeInput.bind(this);
    this.changeInputClick = this.changeInputClick.bind(this);
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

    let input = ReactDOM.findDOMNode(this.refs.changeNote);
    let regex = /^[a-zA-Zא-תа-я ]+$/i;
    let note_input = input.value;
    const {note,updateNote } = this.props;

    const notedata = {
      _id:note._id,
      id:note.id,
      text:note_input
    }

    if(input.value === ''){
      input.placeholder = 'Empty!Please write the note'
    }else if(input.value.match(regex) == null){
      input.value = '';
      input.placeholder = 'Validation err!Write only letters'
    }else{
      updateNote(notedata)
      this.toggleChangeInput()
      input.value = '';
      input.placeholder = 'Enter your note'
    }
  }

  render () {

  	const { deleteNote,note } = this.props;
    let changeInput = null;
    let changeInputStatus = null;

    if(this.state.changeInputShow){
      changeInput = (
        <div>
        	<Col xs="10">
  	      	<Input type='text' ref='changeNote' />
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
        <Col xs="3">{note.text}</Col>
        <Col xs="2"><Button outline color="danger" onClick={deleteNote.bind(null,note._id)}>delete</Button></Col>
        <Col xs="2"><Button outline color="warning" onClick={this.toggleChangeInput}>{changeInputStatus}</Button></Col>
        <Col xs="4">{changeInput}</Col>
      </Row>
    )

  }
}

export default NoteComponent;
