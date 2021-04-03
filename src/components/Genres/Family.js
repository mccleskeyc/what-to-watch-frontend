import React, { Component } from 'react'
import { connect } from 'react-redux'
import ByGenre from './ByGenre'

class Family extends Component {
    render() {
        const movies = this.props.movies.map((movie, i) => <ByGenre key={i} title={ movie.title } genre={movie.genre} streamer={movie.streamer} description={movie.description} />)
        const filteredMovies = movies.filter(movie => movie.props.genre === "Family")
        return (
            <div>
                <h1>Family</h1>
                {filteredMovies}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Family)