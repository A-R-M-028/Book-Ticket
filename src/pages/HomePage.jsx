import EntertainmentCardsSlider from "../components/Entertainment/EntertainmentCard";
import { Premier } from "../Premiere/Premiere";
import PosterSlider from "../components/PosterSlider/PosterSlider";
import PosterTemp from "../components/Config/PosterTemp";

// for tmdb
import React, { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  // Tmdb
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);
  console.log(popularMovies);

  // Tmdb
  // Upcoming Movies 

  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);
  console.log(upcomingMovies);

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">
            The best of Entertainment
          </h1>
          <EntertainmentCardsSlider />
        </div>
        <div className="bg-navCol-900 py-16">
          <div className="container mx-auto px-4">
            <div className="flex">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                alt="Banner"
                className="w-full h-full"
              />
            </div>
            {/* <Premier /> -> Replaced Dynamically (Common Now)*/}
            <PosterSlider 
              // images={PosterTemp}
              images={popularMovies}
              title="Premiere"
              subtitle="Brand New Release Every Friday"
              isDark={true}
            />
          </div>
        </div>
        <div className="container mx-auto px-8">
          <h1>
            <PosterSlider
              // images={PosterTemp}
              images={upcomingMovies}
              title="Upcoming Online Streaming"
              subtitle="Brand New Release Every Friday"
              isDark={false}
            />
          </h1>
        </div>
        {/* Just reuse code copy - paste */}
        <div className="container mx-auto px-8">
          <h1>
            {/* Outdoor Events */}
            <PosterSlider
              // images={PosterTemp}
              images={popularMovies}
              title="Outdoors Events"
              subtitle="Brand New Release Every Friday"
              isDark={false}
            />
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
