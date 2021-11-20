import React, { Component } from "react";
import { Link } from "react-router-dom";

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(" https://ghibliapi.herokuapp.com/films/")
      .then((res) => res.json())
      .then((movies) => this.setState({ data: movies }));
  }

  render() {
    const movies = this.state.data;
    console.log(movies);
    return movies.map((movie) => (
      <React.Fragment>
        <Link
          to={{
            pathname: "/ghibli-movie",
            hash: movie.title,
            state: { movieInfo: movie },
          }}
          key={movies.id}
        >
          <img src={movie.image} />
        </Link>
      </React.Fragment>
    ));
  }
}

export default Library;
