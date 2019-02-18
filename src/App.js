import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';

import "./sass/main.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
        </div>
      </Router>
    );
  }
}

export default App;
