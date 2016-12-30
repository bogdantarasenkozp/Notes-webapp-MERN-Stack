export default (router) => {
	const api = 'api';
	router.prefix(`/${api}`);

		router.get('/',async (ctx,next) =>{
	    ctx.body = 'api path /';
	  }),

		router.get('/notes/all',(ctx,next) => {
			ctx.body = 'api all notes';
			console.log('api all notes')
		}),

		router.post('/notes/add',(ctx,next) => {
			ctx.body = 'api add note';
			console.log('api add note');
		}),

		router.put('/notes/update/:id',(ctx,next) => {
			ctx.body = 'api update note'+ctx.params.id;
			console.log('api update note');
		}),

		router.delete('/notes/delete/:id',(ctx,next) => {
			ctx.body = 'api delete'+ctx.params.id;
			console.log('api delete note')
		})

	return router;
}
