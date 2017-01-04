"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localAuthHandler = undefined;

var _koaPassport = require("koa-passport");

var _koaPassport2 = _interopRequireDefault(_koaPassport);

var _passportLocal = require("passport-local");

var _token = require("./token");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_koaPassport2.default.use(new _passportLocal.Strategy(function (username, password, done) {
  if (username === "test" && password === "test") {
    console.log(1);
    done(null, {
      username: "test",
      verified: "true"
    }, { message: 'Success' });
  } else if (username !== "test" || password !== "test") {
    done(null, false, { message: 'Incorrect username or password.' });
  }
}));

var localAuthHandler = exports.localAuthHandler = function localAuthHandler(ctx, next) {
  console.log(ctx.request.body);
  console.log(ctx.request.body.login);
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