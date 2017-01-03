import 'babel-polyfill';
import Koa from 'koa';
//mongoose for mongodb
import mongoose from 'mongoose';
// Middleware for routing
import router_middleware from 'koa-router';
// Middleware for accessingjson fron ctx.body
import parser from 'koa-bodyparser';
//cors
import cors from 'kcors';
// file with my routes
import api from './routes/api';
//db config
import connect from './config/mongoose'

const port = process.env.PORT || 8000;
const db = connect(mongoose);

const router = api(router_middleware());
const app = new Koa();

app.use(cors());
//parse requests
app.use(parser());
//log context of each request
app.use(async (ctx,next) => {
	console.log(ctx);
	return await next();
});
//assign routes
app.use(router.routes());
app.use(router.allowedMethods());

// uses async functions
app.use(async (ctx) => {
    ctx.body = 'Hello world';
});

app.listen(port,() => {
	console.log('listen on port '+port);
});
