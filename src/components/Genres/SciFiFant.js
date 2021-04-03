import React, { Component } from 'react'
import { connect } from 'react-redux'
import ByGenre from './ByGenre'

class SciFiFant extends Component {
    render() {
        const movies = this.props.movies.map((movie, i) => <ByGenre key={i} title={ movie.title } genre={movie.genre} streamer={movie.streamer} description={movie.description} />)
        const filteredMovies = movies.filter(movie => movie.props.genre === "Sci-Fi/Fantasy")
        return (
            <div>
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

export default connect(mapStateToProps)(SciFiFant)