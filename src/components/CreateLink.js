import React, { Component } from 'react'
import CreateLinkMutation from '../mutations/CreateLinkMutation'

class CreateLink extends Component {

  state = {
    description: '',
    url: ''
  }

  render() {

    return (
      <div>
        <div className='flex flex-column mt3'>
          <input
            className='mb2'
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}
            type='text'
            placeholder='A description for the link'
          />
          <input
            className='mb2'
            value={this.state.url}
            onChange={(e) => this.setState({ url: e.target.value })}
            type='text'
            placeholder='The URL for the link'
          />
        </div>
        <div
          className='button'
          onClick={() => this._createLink()}
        >
          submit
        </div>
      </div>
    )

  }


  _createLink = () => {
    const { description, url } = this.state
    CreateLinkMutation(description, url, () => this.props.history.push('/'))
    }

}

export default CreateLink
/*
This is a standard setup for a React component with two input fields where users can provide the url and description of the Link they want to create.
The data that’s typed into these fields is stored in the component’s state and will be used in _createLink when the mutation is sent.
*/