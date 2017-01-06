import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
const _ = require('lodash');

import NotesList from '../components/Notes/NotesList';
import InputComponent from '../components/Input/InputComponent';
import { addNote,removeNote,updateNote,loadContent } from '../actions/note';
import store from '../store/index';

class NoteListContainer extends Component{

	componentWillMount () {
		let userId = this.props.user._id;
		if(this.props.notes.length === 0 ){
				store.dispatch(loadContent(userId));
		}
	}

	addNote (note) {
		console.log(store.getState().userState.user._id)
		note.userid = store.getState().userState.user._id;
		store.dispatch(addNote(note));
	}

	deleteNote (id) {
		let notes = store.getState().noteState.notes;
		_.remove(notes, function(note) {
		 return note._id === id;
		});
		store.dispatch(removeNote(id,notes));
	}

	updateNote (note) {
		let notes = store.getState().noteState.notes;
		let noteIndex = _.findIndex(notes,{_id:note._id});
		notes[noteIndex].text = note.text;
		store.dispatch(updateNote(note._id,note,notes))
	}

	render () {
		return (
			<Container>
				<Row className="small-top-offset">
					<Col xs="6">
						<InputComponent addNote={this.addNote} />
					</Col>
				</Row>

				<Row>
					<Col xs="12">
						<NotesList notes={this.props.notes} deleteNote={this.deleteNote} updateNote={this.updateNote}/>
					</Col>
				</Row>
			</Container>
		)
	}
}

const mapStateToProps = function(store){
	return {
		notes:store.noteState.notes,
		user:store.userState.user
	}
}

export default connect(mapStateToProps)(NoteListContainer);
