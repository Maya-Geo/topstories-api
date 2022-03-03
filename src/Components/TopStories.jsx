import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./story.css";

class Topstories extends Component {
  constructor(props) {
    super(props);
    this.setState();
  }

  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=aSr9o4mz6v3H1vTn8WJxdFKq2YeXr52d"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState(data);
        console.log("geek", this.state.results);
      })
      .catch();
  }

  render() {
    return (
      <>
        <h3 className="header">
          <span className="name">TopStories</span>
          <span>
            <Link to="/movies" className="go_to_link">
              Go to Movies
            </Link>
          </span>
        </h3>

        {this.state &&
          this.state.results.map((topstory, idx) => {
            return (
              <div className="my_img" key={idx}>
                <h2>Category: {topstory.section}</h2>

                <h3>
                  {topstory.title}
                  <span>{topstory.byline}</span>
                </h3>
                <div>
                  <img src={topstory.multimedia?.url} alt="" />
                </div>

                <h2> {topstory.multimedia?.caption}</h2>
                <div className="new-york">
                  <hr />

                  <p>
                    <h3 className="info">
                      <span>abstract:</span>
                      <br />
                      {topstory.abstract}
                      <span>
                        <a href={topstory.url}>Read More</a>
                      </span>
                    </h3>
                  </p>
                </div>
              </div>
            );
          })}
      </>
    );
  }
}

export default Topstories;
