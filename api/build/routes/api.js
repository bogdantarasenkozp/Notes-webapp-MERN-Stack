'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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
							ctx.body = 'api path /';

						case 1:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		return function (_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}()), router.get('/notes/all', function (ctx, next) {
		ctx.body = 'api all notes';
		console.log('api all notes');
	}), router.post('/notes/add', function (ctx, next) {
		ctx.body = 'api add note';
		console.log('api add note');
	}), router.put('/notes/update/:id', function (ctx, next) {
		ctx.body = 'api update note' + ctx.params.id;
		console.log('api update note');
	}), router.delete('/notes/delete/:id', function (ctx, next) {
		ctx.body = 'api delete' + ctx.params.id;
		console.log('api delete note');
	});

	return router;
};
//# sourceMappingURL=api.js.map