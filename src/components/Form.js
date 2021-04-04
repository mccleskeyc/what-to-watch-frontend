import React, { Component } from 'react'
import {addMovie} from '../actions';
import {connect} from 'react-redux';

class Form extends Component {
    state = {
        title: "",
        genre: "",
        streamer: "",
        description: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    
        this.props.addMovie(this.state, this.props.history);
      }

    render() {
        return (
            <div>
                <h1>Recommend a Movie</h1>
                <p>We currently support recommeding movies available to stream on Netflix, Hulu, Disney+, HBOMax, and Amazon Prime. <b>Please only recommend movies currently available on one of those platforms.</b></p>
                <form onSubmit={this.handleSubmit} >
                    <div>
                    <label htmlFor="title">Title </label>
                    <input type="text" id="title" name="title" value={ this.state.title } onChange={ this.handleChange } autoComplete="off" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="genre">Genre: </label>
                        <select id="genre" name="genre" value={this.state.genre} onChange={this.handleChange} className="browser-default">
                            <option value="" disabled>Select Genre</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Drama">Drama</option>
                            <option value="Sci-Fi/Fantasy">Sci-Fi/Fantasy</option>
                            <option value="Family">Family</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="streamer">Streaming Service: </label>
                        <select id="streamer" name="streamer" value={this.state.streamer} onChange={this.handleChange} className="browser-default" >
                            <option value="" disabled>Select Service</option>
                            <option value="Netflix">Netflix</option>
                            <option value="Hulu">Hulu</option>
                            <option value="Disney+">Disney+</option>
                            <option value="HBOMax">HBOMax</option>
                            <option value="Amazon Prime">Amazon Prime</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="description">Description: </label>
                        <textarea id="description" name="description" value={this.state.description} onChange={this.handleChange}autoComplete="off" />
                    </div>
                    <br />
                    <input type="submit" value="Add a Movie Reccomendation" className="waves-effect waves-light btn-small  light-blue darken-4" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addMovie })(Form)
