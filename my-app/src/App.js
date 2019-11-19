import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ShowCount from './components/ShowCount';
import IncreaseButton from './components/IncreaseButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Huy",
      count: 0
    }

    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ShowCount count={this.state.count} />
          <IncreaseButton increaseCount={this.increaseCount} />
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Count: {this.state.count}
          </a>
          <button onClick={this.increaseCount}>
            Increase
          </button> */}
        </header>
      </div>
    );
  }
}

export default App;
