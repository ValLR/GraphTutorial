import React, { Component } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

//This is a simple React component that expects a link in its props and renders the link’s description and url

class Link extends Component {

  render() {
    return (
      <div>
        <div>{this.props.link.description} ({this.props.link.url})</div>
      </div>
    )
  }
  
  _voteForLink = async () => {
    // ... you'll implement this in chapter 6  
  }

}

export default createFragmentContainer(Link, graphql`
  fragment Link_link on Link {
    id
    description
    url
  }
`)