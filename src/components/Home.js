import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="App">

                <h2>What are you feeling?</h2>
                <ul className="collection ">
                    <li className="collection-item "><Link to="/comedy" className="genre-link ">Comedy</Link></li>
                    <li className="collection-item"><Link to="/drama" className="genre-link">Drama</Link></li>
                    <li className="collection-item"><Link to="/scifi-fantasy" className="genre-link">Sci-Fi/Fantasy</Link></li>
                    <li className="collection-item"><Link to="/family" className="genre-link">Family</Link></li>
                </ul>
                </div>
        )
    }
}

export default Home
