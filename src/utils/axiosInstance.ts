// create axios instance
import axios from 'axios';

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: 'https://127.0.0.1:3000', // Set the base URL for API requests
  timeout: 5000, // Set a timeout for requests (in milliseconds)
  headers: {
    'Content-Type': 'application/json', // Set the request Content-Type header
    // Add any other headers you need
  },
});


export default axiosInstance;
