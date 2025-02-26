// create your App component here

import React, { Component } from 'react'

class App extends Component {

  state = {
      peopleInSpace: []
  }

  render() {
    return (
      <div>
        {this.state.peopleInSpace.map((astronautInSpace) => <p>{astronautInSpace.name}</p>)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(({people}) => this.setState({ peopleInSpace: people }))

  }

}

export default App;
