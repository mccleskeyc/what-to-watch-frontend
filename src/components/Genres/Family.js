import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from '../Movie';
import NoResults from './NoResults';

class Family extends Component {
    render() {
        const movies = this.props.movies.map((movie, i) => <Movie key={i} title={movie.title} genre={movie.genre} streamer={movie.streamer} description={movie.description} />)
        const filteredMovies = movies.filter(movie => movie.props.genre === "Family")
        const sortedMovies = filteredMovies.sort((a, b) => (a.props.title > b.props.title) ? 1 : -1)
        if (sortedMovies.length > 0) {


            return (
                <div>
                    <h1>Family</h1>
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

export default connect(mapStateToProps)(Family)