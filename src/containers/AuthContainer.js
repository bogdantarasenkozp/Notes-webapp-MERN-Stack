import React,{Component} from 'react'

import SignInComponent from '../components/Auth/SignInComponent';
import SignUpComponent from '../components/Auth/SignUpComponent';

class AuthContainer extends Component{
	render(){
		return (
			<div>
				<SignInComponent />
				<SignUpComponent />
			</div>
		);
	}
}

export default AuthContainer;