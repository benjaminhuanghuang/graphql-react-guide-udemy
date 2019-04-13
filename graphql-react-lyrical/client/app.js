import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
//
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Route exact path="/" component={SongList} />
          <Route path="/new" component={SongCreate} />
        </div>
      </Router>
    </ApolloProvider >
  );
};

export default App;