import React, { Component } from 'react';
import { connect } from 'react-redux';
import ByGenre from './ByGenre';
import NoResults from './NoResults';

class Drama extends Component {
    render() {
        const movies = this.props.movies.map((movie, i) => <ByGenre key={i} title={movie.title} genre={movie.genre} streamer={movie.streamer} description={movie.description} />)
        const filteredMovies = movies.filter(movie => movie.props.genre === "Drama")
        const sortedMovies = filteredMovies.sort((a, b) => (a.props.title > b.props.title) ? 1 : -1)
        if (sortedMovies.length > 0) {


            return (
                <div>
                    <h1>Drama</h1>
                    {sortedMovies}
                </div>
            )
        } else
            return (
                <div>
                    <NoResults />
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