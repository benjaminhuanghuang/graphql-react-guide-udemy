import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  onTitleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
     this.props.mutate({
      variables: {
        title: this.state.title
      }
    }).then(()=>this.props.history.push('/'));
  }

  render() {
    return (
      <div>
        <Link to="/"> Back </Link>
        <h3> Create a new Song</h3>
        <form onSubmit={this.onSubmit}>
          <label>Son Title</label>
          <input
            onChange={this.onTitleChange}
            value={this.state.title}
          ></input>
        </form>
      </div>)
  }
}
const mutation = gql`
  mutation AddSong($title: String)
  {
    addSong(title: $title){
      id,
      title 
    }
  }
`;

export default graphql(mutation)(SongCreate);
