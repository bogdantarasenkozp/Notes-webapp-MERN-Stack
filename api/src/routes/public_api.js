import { localAuth } from '../auth/passport'

export default (router) => {
	const api = 'api';
	router.prefix(`/${api}`);

	router.get('/test',async (ctx,next) =>{
	  ctx.body = 'test route'
	})

	router.post('/auth/signin',localAuth)

	router.post('/auth/signup',localAuth)


	return router;
}
