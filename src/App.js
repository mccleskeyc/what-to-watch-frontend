import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/NavBar';
import Home from './components/Home';
import ErrorAlert from './components/Error';
class App extends Component {
  render() {
  return (
    <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={ErrorAlert} />
    </Switch>
    <Footer />
    </Router>
  );
}
}

export default App;
