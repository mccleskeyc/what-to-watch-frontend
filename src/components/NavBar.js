import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="light-blue darken-4 navpattern" >
                    <ul>
                        <li><Link to="/"><b>What to Watch</b></Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/form">Add a Recommendation</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar
