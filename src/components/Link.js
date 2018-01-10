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

/*The function createFragmentContainer is a higher-order component that takes in two arguments:

1.(Link) A React component for which you want to declare some data dependencies
2.(info) Data dependencies written as a GraphQL fragment and wrapper using the graphql function*/

export default createFragmentContainer(Link, graphql`
  fragment Link_link on Link {
    id
    description
    url
  }
`)