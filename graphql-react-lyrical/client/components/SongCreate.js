import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  // onTitleChange = (event) => {
  //   this.setState({
  //     title: event.target.value
  //   });
  // }

  onSubmit = (event) => {
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <h3> Create a new Song</h3>
        <form onSubmit={onSubmit}>
          <label>Son Title</label>
          {/* <input
            onChange={onTitleChange}
            value={}
          ></input> */}
        </form>
      </div>)
  }
}


export default SongCreate;
