import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import w2wlogo from './w2wlogo.png'
class Movie extends Component {
    render() {
        const {title, description, genre} = this.props;
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
                  <p>{genre}</p>
                </div>
                <div className="card-action ">
                  <Link to="#" className="light-blue-text text-darken-4">More Info</Link>
                </div>
              </div>
            </div>
          </div>
            
       

        )
    }
}

export default Movie
