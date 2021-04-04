import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class About extends Component {
    render() {
        return (
            <div>
                <h1>About What to Watch</h1>
                <h5>Picking a Movie</h5>
                <p>Picking a movie can be a daunting task, and we aim to make it easier. What to Watch takes the experience of getting movie recommendations from friends to the next level by getting movie recommendations from <em>everyone</em>.
                We maintain a database of user-recommended movies so that all you have to do is decide what genre you want to watch and browse that list until you find the one that makes you say "That's <em>exactly</em> what I want to watch tonight!"</p>
                <h5>Where to Watch</h5>
                <p>In the streaming era, deciding on a movie to watch is only half the battle. It's at least as important to find a movie available on a streaming service you subscribe to! When you've found a movie you think you might want to watch, click the "More Info" button for more details, including where it is streaming.</p>
                <h5>Make a Recommendation</h5>
                <p>Think something is missing from the list? Just saw a movie that was so good you want to tell your friends <em>and</em> strangers on the internet to go see it? Feel free to <Link to="/form">make a recommendation</Link>! What to Watch works best when people submit the movies they love.</p>
            </div>
        )
    }
}

export default About
