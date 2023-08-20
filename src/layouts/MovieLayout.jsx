import { Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import MovieNavbar from "../components/Navbar/MovieNavbar";

const MovieLayout = (props) => {
  return (
    <>
      <MovieNavbar />
      {props.children}
    </>
  );
};

export default MovieLayout;
