import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8091', // Replace with your backend's base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        // Get the token from localStorage
        const token = localStorage.getItem('token');
        
        // If the token exists, add it to the Authorization header
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle any errors that occur during request setup
        return Promise.reject(error);
    }
);

export default axiosInstance;