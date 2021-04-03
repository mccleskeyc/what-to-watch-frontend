import React, { Component } from 'react'

class ByGenre extends Component {
    render() {
        const {title, genre, streamer, description} = this.props;

        return (

            <div className="card-panel  card-blue">
                <h3>{title}</h3>
                <p> <b>Genre:</b> {genre} | <b> Streaming Service:</b> {streamer} </p>
                <p> <b>About:</b> {description}</p>
            </div>
        )
    }
}

export default ByGenre
