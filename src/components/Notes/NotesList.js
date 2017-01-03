import React, {Component} from 'react';
import NoteComponent from './NoteComponent';

class NotesList extends Component{

  render () {
    let _this = this;
    console.log(this.props.notes)
    return (
      <div>
        {
          this.props.notes.map((note) => {
            return (
              <div key={note._id}>
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
