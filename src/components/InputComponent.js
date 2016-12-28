import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Col } from 'reactstrap';

class InputComponent extends Component{

	addNote (event) {

		event.preventDefault();
		
		let note = {};
		const { addNote } = this.props;
		let input = ReactDOM.findDOMNode(this.refs.input_note);
		let regex = /^[a-zA-Zא-תа-я ]+$/i;

		if(input.value === ''){
			input.placeholder = 'Empty!Please enter the note'
		}else if(input.value.match(regex) == null){
			input.value = '';
			input.placeholder = 'Validation!There are no numbers in the note'
		}else{
			note.text = input.value;
			input.value = '';
			input.placeholder = 'Enter your note'
			addNote(note);
		}
		console.log(note)
		
	}

	render(){
		return (
			<div>
				<Col xs="8" className="clear-padding">
					<Input type="text" placeholder='Enter your note' ref='input_note' />
				</Col>
				<Col xs="2">
					<Button outline color="success" onClick={this.addNote.bind(this)}>add note</Button>{' '}
				</Col>
			</div>
		);
	}
}

export default InputComponent;