import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { movies as initialMovies } from "./data/movies"; // Assuming you have movie data
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import AddMovie from "./components/AddMovie";
import Favorites from "./components/Favorites";
import Watchlist from "./components/Watchlist";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [movies, setMovies] = useState(initialMovies); // Use state for movies
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const toggleFavorite = (movie) => {
    const isFavorite = movie.isFavorite;
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id));
      setMovies(movies.map((m) => (m.id === movie.id ? { ...m, isFavorite: false } : m)));
    } else {
      setFavorites([...favorites, movie]);
      setMovies(movies.map((m) => (m.id === movie.id ? { ...m, isFavorite: true } : m)));
    }
  };

  const addToWatchlist = (movie) => {
    if (!watchlist.some((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== id));
  };

  // Function to add a new movie
  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  return (
    <Router>
      <div className="App">
        <h1>Movie Collection</h1>

        {/* Navigation Bar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/watchlist">Watchlist</Link></li>
            <li><Link to="/add">Add Movie</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<MovieList movies={movies} onToggleFavorite={toggleFavorite} addToWatchlist={addToWatchlist} />}
          />
          <Route
            path="/movies/:id"
            element={<MovieDetails movies={movies} />}
          />
          <Route
            path="/add"
            element={<AddMovie addMovie={addMovie} />}
          />
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} />}
          />
          <Route
            path="/watchlist"
            element={<Watchlist watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
