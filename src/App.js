// import logo from "./logo.svg";
import "../src/styles.css/App.css";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navComponent";
import MovieDisplay from "./components/movieDisplayComponent";
import MovieList from "./components/movieListComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <MovieList />} />
          <Route exact path="/ghibli-movie" component={MovieDisplay} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
