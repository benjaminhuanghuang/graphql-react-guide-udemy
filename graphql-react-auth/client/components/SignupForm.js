import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//
import { graphql } from 'react-apollo';
import mutation from '../mutations/Signup';
import query from '../queries/CurrentUser'
//
import AuthForm from './AuthForm'

class SignupForm extends Component {
  state = {
    errors: []
  }

  onSubmit = ({ email, password }) => {
    this.props.mutate({
      variables: { email, password }
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
        <h3>Sign Up</h3>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit} />
      </div>

    );
  }
}

export default graphql(mutation)(SignupForm);