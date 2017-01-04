import NoteModel from '../methods/Notes'

export default (router) => {
	const api = 'api';
	router.prefix(`/${api}`);

		router.get('/',async (ctx,next) =>{
	    ctx.body = await NoteModel.getAllNotes ();
	  }),

		router.get('/notes/all',async (ctx,next) => {
			let res = await NoteModel.getAllNotes ();
			ctx.body = res;
			console.log('api all notes')
		}),

		router.post('/notes/add',async (ctx,next) => {
			let req_data = ctx.request.body;
			ctx.body = await NoteModel.addNote (req_data);
			console.log('api add note');
		}),

		router.put('/notes/update/:id',async (ctx,next) => {
			let req_data = ctx.request.body;
			ctx.body = await NoteModel.updateNote (ctx.params.id,req_data);
			console.log('api update note');
		}),

		router.delete('/notes/delete/:id',async (ctx,next) => {
			ctx.body = await NoteModel.deleteNote (ctx.params.id);
			console.log('api delete note')
		}),

		router.get("/me", (ctx) => {
			ctx.body = ctx.state.user;
		})

	return router;
}
