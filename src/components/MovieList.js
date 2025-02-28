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
    try {
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }, []);

  return (
    <div className="movie-list">
      <h2>Latest Movies</h2>

      {/* Google AdSense Ad */}
      <div className="adsense">
        <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-7403056135149608"
            data-ad-slot="4575182597"
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
