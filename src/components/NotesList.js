import React, {Component} from 'react';
import NoteComponent from '../components/NoteComponent';

class NotesList extends Component{

  render () {
    let _this = this;
    return (
      <div>
        {
          this.props.notes.map((note) => {
            console.log(note)
            return (
              <div key={note.id}>
                <NoteComponent note={note} deleteNote={this.props.deleteNote} updateNote={this.props.updateNote}/> 
              </div>
            )  
          })
        }
      </div>
    );

  }

}

export default NotesList;