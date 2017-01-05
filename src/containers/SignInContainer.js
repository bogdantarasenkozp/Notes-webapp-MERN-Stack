import React,{ Component } from 'react';
import SignInComponent from '../components/Auth/SignInComponent';
import { signin } from '../actions/signin';
import store from '../store/index';

class SignInContainer extends Component {
  loginUser (data) {
    store.dispatch(signin(data))
  }

  render (){
      return <SignInComponent loginUser={this.loginUser} />
  }
}

export default SignInContainer;
