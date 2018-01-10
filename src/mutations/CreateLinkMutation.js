// 1.First you need to import the right modules from react-relay as well as the environment.

import {
  commitMutation,
  graphql,
} from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import environment from '../Environment'


// 2.Here you write a simple mutation and tag it with the graphql function. This mutation could also be used inside a Playground.
const mutation = graphql`
  mutation CreateLinkMutation($input: CreateLinkInput!) {
    createLink(input: $input) {
      link {
        id
        createdAt
        url
        description
      }
    }
  }
`

// 3.The module exports a single function that takes in the post’s description and imageUrl as well as a callback that will be called when the mutation is completed.
export default (description, url, callback) => {


  // 4.Here you prepare the input object for the mutation that wraps the description and imageUrl.
  // Note that the clientMutationId is required in this case because of a minor limitation in the Graphcool API - it has no function.
  const variables = {
    input: {
      description,
      url,
      clientMutationId: ""
    },
  }


  // 5.The commitMutation function can be used to send a mutation to the server with Relay Modern.
  // You’re passing the variables that you prepared in the previous steps and execute commitMutation once everything is ready.

  commitMutation(
    environment,
    {
      mutation,
      variables,
      
      // 6.Once the mutation is fully completed, the callback that the caller passed in is invoked.

      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}