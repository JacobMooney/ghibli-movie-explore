import React from "react";

function MovieDisplay(props) {
  const movie = props.location;
  console.log(movie);
  return (
    <React.Fragment>
      <h1>A test div</h1>
    </React.Fragment>
  );
}

export default MovieDisplay;
