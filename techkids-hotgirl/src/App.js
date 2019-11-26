import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

import Router from './Router';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    user: null,
  }

  componentDidMount() {
    axios({
      url: 'http://localhost:6969/api/auth/check',
      method: 'GET',
      withCredentials: true,
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Router />
      </div>
    );
  }
}

export default App;
