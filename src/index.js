import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { createStore } from 'redux'

import MainLayout from './components/MainLayout';
import SearchLayout from './components/SearchLayout';
import UserListContainer from './containers/UserListContainer';
import HomeComponent from './components/HomeComponent';

import reducer from './reducers/reducer';

import './index.css';


var store = createStore(reducer);

store.dispatch({
  type: 'ADD_USER',
  user: {name: 'Dan'}
});

console.log(store.getState());

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={HomeComponent} />
      <Route component={SearchLayout}>
        <Route path="users" component={UserListContainer} />
      </Route> 
    </Route>
  </Router>
), document.getElementById('root'));