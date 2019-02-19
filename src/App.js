import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Main from './components/Main';
import Footer from './components/Footer';

import "./sass/main.scss";

class App extends Component {
  render() {
    const title = "3 New Posts"
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Alert title={title}/>
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
