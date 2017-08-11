import React, { Component } from 'react';
import HeroListComponent from './hero-component'


class App extends Component {
  constructor(props){
    super(props);

    this.state={

    }
  }

  render() {
    return (
      <div>
        <h1>Hero Tutorial</h1>
        <HeroListComponent />
      </div>
    )
  }
}

export default App;
