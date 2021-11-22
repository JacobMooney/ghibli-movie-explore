import React from "react";
import "../styles.css/MovieAbout.css";

function MovieDisplay(props) {
  const movie = props.location.state.movieInfo;
  console.log(movie);
  return (
    <React.Fragment>
      <div className="container">
        <section className="gridDisplay">
          <div>
            <h1>{movie.title}</h1>
            <h3>
              {movie.original_title_romanised} - {movie.original_title}
            </h3>
            <img className="aboutImg" src={movie.image} />
          </div>
          <div className="previewBox">
            <img className="previewImg" src={movie.movie_banner} />
          </div>
        </section>
        <section className="flexDisplay">
          <div>Director - {movie.director}</div>
          <div>Producer - {movie.producer}</div>
          <div>Release Date - {movie.release_date}</div>
          <div>{movie.running_time} min</div>
        </section>
        <section>
          <p>{movie.description}</p>
        </section>
      </div>
    </React.Fragment>
  );
}

export default MovieDisplay;

// Objects Key List
// [
//   "id",
//   "title",
//   "original_title",
//   "original_title_romanised",
//   "image",
//   "movie_banner",
//   "description",
//   "director",
//   "producer",
//   "release_date",
//   "running_time",
//   "rt_score",
//   "people",
//   "species",
//   "locations",
//   "vehicles",
//   "url"
// ]
