import React, { Component } from "react";
import "./Movie.css";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.setState();
  }

  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/movies/v2/reviews/search.json?critics-pick=Y&offset=20&order=by-publication-date&api-key=rRUNOVAXHTMQNVUesM8GuLHMfPNs7nFw"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState(data);
        console.log("reviews api", this.state.results);
      })
      .catch();
  }

  render() {
    return (
      this.state &&
      this.state.results.map((review, idx) => {
        return (
          <div className="movie-list" key={idx}>
            <div className="multi">
              <img src={review.multimedia.src} alt="my_movies" />
            </div>
            <div className="new-york">
              <h3>{review.display_title}</h3>
              <hr />

              <p>{review.headline}</p>
              <p>
                <span>Critics Pick:</span>
                {review.critics_pick}
              </p>
              <p>
                <span>Byline:</span>
                {review.byline}
              </p>

              <p>
                <span>Summarry Shorts:</span>
                {review.summary_short}
              </p>
            </div>
          </div>
        );
      })
    );
  }
}

export default Movies;
