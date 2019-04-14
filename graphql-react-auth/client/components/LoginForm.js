import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//
import { graphql } from 'react-apollo';
import mutation from '../mutations/Login';
import query from '../queries/CurrentUser'
//
import AuthForm from './AuthForm'

class LoginForm extends Component {
  onSubmit = ({ email, password }) => {
    this.props.mutate({
      variables: { email, password },
      refetchQueries:[
        query
      ]
    })
  }
  render() {
    return (

      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit} />
      </div>

    );
  }
}

export default graphql(mutation)(LoginForm);