"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateTokens = undefined;

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _crypto = require("crypto");

var _crypto2 = _interopRequireDefault(_crypto);

var _es6Promisify = require("es6-promisify");

var _es6Promisify2 = _interopRequireDefault(_es6Promisify);

var _redis = require("redis");

var _config = require("../config/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var redis = (0, _redis.createClient)();

var redisGetAsync = (0, _es6Promisify2.default)(redis.get, redis);
var redisSetexAsync = (0, _es6Promisify2.default)(redis.setex, redis);
var signAsync = (0, _es6Promisify2.default)(_jsonwebtoken2.default.sign, _jsonwebtoken2.default);
var randomBytesAsync = (0, _es6Promisify2.default)(_crypto2.default.randomBytes, _crypto2.default);

var generateJwtId = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
    var jti;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return randomBytesAsync(32);

          case 3:
            jti = _context.sent;
            return _context.abrupt("return", Promise.resolve(jti.toString("hex")));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", Promise.reject(_context.t0));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 7]]);
  }));

  return function generateJwtId() {
    return _ref.apply(this, arguments);
  };
}();

var generateTokens = exports.generateTokens = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(payload, secret) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var auth, accessTokenId, refreshTokenId, accessTokenPayload, refreshTokenPayload, refreshTokenOpts, accessTokenOpts, refreshToken, accessToken;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            auth = _config2.default.auth;
            _context2.next = 4;
            return generateJwtId();

          case 4:
            accessTokenId = _context2.sent;
            _context2.next = 7;
            return generateJwtId();

          case 7:
            refreshTokenId = _context2.sent;
            accessTokenPayload = Object.assign({}, payload, { jti: accessTokenId });
            refreshTokenPayload = Object.assign({}, {
              jti: refreshTokenId,
              ati: accessTokenId
            });
            refreshTokenOpts = Object.assign({}, {
              expiresIn: auth.refreshTokenTtl
            }, opts);
            accessTokenOpts = Object.assign({}, {
              expiresIn: auth.accessTokenTtl
            }, opts);
            _context2.next = 14;
            return signAsync(refreshTokenPayload, secret, refreshTokenOpts);

          case 14:
            refreshToken = _context2.sent;
            _context2.next = 17;
            return signAsync(accessTokenPayload, secret, accessTokenOpts);

          case 17:
            accessToken = _context2.sent;
            _context2.next = 20;
            return redisSetexAsync(refreshTokenId, auth.refreshTokenTtl, payload.user.username);

          case 20:
            return _context2.abrupt("return", Promise.resolve({
              accessToken: accessToken,
              refreshToken: refreshToken
            }));

          case 23:
            _context2.prev = 23;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", Promise.reject(_context2.t0));

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 23]]);
  }));

  return function generateTokens(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
//# sourceMappingURL=token.js.map