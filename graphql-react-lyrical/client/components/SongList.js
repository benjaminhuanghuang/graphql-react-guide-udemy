import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {graphql} from 'react-apollo';
import gql from 'graphql-tag';


class SongList extends Component{
  renderSongs(){
    if(this.props.data.loading)
    {
      return  <div>Loading....</div>
    }
    return this.props.data.songs.map((song)=>{
      return (
        <li>
            {song.title}
          </li>
      );
    });
  }
  render(){
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
const query = gql`
  {
    songs{
      title
    }
  }
`;

export default graphql(query)(SongList);
