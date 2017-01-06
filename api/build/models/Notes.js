'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var Notes = new Schema({
  userid: String,
  text: String
});

var NoteModel = _mongoose2.default.model('Notes', Notes);

exports.default = NoteModel;
//# sourceMappingURL=Notes.js.map