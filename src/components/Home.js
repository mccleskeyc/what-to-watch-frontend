import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <h1><u>What To Watch</u></h1>
                <h2>What are you feeling?</h2>
                <ul>
                    <li><Link to="/comedy">Comedy</Link></li>
                    <li><Link to="/drama">Drama</Link></li>
                    <li><Link to="/scifi-fantasy">Sci-Fi/Fantasy</Link></li>
                    <li><Link to="/family">Family</Link></li>
                </ul>
            </div>
        )
    }
}

export default Home
