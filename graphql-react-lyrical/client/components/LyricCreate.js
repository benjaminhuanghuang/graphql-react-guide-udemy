import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  onContentChange = (event) => {
    this.setState({
      content: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId   // Passed from parent componment
      }
    }).then(()=>{
      this.setState({content: ''});
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Add a Lyric</label>
          <input value={this.state.content} onChange={this.onContentChange}></input>
        </form>
      </div>)
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID)
  {
     addLyricToSong(songId: $songId, content:$content){
    id
    lyrics{
      id
      content
      likes
    }
  }
  }
`;
export default graphql(mutation)(LyricCreate);
