// import react hook -> Fetch data async await related to axios
import React, { useState, useEffect } from "react";

import HeroSlider from "react-slick";
// Styles
import "slick-carousel/slick/slick.css"; // Update this line
import "slick-carousel/slick/slick-theme.css"; // Update this line

// Arrows
import { NextArrow } from "./Arrows";
import { PrevArrow } from "./Arrows";

// import axios
import axios from "axios";

// Rest of the code remains the same...
const HeroCarousal = () => {
  const settingsSm = {
    arrow: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    NextArrow: <NextArrow />,
    PrevArrow: <PrevArrow />,
  };

  const settingsLg = {
    arrow: true,
    autoplay: true, // Correct prop name is 'autoplay'
    centerMode: true,
    centerPadding: "300px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // const images = [ // No need now using tmdb, hook, axios
  //   "https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1208&q=80",
  //   "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //   "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //   "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //   "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  // ];

  const [images, setImages] = useState([]);

  // useEffect(async () => {
  //   const getImages = await axios.get("/movie/now_playing");
  // }, []); // Bad Practice

  // fetchData() Call the async function immediately inside useEffect
  // [] Empty dependency array to run the effect only once on mount

  // Here 1st get the data then call func not 1st call then get data VVI
  useEffect(() => {
    const fetchData = async () => {
      // Fix the typo "anync" to "async"
      try {
        const getImages = await axios.get("/movie/now_playing");
        console.log(getImages);
        setImages(getImages.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLg}>
          {/* Logic */}
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                // src={image}
                src = {`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="Testing"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </HeroSlider>
      </div>

      <div className="lg:hidden">
        <HeroSlider {...settingsSm}>
          {/* Logic */}
          {images.map((image) => (
            <div className="w-full h-64 md:h-80 py-3">
              <img
                // src={image}
                src = {`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="Testing"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousal;
