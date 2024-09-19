import axios from "axios";

const API_BASE_URL = "http://localhost:8000"; // Update with your backend URL

export const getAnimals = () => axios.get(`${API_BASE_URL}/animals`);
export const getHealthRecords = () =>
  axios.get(`${API_BASE_URL}/health-records`);
export const getBreedingRecords = () =>
  axios.get(`${API_BASE_URL}/breeding-records`);
export const getProductivityRecords = () =>
  axios.get(`${API_BASE_URL}/productivity-records`);
export const getFeedRecords = () => axios.get(`${API_BASE_URL}/feed-records`);
