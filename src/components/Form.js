import React, { Component } from 'react';
import { addMovie } from '../actions';
import { connect } from 'react-redux';
import { Typography, Select, FormControl, MenuItem, InputLabel, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

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
                <Typography
                    variant="h4"
                    align="center"
                    color="primary"
                >
                    <br />
                    Recommend a Movie
                <br />

                </Typography>

                <Typography
                    variant="body2"
                >
                    <p>We currently support recommeding movies available to stream on Netflix, Hulu, Disney+, HBOMax, and Amazon Prime. <b>Please only recommend movies currently available on one of those platforms.</b></p>

                    <br /><br />

                    <form autoComplete="off" onSubmit={this.handleSubmit} >
                        <div>
                            <TextField
                                label="Title:"
                                variant="outlined"
                                fullWidth
                                id="title"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                                multiline
                            />
                        </div>

                        <br />

                        <div>

                            <FormControl fullWidth>
                                <InputLabel id="genre">Genre</InputLabel>
                                <Select
                                    labelId="genre"
                                    id="genre"
                                    name="genre"
                                    onChange={this.handleChange}
                                    value={this.state.genre}
                                >
                                    <MenuItem value="Comedy">Comedy</MenuItem>
                                    <MenuItem value="Drama">Drama</MenuItem>
                                    <MenuItem value="Sci-Fi/Fantasy">Sci-Fi/Fantasy</MenuItem>
                                    <MenuItem value="Family">Family</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <br />

                        <div>
                            <FormControl fullWidth>
                                <InputLabel id="streamer">Streamer</InputLabel>
                                <Select
                                    labelId="streamer"
                                    id="streamer"
                                    name="streamer"
                                    onChange={this.handleChange}
                                    value={this.state.streamer}
                                >
                                    <MenuItem value="Netflix">Netflix</MenuItem>
                                    <MenuItem value="Hulu">Hulu</MenuItem>
                                    <MenuItem value="Disney+">Disney+</MenuItem>
                                    <MenuItem value="HBOMax">HBOMax</MenuItem>
                                    <MenuItem value="Amazon Prime">Amazon Prime</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <br />
                        <div>

                            <TextField
                                label="Description:"
                                variant="outlined"
                                fullWidth
                                id="description"
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                                multiline
                                rows={3}
                            />
                        </div>
                        <br />

                        <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit Recommendation</Button>

                    </form>
                </Typography>
            </div>
        )
    }
}

export default connect(null, { addMovie })(Form)