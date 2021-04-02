import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/form">Add a Recommendation</Link></li>
                    <li><Link to="/movieindex">List of All Movies</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar
