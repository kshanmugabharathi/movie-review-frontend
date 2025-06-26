import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{review.movieTitle}</h5>
          <h6 className="card-subtitle mb-2 text-muted">By {review.reviewerName}</h6>
          <p className="card-text">
            {review.content.length > 100
              ? review.content.slice(0, 100) + "..."
              : review.content}
          </p>
          <span className="badge bg-warning text-dark">Rating: {review.rating}/5</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
