import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const AddMovie = ({ addMovie }) => {
  const [formData, setFormData] = useState({
    title: "", // Use "title" instead of "name"
    type: "",
    rating: "", // Use "rating" instead of "ratings"
    poster: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.type || !formData.rating || !formData.poster || !formData.description) {
      alert("All fields are required!");
      return;
    }

    const newMovie = {
      ...formData,
      id: Date.now(), // Unique ID
      rating: parseFloat(formData.rating), // Convert rating to a number
      isFavorite: false,
    };

    addMovie((prevMovies) => [...prevMovies, newMovie]);
    setFormData({ title: "", type: "", rating: "", poster: "", description: "" });
    navigate("/"); // Navigate to home after adding
  };

  return (
    <div className="add-movie-container">
      <h2 className="add-movie-title">Add New Movie</h2>
      <form onSubmit={handleSubmit} className="add-movie-form">
        <div className="form-group">
          <label htmlFor="title">Movie Title</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="type">Genre</label>
          <input type="text" id="type" name="type" value={formData.type} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Ratings (1-5)</label>
          <input type="number" id="rating" name="rating" value={formData.rating} onChange={handleChange} min="1" max="5" step="0.1" required />
        </div>
        <div className="form-group">
          <label htmlFor="poster">Movie Poster URL</label>
          <input type="url" id="poster" name="poster" value={formData.poster} onChange={handleChange} required placeholder="Enter a valid image URL" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn-primary">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
