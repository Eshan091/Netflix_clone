import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css"

function Banner() {
  const [movie, setMovie] = useState({});
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchHorrorMovies);
      setMovie(request.data.results);
      return request;
    }

    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMovieIndex((prevIndex) =>
        prevIndex === movie.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [movie]);

  const currentMovie = movie[currentMovieIndex];



  console.table(movie);
  function truncate(str,n){
    return str?.length > n ?str.substr(0,n-1)+ "..." :str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}")`,
        backgroundPosition: "top center",
      }}
    >
      <div className="banner_contents">
<h1 className="banner_title">
          {currentMovie?.title || currentMovie?.name || currentMovie?.original_name}
        </h1>        <div className="banner_button">
          <button className="banner_buttons">Play</button>
          <button className="banner_buttons">My list</button>
        </div>
        <h1 className="banner_description">
            {
                truncate(currentMovie?.overview,150)
            }
        </h1>
      </div>
      <div className="banner_fade"/>
    </header>
  );
}

export default Banner;
