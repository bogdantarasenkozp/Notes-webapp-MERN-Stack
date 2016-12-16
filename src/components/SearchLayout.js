import React,{ Component } from 'react';

class SerchLayout extends Component{
	render () {
		return (
			<div className="search">
				<div className="results">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default SerchLayout;