import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddReview from "./pages/AddReview.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import Browse from "./pages/Browse.jsx"; // ✅ ADD THIS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      {/* Removed container here so Browse and Home can be full-width */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/browse" element={<Browse />} /> {/* ✅ ADD THIS LINE */}
        <Route path="/add" element={<AddReview />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
