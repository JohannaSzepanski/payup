import React from 'react';
import { render } from 'react-dom';
import Button from '../shared/Button';
import { Link } from 'react-router';

class Login extends React.Component {

  login() {
    console.log("clicked login button");
  }
  
  render() {
    return (
        <Button title="Logga in" onButtonClick={this.login} />
    );
  }
}
export default Login;