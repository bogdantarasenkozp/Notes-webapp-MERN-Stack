import NoteModel from '../models/Notes'

const addNote = (data) => {
  let Note = new NoteModel(data);
  Note.save(
    (err,note) => {
      if (err) throw err;
    }
  );
  return Note;
}

const getAllNotes = (id) => {
  return NoteModel.find(
     {userid:id},(err,users) => {
      if (err) throw err;
      return users;
    }
  )
}

const updateNote = (id,data) => {
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

const deleteNote = (id) => {
  NoteModel.findByIdAndRemove(
    id,(err,note) => {
      if (err) throw err;
    }
  )
}

export default { addNote,getAllNotes,updateNote,deleteNote };
