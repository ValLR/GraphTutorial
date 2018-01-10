import CreateLinkMutation from '../mutations/CreateLinkMutation'

_createLink = () => {
  const { description, url } = this.state
  CreateLinkMutation(description, url, () => console.log(`Mutation completed`))
  }