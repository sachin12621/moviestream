import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import AdComponent from "./AdComponent";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("https://api.tvmaze.com/shows")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setMovies(response.data);
        } else {
          console.error("API response is not an array", response.data);
        }
      })
      .catch((error) => console.error("Error fetching movies", error));
  }, []);

  return (
    <div className="container">
      <AdComponent />
      <h2>Latest Movies</h2>
      
      {movies.length > 0 ? (
        <div className="row">
            {movies.map((movie) => (
            <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
                <MovieCard movie={movie} />
            </div>
            ))}
        </div>
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
  );
};

export default MovieList;
