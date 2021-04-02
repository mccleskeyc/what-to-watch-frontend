import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/NavBar';


class App extends Component {
  render() {
  return (
    <Router>
    <Nav />
    <Switch>

    </Switch>
    <Footer />
    </Router>
  );
}
}

export default App;
