import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import slider4 from '../assets/slider4.jpg';
import slider5 from '../assets/slider2.jpg';

const Home = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUserName(storedUser.fullName);
    }
  }, []);
  return (
    <div style={{ width: '100vw', overflowX: 'hidden' }}>
      {/* Marvel-Style Navbar */}
      <div style={{ backgroundColor: "#121212", padding: "0.5rem 0" }}>
        <div className="container-fluid d-flex justify-content-between align-items-center px-3">
          
          {/* Left Icons */}
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-person-circle text-white fs-5"></i>
            <Link to="/login" className="text-white text-decoration-none fw-bold">LOG IN</Link>
            <span className="text-white fw-bold">|</span>
            <Link to="/signup" className="text-white text-decoration-none fw-bold">SIGN UP</Link>
          </div>

          {/* Center Logo */}
          <div>
            <Link to="/" className="text-danger fw-bold fs-3 text-decoration-none">
              FLICKFIX
            </Link>
          </div>

          {/* Right Icons */}
          <div className="d-flex align-items-center gap-4">
            <Link to="/subscribe" className="text-white text-decoration-none fw-bold">
              <i className="bi bi-collection-play-fill me-1"></i> SUBSCRIBE
            </Link>
            <i className="bi bi-search text-white fs-5"></i>
          </div>
        </div>

        {/* Secondary Menu */}
        <div className="d-flex justify-content-center gap-4 py-2 border-top border-secondary mt-2">
          <Link to="/" className="text-white text-decoration-none fw-bold">HOME</Link>
          <Link to="/contact" className="text-white text-decoration-none fw-bold">CONTACT</Link>
          <Link to="/about" className="text-white text-decoration-none fw-bold">ABOUT-US</Link>
        </div>
      </div>

      {/* Carousel */}
      <div id="movieCarousel" className="carousel slide position-relative" data-bs-ride="carousel">
        {/* ENTER button */}
      {/* Greeting + ENTER button */}
<div className="position-absolute w-100 text-center text-white" style={{ top: '40%', zIndex: 2 }}>
  {userName && (
    <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>
      Welcome, {userName}!
    </h2>
  )}
  <Link to="/browse">
    <button
      className="btn text-white btn-danger px-5 py-3 fw-bold"
      style={{
        border: 'none',
        borderRadius: '30px',
        fontSize: '1.2rem',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.3)'
      }}
    >
      ENTER
    </button>
  </Link>
</div>


        {/* Indicators */}
        <div className="carousel-indicators">
          {[0, 1, 2, 3, 4].map(i => (
            <button
              key={i}
              type="button"
              data-bs-target="#movieCarousel"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {[slider1, slider2, slider3, slider4, slider5].map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={slide}
                className="d-block w-100"
                style={{
                  height: "85vh",
                  objectFit: "cover",
                  filter: "brightness(65%)"
                }}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#movieCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#movieCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
