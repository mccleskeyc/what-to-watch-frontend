import React, { Component } from 'react'

class Movie extends Component {
    render() {
        const {title, genre, streamer, description} = this.props;

        return (

            <div class="row ">
    <div class="col s12 m6 offset-m3">
      <div class="card">
        <div class="card-image">
          <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4940c5878babf3dc5d2ca567b7558178_9e62fc4c-4116-48e5-a4f5-3a99c73ae7b1_480x.progressive.jpg?v=1573651499" />
          <span class="card-title">{title}</span>
        </div>
        <div class="card-content">
          <p>{description}.</p>
        </div>
        <div class="card-action">
          <a href="#">More Info</a>
        </div>
      </div>
    </div>
  </div>
            
       

        )
    }
}

export default Movie
