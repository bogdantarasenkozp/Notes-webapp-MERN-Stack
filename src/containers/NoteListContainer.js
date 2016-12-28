import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
const _ = require('lodash');

import NotesList from '../components/NotesList';
import InputComponent from '../components/InputComponent';
import SearchComponent from '../components/SearchComponent'

import { addNote,removeNote,updateNote,searchNote } from '../actions/note';

import store from '../store/index';

class NoteListContainer extends Component{
	
	addNote (note) {
		let notes = store.getState();
		let lastIndex = null;
		if(notes.noteState.notes.length > 0){
			lastIndex = _.last(notes.noteState.notes).id;
		}else{
			lastIndex = 1;
		}
		note.id = ++lastIndex;
		store.dispatch(addNote(note));
	}

	deleteNote (id) {
		let notes = store.getState().noteState.notes;
		_.remove(notes, function(note) {
		  return note.id === id;
		});
		store.dispatch(removeNote(notes));
	}

	updateNote (note) {
		let notes = store.getState().noteState.notes;
		let noteIndex = _.findIndex(notes,{id:note.id});
		notes[noteIndex].text = note.text;
		store.dispatch(updateNote(notes))
	}

	searchNote (value) {
		 let notes = store.getState().noteState.notes;
		 let data = {};
		 data.notes = notes;
		 data.value = value;
		 store.dispatch(searchNote(data));
	}

	render () {
		return (
			<Container>
				<Row className="small-top-offset">
					<Col xs="6">
						<InputComponent addNote={this.addNote} />
					</Col>
					<Col xs="6">
						<SearchComponent searchNote={this.searchNote}/>
					</Col>
				</Row>
				
				<Row>
					<Col xs="12">
						<NotesList notes={this.props.notes} deleteItem={this.deleteNote} updateItem={this.updateNote}/>
					</Col>
				</Row>
			</Container>
		)
	}
}

const mapStateToProps = function(store){
	return {
		notes:store.noteState.notes
	}
}

export default connect(mapStateToProps)(NoteListContainer);