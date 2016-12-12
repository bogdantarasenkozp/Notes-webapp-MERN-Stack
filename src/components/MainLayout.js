import React, { Component } from 'react';
import { Link } from 'react-router';

class MainLayout extends Component{
	render () {
		return (
			<div className="app">
				<header className="primary-header"></header>
				<aside className="primary-aside">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/users" activeClassName="active">Users</Link></li>
						<li><Link to="/widgets">Widgets</Link></li>
					</ul>
				</aside>
				<main>
					{this.props.children}
				</main>
			</div>
		)
	}
}

export default MainLayout;