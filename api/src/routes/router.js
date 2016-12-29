export default (router) => {
	const api = 'api';
	router.prefix(`/${api}`);

	router.get('/',async (ctx,next) =>{
    ctx.body = 'api path /';
    console.log('path /');
  }

	);

	return router;
}
