import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

//
import fetchSong from '../queries/fetchSong'

class SongDetail extends Component {

  render() {
    const { song } = this.props.data;
    if (!song) {
      return <div>Loading...</div>
    }
    return (
      <div>
         <Link to="/"> Back </Link>
        {song.title}
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => {
    return { variables: { id: props.match.params.id } }
  }
})(SongDetail);