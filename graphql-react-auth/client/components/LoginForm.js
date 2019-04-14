import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//
import { graphql } from 'react-apollo';
import mutation from '../mutations/Login';
import query from '../queries/CurrentUser'
//
import AuthForm from './AuthForm'

class LoginForm extends Component {
  state = {
    errors: []
  }

  onSubmit = ({ email, password }) => {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [
        query
      ]
    }).catch(res => {
      const errors = res.graphQLError.map(error => error.message);
      this.setState({
        errors
      })
    })
  }
  render() {
    return (

      <div>
        <h3>Login</h3>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit} />
      </div>

    );
  }
}

export default graphql(query)(
  graphql(mutation)(LoginForm)
);