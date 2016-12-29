import 'babel-polyfill';
import Koa from 'koa';
// Middleware for routing
import router_middleware from 'koa-router';
// Middleware for accessingjson fron ctx.body
import parser from 'koa-bodyparser';
// file with my routes
import routing from './routes/router';

const router = routing(router_middleware());
const app = new Koa();

//parse requests
app.use(parser())
//log context of each request
app.use(async (ctx,next) => {
	console.log(ctx);
	return await next();
});
//assign routes
app.use(router.routes())
app.use(router.allowedMethods())

// uses async functions
app.use(async (ctx) => {
    ctx.body = 'Hello world';
});

app.listen(3000,() => {
	console.log('listen on port 3000')
});
