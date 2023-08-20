// This is pascal case not camel case
import { Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal";


const DefaultLayout = (props) => {
  return (
    <>
      <Navbar/>
      <HeroCarousal/>
      {props.children}
    </>
  );
};

export default DefaultLayout;
