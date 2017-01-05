import React,{ Component } from 'react';
import SignUpComponent from '../components/Auth/SignUpComponent';
import {} from '../actions/signup';
class SignUpContainer extends Component {

  signUpUser (data) {
    console.log('sign up')
    console.log(data)
  }

  render (){
      return <SignUpComponent signUpUser={this.signUpUser}/>
  }
}

export default SignUpContainer;
