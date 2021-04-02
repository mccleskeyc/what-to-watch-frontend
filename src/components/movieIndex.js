import React, { Component } from 'react'
import { connect } from 'react-redux'
import Movie from './Movie'

class MovieIndex extends Component {
    render() {
        const movies = this.props.movies.map((movie, i) => <Movie key={i} title={ movies.title } genre={movie.genre} streamer={movie.streamer} description={movie.description} />)
        return (
            <div>
                {movies}
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStatetoProps)(MovieIndex)