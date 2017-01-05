import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './components/MainLayout';
import HomeComponent from './components/Home/HomeComponent';
import AuthComponent from './components/Auth/AuthComponent';
import NoteListContainer from './containers/NoteListContainer';

export default (
	<Router history={browserHistory}>
	  <Route path="/" component={MainLayout}>
	    <IndexRoute component={HomeComponent} />
	    <Route path="notes" component={NoteListContainer} />
	    <Route path="auth" component={AuthComponent} />
	  </Route>
	</Router>
);
