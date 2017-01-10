import NoteModel from '../methods/Notes';
import UserModel from '../methods/User';

export default (router) => {
	const api = 'api';
	router.prefix(`/${api}`);

		router.get('/',async (ctx,next) =>{
	    ctx.body = await NoteModel.getAllNotes ();
	  }),

		router.get('/notes/user/:id',async (ctx,next) => {
			let user_id = ctx.params.id;
			let res = await NoteModel.getAllNotes (user_id);
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

		router.get("/me",async (ctx) => {
			let username = ctx.state.user.user.username;
			ctx.body = await UserModel.getAllUserData (username);
		})

	return router;
}
