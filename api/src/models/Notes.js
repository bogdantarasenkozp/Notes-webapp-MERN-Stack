import mongoose from 'mongoose'

let Schema = mongoose.Schema;

let Notes = new Schema({
  id:Number,
  text:String
});

let NoteModel = mongoose.model('Notes',Notes);

export default NoteModel;
