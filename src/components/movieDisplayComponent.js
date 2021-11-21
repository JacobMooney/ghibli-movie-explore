import React from "react";

function MovieDisplay(props) {
  const movie = props.location.state.movieInfo;
  console.log(movie);
  return (
    <React.Fragment>
      <h1>{movie.title}</h1>
    </React.Fragment>
  );
}

export default MovieDisplay;
