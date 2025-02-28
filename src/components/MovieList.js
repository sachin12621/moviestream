import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

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

  useEffect(() => {
    if (window.adsbygoogle) {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    }
  }, [movies]);

  return (
    <div className="movie-list">
      <h2>Latest Movies</h2>

      {/* Google AdSense Ad */}
      <div className="adsense">
        <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="YOUR_ADSENSE_CLIENT_ID"
            data-ad-slot="YOUR_AD_SLOT"
            data-ad-format="auto"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>

      {/* Movies List */}
      {movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
  );
};

export default MovieList;
