import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

//
import query from '../queries/fetchSongs'

class SongList extends Component {
  onSongDelete(id) {
    this.props.mutate({ variables: { id } }).then(()=>{
      this.props.data.refetch();
    });
  }

  renderSongs() {
    if (this.props.data.loading) {
      return <div>Loading....</div>
    }
    return this.props.data.songs.map((song) => {
      return (
        <li key={song.id} className="collection-item">
          <Link to={`/detail/${song.id}`}>{song.title}</Link>
          <i className="material-icons" onClick={()=>this.onSongDelete(song.id)}> delete </i>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>

        <Link to="/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>)
  }

}

const mutation = gql`
  mutation DeleteSong($id: ID)
  {
    deleteSong(id: $id){
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(query)(SongList)
);
