import React, { Component } from 'react'
import { connect } from 'react-redux'
import Movie from './Movie'
import {Grid, Paper} from '@material-ui/core'

class MovieIndex extends Component {
    render() {
        const movies = this.props.movies.map((movie, i) => <Movie key={i} title={ movie.title } genre={movie.genre} streamer={movie.streamer} description={movie.description}  />)
        const sortedMovies = movies.sort((a, b) => (a.props.title > b.props.title) ? 1 : -1)
        return (
            <div>
            <h1>All Movies</h1>
            {sortedMovies}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MovieIndex)