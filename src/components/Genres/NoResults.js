import React, { Component } from 'react'
import nomovies from '../nomovies.gif'
import { Link } from 'react-router-dom';
import {Grid, Typography} from '@material-ui/core'


export class NoResults extends Component {
    render() {
        return (
            <div>
                <br /> <br />
                <Grid container justify = "space-around">
                <img src={nomovies} height="200px" alt="Nothing to see here from Men in Black"></img>
                </Grid>
                <br /> <br />
                <Typography variant="h5" align="center" color="primary">No movies fit the criteria you are looking for.</Typography>
                <Typography variant="body2" align="center">
                Have an idea for something you think should be here? <Link to="/form">Add it here.</Link>
                <br />
                Or, <Link to="/">return home</Link> to keep looking.</Typography>
            </div>
        )
    }
}

export default NoResults
