import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
//
import Header from './components/Header';
import LoginForm from './components/LoginForm';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  // identity every record from server so that Apollo maintain the local cache
  dataIdFormObject: o => o.id,
  opts: {
    credentials: 'same-origin'
  }
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/signup"></Route>
        </Switch>
      </Router>
    </ApolloProvider >
  );
};

export default App;