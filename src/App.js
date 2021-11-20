import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Library from "./components/libraryComponent";
import Navbar from "./components/navComponent";
import MovieDisplay from "./components/movieDisplayComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Library />} />
          <Route exact path="/ghibli-movie" element={<MovieDisplay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
