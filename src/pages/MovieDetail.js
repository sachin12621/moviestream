import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error("Error fetching movie details", error));
  }, [id]);

  if (!movie) return <p>Loading movie details...</p>;

  return (
    <div className="movie-detail">
      <h2>{movie.name}</h2>
      <img src={movie.image?.original || "https://via.placeholder.com/300"} alt={movie.name} />
      <p dangerouslySetInnerHTML={{ __html: movie.summary }}></p>
      
      {/* Simulated trailer */}
      <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" controls />
    </div>
  );
};

export default MovieDetail;
