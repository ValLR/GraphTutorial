import React, { Component } from 'react'
import Link from './Link'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

/*
Here, you’re using mock data for now to make sure the component setup works.
You’ll soon replace this with some actual data that’s loaded from the server - patience, young Padawan!
*/

class LinkList extends Component {

  render() {
    return (
      <div>
        {this.props.viewer.allLinks.edges.map(({node}) =>
            <Link key={node.__id} link={node} />
        )}
      </div>
    )
  }

}

export default createFragmentContainer(LinkList, graphql`
  fragment LinkList_viewer on Viewer {
    allLinks(last: 100, orderBy: createdAt_DESC) @connection(key: "LinkList_allLinks", filters: []) {
      edges {
        node {
          ...Link_link
        }
      }
    }
  }
`)