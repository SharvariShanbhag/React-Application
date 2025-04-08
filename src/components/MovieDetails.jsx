import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { movies } from "../data/movies"; // Assuming the movies array is in this file
import AddMovie from "./AddMovie"; // If you still want to allow adding movies from this page

const MovieDetails = () => {
  const { id } = useParams(); // Get the ID from the URL params
  const movie = movies.find((m) => m.id === parseInt(id)); // Find the movie by ID from the data

  const [showAddMovie, setShowAddMovie] = useState(false);

  // Check if the movie was found
  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="movie-details-container">
      {/* Movie Poster */}
      <div className="movie-poster">
        <img src={movie.poster} alt={movie.title} />
      </div>

      {/* Movie Title */}
      <h2>{movie.title}</h2>

      {/* Movie Description */}
      <p>{movie.description}</p>

      {/* Rating with Stars */}
      <div className="movie-rating">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < movie.rating ? "star filled" : "star"}>⭐</span>
        ))}
      </div>

      {/* Back to Home Button */}
      <Link to="/" className="back-button">Back to Home</Link>

      {/* Small Toggle Button for Adding Movie */}
      <button onClick={() => setShowAddMovie(!showAddMovie)}>
        {showAddMovie ? "Hide Add Movie" : "Add Movie"}
      </button>

      {/* Conditionally Render Add Movie Form */}
      {showAddMovie && <AddMovie />}
    </div>
  );
};

export default MovieDetails;
