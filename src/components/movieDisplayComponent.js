import React from "react";
import "../styles.css/MovieAbout.css";
import StarRatings from "react-star-ratings";

function MovieDisplay(props) {
  const movie = props.location.state.movieInfo;
  const movieScore = movie.rt_score;
  console.log(movie);
  return (
    <React.Fragment>
      <div className="container">
        <section className="gridDisplay">
          <div className="titles">
            <h1>{movie.title}</h1>
            <h3>
              {movie.original_title_romanised} - {movie.original_title}
            </h3>
            <img alt={movie.title} className="aboutImg" src={movie.image} />
          </div>
          <div className="previewBox">
            <img
              alt={movie.title}
              className="previewImg"
              src={movie.movie_banner}
            />
          </div>
        </section>
        <section className="flexDisplay">
          <section>
            <div>Director - <strong>{movie.director}</strong></div>
            <div>Producer - <strong>{movie.producer}</strong></div>
            <div>Release Date - <strong>{movie.release_date}</strong></div>
            <div>Run Time - <strong>{movie.running_time} min</strong></div>
          </section>
          <section>
            <hr />
            <p>{movie.description}</p>
          </section>
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
