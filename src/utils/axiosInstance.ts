import axios, { CreateAxiosDefaults } from "axios";

// Create an instance of Axios
const axiosConfig: CreateAxiosDefaults = {
  baseURL: "https://127.0.0.1:3000", // Set the base URL for API requests
  timeout: 5000, // Set a timeout for requests (in milliseconds)
  headers: {
    "Content-Type": "application/json", // Set the request Content-Type header
    // Add any other headers you need
  },
};

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;
