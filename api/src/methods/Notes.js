import NoteModel from '../models/Notes'

function addNote (data) {
  let Note = new NoteModel(data);
  Note.save(
    (err) => {
      if (err) throw err;
    }
  );
}

function getAllNotes () {
  console.log('call getAllNotes')
  return NoteModel.find({},(err,users) => {
    if (err) throw err;
    return users;
  })
}

function updateNote (id,data) {
  console.log('call updateNote')
  NoteModel.findOneAndUpdate(
    {id:id},{text:data.text},(err,note) => {
      if (err) throw err;
      console.log(note)
      note.text = data.text;
      note.save(
        (err)=>{
          if (err) throw err;
          console.log('successful updated')
        }
      );
    }
  )
}

function deleteNote (id) {
  console.log('call deleteNote')
  NoteModel.findOneAndRemove(
    {id:id},(err,note) => {
      if (err) throw err;
      console.log('removed')
    }
  )
}

export default {addNote,getAllNotes,updateNote,deleteNote};
