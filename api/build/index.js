'use strict';

require('babel-polyfill');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _kcors = require('kcors');

var _kcors2 = _interopRequireDefault(_kcors);

var _api = require('./routes/api');

var _api2 = _interopRequireDefault(_api);

var _mongoose3 = require('./config/mongoose');

var _mongoose4 = _interopRequireDefault(_mongoose3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
//mongoose for mongodb

// Middleware for routing

// Middleware for accessingjson fron ctx.body

//cors

// file with my routes

//db config


var port = process.env.PORT || 8000;
var db = (0, _mongoose4.default)(_mongoose2.default);
var router = (0, _api2.default)((0, _koaRouter2.default)());
var app = new _koa2.default();

app.use((0, _kcors2.default)());
//parse requests
app.use((0, _koaBodyparser2.default)());
//log context of each request
app.use(function () {
	var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						console.log(ctx);
						_context.next = 3;
						return next();

					case 3:
						return _context.abrupt('return', _context.sent);

					case 4:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}());
//assign routes
app.use(router.routes());
app.use(router.allowedMethods());

// uses async functions
app.use(function () {
	var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx) {
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						ctx.body = 'Hello world';

					case 1:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function (_x3) {
		return _ref2.apply(this, arguments);
	};
}());

app.listen(port, function () {
	console.log('listen on port ' + port);
});
//# sourceMappingURL=index.js.map