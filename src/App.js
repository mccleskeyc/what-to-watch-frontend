import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/NavBar';
import Home from './components/Home';
import ErrorAlert from './components/Error';
import About from './components/About';
import Form from './components/Form';
import movieIndex from './components/movieIndex';

class App extends Component {
  render() {
  return (
    <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/movieindex" component={movieIndex} />
      <Route component={ErrorAlert} />
    </Switch>
    <Footer />
    </Router>
  );
}
}

export default App;
