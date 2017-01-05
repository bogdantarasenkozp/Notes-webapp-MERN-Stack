import mongoose from 'mongoose'
var findOneOrCreate = require('mongoose-find-one-or-create');

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

User.plugin(findOneOrCreate);

let UserModel = mongoose.model('User',User);

export default UserModel;
