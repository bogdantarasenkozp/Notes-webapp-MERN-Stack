"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localAuth = undefined;

var _koaPassport = require("koa-passport");

var _koaPassport2 = _interopRequireDefault(_koaPassport);

var _passportLocal = require("passport-local");

var _bcrypt = require("bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _token = require("./token");

var _User = require("../models/User");

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_koaPassport2.default.use(new _passportLocal.Strategy(function (username, password, done) {

  _User2.default.findOneOrCreate({ username: username }, { username: username, password: password }, function (err, user) {

    if (err) done(null, false, { message: 'Authentication err.' });
    if (user && password == user.password) {
      done(null, {
        username: user.username,
        verified: "true"
      }, { message: 'Success' });
    }
  });
}));

var localAuth = exports.localAuth = function localAuth(ctx, next) {
  return _koaPassport2.default.authenticate('local', function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(err, user, info) {
      var _ref2, accessToken, refreshToken;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(user === false)) {
                _context.next = 5;
                break;
              }

              ctx.status = 401;
              ctx.body = info.message;
              _context.next = 17;
              break;

            case 5:
              _context.prev = 5;
              _context.next = 8;
              return (0, _token.generateTokens)({ user: user }, "secret");

            case 8:
              _ref2 = _context.sent;
              accessToken = _ref2.accessToken;
              refreshToken = _ref2.refreshToken;

              ctx.body = {
                accessToken: accessToken,
                refreshToken: refreshToken
              };
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](5);

              ctx.throw(500, _context.t0);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[5, 14]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }())(ctx, next);
};

exports.default = _koaPassport2.default;
//# sourceMappingURL=passport.js.map