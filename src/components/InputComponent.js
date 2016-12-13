import React, { Component } from 'react';
import { Field,reduxForm } from 'redux-form';

class Input extends Component{
	render(){
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name</label>
					<Field name="name" component="input" type="text" />
				</div>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

Input = reduxForm({
	form: 'name'
})(Input);

export default Input;