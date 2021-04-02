import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/NavBar';
import Home from './components/Home';
import ErrorAlert from './components/Error';
import About from './components/About';
import Form from './components/Form';
import MovieIndex from './components/MovieIndex';
import { connect } from 'react-redux';
import { getMovies } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    if (this.props.loading) {
      return (
        <h3>Loading...</h3>
      )
    }  return (
    <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/movieindex" component={MovieIndex} />
      <Route component={ErrorAlert} />
    </Switch>
    <Footer />
    </Router>
  );
}
}
const mapStatetoProps = state => {
  return {
    loading: state.loading
  }
}
export default connect(mapStatetoProps, {getMovies})(App);
