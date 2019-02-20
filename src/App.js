import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Main from './components/Main';

import "./sass/main.scss";

class App extends Component {
  render() {
    const title = "3 New posts"
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Alert title={title}/>
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
