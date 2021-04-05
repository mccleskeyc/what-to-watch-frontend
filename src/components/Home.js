import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
class Home extends Component {
    render() {
        return (
            <div className="App">

                <Typography 
                    variant="h5"
                    align="center"
                    color="primary">
                What are you feeling?
                </Typography>

                <ul className="collection ">
                    <li className="collection-item "><Link to="/comedy" className="genre-link ">Comedy</Link></li>
                    <li className="collection-item"><Link to="/drama" className="genre-link">Drama</Link></li>
                    <li className="collection-item"><Link to="/scifi-fantasy" className="genre-link">Sci-Fi/Fantasy</Link></li>
                    <li className="collection-item"><Link to="/family" className="genre-link">Family</Link></li>
                </ul>
                <br/>
                <p className="center-align">Not sure what you want to watch? Take a look at the list of <Link to="/movieindex">all suggestions</Link>.</p>
                </div>
        )
    }
}

export default Home
