'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Notes = require('../models/Notes');

var _Notes2 = _interopRequireDefault(_Notes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addNote(data) {
  var Note = new _Notes2.default(data);
  Note.save(function (err, note) {
    if (err) throw err;
  });
  return Note;
}

function getAllNotes(id) {
  return _Notes2.default.find({ userid: id }, function (err, users) {
    //{},(err,users) => {
    if (err) throw err;
    return users;
  });
}

function updateNote(id, data) {
  _Notes2.default.findOneAndUpdate({ _id: id }, { text: data.text }, function (err, note) {
    if (err) throw err;
    note.text = data.text;
    note.save(function (err, note) {
      if (err) throw err;
    });
  });
  return _Notes2.default.findById(id, function (err, note) {
    if (err) throw err;
    return note;
  });
}

function deleteNote(id) {
  _Notes2.default.findByIdAndRemove(id, function (err, note) {
    if (err) throw err;
  });
}

exports.default = { addNote: addNote, getAllNotes: getAllNotes, updateNote: updateNote, deleteNote: deleteNote };
//# sourceMappingURL=Notes.js.map