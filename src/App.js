import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// axios
import axios from "axios"; // Fetch data from tmdb globally 1 time not every time

// Styles (Global)
import "slick-carousel/slick/slick.css"; // Update this line
import "slick-carousel/slick/slick-theme.css"; // Update this line

// HOC
import DefaultHOC from "./HOC/DefaultHOC";
import MovieHOC from "./HOC/MovieHOC";

// Pages
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import Plays from "./pages/PlaysPage";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";
import MovieLayout from "./layouts/MovieLayout";

// axios default setting
axios.defaults.baseURL = 'https://api.themoviedb.org/3'; //Base url
axios.defaults.params = {}; // !st axios is empty
axios.defaults.params['api_key'] = process.env.REACT_APP_API_KEY;



function App() {
  return (
    <>
      <Routes>
      <Route DefaultHOC path="/" element={<DefaultLayout><HomePage /></DefaultLayout>} />
      <Route MovieHOC path="/movie/:id" element={<MovieLayout><MoviePage /></MovieLayout>} />
      <Route MovieHOC path="/plays/:id" element={<MovieLayout><Plays /></MovieLayout>} />
      </Routes>
    </>
  );
}

export default App;


