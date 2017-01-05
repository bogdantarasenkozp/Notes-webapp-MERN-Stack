'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findOneOrCreate = require('mongoose-find-one-or-create');

var Schema = _mongoose2.default.Schema;

var User = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

User.plugin(findOneOrCreate);

var UserModel = _mongoose2.default.model('User', User);

exports.default = UserModel;
//# sourceMappingURL=User.js.map