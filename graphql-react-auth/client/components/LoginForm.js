import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';


class LoginForm extends Component {
  
  render() {
    return (

        <div>
          Login
        </div>
  
    );
  }
}

export default LoginForm;