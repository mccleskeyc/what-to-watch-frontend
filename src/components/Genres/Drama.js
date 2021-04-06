import React, { Component } from 'react'
import { connect } from 'react-redux'
import ByGenre from './ByGenre'
import {Grid, Typography} from '@material-ui/core'
import nomovies from '../nomovies.gif'
import { Link } from 'react-router-dom';

class Drama extends Component {
    render() {
        const movies = this.props.movies.map((movie, i) => <ByGenre key={i} title={ movie.title } genre={movie.genre} streamer={movie.streamer} description={movie.description}  />)
        const filteredMovies = movies.filter(movie => movie.props.genre === "Drama")
        const sortedMovies = filteredMovies.sort((a, b) => (a.props.title > b.props.title) ? 1 : -1)
        if (sortedMovies.length > 0) {

       
            return (
                <div>
                <h1>Drama</h1>
                {sortedMovies}
                </div>
            ) } else
            return (
                <div>
                <br /> <br />
                <Grid container justify = "space-around">
                <img src={nomovies} height="200px"></img>
                </Grid>
                <br /> <br />
                <Typography variant="h5" align="center" color="primary">No movies fit the criteria you are looking for.</Typography>
                <Typography variant="body2" align="center">
                Have an idea for something you think should be here? <Link to="/form">Add it here.</Link>
                <br />
                Or, <Link to="/">return home</Link> to keep looking.</Typography>
                </div>
                
            )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Drama)