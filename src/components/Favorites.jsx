import React from "react";
import { Link } from "react-router-dom";

const Favorites = ({ favorites }) => {
  return (
    <div className="favorites-list">
      <h2>Your Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        favorites.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <Link to={`/movies/${movie.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
