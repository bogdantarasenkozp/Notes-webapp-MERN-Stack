'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Notes = require('../models/Notes');

var _Notes2 = _interopRequireDefault(_Notes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addNote(data) {
  var Note = new _Notes2.default(data);
  Note.save(function (err) {
    if (err) throw err;
  });
}

function getAllNotes() {
  console.log('call getAllNotes');
  return _Notes2.default.find({}, function (err, users) {
    if (err) throw err;
    return users;
  });
}

function updateNote(id, data) {
  console.log('call updateNote');
  _Notes2.default.findOneAndUpdate({ id: id }, { text: data.text }, function (err, note) {
    if (err) throw err;
    console.log(note);
    note.text = data.text;
    note.save(function (err) {
      if (err) throw err;
      console.log('successful updated');
    });
  });
}

function deleteNote(id) {
  console.log('call deleteNote');
  _Notes2.default.findOneAndRemove({ id: id }, function (err, note) {
    if (err) throw err;
    console.log('removed');
  });
}

exports.default = { addNote: addNote, getAllNotes: getAllNotes, updateNote: updateNote, deleteNote: deleteNote };
//# sourceMappingURL=Notes.js.map