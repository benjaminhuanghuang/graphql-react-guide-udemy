import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
//
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  dataIdFormObject: o => o.id
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Route exact path="/" component={SongList} />
          <Route path="/new" component={SongCreate} />
          <Route exact path="/detail/:id" component={SongDetail} />
        </div>
      </Router>
    </ApolloProvider >
  );
};

export default App;