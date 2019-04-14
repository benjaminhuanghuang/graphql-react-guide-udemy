import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';


class AuthForm extends Component {
  state = {
    email: "",
    password: ""
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="row">
        <form className="col s4" onSubmit={this.onSubmit}>
          <div className="input-field">
            <label>Email</label>
            <input
              placeholder="email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}></input>
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}></input>
          </div>
          <div className = "errors">
          {this.props.errors.map((error)=>{
            <div key={error}>{error}</div>
          })}
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;