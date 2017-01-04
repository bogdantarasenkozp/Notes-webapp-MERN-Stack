import mongoose from 'mongoose'

let Schema = mongoose.Schema;

let User = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

let UserModel = mongoose.model('User',User);

export default UserModel;
