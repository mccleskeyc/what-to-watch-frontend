import React, { Component } from 'react';
import w2wlogo from '../w2wlogo.png';

class ByGenre extends Component {
  render() {
    const { title, description, genre, streamer } = this.props;
    return (

      <div className="row ">
        <div className="col s12 m6 offset-m3">
          <div className="card">
            <div className="card-image">
              <img src={w2wlogo} alt="What to Watch Logo" />
              <span className="card-title ">{title}</span>
            </div>
            <div className="card-content">
              <p>{description}</p>

                <br />

              <p><b>Genre: </b> {genre}     | <b>Streaming Service: </b> {streamer}</p>
            </div>
          </div>
        </div>
      </div>



    )
  }
}

export default ByGenre
