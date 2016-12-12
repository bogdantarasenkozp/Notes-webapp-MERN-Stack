import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './components/MainLayout';
import SearchLayout from './components/SearchLayout';
import UserList from './components/UserList';
import HomeComponent from './components/HomeComponent';

import './index.css';

console.log(HomeComponent);

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={HomeComponent} />
      <Route component={SearchLayout}>
        <Route path="users" component={UserList} />
      </Route> 
    </Route>
  </Router>
), document.getElementById('root'));