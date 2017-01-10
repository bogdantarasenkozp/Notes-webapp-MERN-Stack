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

var _koaJwt = require('koa-jwt');

var _koaJwt2 = _interopRequireDefault(_koaJwt);

var _private_api = require('./routes/private_api');

var _private_api2 = _interopRequireDefault(_private_api);

var _public_api = require('./routes/public_api');

var _public_api2 = _interopRequireDefault(_public_api);

var _mongoose3 = require('./config/mongoose');

var _mongoose4 = _interopRequireDefault(_mongoose3);

var _passport = require('./auth/passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 8000;
var db = (0, _mongoose4.default)(_mongoose2.default);
var protected_routes = (0, _private_api2.default)((0, _koaRouter2.default)());
var public_routes = (0, _public_api2.default)((0, _koaRouter2.default)());

var app = new _koa2.default();

app.use((0, _kcors2.default)());
app.use((0, _koaBodyparser2.default)());

app.use(public_routes.routes());
app.use(public_routes.allowedMethods());

app.use(_passport2.default.initialize());
app.use((0, _koaJwt2.default)({ secret: "secret", debug: true }));

app.use(protected_routes.routes());
app.use(protected_routes.allowedMethods());

app.listen(port, function () {
	console.log('listen on port ' + port);
});
//# sourceMappingURL=index.js.map