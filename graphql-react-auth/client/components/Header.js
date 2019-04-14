import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';


class Header extends Component {
  onLogoutClick = () => {
    this.props.mutation({
      refetchQueries:[{
        query
      }]
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;
    if (loading) {
      return <div />;
    }
    if (user) {
      return (
        <li>
          <a onClick={this.onLogoutClick}>Logout</a>
        </li>
      );
    }
    else {
      return (<div>
        <li><Link to="/signup">Singup</Link></li>
        <li><Link to="/login">Login</Link></li>
      </div>);
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(mutation)(
  graphql(query)(Header)
);