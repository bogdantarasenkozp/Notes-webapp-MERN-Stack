import mongoose from 'mongoose'

let Schema = mongoose.Schema;

let Notes = new Schema({
  userid:String,
  text:String
});

let NoteModel = mongoose.model('Notes',Notes);

export default NoteModel;
