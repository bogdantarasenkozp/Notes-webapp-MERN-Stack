import React, { Component } from 'react';
import Navigation from '../components/Navigation/NavigationComponent';

class MainLayout extends Component{
	render () {
		return (
			<div className="app">
				<Navigation />
				<main>
					{this.props.children}
				</main>
			</div>
		)
	}
}

export default MainLayout;
