import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createReview } from "../api";

const AddReview = () => {
  const [form, setForm] = useState({
    movieTitle: "",
    reviewerName: "",
    content: "",
    rating: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createReview(form);
    navigate("/");
  };

  return (
    <div className="card p-4">
      <h3 className="text-center mb-3">Add Movie Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Movie Title</label>
          <input type="text" className="form-control" name="movieTitle" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Reviewer Name</label>
          <input type="text" className="form-control" name="reviewerName" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Review</label>
          <textarea className="form-control" name="content" rows="4" onChange={handleChange} required></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Rating (out of 5)</label>
          <input type="number" className="form-control" name="rating" min="1" max="5" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default AddReview;