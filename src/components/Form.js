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
            [e.target.name]: e.target.value
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
                <form onSubmit={this.handleSubmit} >
                    <div>
                    <label htmlFor="title">Title </label>
            <input type="text" id="title" name="title" value={ this.state.title } onChange={ this.handleChange } autoComplete="off" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="genre">Genre: </label>
                        <input type="text" id="genre" name="genre" value={this.state.genre} onChange={this.handleChange} autoComplete="off"/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="streamer">Streaming Service: </label>
                        <input type="text" id="streamer" name="streamer" value={this.state.streamer} onChange={this.handleChange} autoComplete="off"/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="description">Description: </label>
                        <textarea id="description" name="description" value={this.state.description} onChange={this.handleChange}autoComplete="off" />
                    </div>
                    <br />
                    <input type="submit" value="Add a Movie Reccomendation" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addMovie })(Form)
