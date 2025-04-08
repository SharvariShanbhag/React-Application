import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies, onToggleFavorite, addToWatchlist }) => {
  const renderStars = (rating) => {
    if (!rating) return "☆☆☆☆☆"; // Default if rating is missing
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - (fullStars + halfStar);

    return "★".repeat(fullStars) + "☆".repeat(emptyStars);
  };

  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies available</p>
      ) : (
        movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            {/* Ensure movie.poster is used correctly */}
            {movie.poster ? (
              <img src={movie.poster} alt={movie.title} className="movie-poster" />
            ) : (
              <p>No Poster Available</p>
            )}

            <h3>{movie.title || "Untitled Movie"}</h3>
            <p>Genre: {movie.type || "Unknown"}</p>
            <p>Rating: {renderStars(movie.rating)}</p>
            <p>{movie.description || "No description available."}</p>

            <button onClick={() => onToggleFavorite(movie)}>
              {movie.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>

            <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>

            <Link to={`/movies/${movie.id}`} className="details-link">
              View Details
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;
