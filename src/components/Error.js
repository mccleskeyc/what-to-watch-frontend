import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import droids from './droids.jpeg';
import { Link } from 'react-router-dom';

class Error extends Component {
    render() {
        return (
            <div>
                <br /> <br />
                    <Grid container justify="space-around">
                        <img src={droids} height="200px" alt="These are not the droids you are looking for."></img>
                    </Grid>
                <br /> <br />
                    <Typography variant="h5" align="center" color="primary">
                        These are not the droids you are looking for.
                    </Typography>

                    <Typography variant="body2" align="center">
                        Oops! There seems to be an error. <Link to="/">Return home</Link> to keep looking.
                    </Typography>
            </div>

        )
    }
}

export default Error
