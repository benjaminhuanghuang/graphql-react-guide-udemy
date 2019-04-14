import React, { Component } from 'react';
//
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

export default (WrappedComonent) => {
  class RequireAuth extends Component {
    // Do not use componentDidMount, it is call only once
    componentWillUpdate() {
      if (!nextProps.data.loading && !nextProps.data.user) {
        this.props.history.push('/login');
      }
    }

    componentWillUpdate
    render(){
      return <WrappedComonent {...this.props} />;
    }
  }
  return graphql(query)(RequireAuth);
};