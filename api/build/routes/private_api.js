'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Notes = require('../methods/Notes');

var _Notes2 = _interopRequireDefault(_Notes);

var _User = require('../methods/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function (router) {
	var api = 'api';
	router.prefix('/' + api);

	router.get('/', function () {
		var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return _Notes2.default.getAllNotes();

						case 2:
							ctx.body = _context.sent;

						case 3:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		return function (_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}()), router.get('/notes/user/:id', function () {
		var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
			var user_id, res;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							user_id = ctx.params.id;
							_context2.next = 3;
							return _Notes2.default.getAllNotes(user_id);

						case 3:
							res = _context2.sent;

							ctx.body = res;
							console.log('api all notes');

						case 6:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined);
		}));

		return function (_x3, _x4) {
			return _ref2.apply(this, arguments);
		};
	}()), router.post('/notes/add', function () {
		var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx, next) {
			var req_data;
			return regeneratorRuntime.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							req_data = ctx.request.body;
							//console.log(req_data)

							_context3.next = 3;
							return _Notes2.default.addNote(req_data);

						case 3:
							ctx.body = _context3.sent;

							console.log('api add note');

						case 5:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, undefined);
		}));

		return function (_x5, _x6) {
			return _ref3.apply(this, arguments);
		};
	}()), router.put('/notes/update/:id', function () {
		var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(ctx, next) {
			var req_data;
			return regeneratorRuntime.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							req_data = ctx.request.body;
							_context4.next = 3;
							return _Notes2.default.updateNote(ctx.params.id, req_data);

						case 3:
							ctx.body = _context4.sent;

							console.log('api update note');

						case 5:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, undefined);
		}));

		return function (_x7, _x8) {
			return _ref4.apply(this, arguments);
		};
	}()), router.delete('/notes/delete/:id', function () {
		var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(ctx, next) {
			return regeneratorRuntime.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.next = 2;
							return _Notes2.default.deleteNote(ctx.params.id);

						case 2:
							ctx.body = _context5.sent;

							console.log('api delete note');

						case 4:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, undefined);
		}));

		return function (_x9, _x10) {
			return _ref5.apply(this, arguments);
		};
	}()), router.get("/me", function () {
		var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(ctx) {
			var username;
			return regeneratorRuntime.wrap(function _callee6$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							username = ctx.state.user.user.username;
							_context6.next = 3;
							return _User2.default.getAllUserData(username);

						case 3:
							ctx.body = _context6.sent;

						case 4:
						case 'end':
							return _context6.stop();
					}
				}
			}, _callee6, undefined);
		}));

		return function (_x11) {
			return _ref6.apply(this, arguments);
		};
	}());

	return router;
};
//# sourceMappingURL=private_api.js.map