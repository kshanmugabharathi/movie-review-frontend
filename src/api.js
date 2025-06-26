// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const fetchReviews = () => API.get("/reviews");
export const createReview = (data) => API.post("/reviews", data);
