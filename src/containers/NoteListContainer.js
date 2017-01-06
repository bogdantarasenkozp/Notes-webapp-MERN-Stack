import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
const _ = require('lodash');

import NotesList from '../components/Notes/NotesList';
import InputComponent from '../components/Input/InputComponent';
import { addNote,removeNote,updateNote,loadContent } from '../actions/note';
import { getUser } from '../actions/signin';
import store from '../store/index';

class NoteListContainer extends Component{

	constructor (props,context) {
		super(props,context);

		this.addNote = this.addNote.bind(this);
		this.deleteNote = this.deleteNote.bind(this);
		this.updateNote = this.updateNote.bind(this);
	}

	componentWillMount () {
		let userId = localStorage.getItem('userId');
		console.log(userId);
		if(this.props.notes.length === 0 )
			store.dispatch(loadContent(userId))
	}

	addNote (note) {
		note.userid = this.props.user._id;
		store.dispatch(addNote(note));
	}

	deleteNote (id) {
		let notes = this.props.notes;
		_.remove(notes, function(note) {
		 return note._id === id;
		});
		store.dispatch(removeNote(id,notes));
	}

	updateNote (note) {
		let notes = this.props.notes;
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
