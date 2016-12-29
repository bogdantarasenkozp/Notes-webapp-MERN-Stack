import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './components/MainLayout';
import NoteListContainer from './containers/NoteListContainer';
import HomeComponent from './components/HomeComponent';

export default (
	<Router history={browserHistory}>
	  <Route path="/" component={MainLayout}>
	    <IndexRoute component={HomeComponent} />
	    <Route path="notes" component={NoteListContainer} />
	  </Route>
	</Router>
);