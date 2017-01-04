import 'babel-polyfill';
import Koa from 'koa';
import mongoose from 'mongoose';
import router_middleware from 'koa-router';
import parser from 'koa-bodyparser';
import cors from 'kcors';
import jwt from "koa-jwt";

import private_api from './routes/private_api';
import public_api from './routes/public_api';
import connect from './config/mongoose'
import passport, { localAuthHandler } from "./auth/passport";

const port = process.env.PORT || 8000;
const db = connect(mongoose);
const protected_routes = private_api(router_middleware());
const public_routes = public_api(router_middleware());

const app = new Koa();

app.use(cors());

app.use(parser());

// app.use(async (ctx,next) => {
// 	console.log(ctx);
// 	return await next();
// });

app.use(public_routes.routes());
app.use(public_routes.allowedMethods());

app.use(passport.initialize());
app.use(jwt({ secret: "secret", debug: true }))

app.use(protected_routes.routes());
app.use(protected_routes.allowedMethods());

// app.use(async (ctx) => {
//     ctx.body = 'Hello world';
// });

app.listen(port,() => {
	console.log('listen on port '+port);
});
