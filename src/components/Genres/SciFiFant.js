import React, { Component } from 'react'
import { connect } from 'react-redux'
import ByGenre from './ByGenre'

class SciFiFant extends Component {
    render() {
        const movies = this.props.movies.map((movie, i) => <ByGenre key={i} title={ movie.title } genre={movie.genre} streamer={movie.streamer} description={movie.description} />)
        const filteredMovies = movies.filter(movie => movie.props.genre === "Sci-Fi/Fantasy")
        const sortedMovies = filteredMovies.sort((a, b) => (a.props.title > b.props.title) ? 1 : -1)

        return (
            <div>
                <h1>Sci-Fi and Fantasy</h1>
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

export default connect(mapStateToProps)(SciFiFant)