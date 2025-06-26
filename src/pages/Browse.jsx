import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../App.css";

// Import images
import avengersImg from "../assets/slider1.jpg";
import madmaxImg from "../assets/madmax.jpg";
import johnwickImg from "../assets/john.jpg";
import office from "../assets/office.webp";
import superbad from "../assets/super.webp";
import step from "../assets/step.jpg";
import oppen from "../assets/oppen.jpg";
import fat from "../assets/fat.jpg";
import shaw from "../assets/shaw.jpg";
import incep from "../assets/incep.jpg";
import seven from "../assets/seven.jpg";
import gone from "../assets/gone.jpg";

// Sample movie data with external links
const sampleMovies = [
  { id: 1, title: "Avengers", category: "Action", image: avengersImg, link: "https://www.marvel.com/movies" },
  { id: 2, title: "Mad Max: Fury Road", category: "Action", image: madmaxImg, link: "https://www.warnerbros-india.com/movies/mad-max-fury-road" },
  { id: 3, title: "John Wick", category: "Action", image: johnwickImg, link: "https://johnwick.movie/" },
  { id: 4, title: "The Office", category: "Comedy", image: office, link: "https://www.nbc.com/the-office" },
  { id: 5, title: "Superbad", category: "Comedy", image: superbad, link: "https://www.sonypictures.com/movies/superbad" },
  { id: 6, title: "Step Brothers", category: "Comedy", image: step, link: "https://www.sonypictures.com/movies/stepbrothers" },
  { id: 7, title: "Oppenheimer", category: "Drama", image: oppen, link: "https://www.experienceoppenheimer.com/" },
  { id: 8, title: "The Godfather", category: "Drama", image: fat, link: "https://www.imdb.com/title/tt0068646/" },
  { id: 9, title: "Shawshank Redemption", category: "Drama", image: shaw, link: "https://www.warnerbros.com/movies/shawshank-redemption" },
  { id: 10, title: "Inception", category: "Thriller", image: incep, link: "https://www.warnerbros-india.com/movies/inception" },
  { id: 11, title: "Se7en", category: "Thriller", image: seven, link: "https://www.warnerbros.com/movies/seven" },
  { id: 12, title: "Gone Girl", category: "Thriller", image: gone, link: "https://www.20thcenturystudios.com/movies/gone-girl" },
];

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredMovies = sampleMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory ? movie.category === selectedCategory : true)
  );

  return (
    <div style={{ width: '100vw', overflowX: 'hidden' }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">FLICKFIX</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle btn btn-dark" data-bs-toggle="dropdown">
                  Categories
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><button className="dropdown-item" onClick={() => setSelectedCategory("Action")}>Action</button></li>
                  <li><button className="dropdown-item" onClick={() => setSelectedCategory("Comedy")}>Comedy</button></li>
                  <li><button className="dropdown-item" onClick={() => setSelectedCategory("Drama")}>Drama</button></li>
                  <li><button className="dropdown-item" onClick={() => setSelectedCategory("Thriller")}>Thriller</button></li>
                  <li><button className="dropdown-item" onClick={() => setSelectedCategory("")}>All</button></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="container my-4">
        <input
          type="text"
          className="form-control form-control-lg text-center"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Movie Cards */}
      <div className="container">
        <div className="row">
          {filteredMovies.map((movie) => (
            <div className="col-md-4 mb-4" key={movie.id}>
              <div className="card h-100 shadow-sm text-center">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="card-img-top"
                  style={{
                    height: "300px",
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text text-muted">{movie.category}</p>

                  {/* ✅ External Link Button */}
                  <a
                    href={movie.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
          {filteredMovies.length === 0 && (
            <div className="text-center text-muted py-5">
              No movies found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Browse;
