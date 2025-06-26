import { Link } from "react-router-dom";
import aboutBanner from '../assets/spidy.jpg';

const About = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      
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

      {/* Hero Section */}
      <div
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: `url(${aboutBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '65vh',  // reduced from 100vh
          width: '100vw',
          position: 'relative',
          margin: 0,
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            background: 'rgba(0, 0, 0, 0.1)',
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div className="position-relative z-2 px-3">
          <h1 className="display-5 fw-bold">Get to know MovieReview</h1>
          <p className="lead">
            Who we are and what we do goes far beyond providing movie reviews.
            Learn how we're making a difference for film lovers around the world.
          </p>
          <Link to="/" className="btn btn-danger btn-lg mt-3">
            Go to Home
          </Link>
        </div>
      </div>

      {/* Description Section */}
<div className="container text-center my-5">
  <h3 className="mb-3 fw-bold">
    We accelerate film discovery by unlocking the power of people and reviews.
  </h3>
  <h4 className="text-muted mb-4">What We Do:</h4>

  <ul className="list-unstyled d-inline-block text-start mx-auto" style={{ maxWidth: '400px' }}>
    <li className="mb-3">
      <span role="img" aria-label="camera" className="me-2">🎥</span>
      <strong>Share</strong> simple and clear movie reviews
    </li>
    <li className="mb-3">
      <span role="img" aria-label="camera" className="me-2">🎥</span>
      <strong>Help</strong> you decide what to watch next
    </li>
    <li className="mb-3">
      <span role="img" aria-label="camera" className="me-2">🎥</span>
      <strong>Let users</strong> rate and comment on movies
    </li>
    <li className="mb-3">
      <span role="img" aria-label="camera" className="me-2">🎥</span>
      <strong>Keep</strong> you updated on the latest films and shows
    </li>
  </ul>
</div>

    </div>
  );
};

export default About;
