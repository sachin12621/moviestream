import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.image?.medium || "https://via.placeholder.com/210"} alt={movie.name} />
    <h3>{movie.name}</h3>
    <Link to={`/movie/${movie.id}`}>Watch Now</Link>
  </div>
);

export default MovieCard;
