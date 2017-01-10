'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllUserData = function getAllUserData(username) {
  return _User2.default.findOne({ username: username }, function (err, user) {
    if (err) throw err;
    return user;
  });
};

exports.default = { getAllUserData: getAllUserData };
//# sourceMappingURL=User.js.map