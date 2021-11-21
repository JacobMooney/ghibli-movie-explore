import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router";
import { Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Library from "./components/libraryComponent";
import Navbar from "./components/navComponent";
import MovieDisplay from "./components/movieDisplayComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Library />} />
          <Route exact path="/ghibli-movie" component={MovieDisplay} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
