import React, { Component } from 'react';
import { Link } from 'react-router';
import Navigation from '../components/NavigationComponent';

class MainLayout extends Component{
	render () {
		return (
			<div className="app">
				<header className="primary-header"></header>
				<Navigation />
				<main>
					{this.props.children}
				</main>
			</div>
		)
	}
}

export default MainLayout;