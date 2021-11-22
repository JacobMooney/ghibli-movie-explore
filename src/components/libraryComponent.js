import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles.css/MovieCard.css";

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  //Grab movies from API
  componentDidMount() {
    fetch(" https://ghibliapi.herokuapp.com/films/")
      .then((res) => res.json())
      .then((movies) => this.setState({ data: movies }));
  }

  render() {
    const movies = this.state.data;
    // console.log(movies);
    return movies.map((movie) => (
      <div>
        <Link
          to={{
            pathname: "/ghibli-movie",
            hash: movie.title,
            state: { movieInfo: movie },
          }}
          key={movies.id}
        >
          <img className="imgTiles" src={movie.image} />
        </Link>
      </div>
    ));
  }
}

export default Library;
