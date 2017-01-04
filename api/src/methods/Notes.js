import NoteModel from '../models/Notes'

function addNote (data) {
  let Note = new NoteModel(data);
  Note.save(
    (err,note) => {
      if (err) throw err;
    }
  );
  return Note;

}

function getAllNotes () {
  return NoteModel.find(
    {},(err,users) => {
      if (err) throw err;
      return users;
    }
  )
}

function updateNote (id,data) {
  NoteModel.findOneAndUpdate(
    {_id:id},{text:data.text},(err,note) => {
      if (err) throw err;
      note.text = data.text;
      note.save(
        (err,note)=>{
          if (err) throw err;
        }
      )
    }
  )
  return NoteModel.findById(
    id, (err, note) => {
      if (err) throw err;
      return note;
    }
  )
}

function deleteNote (id) {
  NoteModel.findByIdAndRemove(
    id,(err,note) => {
      if (err) throw err;
    }
  )
}

export default {addNote,getAllNotes,updateNote,deleteNote};
