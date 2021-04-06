import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getMovies } from './actions';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import MovieIndex from './components/movieIndex';
import ErrorPage from './components/Error';
import Form from './components/Form';
import Comedy from './components/Genres/Comedy';
import SciFiFant from './components/Genres/SciFiFant';
import Drama from './components/Genres/Drama';
import Family from './components/Genres/Family';
import './index.css'
import {createMuiTheme, ThemeProvider} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#01579b',
      light: '#4f83cc',
      dark: '#002f6c'
    },
    secondary: {
      main: '#edf0f2',
      light: '#ffffff',
      dark: '#bbbebf'
    }
  }
})

class App extends Component {

  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    if (this.props.loading) {
      return (
        <h3>Loading...</h3>
      )
    }



    return (
      <ThemeProvider theme={theme}>
      
      <Router>
        <Navbar />
        <div className="container">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/movieindex" component={ MovieIndex } />
          <Route exact path="/form" component={ Form } />
          <Route exact path="/comedy" component={Comedy} />
          <Route exact path="/drama" component={Drama} />
          <Route exact path="/scifi-fantasy" component={SciFiFant} />
          <Route exact path="/family" component={Family} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
        </div>
      </Router>
      
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getMovies })(App);


// import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Footer from './components/Footer';
// import Nav from './components/NavBar';
// import Home from './components/Home';
// import ErrorAlert from './components/Error';
// import About from './components/About';
// import Form from './components/Form';
// import MoviemovieIndex from './components/MoviemovieIndex';
// import { connect } from 'react-redux';
// import { getMovies } from './actions';

// class App extends Component {
//   componentDidMount() {
//     this.props.getMovies();
//   }

//   render() {
//     if (this.props.loading) {
//       return (
//         <h3>Loading...</h3>
//       )
//     }  return (
//     <Router>
//     <Nav />
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/about" component={About} />
//       <Route exact path="/form" component={Form} />
//       <Route exact path="/movieindex" component={MoviemovieIndex} />
//       <Route component={ErrorAlert} />
//     </Switch>
//     <Footer />
//     </Router>
//   );
// }
// }
// const mapStatetoProps = state => {
//   return {
//     loading: state.loading
//   }
// }
// export default connect(mapStatetoProps, {getMovies})(App);
